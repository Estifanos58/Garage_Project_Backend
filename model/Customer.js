import mongoose from "mongoose";

const customerSchema = new mongoose.Schema({
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
    }, 
    phone: {
        type: String,
    },
    status: {
        type: Boolean,
        default: true,
    },
    added_date: {
        type: Date,
        default: Date.now,
    },
    hashed_link: String,
})

export const Customer = mongoose.model("customer", customerSchema);