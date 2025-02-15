import { User } from "../model/User.js";
import { Service } from "../model/Service.js";
import { verifyAdmin } from "./Admin.service.js";

export const addService_service = async (
  role,
  userId,
  name,
  description,
  price
) => {
  try {
    if (verifyAdmin(role)) {
      const user = await User.findById(userId);
      if (!user)
        return { success: false, message: "No user found by the given ID" };

      if (await Service.findOne({ name })) {
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

      return { success: true, message: "Service added successfully." };
    } else {
      return {
        success: false,
        message: "You are not Authorized",
      };
    }
  } catch (error) {
    console.error("Error in addService:", error);
    return { success: false, message: "Error occurred while adding service." };
  }
};

export const editService_service = async (
  role,
  userId,
  serviceId,
  name,
  description,
  price
) => {
  try {
    if(verifyAdmin(role)) {
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
    } else{
        return {
            success: false,
            message: "You are not Authorized"
        }
    }
    
  } catch (error) {
    console.error("Error in editService:", error);
    return { success: false, message: "Error occurred while editing service." };
  }
};

export const deleteService_service = async(role,serviceId) => {
    try {
        if(verifyAdmin(role)){
            const service = await Service.findByIdAndDelete(serviceId);
            if(!service) return {
                success: false,
                message: "No service with the given Id found"
            }
            return {
                success: true,
                message: "Service Deleted successfully"
            }
        } else{
            return {
                success: false,
                message: "You are not Authorized"
            }
        }
    } catch (error) {
        return {
            success: false,
            message: "Error occured in deleteService_Service "+error
        }
    }
}