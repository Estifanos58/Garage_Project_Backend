import express from "express";
import { LoginController , SignController, verifyEmployee} from "../controllers/Auth.controller.js";
import { addCustomer_constroller, AddEmployeeController, deleteCustomer_controller, deleteEmployee_controller, editEmployee_controller, getAllCustomer_controller, getAllEmployee_controller, getCustomerById_controller, getEmployeeById_controller } from "../controllers/Admin.controller.js";
import { AddService, editService, getAllService_controller } from "../controllers/Service.controller.js";
import { verifyToken } from "../middleware/verifyToken.js";
import { Autherize } from "../middleware/Autherize.js";

export const route = express.Router();

// Auth Controllers
route.post("/user/sign-up", SignController);
route.post("/user/login", LoginController);
route.post("/user/verify-password", verifyEmployee);
route.get("/get-all-service",getAllService_controller);

// Admin Controllers
    // Admin Employee Controller
route.post("/admin/add-employee",verifyToken,Autherize,AddEmployeeController);
route.post("/admin/edit-employee",verifyToken,Autherize,editEmployee_controller);
route.post("/admin/delete-employee",verifyToken,Autherize,deleteEmployee_controller);
route.get("/admin/get-all-employees",verifyToken,Autherize,getAllEmployee_controller);
route.post("/admin/get-employee-by-id",verifyToken,Autherize,getEmployeeById_controller);

    // Admin Service Controller
route.post("/admin/add-service",verifyToken,Autherize,AddService);
route.post("/admin/edit-service",verifyToken,Autherize,editService); 
route.delete("/admin/delete-service",verifyToken,Autherize,deleteEmployee_controller);


    // Admin Customer
route.post("/admin/add-customer", verifyToken,Autherize,addCustomer_constroller);
route.get("/admin/get-all-customers",verifyToken,Autherize, getAllCustomer_controller);
route.post("/admin/get-customer-by-id",verifyToken,Autherize, getCustomerById_controller);
route.delete("/admin/delete-customer",verifyToken,Autherize, deleteCustomer_controller);





