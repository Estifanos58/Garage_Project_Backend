import { addVehicle_service } from "../services/Vehicle.service";
import { fieldsNotFilled, sendResponse } from "../util/response";

export const addVehicle_controller = async (req, res) => {
    try {
        const {customer_id, year, make, model,type, mileage, tag, serial_number, color, vin} = req.body;
        if(customer_id || !year || !make || !model || !type || !mileage || !tag || !serial_number || !color ||!vin){
            fieldsNotFilled(res);
        }

        const response = await addVehicle_service(customer_id, year, make, model,type, mileage, tag, serial_number, color, vin);
        sendResponse(response, res);
    } catch (error) {
        errorInServer("addVehicle_controller", error,res);
    }
}