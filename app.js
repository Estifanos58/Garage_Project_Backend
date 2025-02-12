//npm i cookie-parser mailtrap bcryptjs dotenv jsonwebtoken mongoose crypto

import express from "express";
import cookieParser from "cookie-parser";
import {connect} from "./config/dbconnect.js";
import cors from "cors";
import dotenv from "dotenv";
import route from './routes/Auth.route.js'

// .env configuration
dotenv.config()


const app = express();

app.use(cors());
app.use(cookieParser());
const port = process.env.PORT || 5500

// Routes
app.use("/user",route)

app.get("/", (req,res)=>{
    res.send("Hello here")
})

app.listen(port, ()=>{
    connect();
    console.log("Server listning in port ", port)
})