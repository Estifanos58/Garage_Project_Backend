import { User } from "../model/User.js"
import bcrypt from "bcryptjs";
import { sendVerificationPassword } from "../util/emails.js";
import { Customer } from "../model/Customer.js";

export const AddEmployeeService = async (first_name,last_name,email,phone,role)=> {
    try {
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
    } catch (error) {
        return {
            success: false,
            message: "Error while Adding Employee In service"+ error 
        }
    }

}

export const editEmployeeService = async (id,first_name,last_name,email,phone,role) => {
    try {
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
       
    } catch (error) {
        return {
            success: false,
            message: "Error while Editing Employee In service"+ error 
        }
    }
} 

export const deleteEmployee_service = async (id) =>{
    try {
            const user = await User.findAndDelete({_id:id});
            if(!user) return {
                success: false,
                message: "User not found"
            }

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
            message: "Error occured in getEmployeeById_service "+ error
        })
    }
}


export const addCustomer_service = async (email,first_name,last_name,phone) => {
    try {
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
        
    } catch (error) {
        return {
            success: false,
            message: "Error while Adding Customer In service"+ error 
        }
    }
  

}

export const getAllCustomer_service = async () =>{
    try {
        const customers = await Customer.find({password: 0}, {added_date: 0},{reset_password_token:0 },{reset_password_expires_at_token: 0}, {verification_code: 0},{verification_expires_at: 0}, {hashed_link: 0});
        if(customers.length === 0){
            return {
                success: false,
                message: "No customers found"
            }
        }
        return {
            success: true,
            message: "Customers Found successfully",
            data: customers
        }
    } catch (error) {
        return {
            success: false,
            message: "Error while Get All Customer In service: "+ error 
        }
    }
}

export const getCustomerById_service = async (id)=>{
    try {
        const user = await Customer.findOne({_id:id}, {password: 0}, {added_date: 0},{reset_password_token:0 },{reset_password_expires_at_token: 0}, {verification_code: 0},{verification_expires_at: 0}, {hashed_link: 0});
        if(!user){
            return {
                success: false,
                message: "Customer Not found with the given ID"
            }
        }

        return {
            success: true,
            message: "Customer With the given Id found",
            data: user
        }
    } catch (error) {
        return {
            success: false,
            message: "Error while GETING EmployeeByID In service "+error
        }
    }
}



