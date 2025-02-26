import { LoginService, verifyEmployeeService, sign_service, getUserInfo_service } from "../services/Auth.service.js";
import { errorInServer, fieldsNotFilled } from "../util/response.js";

export const SignController = async (req, res) =>{
    try {
        const {first_name, last_name, email,password, phone, role} = req.body;
        if(!first_name || !last_name || !email || !password || !phone){
            fieldsNotFilled(res)
        } 

        const response = await sign_service(res,first_name, last_name, email,password, phone, role) 
        if(!response.success) return res.status(400).send(response);

        res.status(200).send(response);
    } catch (error) {
        errorInServer("SignController",error,res);
    }
}

export const getUserInfo_controller = async (req, res) =>{
    try {
        const email = req.email;
        console.log("GET USER INFO CONTROLLER", email);
        if(!email){
            fieldsNotFilled(res)
        }

        const response = await getUserInfo_service(email);
        if(response.success){
            return res.status(200).send(response);
        }
        else {
            return res.status(400).send(response);
        }
        
    } catch (error) {
        errorInServer("getUserInfo_controller",error,res);
    }
}

export const LoginController = async (req,res) =>{
    try {
        const {email, password} = req.body;
        console.log("LOGIN CONTROLLER", email, password);
        if(!email || !password){
            fieldsNotFilled(res)
        }
    
        const response =   await LoginService(res,email, password);
        if(response.success){
            return res.status(200).send(response);
        }
        else {
            return res.status(400).send(response);
        }
       

    } catch (error) {
       errorInServer("LoginController", error,res);
    } 
}

export const LogOutController = async (req, res) => {
    try {
        // req.session.destroy();
        req.cookies = null;
        return res.status(200).send({success: true, message: "User Logged out successfully"});
    } catch (error) {
        errorInServer("LogOutController",error,res);
    }
}
export const verifyEmployee = async (req, res) =>{
    try {
        const {id,old_password,new_password} = req.body;
        if(!id, !old_password,!new_password){
            fieldsNotFilled(res)
        }
        const response = await verifyEmployeeService(res, id, old_password, new_password);
        if(!response.success){
            return res.status(400).send(response)
        }
        return res.status(200).send(response);
    } catch (error) {
       errorInServer("verifyEmployee_Controller",error,res);
    }
}