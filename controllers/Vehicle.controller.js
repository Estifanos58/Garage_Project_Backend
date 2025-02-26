import { addVehicle_service, editVehicle_service, getAllVehicle_service } from "../services/Vehicle.service.js";
import { errorInServer, fieldsNotFilled, sendResponse } from "../util/response.js";

export const addVehicle_controller = async (req, res) => {
    try {
        const {customer_id, year, make, model,type, mileage, tag, serial_number, color, vin} = req.body;
        if(!customer_id || !year || !make || !model || !type || !mileage || !tag || !serial_number || !color ||!vin){
            return fieldsNotFilled(res);
        }

        const response = await addVehicle_service(customer_id, year, make, model,type, mileage, tag, serial_number, color, vin);
        return sendResponse(response, res);
    } catch (error) {
        return errorInServer("addVehicle_controller", error,res);
    }
}

export const editVehicle_controller = async (req,res) => {
    try {
        const {vehicle_id, year, make, model,type, mileage, tag, serial_number, color, vin} = req.body;

        if(!vehicle_id || !year || !make || !model || !type || !mileage || !tag || !serial_number || !color ||!vin){
            return fieldsNotFilled(res);
        }

        const response = await editVehicle_service(vehicle_id, year, make, model,type, mileage, tag, serial_number, color, vin);

        return sendResponse(response, res);    
    } catch (error) {
        return errorInServer("editVehicle_controller", error, res);
    }
}

export const getAllVehicle_cotroller = async (req,res) => {
    try {
        const {customer_id} = req.body;
        if(!customer_id){
            return fieldsNotFilled(res)
        }

        const response = await getAllVehicle_service(customer_id);
        return sendResponse(response, res);
    } catch (error) {
        return errorInServer("getAllVehicle_controller", error, res);
    }
}