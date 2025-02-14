import express from "express";
import { LoginController , SignController, verifyEmployee} from "../controllers/Auth.controller.js";
import { addCustomer_constroller, AddEmployeeController, editEmployee_controller, getAllEmployee_controller, getEmployeeById_controller } from "../controllers/Admin.controller.js";
import { AddService, editService } from "../controllers/Service.controller.js";
import { verifyToken } from "../middleware/verifyToken.js";

export const route = express.Router();

// Auth Controllers
route.post("/user/sign-up", SignController);
route.post("/user/login", LoginController);
route.post("/user/verify-password", verifyEmployee);

// Admin Controllers
route.post("/admin/add-employee",verifyToken,AddEmployeeController);
route.post("/admin/add-service",verifyToken, AddService);
route.post("/admin/edit-service",verifyToken,editService); 
route.post("/admin/get-employee-by-id",verifyToken,getEmployeeById_controller);
route.post("/admin/add-customer", verifyToken, addCustomer_constroller);
route.post("/admin/edit-employee",verifyToken,editEmployee_controller);
route.get("/admin/get-all-employees",verifyToken, getAllEmployee_controller);





