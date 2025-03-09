import { Customer } from "../model/Customer.js";
import { Order } from "../model/Order.js";
import { User } from "../model/User.js";
import { Vehicle } from "../model/Vehicle.js";
import { errorInServer } from "../util/response.js";
import mongoose from "mongoose";

export const addOrder_service = async (userId, customer_id, vehicle_id, services, total) => {
    try {
        const user = await User.findById(userId);
        if (!user) {
            return { success: false, message: "No user found by the given ID" };
        }
        
        const customer = await Customer.findById(customer_id);
        if (!customer) {
            return { success: false, message: "No customer found by the given ID" };
        }

        if (!Array.isArray(services) || services.length === 0) {
            return { success: false, message: "You have to assign a service" };
        }

        const vehicle = await Vehicle.findById(vehicle_id);
        if (!vehicle) {
            return { success: false, message: "No vehicle found by the given ID" };
        }

        // Ensure services are in the correct format (array of objects)
        const formattedServices = services.map(serviceId => ({
            service_id: new mongoose.Types.ObjectId(serviceId) // Convert to ObjectId
        }));

        const order = new Order({
            customer_id,
            vehicle_id,
            employee_id: null,
            services: formattedServices, // Assign formatted services
            status: "pending",
            total,
        });

        await order.save();

        return { success: true, message: "Order added successfully.", data: order };
    } catch (error) {
        console.error("Error in addOrder_service:", error);
        return { success: false, message: "Internal Server Error" };
    }
};

export const editOrder_service = async (employee_id, order_id) => {
    try {
        const user = await User.findById(employee_id);
        if (!user) {
            return {
                success: false,
                message: "No employee found with the given Id"
            };
        }

        let order = await Order.findById(order_id);
        if (!order) {
            return {
                success: false,
                message: "No Order found with the given Id"
            };
        }

        // Assign the employee and update the status
        user.occupied = true;
        order.employee_id = employee_id;
        order.status = "In progress";
        await user.save();
        await order.save();

        // Populate after saving to get updated employee details
        order = await Order.findById(order_id)
            .populate("customer_id", "first_name last_name email phone")
            .populate("vehicle_id", "make model year")
            .populate("employee_id", "first_name last_name email phone") // Ensure full details are populated
            .populate("services.service_id", "name price description")
            .select("customer_id vehicle_id employee_id services status total createdAt updatedAt");

        return {
            success: true,
            message: "Order Updated",
            data: order
        };
    } catch (error) {
        console.error("Error in editOrder_service:", error);
        return { success: false, message: "Internal Server Error" };
    }
};

export const getAllOrder_service = async () => {
    try {
        const allOrders = await Order.find()
            .populate("customer_id", "first_name last_name email phone")
            .populate("vehicle_id", "make model year")
            .populate("employee_id", "first_name last_name")
            .populate("services.service_id", "name price description") // Fix: Correct way to populate subdocuments
            .select("customer_id vehicle_id employee_id services status total createdAt updatedAt");

        if (!allOrders || allOrders.length === 0) {
            return {
                success: false,
                message: "Orders Not Found"
            };
        }

        return { success: true, data: allOrders, message: "All orders fetched successfully." };
    } catch (error) {
        console.error("GETTING_SERVICE ERROR:", error);
        return { success: false, message: "Internal Server Error" };
    }
};

export const deleteOrder_service = async (order_id) => {
    try {
        const order = await Order.findById(order_id);
        if (!order) {
            return {
                success: false,
                message: "No Order found with this ID",
            };
        }

        // Ensure that employee_id exists in the order
        if (!order.employee_id) {
            return {
                success: false,
                message: "Order does not have an associated employee",
            };
        }

        // Fetch the user using the correct reference type
        const user = await User.findById(order.employee_id.toString());
        if (!user) {
            return {
                success: false,
                message: "No User found with the given ID",
            };
        }

        // Update the user's occupied status
        user.occupied = false;
        await user.save();

        // Delete the order
        await Order.findByIdAndDelete(order_id);

        return {
            success: true,
            message: "Order deleted successfully",
        };
    } catch (error) {
        console.error("deleteOrder_Service Error:", error);
        return { success: false, message: "Internal Server Error" };
    }
};

