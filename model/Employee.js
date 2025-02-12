import mongoose from "mongoose";

export const userSchema = mongoose.Schema({
    first_name: {
        type: String,
        required: true
    },
    last_name:{
        type:String,
        required: true
    },
    phone:{
        type: String,
    },
    status: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        required: true
    },
    email : {
        type: String,
        required: true,
        unique
    },
    password:{
        type: String,
    },
    reset_password_token: String,
    reset_password_expires_at_token: String,
    joined_date: String,
    verification_code: String,
    verification_expires_at: String,
    hashed_link: String,
    
}, {timestamps: true})

export const User = mongoose.model('User',userSchema);