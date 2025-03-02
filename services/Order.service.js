import { Customer } from "../model/Customer.js";
import { Order } from "../model/Order.js";
import { User } from "../model/User.js";
import { Vehicle } from "../model/Vehicle.js";
import { errorInServer } from "../util/response.js";

export const addOrder_service = async(userId, customer_id, vehicle_id , services, total) => {
    try {
        const user = await User.findById(userId);
        if(!user) {
            return {success: false, message: "No user found by the given ID" }
        }
        const customer = await Customer.findById(customer_id);
        if(!customer) {
            return {success: false, message: "No customer found by the given ID" }
        }
        if(services.length === 0){
            return {success: false, message: "You have to assign a service"}
        }
        const vehicle = await Vehicle.findById(vehicle_id);
        if(!vehicle) {
            return {success: false, message: "No vehicle found by the given ID" }
        }
        

        const order = new Order({
            customer_id,
            vehicle_id,
            employee_id: null,
            services,
            status: "pending",
            total,
        });
        await order.save();

        return {success: true, message: "Order added successfully.", data: order};
        
    } catch (error) {
        errorInServer("addOrder_service", error);
    }
}

export const getAllOrder_service = async() => {
    try {
        const allOrders = await Order.find()
                                        .populate("customer_id", "first_name last_name email phone")
                                        .populate("vehicle_id", "make model year")
                                        .populate("employee_id", "first_name last_name")
                                        .select("customer_id vehicle_id employee_id"); // Optional: Limit fields in Order schema
;
        // console.log("ORDER SEND")
        if(!allOrders) {
            return {
                success: false,
                message: "Orders Not Found"
            }
        }
        return {success: true, data: allOrders, message: "All orders fetched successfully."}; 
    } catch (error) {
        errorInServer("GETTING_SERVICE ", error)
    }
}