import { User } from "../model/User.js"
import bcrypt from "bcryptjs";
import { generateJwtToken } from "../util/jwtToken.js";
import { sendVerificationPassword } from "../util/emails.js";
import {Service} from "../model/Service.js"
import { Customer } from "../model/Customer.js";

export const verifyAdmin = async (role) =>{
   if(role !== "admin" || role !== "manager") return false;
   return true;
}

export const AddEmployeeService = async (first_name,last_name,email,phone,role)=> {
    try {
        if(verifyAdmin(role)){
            // const existingUser = await User.findOne({email});
            // if(existingUser) return {
            //     success: false,
            //     message: "user with the given ID lready exist"
            // }
            // generated password
            const password = Math.floor(100000 + Math.random() * 600000).toString();
            const hashedPassword = await bcrypt.hash(password, 10);
        
            const response =  await sendVerificationPassword(email,password,user.first_name, user.role)
            if(!response.success){
                return {
                    success: false,
                    message: "Error while sending message please Check you Email again"
                }
            }

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

            return {
                success: true,
                message: "Employee Added",
            }
        }else{
            return {
                success: false,
                message: "You are not Authorized"
            }
        }
        

    } catch (error) {
        return {
            success: false,
            message: "Error while Adding Employee In service"+ error 
        }
    }

}

export const editEmployeeService = async (role,id,first_name,last_name,email,phone,role) => {
    try {
        if(verifyAdmin(role)){
            const user = await User.findById(id);
            if(!user) {
                return {
                    success: false,
                    message: "No user found with the given Id"
                }
            }

            if(first_name) user.first_name = first_name;
            if(last_name) user.last_name = last_name;
            if(email) user.email = email;
            if(phone) user.phone = phone;
            if(role) user.role = role;

            await user.save()

            return {
                success: true,
                message: "Employee Edited succesfully"
            }
        }else {
            return {
                success: false,
                message: "You are not Authorized"
            }
        }
       
    } catch (error) {
        return {
            success: false,
            message: "Error while Editing Employee In service"+ error 
        }
    }
} 

export const deleteEmployee_service = async (role,id) =>{
    try {
        if(verifyAdmin(role)){
            const user = await User.findAndDelete({_id:id});
            if(!user) return {
                success: false,
                message: "User not found"
            }

            return {
                success: true,
                message: "User deleted Successfully"
            }

        }else{
            return {
                success: false,
                message: "You are not Authorized"
            }
        }
    } catch (error) {
        return {
            success: false,
            message: "Error while Deleting Employee In service"+ error 
        }
    }
}

export const addCustomer_service = async (role,email,first_name,last_name,phone) => {
    try {
        if(verifyAdmin(role)){
            const existingUser = await Customer.findOne({email});
            if(existingUser) return { 
                success: false,
                message: "User with this email already exists"
            }
            
            const password = Math.floor(100000 + Math.random() * 900000).toString();

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
        }else{
            return {
                success: false,
                message: "You are not Authorized"
            }
        }
        
    } catch (error) {
        return {
            success: false,
            message: "Error while Adding Customer In service"+ error 
        }
    }
  

}

export const getAllEmployee_service = async (role,userId) => {
    try {
       if(verifyAdmin(role)){
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
       }else{
            return {
                success: false,
                message: "You are not Authorized"
            }
       }
       
    } catch (error) {
        return {
            success: false,
            message: "Error while GETING Employees In service"+ error 
        }
    }
        
}

export const getEmployeeById_service = async (role, employeeId) => {
    try {
       if(verifyAdmin(role)){
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
       } else{
            return {
                success: false,
                message: "You are not Authorized"
            }
       }

    } catch (error) {
        return res.status(500).send({
            success: false,
            message: "Error occured in getEmployeeById_service "+ error
        })
    }
}



