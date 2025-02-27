import { addCustomer_service, deleteCustomer_service, editCustomer_service, getAllCustomer_service, getCustomerById_service } from "../services/Customer.service.js";
import { errorInServer, fieldsNotFilled, sendResponse } from "../util/response.js";

export const addCustomer_constroller = async (req, res) => {
    try {
        const {email, first_name, last_name, phone} = req.body;
        if(!email || !first_name || !last_name || !phone) {
            return fieldsNotFilled(res);
        }

        const response = await addCustomer_service(email,first_name,last_name,phone);
        return sendResponse(response,res);

    } catch (error) {
       return errorInServer("addCustomerController",error,res);
    }
}

export const editCustomer_controller = async (req, res) => {
    try {
        const {id, email, first_name, last_name, phone, status} = req.body;
        if(!id){
            return fieldsNotFilled(res);
        }

        const response = await editCustomer_service(id,email,first_name,last_name,phone, status);
        return sendResponse(response, res);
    } catch (error) {
        return errorInServer("editCustomer_controller", error, res);
    }
}

export const getAllCustomer_controller = async (req, res)=> {
    try {
        const response = await getAllCustomer_service();
        return sendResponse(response, res);
    } catch (error) {
        return errorInServer("getAllCustomer_controller", error,res);
    }
}

export const getCustomerById_controller = async (req, res)=> {
    try {
        const {id} = req.body;
        if(!id) {
            return fieldsNotFilled(res)
        }

        const response = await getCustomerById_service(id);
        return sendResponse(response, res);
    } catch (error) {
        return errorInServer("GetCustomerById_controller", error, res);
    }
}

export const deleteCustomer_controller = async (req, res) =>{
    const { customer_id } = req.body
    try {
        if(!customer_id){
            return fieldsNotFilled(res);
        }
        const response = await deleteCustomer_service(customer_id);

        return sendResponse(response, res);
    } catch (error) {
        return errorInServer("deleteCustomer_controller",error, res);
    }
}