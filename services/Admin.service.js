import { User } from "../model/User.js"
import bcrypt from "bcryptjs";
import { generateJwtToken } from "../util/jwtToken.js";
import { sendVerificationPassword } from "../util/emails.js";
import {Service} from "../model/Service.js"
import { Customer } from "../model/Customer.js";

export const AddEmployeeService = async (first_name,last_name,email,phone,role)=> {
    try {
        const existingUser = await User.findOne({email});
        // if(existingUser) return {
        //     success: false,
        //     message: "user with the given ID lready exist"
        // }
        // generated password
        const password = Math.floor(100000 + Math.random() * 600000).toString();
        // here we will send the password to the employee
        const hashedPassword = await bcrypt.hash(password, 10);

        const user = new User({
            first_name,
            last_name,
            email,
            password: hashedPassword,
            verification_expires_at: Date.now() + 24 * 60 * 60 * 1000 ,
            phone,
            role,
            status: "initial",
            joined_date: Date.now()
        });

        await user.save();
        sendVerificationPassword(email,password,user.first_name, user.role)

        return {
            success: true,
            message: "Employee Added",
            user: {
                ...user._doc,
                password : null
            }
        }

    } catch (error) {
        return {
            success: false,
            message: "Error while Adding Employee In service"+ error 
        }
    }

}

export const addCustomer_service = async (email,first_name,last_name,phone) => {
    try {
        const existingUser = await Customer.findOne({email});
        if(existingUser) return { 
            success: false,
            message: "User with this email already exists"
        }
        
        const password = Math.floor(Math.random * 400000 +10000);
        const hashedPassword = await bcrypt.hash(password, 10);

        const response = await customerAddedPassword(email, password);
        if(!response.success) return {
            success: false,
            message: "Error while sending message check your Email"
        }
        const user = new Customer({first_name,last_name,email,password: hashedPassword,phone });
    
        await user.save();

        return {
            success: true,
            message: "Customer Added"
        }
    } catch (error) {
        return {
            success: false,
            message: "Error while Adding Customer In service"+ error 
        }
    }
  

}

export const getAllEmployee_service = async (userId) => {
    try {
        const user = await User.findById(userId);
        if(!user){
            return {
                success: false,
                message: "User with the given Id not found"
            }
        }
        if(user.role != "admin" && user.role != "manager"){
            return {
                success: false,
                message: "You don't have the permission"
            }
        }
        const employees = await User.find({ _id: { $ne: userId } }, { password: 0 });

        if(employees.length == 0){
            return {
                success: false,
                message: "No Employees found"
            }
        }
        return {
            success: true,
            message: "All employees found",
            data: employees
        }
    } catch (error) {
        return {
            success: false,
            message: "Error while GETING Employees In service"+ error 
        }
    }
        
}

export const getEmployeeById_service = async (userId, employeeId) => {
    try {
        const admin = await User.findById(userId);
        if(!admin){
            return {
                success: false,
                message: "User Not found with the given Id"
            }
        }
        if(admin.role !== "admin" || admin.role !== "manager"){
            return {
                success: false,
                message: "You don't have the permission"
            }
        }
        const user = await User.findById(employeeId);
        if(!user){
            return {
                success: false,
                message: "User Not found with the given Id"
            }
        }

        return {
            success: true,
            message: "User data found",
            data: user
        }

    } catch (error) {
        return res.status(500).send({
            success: false,
            message: "Error occured in getEmployeeById_service "+ error
        })
    }
}


// manager 
// customer garage email, phone, first_name, last_name

// Abebe email = abebe@gmail.com 
                // bajaj Force
                // minibus
