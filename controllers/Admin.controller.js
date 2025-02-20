import { AddEmployeeService, deleteEmployee_service, editEmployeeService, getAllEmployee_service, getEmployeeById_service } from "../services/Admin.service.js";
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
        const {id,first_name,last_name,email,phone,role} = req.body;
        if(!id){
            fieldsNotFilled(res);
        }

        const response = await editEmployeeService(id,first_name,last_name,email,phone,role);
        
        sendResponse(response,res);

    } catch (error) {
        errorInServer("editEmployeeController",error,res);
    }
}
export const deleteEmployee_controller = async (req, res) =>{
    try {
        const {id} = req.body;
        if(!id) {
            fieldsNotFilled(res);
        }
        const response = await deleteEmployee_service(id);
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
        const {employeeId} = req.body;
        if(!employeeId) {
            fieldsNotFilled(res)
        }
        const response = await getEmployeeById_service(employeeId);
       
        sendResponse(response,res);
    } catch (error) {
       errorInServer("getEmployeeByIdController",error,res);
    }
}

