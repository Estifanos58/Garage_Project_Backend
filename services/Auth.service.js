import { User } from "../model/Employee.js"
import bcrypt from "bcryptjs"
import {generateJwtToken} from "../util/jwtToken.js"

export const LoginService = async (res,email, password)=> {
    try {
        const foundUser = await User.findOne({email});
        if(!foundUser){
            return {
                success: false,
                message: "user no found"
            }
        }else{
            const pass = bcrypt.compare(foundUser.password, password);
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

export const verifyEmployeeService = async (res, id, password)=>{
    try {
        const foundUser = await User.findById({id});
        if(!foundUser){
            return {
                success:false,
                message: "No user found with the given Id"
            }
        }

        const existingPas = await bcrypt.compare(foundUser.password, password);
        if(existingPas){
            return {
                success: false,
                message: "password already exist"
            }
        }
        const hashedPassword = await bcrypt.hash(password,10);
        foundUser.status = "active";
        foundUser.password = hashedPassword;

        await foundUser.save();
        
        generateJwtToken(res,id,foundUser.role,foundUser.email);

        return {
            success: true,
            message: "User file edited successfully",
            user: {
                ...foundUser._doc,
                password: null
            }
        }


    } catch (error) {
        return {
            success: false,
            message: `Error happened in VerifyEmployeeService ${error}`
        }
    }
}