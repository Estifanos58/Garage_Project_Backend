import { Customer } from "../model/Customer.js";
import bcrypt from "bcryptjs";
import { customerAddedPassword } from "../util/emails.js";


export const addCustomer_service = async (email,first_name,last_name,phone) => {
    try {
            const existingUser = await Customer.findOne({email});
            if(existingUser) return { 
                success: false,
                message: "User with this email already exists"
            }
            
            const password = Math.floor(100000 + Math.random() * 900000).toString();

            const hashedPassword = await bcrypt.hash(password, 10);

            // const response = await customerAddedPassword(email, password);
            // if(!response.success) return {
            //     success: false,
            //     message: "Error while sending message check your Email"
            // }
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
        const customers = await Customer.find({},{password: 0}, {added_date: 0},{reset_password_token:0 },{reset_password_expires_at_token: 0}, {verification_code: 0},{verification_expires_at: 0}, {hashed_link: 0});
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

export const deleteCustomer_service = async (customer_id) => {
    try {
        const foundCustomer = await Customer.findByIdAndDelete(customer_id);  
        if(!foundCustomer){
            return {
                success: false,
                message: "Customer Not found with the given Id"
            }
        }

        return {
            success: true,
            message: "Customer Deleted!"
        }

    } catch (error) {
        return{
            success: false,
            message: "Error while Deleting Customer in Service "+ error
        }
    }
} 