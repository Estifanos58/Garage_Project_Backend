import { User } from "../model/Employee.js"
import bcrypt from "bcryptjs"

export const LoginService = async (email, password)=> {
    try {
        const foundUser = await User.findOne({email: email});
        if(!foundUser){
            return {
                success: false,
                message: "user not found"
            }
        }else{
            const pass = bcrypt.compare(foundUser.password, password);
            if(!pass) return {
                success: false,
                message: "Wrong password"
            }

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