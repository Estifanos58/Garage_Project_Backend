import { addOrder_service, deleteOrder_service, editOrder_service, getAllOrder_service } from "../services/Order.service.js";
import { errorInServer, fieldsNotFilled, sendResponse } from "../util/response.js";

export const addOrder_controller = async (req, res) => {
   try { 
        const { customer_id, vehicle_id ,services, total } = req.body;
        const userId = req.userId;

        if(!customer_id || !vehicle_id  || !services || !total) {
            return fieldsNotFilled(res);
        }

        const response = await addOrder_service(userId, customer_id, vehicle_id,  services, total);

       return sendResponse(response,res);
    } catch (error) {
        return errorInServer("addOrder_controller ",error,res);
    }
}

export const editOrder_controller = async (req,res) => {
    try {
        const { employee_id, order_id } = req.body;
        if(!employee_id  || !order_id){
            return fieldsNotFilled(res);
        }

        const response = await editOrder_service(employee_id, order_id);
        return sendResponse(response,res);
    } catch (error) {
        return errorInServer("editOrder_controller ",error,res);
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

export const deleteOrder_controller = async (req,res) => {
    try{
        const {order_id} = req.body;
        if(!order_id) {
            return fieldsNotFilled(res);
        }

        const response = await deleteOrder_service(order_id);
        return sendResponse(response, res);
    }catch(error) {
        return errorInServer("deleteOrder_controller ", error, res);
    }
}