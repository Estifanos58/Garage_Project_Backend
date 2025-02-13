import { User } from "../model/Employee.js"
import bcrypt from "bcryptjs"
import {generateJwtToken} from "../util/jwtToken.js"
import mongoose from "mongoose"

export const LoginService = async (res,email, password)=> {
    try {
        const foundUser = await User.findOne({email});
        if(!foundUser){
            return {
                success: false,
                message: "user no found"
            }
        }else{
            const pass = bcrypt.compare(password, foundUser.password);
            if(!pass) return {
                success: false,
                message: "Wrong password"
            }

            generateJwtToken(res,foundUser._id, foundUser.role,email)
            return {
                success: true,
                message: "User login successfully",
                user: {
                    ...foundUser._doc,
                    password: null
                }
            }
        }

    } catch (error) {
        return {
            success: false,
            message: "Error with the Login Service Occured"
        }
    }
    
}


export const verifyEmployeeService = async (res, id, old_password, new_password) => {
    try {
        const repeat = new_password === old_password; 
        if(repeat){
            return {
                success: false,
                message: "Password Should not be repeated"
            }
        }
        if (!mongoose.isValidObjectId(id)) {
            return {
                success: false,
                message: "Invalid user ID format"
            };
        }

        const foundUser = await User.findById(id);
        if (!foundUser) {
            return {
                success: false,
                message: "No user found with the given ID"
            };
        }

        // Fix password comparison order
        const existingPass = await bcrypt.compare(old_password, foundUser.password);
        if (!existingPass) {
            return {
                success: false,
                message: "Wrong Password Used"
            };
        }

        const hashedPassword = await bcrypt.hash(new_password, 10);
        foundUser.status = "active";
        foundUser.password = hashedPassword;

        await foundUser.save();

        generateJwtToken(res, id, foundUser.role, foundUser.email);

        return {
            success: true,
            message: "User file edited successfully",
            user: {
                ...foundUser._doc,
                password: null
            }
        };
    } catch (error) {
        return {
            success: false,
            message: `Error happened in VerifyEmployeeService : ${error.message}`
        };
    }
};
