import { User } from "../model/User.js";
import bcrypt from "bcryptjs";
import { generateJwtToken } from "../util/jwtToken.js";
import mongoose from "mongoose";
import { createHmac } from 'node:crypto'
import { Customer } from "../model/Customer.js";
import {
  ForgotPassword,
} from "../util/emails.js";
// import { res } from "../util/emails.js";n

export const getUserInfo_service = async (email) => {
  try {
    const user = await User.findOne({email});
    if(!user) {
      return {
        success: false,
        message: "user no found",
      };
    } else {
      return {
        success: true,
        message: "User found",
        data: {
          ...user._doc,
          password: null,
        },
      };
    }
  } catch (error) {
    return {
      success: false,
      message: "Error with the GetInfo Service Occured",
    };
  }
}

export const changePassword_Service = async (res, userId, old_password, new_password) => {
  try {
    const user = await User.findById(userId);
    if(!user) {
      return {
        success: false,
        message: "No user found with the given ID",
      }
    }

    const existingPass = await bcrypt.compare(old_password, user.password);
    if(!existingPass) {
      return {
        success: false,
        message: "Wrong Password Used",
      }
    }

    const hashedPassword = await bcrypt.hash(new_password, 10);
    user.password = hashedPassword;
    user.status = "active";
    await user.save();

    return {
      success: true,
      message: "User password changed successfully",
      user: {
        ...user._doc,
        password: null,
      },
    }
  } catch(error){
      return {
        success: false,
        message: "Error with the Change Password Service Occured",
    }
  }
}

export const RestPasswordService = async (res, new_password, hash) => {
  try {
    const user = await User.findOne({
      reset_password_token: hash,
      reset_password_expires_at_token: { $gt: new Date() } // Ensure token is not expired
    });

    

    if (!user) {
      return {
        success: false,
        message: "No valid user found with the given token",
        
      };
    }

    const hashedPassword = await bcrypt.hash(new_password, 10);
    user.password = hashedPassword;
    user.reset_password_token = null;
    user.reset_password_expires_at_token = null;
    await user.save();

    return {
      success: true,
      message: "Password reset successfully",
    };
  } catch (error) {
    return {
      success: false,
      message: "Error with the Reset Password Service occurred",
    };
  }
};


export const forgotPasswordService = async (res, email) => {
  try {
    const user = await User.findOne({email});
    if(!user) {
      return {
        success: false,
        message: "No user found with the given email",
      }
    }

    const hash = createHmac('sha256', process.env.FORGOT_SECRET)
               .update('I love cupcakes')
               .digest('hex');

    user.reset_password_token = hash;
    user.reset_password_expires_at_token = new Date(Date.now() + 60 * 60 * 1000); 
    await user.save();

    const response = await ForgotPassword(email,user.first_name, hash);
    const accepted = response.accepted;
    if(accepted === 0) {
      return {
        success: false,
        message: "Error while sending message please check your email",
      }
    }
    return {
      success: true,
      message: "Reset password link sent to your email",
    }

  }catch(error){
    console.log("Error: ", error);
    return {
      success: false,
      message: "Error with the Forgot Password Service Occured"+ error,
    }
  }
}

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
        data: {
          ...foundUser._doc,
          password: null,
        },
      };
    }
  } catch (error) {
    return {
      success: false,
      message: "Error with the Login Service Occured: " + error.message,
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
  phone,
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
    // const response = await signUpVerificationCode(email, verificationCode);
    // // console.log("Response "+response.success)
    // if (!response.success) {
    //   return {
    //     success: false,
    //     message: "Error  while sending message please cheack your email",
    //   };
    // }
    
    const user = new User({
      first_name,
      last_name,
      email,
      password: hashedPassword,
      phone,
      joined_date: Date.now(),
      verification_code: verificationCode,
      verification_expires_at: Date.now() + 24 * 60 * 60 * 1000,
    });

    await user.save();
    
    const role = null;
    generateJwtToken(res, user._id, role, email);

    return { success: true, message: "Customer added" };
  } catch (error) {
    return {
      success: false,
      message: `Error happened in sign_Service : ${error}`,
    };
  }
};

