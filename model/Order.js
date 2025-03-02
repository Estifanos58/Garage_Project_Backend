import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
    customer_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "customer",
    },
    vehicle_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "vehicle",
    },
    employee_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    services: {
        type: Array,
    },
    status: {
        type: String, // Complete, In progress, Received, pending
    },
    total: {
        type: String,
    },
    completion_date: {
        type: Date
    }
}, {timestamps: true});

export const Order = mongoose.model("order", orderSchema);
