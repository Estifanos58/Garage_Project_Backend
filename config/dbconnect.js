import mongoose from "mongoose";

export const connect = async()=>{
    try {
        const conn = mongoose.connect(process.env.CONNECTION_STRING);
        console.log("Mongodb connected");
    } catch (error) {
        console.log("Error during connection");   
    }
}