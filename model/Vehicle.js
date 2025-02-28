import mongoose from "mongoose";

const vehicleSchema = new mongoose.Schema({
    customer_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Customer",
    },
    year: {
        type: String,
    },
    make: {
        type: String,
    },
    model: {
        type: String,
    },
    type: {
        type: String,
    },
    mileage: {
        type: String,
    },
    tag: {
        type: String,
    },
    serial_number: {
        type: String,
    },
    color: {
        type: String, 
    }
}, {timestamps: true});

export const Vehicle = mongoose.model("vehicle",vehicleSchema);