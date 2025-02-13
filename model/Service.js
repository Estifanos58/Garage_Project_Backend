import mongoose from "mongoose";

const serviceSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: String,
        required: true
    },
    added_by: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    updated_by: {  // Fixed typo
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    added_date: {
        type: Date,
        default: Date.now,  // Ensures a default value when not provided
    },
    updated_date: {
        type: Date,
    }
}, { timestamps: true });

export const Service = mongoose.model("Service", serviceSchema);
