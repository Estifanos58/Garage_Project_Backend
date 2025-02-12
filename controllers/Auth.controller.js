import { LoginService } from "../services/Auth.service.js";


export const LoginController = async (req,res) =>{
    try {
        const {email, password} = req.body;
        if(!email || !password){
           return res.send({
            success: false,
            message: "All field must be filled"
           })
        }
    
        const response =   await LoginService(email, password);
        return res.send(response);

    } catch (error) {
        return res.send({
            success: false,
            message: "Error while login happend"
        })
    } 
}