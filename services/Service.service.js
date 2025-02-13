import { User } from "../model/User.js";
import { Service } from "../model/Service.js";

// Helper function to check user permissions
const hasPermission = (user) => user && (user.role === "admin" || user.role === "manager");

export const addService_service = async (userId, name, description, price) => {
    try {
        // Validate user
        const user = await User.findById(userId);
        if (!user) return { success: false, message: "No user found by the given ID" };
        if (!hasPermission(user)) return { success: false, message: "You don't have permission to add a service" };

        // Check if service name already exists
        if (await Service.findOne({ name })) {
            return { success: false, message: "Service with the given name already exists" };
        }

        // Create and save new service
        const service = new Service({ name, description, price, added_by: user._id });
        await service.save();

        return { success: true, message: "Service added successfully." };
    } catch (error) {
        console.error("Error in addService:", error);
        return { success: false, message: "Error occurred while adding service." };
    }
};

export const editService_service = async (userId, serviceId, name, description, price) => {
    try {
        // Validate user
        const user = await User.findById(userId);
        if (!user) return { success: false, message: "No user found with the given ID" };
        if (!hasPermission(user)) return { success: false, message: "You don't have permission to edit a service" };

        // Find and update service
        const service = await Service.findById(serviceId);
        if (!service) return { success: false, message: "No service found with the given ID" };

        // Update service fields if provided
        if (name) service.name = name;
        if (description) service.description = description;
        if (price) service.price = price;

        await service.save();
        return { success: true, message: "Service updated successfully." };
    } catch (error) {
        console.error("Error in editService:", error);
        return { success: false, message: "Error occurred while editing service." };
    }
};
