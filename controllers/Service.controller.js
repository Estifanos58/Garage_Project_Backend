import { User } from "../model/User.js";
import {addService_service, editService_service} from "../services/Service.service.js"
export const AddService = async (req,res)=> {
    try {
        const {userId, name, description, price} = req.body;
        if(!userId || !name || !description || !price){
            return res.status(400).send({
                success: false,
                message: "All field shoul be field",
            })
        }
         const response = await addService_service(userId,name, description,price);
         if(!response.success) return res.status(400).send(response);

         return res.status(201).send(response);
    } catch (error) {
        res.status(500).send({
            success: false,
            message: "Error occured while Adding Service at the controller "+ error
        })
    }
}

export const editService = async (req,res) =>{
    try {
        const {userId, service_id, name, description, price} = req.body;
        if(!userId || !service_id){
            return res.status(400).send({
                success: false,
                message: "Nuccesery fields must be field"
            })
        }
        const response = await editService_service(userId, service_id,name,description,price);
        if(!response.status){
            res.status(400).send(response);
        }
        return res.status(200).send(response);
    } catch (error) {
        res.status(500).send({
            success: false,
            message:"Error in EditServiceController "+ error
        })
    }
}