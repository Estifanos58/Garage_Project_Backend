import { User } from "../model/Employee.js"
import bcrypt from "bcryptjs";
import { generateJwtToken } from "../util/jwtToken.js";
import { sendVerificationPassword } from "../util/emails.js";
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
            verification_code: hashedPassword,
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

        
        // generateJwtToken(res,user._id,role,email);

    } catch (error) {
        return {
            success: false,
            message: "Error while Adding Employee In service"+ error 
        }
    }
 

}
