import { LoginService, verifyEmployeeService } from "../services/Auth.service.js";


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
        const {id,password} = req.body;
        if(!id, !password){
            return res.status(400).send({
                success: false,
                message: "All fields are not provided"
            })
        }
        const response = await verifyEmployeeService(res, id, password);
        if(!response.success){
            return res.status(400).send(response)
        }
        return res.status(200).send(response);
    } catch (error) {
        res.status(400).send({
            success: false,
            message: "Error Occured while verifyEmployee"
        })
    }
}