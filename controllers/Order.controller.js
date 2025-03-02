import { addOrder_service } from "../services/Order.service";
import { fieldsNotFilled, sendResponse } from "../util/response";

export const addOrder_controller = async (req, res) => {
   try { 
        const { customer_id, vehicle_id, employee_id ,services, total } = req.body;
        const userId = req.userId;

        if(!customer_id || !vehicle_id || !employee_id  || !services || !total) {
            return fieldsNotFilled(res);
        }

        const response = await addOrder_service(userId, customer_id, vehicle_id, employee_id, services, total);

       return sendResponse(response,res);
    } catch (error) {
        return errorInServer("editService",error,res);
    }
}