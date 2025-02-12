import express from "express";
import { LoginController } from "../controllers/Auth.controller.js";
import { AddEmployeeController } from "../controllers/Admin.controller.js";

export const route = express.Router();

// Auth Controllers
route.post("/user/login", LoginController);

// Admin Controllers
route.post("/admin/add-employee",AddEmployeeController);



