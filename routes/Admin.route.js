import express from "express"

const route = express.Router();

route.post("/add-employee",AddEmployeeController)