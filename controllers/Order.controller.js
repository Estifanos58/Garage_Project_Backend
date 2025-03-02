import { addOrder_service, getAllOrder_service } from "../services/Order.service.js";
import { errorInServer, fieldsNotFilled, sendResponse } from "../util/response.js";

export const addOrder_controller = async (req, res) => {
   try { 
        const { customer_id, vehicle_id ,services, total } = req.body;
        const userId = req.userId;
        console.log(`customer_id:  ${customer_id}`);
        console.log(`vehicle_id:   ${vehicle_id}`);
        console.log(`total: ${total}`);

        if(!customer_id || !vehicle_id  || !services || !total) {
            return fieldsNotFilled(res);
        }

        const response = await addOrder_service(userId, customer_id, vehicle_id,  services, total);

       return sendResponse(response,res);
    } catch (error) {
        return errorInServer("editService",error,res);
    }
}

export const getAllOrder_controller = async (req, res) => {
    try {
        const response = await getAllOrder_service();
        return sendResponse(response,res);
    } catch (error) {
        return errorInServer("getAllOrder",error,res);
    }
}