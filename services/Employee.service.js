import { Order } from "../model/Order.js";

export const getEmployeeOrders_service = async (userId) => {
    try {
        const orders = await Order.find({
                            employee_id: userId, 
                            status: { $in: ["Complete", "Received"] } // Include both statuses
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
                                    status: { $in: "In progress" }
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