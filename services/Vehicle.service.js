import { Customer } from "../model/Customer"
import { Vehicle } from "../model/Vehicle";

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