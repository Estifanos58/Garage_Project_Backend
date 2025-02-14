import express from "express";
import { LoginController , SignController, verifyEmployee} from "../controllers/Auth.controller.js";
import { AddEmployeeController, getAllEmployee_controller, getEmployeeById_controller } from "../controllers/Admin.controller.js";
import { AddService, editService } from "../controllers/Service.controller.js";

export const route = express.Router();

// Auth Controllers
route.post("/user/sign-up", SignController);
route.post("/user/login", LoginController);
route.post("/user/verify-password", verifyEmployee);

// Admin Controllers
route.post("/admin/add-employee",AddEmployeeController);
route.post("/admin/add-service", AddService);
route.post("/admin/edit-service", editService); 
route.post("/admin/get-employee-by-id", getEmployeeById_controller);
route.get("/admin/get-all-employees", getAllEmployee_controller);





