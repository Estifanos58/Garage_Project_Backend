import { User } from "../model/User.js";
import { Service } from "../model/Service.js";
import { errorService } from "../util/response.js";

export const addService_service = async (userId,name,description,price) => {
  try {
        const user = await User.findById(userId);
        if (!user){
          return { success: false, message: "No user found by the given ID" };
        }
        const duplicate = await Service.findOne({ name });

        if (duplicate) {
          return {
            success: false,
            message: "Service with the given name already exists",
          };
        }

        const service = new Service({
          name,
          description,
          price,
          added_by: user._id,
        });
        await service.save();

        return { success: true, message: "Service added successfully.", data: service };
  } catch(error) {
   errorService("addService_service", error);
  }
}
export const editService_service = async (userId,serviceId,name,description,price) => {
  try {
        const user = await User.findById(userId);
        if (!user)
          return { success: false, message: "No user found with the given ID" };
    
        const service = await Service.findById(serviceId);
        if (!service)
          return { success: false, message: "No service found with the given ID" };
    
        if (name) service.name = name;
        if (description) service.description = description;
        if (price) service.price = price;
    
        await service.save();
        return { success: true, message: "Service updated successfully." };
    
  } catch (error) {
   errorService("editService_service", error);
  }
};

export const deleteService_service = async(serviceId) => {
    try {
            const service = await Service.findByIdAndDelete(serviceId);
            if(!service) return {
                success: false,
                message: "No service with the given Id found"
            }
            return {
                success: true,
                message: "Service Deleted successfully"
            }
    } catch (error) {
       errorService("deleteService_service", error);
    }
}


export const getAllService_service = async() => {
  try {
    const services = await Service.find({});
    if(!services.length){
      return {
        success: false,
        message: "No services found"
      }
    }

    return {
      success: true,
      message: "Service Get sucessfully",
      data: services
    }
  } catch (error) {
    errorService("getAllService_service",error);
  }
}