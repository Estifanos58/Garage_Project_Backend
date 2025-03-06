import { Order } from "../model/Order.js";
import { User } from "../model/User.js";
import { sendOrderConfirmation } from "../util/emails.js";
import mongoose from 'mongoose'

export const getEmployeeOrders_service = async (userId) => {
    try {
        const orders = await Order.find({
                            employee_id: userId, 
                            status: { $in: ["Completed", "Received"] } // Include both statuses
                                    })
                                    .populate("customer_id", "first_name last_name email phone")
                                    .populate("vehicle_id", "make model year")
                                    .populate("services.service_id", "name price description")
                                    .select("customer_id vehicle_id services status total createdAt updatedAt")

        if(!orders) {
            return {
                success: false,
                message: "You have not Orders"
            }
        }

        return {
            success: true,
            message: "All your orders.",
            data: orders
        }
    } catch (error) {
        console.error("Error in getEmployeeOrders_service: ", error);
        return {
            success: false,
            message: "Error happened in getEmployeeOrders_service"
        }
    }
}

export const getNewOrder_service = async (userId) => {
    try {
        const order = await Order.findOne({
                                    employee_id: userId, 
                                    status: { $in: ["In progress"] }
                                    })
                                    .populate("customer_id", "first_name last_name email phone")
                                    .populate("vehicle_id", "make model year")
                                    .populate("services.service_id", "name price description")
                                    .select("customer_id vehicle_id services status total createdAt updatedAt")

        if(!order) {
            return {
                success: false,
                message: "You have no New Order"
            }
        }

        return {
            success: true,
            message: "your New order.",
            data: order
        }
    } catch (error) {
        console.error("Error in getNewOrder_service: ", error);
        return {
            success: false,
            message: "Error happened in getNewOrder_service"
        }
    }
}

export const getOrderComplete_service = async (userId , orderId, status) => {
    try {
        const user = await User.findById(userId);
        if(!user) {
            return {
                success: false,
                message: "No user found with the given Id"
            }
        }
        const order = await Order.findById(orderId)
                                .populate("customer_id", "first_name last_name email phone")
                                .populate("vehicle_id", "make model year")
                                .populate("employee_id", "first_name last_name")
                                .populate("services.service_id", "name price description") // Fix: Correct way to populate subdocuments
                                .select("customer_id vehicle_id employee_id services status total createdAt updatedAt");
        
        if(!order) {
            return {
                success: false,
                message: "No order found With the given Id"
            }
        }

        
        if (!order.employee_id._id.equals(user._id)) {  
            return {
                success: false,
                message: "You can't change this order"
            }
        }   
        
        order.status = status;
        user.occupied = false;

        await order.save();
        await user.save();

        await sendOrderConfirmation(order.customer_id.email, order.customer_id.first_name, order.total);

        return {
            success: true,
            message: "Order Updated",
            data: order
        }

    } catch (error) {
        console.error('Error in getOrderComplete_service: ', error);
        return {
            success: false,
            message: "Error happend in GetOrderComplete_service"
        }
    }
}