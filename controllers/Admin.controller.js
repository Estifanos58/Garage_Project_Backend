import { AddEmployeeService } from "../services/Admin.service.js";
export const AddEmployeeController = async (req, res)=>{
    try {
        // console.log(req)
        const {first_name,last_name,email,phone,role} = req.body;
        if(!first_name,!last_name,!email,!phone,!role){
            return res.status(401).send({
                success: false,
                message: "All feilds should b efilled"
            })
        }
    
        const response = await AddEmployeeService(first_name,last_name,email,phone,role);
        if(response.success){
            res.status(201).send(response)
        } else {
            res.status(402).send(response)
        }
    } catch (error) {
        res.status(401).send({
            success: false,
            message: "Error occured While Ading Employee"+ error
        })
    }
   
}