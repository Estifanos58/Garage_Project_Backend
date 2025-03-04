import { LoginService, verifyEmployeeService, sign_service, getUserInfo_service, changePassword_Service } from "../services/Auth.service.js";
import { errorInServer, fieldsNotFilled, sendResponse } from "../util/response.js";

export const SignController = async (req, res) =>{
    try {
        const {first_name, last_name, email,password, phone, role} = req.body;
        if(!first_name || !last_name || !email || !password || !phone){
            return fieldsNotFilled(res)
        } 

        const response = await sign_service(res,first_name, last_name, email,password, phone, role) 
        return sendResponse(response, res);
        
    } catch (error) {
        return errorInServer("SignController",error,res);
    }
}

export const changePasswordController = async (req, res) => {
    try {
        const {old_password, new_password} = req.body;
        const userId = req.userId;
        if(!userId || !old_password || !new_password){
            return fieldsNotFilled(res)
        }
        const response = await changePassword_Service(res, userId, old_password, new_password);
        return sendResponse(response, res);
    } catch (error) {
        return errorInServer("changePassword",error,res);
    }
}

export const getUserInfo_controller = async (req, res) =>{
    try {
        const email = req.email;
        console.log("GET USER INFO CONTROLLER", email);
        if(!email){
            return fieldsNotFilled(res)
        }

        const response = await getUserInfo_service(email);
        return sendResponse(response, res);
        
        
    } catch (error) {
        return errorInServer("getUserInfo_controller",error,res);
    }
}

export const LoginController = async (req,res) =>{
    try {
        const {email, password} = req.body;
        console.log("LOGIN CONTROLLER", email, password);
        if(!email || !password){
            return fieldsNotFilled(res)
        }
    
        const response =   await LoginService(res,email, password);
        return sendResponse(response, res);
    
       

    } catch (error) {
       return errorInServer("LoginController", error,res);
    } 
}

export const LogOutController = async (req, res) => {
    try {
        res.clearCookie("token", {
            httpOnly: true, // ✅ Ensures cookie is cleared properly
            sameSite: "lax", // ✅ Ensures cross-origin compatibility
            secure: process.env.NODE_ENV === "production", // ✅ Must be `false` in development
        });

        return res.status(200).send({ success: true, message: "User Logged out successfully" });
    } catch (error) {
        return errorInServer("LogOutController", error, res);
    }
};

export const verifyEmployee = async (req, res) =>{
    try {
        const {id,old_password,new_password} = req.body;
        if(!id, !old_password,!new_password){
            return fieldsNotFilled(res)
        }
        const response = await verifyEmployeeService(res, id, old_password, new_password);
        return sendResponse(response, res);
       
    } catch (error) {
       return errorInServer("verifyEmployee_Controller",error,res);
    }
}