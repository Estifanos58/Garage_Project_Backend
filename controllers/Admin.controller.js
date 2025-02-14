import { AddEmployeeService, getAllEmployee_service } from "../services/Admin.service.js";
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

export const getAllEmployee_controller = async (req, res) => {
    try {
        const {userId} = req.body;
        if(!userId){
            return res.status(400).send({
                success: false,
                message: "UserId required"
            })
        }
    
        const response  = await getAllEmployee_service(userId);
        if(!response.success){
            return res.status(401).send(response)
        }
        return res.status(200).send(response)
    } catch (error) {
        return res.status(500).send({
            success: false,
            message: "Error occured in getAllEmployee_controller "+ error
        })
    }
  
}

export const getEmployeeById_controller = async (req, res) => {
    try {
        const {userId, employeeId} = req.body;
        if(!userId || !employeeId) {
            return res.status(400).send({
                success: false,
                message: "All fields are required"
            })
        }
        const response = await getEmployeeById_service(userId, employeeId);
        if(!response.success){
            return res.status(401).send(response)
        }
        return res.status(200).send(response)
    } catch (error) {
        return res.status(500).send({
            success: false,
            message: "Error occured in getEmployeeById_controller "+ error
        })
    }
}