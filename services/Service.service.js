import { User } from "../model/User.js";
import { Service } from "../model/Service.js"

export const AddService_service = async (userId, name, description,price) => {
try {
    const user = await User.findById(userId);
    if(!user){
        return {
            success: false,
            message: "No user found by the given Id",
        }
    } 
    if(user.role !== "admin" && user.role !== "manager"){
        return {
            success: false,
            message: "You don't have the Permition to Add Service"
        }
    }

    const exisitngName = await Service.findOne({name});
    if(exisitngName){
        return {
            success: false,
            message: "Service with the Given name Already exist"
        }
    }
    const service = await new Service({
        name,
        description,
        price,
        added_by: user._id,
    })

    await service.save();

    return {
        success: true,
        message: "Service Added Successfully."
    }
} catch (error) {
    return {
        success: false,
        message: "Error occured while Adding in Addservice_service "+ error
    }
}
}