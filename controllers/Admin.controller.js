import { AddEmployeeService, deleteEmployee_service, editEmployeeService, getAllEmployee_service, getEmployeeById_service } from "../services/Admin.service.js";
import { errorInServer, fieldsNotFilled, sendResponse } from "../util/response.js";

export const AddEmployeeController = async (req, res)=>{
    try {
        const {first_name,last_name,email,phone,role} = req.body;
        if(!first_name,!last_name,!email,!phone,!role){
            return fieldsNotFilled(res);
        }
    
        const response = await AddEmployeeService(first_name,last_name,email,phone,role);
        
        return sendResponse(response,res);
    } catch (error) {
       return errorInServer("addEmployeeController", error, res);
    }  
}
export const editEmployee_controller = async (req, res) =>{
    try {
        const {id,first_name,last_name,email,phone,role} = req.body;
        if(!id){
            return fieldsNotFilled(res);
        }

        const response = await editEmployeeService(id,first_name,last_name,email,phone,role);
        
        return sendResponse(response,res);

    } catch (error) {
        return errorInServer("editEmployeeController",error,res);
    }
}
export const deleteEmployee_controller = async (req, res) =>{
    try {
        const {id} = req.body;
        if(!id) {
            return fieldsNotFilled(res);
        }
        const response = await deleteEmployee_service(id);
        return sendResponse(response,res);

    } catch (error) {
       return errorInServer("deleteEmployeeContoller",error,res);
    }
}

export const getAllEmployee_controller = async (req, res) => {
    try {
        const userId = req.userId;
        if(!userId){
           return fieldsNotFilled(res)
        }
    
        const response  = await getAllEmployee_service(userId);
        return sendResponse(response, res);
    } catch (error) {
       return errorInServer("getAllEmployeeController", error, res);
    }
  
}

export const getEmployeeById_controller = async (req, res) => {
    try {
        const {employeeId} = req.body;
        if(!employeeId) {
            return fieldsNotFilled(res)
        }
        const response = await getEmployeeById_service(employeeId);
       
        return sendResponse(response,res);
    } catch (error) {
       return errorInServer("getEmployeeByIdController",error,res);
    }
}

