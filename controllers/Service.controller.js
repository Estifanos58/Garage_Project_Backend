import { deleteEmployee_service } from "../services/Admin.service.js";
import {addService_service, deleteService_service, editService_service, getAllService_service} from "../services/Service.service.js"
import { errorInServer, fieldsNotFilled, sendResponse } from "../util/response.js";
export const AddService = async (req,res)=> {
    try {
        const {name, description, price} = req.body;
        const userId = req.userId;
        if(!userId || !name || !description || !price){
           return fieldsNotFilled(res);
        }
         const response = await addService_service(userId,name, description,price);
         
         return sendResponse(response,res);
    } catch (error) {
        return errorInServer("addService",error,res);
    }
}

export const editService = async (req,res) =>{
    try {
        const {userId, service_id, name, description, price} = req.body;
        if(!userId || !service_id){
            return fieldsNotFilled(res);
        }
        const response = await editService_service(userId, service_id,name,description,price);
        
        return sendResponse(response,res);
    } catch (error) {
        return errorInServer("editService",error,res);
    }
}

export const getAllService_controller = async (req, res) => {
    try {
        const response = await getAllService_service();
        return sendResponse(response,res);
    } catch (error) {
        return errorInServer("getAllService_controller",error,res);
    }
}

export const deleteService_controller = async (req, res) =>{
    try {
        const {serviceId} = req.body
        if(!serviceId) {
            return fieldsNotFilled(res);
        }
        
        const response = await deleteService_service(serviceId);

        return sendResponse(response,res);
    } catch (error) {
        return errorInServer("deleteService",error,res);
    }
}