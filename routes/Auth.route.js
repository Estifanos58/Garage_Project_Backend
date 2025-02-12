import express from "express";
import { LoginController } from "../controllers/Auth.controller";
const route = express.Router();

route.post("/login", LoginController);