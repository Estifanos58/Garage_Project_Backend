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
    password: {
        type: String,
        required: true
    },
    phone: {
        type: String,
    },
    added_date: {
        type: Date,
        default: Date.now,
    },
    reset_password_token: String,
    reset_password_expires_at_token: String,
    verification_code: String,
    verification_expires_at: String,
    hashed_link: String,
})

export const Customer = mongoose.model("customer", customerSchema);