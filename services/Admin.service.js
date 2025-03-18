import { User } from "../model/User.js"
import bcrypt from "bcryptjs";
import {EmployeeFired, sendWelcomeMessage } from "../util/emails.js";
import { Order } from "../model/Order.js";

export const AddEmployeeService = async (first_name,last_name,email,phone,role)=> {
    try {
            const existingUser = await User.findOne({email});
            if(existingUser) return {
                success: false,
                message: "user with the given ID lready exist"
            }
            // generated password
            const password = Math.floor(100000 + Math.random() * 600000).toString();
            const hashedPassword = await bcrypt.hash(password, 10);
        
            const response =  await sendWelcomeMessage(email,password,first_name, role)
            // if(!response.success){
            //     return {
            //         success: false,
            //         message: "Error while sending message please Check you Email again"
            //     }
            // }
            // console.log("RESPONSE: ", response);

            const user = new User({
                first_name,
                last_name,
                email,
                password: hashedPassword,
                verification_expires_at: Date.now() + 24 * 60 * 60 * 1000 ,
                phone,
                status: "initial",
                role,
                joined_date: Date.now()
            });

            await user.save();

            return {
                success: true,
                message: "Employee Added",
                data: user
            }
    } catch (error) {
        return {
            success: false,
            message: "Error while Adding Employee In service: "+ error 
        }
    }

}

export const editEmployeeService = async (id,first_name,last_name,email,phone,role,status) => {
    try {
            const user = await User.findById(id);
            if(!user) {
                return {
                    status: 204,
                    success: false,
                    message: "No user found with the given Id"
                }
            }
            const duplicate = await User.findOne({email});
            if(duplicate && duplicate._id != id){
                    return {
                        success: false,
                        message: "Email already exist"
                }
            }

            if(first_name) user.first_name = first_name;
            if(last_name) user.last_name = last_name;
            if(email) user.email = email;
            if(phone) user.phone = phone;
            if(role) user.role = role;
            if(status) user.status = status;

            await user.save()

            return {
                success: true,
                message: "Employee Edited succesfully",
                data: user
            }
       
    } catch (error) {
        return {
            success: false,
            message: "Error while Editing Employee In service"+ error 
        }
    }
} 

export const deleteEmployee_service = async (id) =>{
    try {
            const user = await User.findById(id);
            if(!user) return {
                success: false,
                message: "User not found"
            }
            const order = await Order.findOne({employee_id: id, status: { $in: ["In progress"] }});
            // console.log("ORDER: ", order);
            if(order) {
                return {
                    success: false,
                    message: "Employee Has a Task Assigned To It."
                }
            }
            await EmployeeFired(user.email, user.first_name);
            await User.findByIdAndDelete(id);

            return {
                success: true,
                message: "User deleted Successfully"
            }
    } catch (error) {
        return {
            success: false,
            message: "Error while Deleting Employee In service"+ error 
        }
    }
}
 
export const getAllEmployee_service = async (userId) => {
    try {
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

export const getEmployeeById_service = async (employeeId) => {
    try {
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
            message: "Error occured in getEmployeeById_servie "+ error
        })
    }
}

export const getEmployeeForWork_service = async (res) => {
    try {
        const employees = await User.find({
            role: { $regex: /^employee$/i }, // Case-insensitive match
            $or: [{ occupied: false }, { occupied: { $exists: false } }] // Handles missing 'occupied' field
        }).lean();  //status: "active"
            if(employees.length === 0){
                return {
                    success: false,
                    message: "No Employees found"
                };
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




