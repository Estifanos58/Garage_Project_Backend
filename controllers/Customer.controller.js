import { addCustomer_service, deleteCustomer_service, getAllCustomer_service, getCustomerById_service } from "../services/Customer.service.js";
import { errorInServer, fieldsNotFilled, sendResponse } from "../util/response.js";

export const addCustomer_constroller = async (req, res) => {
    try {
        const {email, first_name, last_name, phone} = req.body;
        if(!email || !first_name || !last_name || !phone) {
            fieldsNotFilled(res);
        }

        const response = await addCustomer_service(email,first_name,last_name,phone);
        sendResponse(response,res);

    } catch (error) {
       errorInServer("addCustomerController",error,res);
    }
}

export const getAllCustomer_controller = async (req, res)=> {
    try {
        const response = await getAllCustomer_service();
        sendResponse(response, res);
    } catch (error) {
        errorInServer("getAllCustomer_controller", error,res);
    }
}

export const getCustomerById_controller = async (req, res)=> {
    try {
        const {id} = req.body;
        if(!id) {
            fieldsNotFilled(res)
        }

        const response = await getCustomerById_service(id);
        sendResponse(response, res);
    } catch (error) {
        errorInServer("GetCustomerById_controller", error, res);
    }
}

export const deleteCustomer_controller = async (req, res) =>{
    const { customer_id } = req.body
    try {
        if(!customer_id){
            fieldsNotFilled(res);
        }
        const response = await deleteCustomer_service(customer_id);

        sendResponse(response, res);
    } catch (error) {
        errorInServer("deleteCustomer_controller",error, res);
    }
}