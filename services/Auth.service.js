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
                message: foundUser,
            }
        }

    } catch (error) {
        return {
            success: false,
            message: "Error with the Login Service Occured"
        }
    }
    
}