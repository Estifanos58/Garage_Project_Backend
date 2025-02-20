import { Customer } from "../model/Customer.js"
import { Vehicle } from "../model/Vehicle.js";

export const addVehicle_service = async (customer_id, year, make, model,type, mileage, tag, serial_number, color, vin) =>{
    try {
        const customer = await Customer.findById(customer_id);
        if(!customer) {
            return {
                success: false,
                message: "Customer Not found with the given Id"
            }
        }

        const vehicle = new Vehicle({customer_id, year,make,model,type,mileage,tag,serial_number,color,vin});
        
        await vehicle.save();
        
        return {
            success: true,
            message: "Vehicle Added"
        }

    } catch (error) {
        return {
            success: false,
            message: "Error while addVehicleService: "+ error
        }
    }
}

export const editVehicle_service = async (vehicle_id, year, make, model,type, mileage, tag, serial_number, color, vin) => {
    try {
        const vehicle = await Vehicle.findById(vehicle_id);
        if(!vehicle) {
            return {
                success: false,
                message: "No vehicle with the given Id"
            }
        } 
        if(year) {vehicle.year = year};
        if(make) {vehicle.make = make};
        if(model) {vehicle.model = model};
        if(type) {vehicle.type = type};
        if(mileage) {vehicle.mileage = mileage};
        if(tag) {vehicle.tag = tag};
        if(serial_number) {vehicle.serial_number = serial_number};
        if(color) {vehicle.color = color};
        if(vin) {vehicle.vin = vin};

        await vehicle.save();

        return {
            success: true,
            message: "Vehicle Edited successfully"
        }
    } catch (error) {
        return {
            success: false,
            message: "Error while editVehicle_service: "+ error
        }
    }
}

export const getAllVehicle_service = async (customer_id) =>{
    try {
        const vehicles = await Vehicle.find({customer_id: customer_id});
        if(!vehicles) {
            return {
                success: false,
                message: "No Vehicles found"
            }
        }

        return {
            success: true,
            message: "All Vehicles found",
            data: vehicles
        }
    } catch (error) {
        return {
            success: false,
            message: "Error while get All Vehicle Service: "+ error
        }
    }
} 