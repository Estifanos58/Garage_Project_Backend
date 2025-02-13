import express from "express";
import { LoginController , verifyEmployee} from "../controllers/Auth.controller.js";
import { AddEmployeeController } from "../controllers/Admin.controller.js";

export const route = express.Router();

// Auth Controllers
route.post("/user/login", LoginController);
route.post("/user/verify-password", verifyEmployee);

// Admin Controllers
route.post("/admin/add-employee",AddEmployeeController);




