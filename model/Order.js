import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
    customer_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Customer",
    },
    vehicle_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Vehicle",
    },
    employee_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    assignedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    services: {
        type: Array,
        required: true,
    },
    total: {
        type: Number,
        required: true,
    },
}, {timestamps: true});

export const Order = mongoose.model("order", orderSchema);
