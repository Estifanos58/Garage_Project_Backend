import { LoginService, verifyEmployeeService, sign_service } from "../services/Auth.service.js";

export const SignController = async (req, res) =>{
    try {
        const {first_name, last_name, email,password, phone} = req.body;
        if(!first_name || !last_name || !email || !password || !phone){
            return res.status(401).send({
                success: false,
                message: "All fields are needed"
            })
        } 

        const response = await sign_service(res,first_name, last_name, email,password, phone) 
        if(!response.success) return res.status(400).send(response);

        res.status(200).send(response);
    } catch (error) {
        res.status(500).send({
            success: false,
            message: `Error happened in SignController ${error}`
        })
    }
}

export const LoginController = async (req,res) =>{
    try {
        const {email, password} = req.body;
        if(!email || !password){
           return res.send({
            success: false,
            message: "All field must be filled"
           })
        }
    
        const response =   await LoginService(res,email, password);
        if(response.success){
            return res.status(200).send(response);
        }
        else {
            return res.status(400).send(response);
        }
       

    } catch (error) {
        return res.send({
            success: false,
            message: "Error while login happend"
        })
    } 
}

export const verifyEmployee = async (req, res) =>{
    try {
        const {id,old_password,new_password} = req.body;
        if(!id, !old_password,!new_password){
            return res.status(400).send({
                success: false,
                message: "All fields are not provided"
            })
        }
        const response = await verifyEmployeeService(res, id, old_password, new_password);
        if(!response.success){
            return res.status(400).send(response)
        }
        return res.status(200).send(response);
    } catch (error) {
        res.status(400).send({
            success: false,
            message: "Error Occured while verifyEmployee "+error
        })
    }
}