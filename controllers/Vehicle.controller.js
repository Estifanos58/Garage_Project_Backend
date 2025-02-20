import { addVehicle_service, editVehicle_service, getAllVehicle_service } from "../services/Vehicle.service.js";
import { errorInServer, fieldsNotFilled, sendResponse } from "../util/response.js";

export const addVehicle_controller = async (req, res) => {
    try {
        const {customer_id, year, make, model,type, mileage, tag, serial_number, color, vin} = req.body;
        if(!customer_id || !year || !make || !model || !type || !mileage || !tag || !serial_number || !color ||!vin){
            fieldsNotFilled(res);
        }

        const response = await addVehicle_service(customer_id, year, make, model,type, mileage, tag, serial_number, color, vin);
        sendResponse(response, res);
    } catch (error) {
        errorInServer("addVehicle_controller", error,res);
    }
}

export const editVehicle_controller = async (req,res) => {
    try {
        const {vehicle_id, year, make, model,type, mileage, tag, serial_number, color, vin} = req.body;

        if(!vehicle_id || !year || !make || !model || !type || !mileage || !tag || !serial_number || !color ||!vin){
            fieldsNotFilled(res);
        }

        const response = await editVehicle_service(vehicle_id, year, make, model,type, mileage, tag, serial_number, color, vin);

        sendResponse(response, res);    
    } catch (error) {
        errorInServer("editVehicle_controller", error, res);
    }
}

export const getAllVehicle_cotroller = async (req,res) => {
    try {
        const {customer_id} = req.body;
        if(!customer_id){
            fieldsNotFilled(res)
        }

        const response = await getAllVehicle_service(customer_id);
        sendResponse(response, res);
    } catch (error) {
        errorInServer("getAllVehicle_controller", error, res);
    }
}