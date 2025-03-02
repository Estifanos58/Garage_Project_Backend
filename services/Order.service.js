import { Order } from "../model/Order";
import { User } from "../model/User";
import { errorInServer } from "../util/response";

export const addOrder_service = async(userId, customer_id, vehicle_id, employee_id , services, total) => {
    try {
        const user = await User.findById(userId);
        if(!user) {
            return {success: false, message: "No user found by the given ID" }
        }
        const customer = await User.findById(customer_id);
        if(!customer) {
            return {success: false, message: "No customer found by the given ID" }
        }
        const vehicle = await User.findById(vehicle_id);
        if(!vehicle) {
            return {success: false, message: "No vehicle found by the given ID" }
        }
        const employee = await User.findById(employee_id);
        if(!employee) {
            return {success: false, message: "No employee found by the given ID" }
        }

        const order = new Order({
            customer_id,
            vehicle_id,
            employee_id,
            assignedBy : userId,
            services,
            total,
        });
        await order.save();

        return {success: true, message: "Order added successfully.", data: order};
        
    } catch (error) {
        errorInServer("addOrder_service", error);
    }
}