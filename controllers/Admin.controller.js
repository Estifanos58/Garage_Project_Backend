import { AddEmployeeService, deleteEmployee_service, editEmployeeService, getAllEmployee_service } from "../services/Admin.service.js";
import { errorInServer, fieldsNotFilled, sendResponse } from "../util/response.js";

export const AddEmployeeController = async (req, res)=>{
    try {
        const {first_name,last_name,email,phone,role} = req.body;
        if(!first_name,!last_name,!email,!phone,!role){
            fieldsNotFilled(res);
        }
    
        const response = await AddEmployeeService(first_name,last_name,email,phone,role);
        
        sendResponse(response,res);
    } catch (error) {
       errorInServer("addEmployeeController", error, res);
    }  
}
export const editEmployee_controller = async (req, res) =>{
    try {
        const {userId,id,first_name,last_name,email,phone,role} = req.body;
        if(!userId || !id){
            fieldsNotFilled(res);
        }

        const response = await editEmployeeService(userId,id,first_name,last_name,email,phone,role);
        
        sendResponse(response,res);

    } catch (error) {
        errorInServer("editEmployeeController",error,res);
    }
}
export const deleteEmployee_controller = async (req, res) =>{
    try {
        const {role, id} = req.body;
        if(!role || !id) {
            fieldsNotFilled(res);
        }
        const response = await deleteEmployee_service(role, id);
        sendResponse(response,res);

    } catch (error) {
       errorInServer("deleteEmployeeContoller",error,res);
    }
}

export const getAllEmployee_controller = async (req, res) => {
    try {
        const {userId} = req.body;
        if(!userId){
           fieldsNotFilled(res);
        }
    
        const response  = await getAllEmployee_service(userId);
        sendResponse(response,res);
    } catch (error) {
       errorInServer("getAllEmployeeController",error,res);
    }
  
}

export const getEmployeeById_controller = async (req, res) => {
    try {
        const {userId, employeeId} = req.body;
        if(!userId || !employeeId) {
            fieldsNotFilled(res)
        }
        const response = await getEmployeeById_service(userId, employeeId);
       
        sendResponse(response,res);
    } catch (error) {
       errorInServer("getEmployeeByIdController",error,res);
    }
}

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