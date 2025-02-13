import { User } from "../model/User.js";
import bcrypt from "bcryptjs";
import { generateJwtToken } from "../util/jwtToken.js";
import mongoose from "mongoose";
import { Customer } from "../model/Customer.js";
import {
  signUpVerificationCode,
} from "../util/emails.js";

export const LoginService = async (res, email, password) => {
  try {
    const foundUser = await User.findOne({ email });
    if (!foundUser) {
      return {
        success: false,
        message: "user no found",
      };
    } else {
      const pass = await bcrypt.compare(password, foundUser.password);
      if (!pass)
        return {
          success: false,
          message: "Wrong password",
        };

      generateJwtToken(res, foundUser._id, foundUser.role, email);
      return {
        success: true,
        message: "User login successfully",
        user: {
          ...foundUser._doc,
          password: null,
        },
      };
    }
  } catch (error) {
    return {
      success: false,
      message: "Error with the Login Service Occured",
    };
  }
};

export const verifyEmployeeService = async (
  res,
  id,
  old_password,
  new_password
) => {
  try {
    const repeat = new_password === old_password;
    if (repeat) {
      return {
        success: false,
        message: "Password Should not be repeated",
      };
    }
    if (!mongoose.isValidObjectId(id)) {
      return {
        success: false,
        message: "Invalid user ID format",
      };
    }

    const foundUser = await User.findById(id);
    if (!foundUser) {
      return {
        success: false,
        message: "No user found with the given ID",
      };
    }

    // Fix password comparison order
    const existingPass = await bcrypt.compare(old_password, foundUser.password);
    if (!existingPass) {
      return {
        success: false,
        message: "Wrong Password Used",
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
        password: null,
      },
    };
  } catch (error) {
    return {
      success: false,
      message: `Error happened in VerifyEmployeeService : ${error.message}`,
    };
  }
};

export const sign_service = async (
  res,
  first_name,
  last_name,
  email,
  password,
  phone
) => {
  try {
    // const existingUser = await Customer.findOne({email});
    // if(existingUser){
    //     return {
    //         success: false,
    //         message: "Customer with the given email already exist"
    //     }
    // }

    const hashedPassword = await bcrypt.hash(password, 10);
    const verificationCode = Math.floor(Math.random() * 400000 + 120000);
    const response = await signUpVerificationCode(email, verificationCode);
    if (!response.success) {
      return {
        success: false,
        message: "Error while sending message please cheack your email",
      };
    }
    const user = new Customer({
      first_name,
      last_name,
      email,
      password: hashedPassword,
      phone,
      verification_code: verificationCode,
      verification_expires_at: Date.now() + 24 * 60 * 60 * 1000,
    });
    await user.save();

    return { success: true, message: "Customer added" };
  } catch (error) {
    return {
      success: false,
      message: `Error happened in sign_Service : ${error.message}`,
    };
  }
};
