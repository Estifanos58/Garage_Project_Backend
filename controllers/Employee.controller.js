import { getEmployeeOrders_service, getNewOrder_service } from "../services/Employee.service.js";
import { errorInServer, fieldsNotFilled, sendResponse } from "../util/response.js";

export const getEmployeeOrders_controller = async (req, res) => {
    try {
        const userId = req.userId;
        if(!userId){
            return fieldsNotFilled(res)
        }

        const response = await getEmployeeOrders_service(userId);
        return sendResponse(response, res);
        
    } catch (error) {
        return errorInServer("getEmployeeOrders_controller",error,res);
    }
}

export const getNewOrder_controller = async (req,res)=> {
    try {
        const userId = req.userId;
        if(!userId){
            return fieldsNotFilled(res)
        }

        const response = await getNewOrder_service(userId);
        return sendResponse(response, res);
        
    } catch (error) {
        return errorInServer("getNewOrder_controller",error,res);
    }
}