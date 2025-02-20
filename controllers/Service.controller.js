import { deleteEmployee_service } from "../services/Admin.service.js";
import {addService_service, deleteService_service, editService_service, getAllService_service} from "../services/Service.service.js"
import { errorInServer, fieldsNotFilled, sendResponse } from "../util/response.js";
export const AddService = async (req,res)=> {
    try {
        const {userId, name, description, price} = req.body;
        if(!userId || !name || !description || !price){
           fieldsNotFilled(res);
        }
         const response = await addService_service(userId,name, description,price);
         
         sendResponse(response,res);
    } catch (error) {
        errorInServer("addService",error,res);
    }
}

export const editService = async (req,res) =>{
    try {
        const {userId, service_id, name, description, price} = req.body;
        if(!userId || !service_id){
            fieldsNotFilled(res);
        }
        const response = await editService_service(userId, service_id,name,description,price);
        
        sendResponse(response,res);
    } catch (error) {
        errorInServer("editService",error,res);
    }
}

export const getAllService_controller = async (req, res) => {
    try {
        const response = await getAllService_service();
        sendResponse(response,res);
    } catch (error) {
        errorInServer("getAllService_controller",error,res);
    }
}

export const deleteService_controller = async (req, res) =>{
    try {
        const {serviceId} = req.body
        if(!serviceId) {
            fieldsNotFilled(res);
        }
        
        const response = await deleteService_service(serviceId);

        sendResponse(response,res);
    } catch (error) {
        errorInServer("deleteService",error,res);
    }
}