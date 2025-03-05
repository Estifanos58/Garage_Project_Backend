import express from "express";
import { LoginController , SignController, verifyEmployee, getUserInfo_controller, LogOutController, changePasswordController, ForgotController, ResetPasswordController} from "../controllers/Auth.controller.js";
import { AddEmployeeController, deleteEmployee_controller, editEmployee_controller, getAllEmployee_controller, getEmployeeById_controller, getEmployeeForWork_controller } from "../controllers/Admin.controller.js";
import { AddService, deleteService_controller, editService, getAllService_controller } from "../controllers/Service.controller.js";
import { verifyToken } from "../middleware/verifyToken.js";
import { Autherize } from "../middleware/Autherize.js";
import { addVehicle_controller, editVehicle_controller, getAllVehicle_cotroller } from "../controllers/Vehicle.controller.js";
import { addCustomer_constroller, getAllCustomer_controller, getCustomerById_controller, deleteCustomer_controller, editCustomer_controller, searchCustomer_controller } from "../controllers/Customer.controller.js";
import { addOrder_controller, editOrder_controller, getAllOrder_controller } from "../controllers/Order.controller.js";
import { getEmployeeOrders_controller } from "../controllers/Employee.controller.js";

export const route = express.Router();

// Auth Controllers
route.post("/user/sign-up", SignController);
route.post("/user/login", LoginController);
route.get("/user/log-out",verifyToken,LogOutController);
route.post("/user/verify-password", verifyEmployee);
route.get("/get-all-service",getAllService_controller);
route.get("/user/get-userInfo", verifyToken, getUserInfo_controller);
route.put("/user/change_password",verifyToken, changePasswordController);
route.post('/user/forgot-password',ForgotController);
route.post('/auth/resetpassword/:hash', ResetPasswordController);

//Employee Controllers
route.get('/user/get-orders', verifyToken, getEmployeeOrders_controller);

// Admin Controllers
    // Admin Employee Controller
route.post("/admin/add-employee", verifyToken, Autherize, AddEmployeeController); //✅
route.put("/admin/edit-employee", verifyToken, Autherize, editEmployee_controller); //✅
route.delete("/admin/delete-employee", verifyToken, Autherize, deleteEmployee_controller); // ✅
route.get("/admin/get-all-employees", verifyToken, Autherize, getAllEmployee_controller); //✅
route.get("/admin/get-employee-by-id", verifyToken, Autherize, getEmployeeById_controller); //✅
route.get("/admin/workEmpolyee", verifyToken, Autherize, getEmployeeForWork_controller); //✅

    // Admin Service Controller
route.post("/admin/add-service", verifyToken, Autherize, AddService); // ✅
route.patch("/admin/edit-service", verifyToken, Autherize, editService); // ✅
route.delete("/admin/delete-service", verifyToken, Autherize, deleteService_controller); // ✅
route.get("/admin/get-all-service", verifyToken, Autherize, getAllService_controller);


    // Admin Customer
route.post("/admin/add-customer", verifyToken, Autherize, addCustomer_constroller); // ✅
route.put("/admin/edit-customer", verifyToken, Autherize, editCustomer_controller); // ✅
route.get("/admin/get-all-customers", verifyToken, Autherize, getAllCustomer_controller); // ✅
route.get("/admin/get-customer-by-id", verifyToken, Autherize, getCustomerById_controller); // ✅
route.delete("/admin/delete-customer", verifyToken, Autherize, deleteCustomer_controller); // ✅
route.post("/admin/searchCustomer",verifyToken, Autherize, searchCustomer_controller);

    // Admin Vehicle
route.post("/admin/add-vehicle", verifyToken, Autherize, addVehicle_controller); // ✅
route.post("/admin/edit-vehicle", verifyToken, Autherize, editVehicle_controller); // ✅
route.post("/admin/get-all-vehicle", verifyToken, Autherize, getAllVehicle_cotroller); //✅

    // Admin Order
route.post("/admin/add-order", verifyToken, Autherize, addOrder_controller); // ✅
route.get("/admin/get-all-orders", verifyToken, Autherize, getAllOrder_controller); // ✅
route.put("/admin/edit-order",verifyToken, Autherize, editOrder_controller);




