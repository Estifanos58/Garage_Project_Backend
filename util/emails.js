// import { transport } from "../config/mailtrap.config.js";
// import { sender } from "../config/mailtrap.config.js";
// import { WELCOME_MESSAGE } from "../config/mailtrap.template.js";

// export const sendVerificationPassword = async (email, password, first_name,role)=>{
//     const recipients = [email];
//     try {
//        const response = await transport
//           .sendMail({
//             from: sender,
//             to: recipients,
//             subject: "Welcome to Abe Garage",
//             html: WELCOME_MESSAGE.replace("{password}",password),
//             category: "Password change",
//           })
//           .then(console.log, console.error);

//           console.log("Email sent to the user", response)
//     } catch (error) {
//         console.log("error Occured "+error)
//     }
// }

// export const signUpVerificationCode = async (email, code)=>{
//   const recipients = [email];
//   try {
//     const response = await transport
//           .sendMail({
//             from: sender,
//             to: recipients,
//             subject: "Welcome to Abe Garage",
//             html: WELCOME_MESSAGE.replace("{password}",code),
//             category: "Account Verification",
//           })
//           .then(console.log, console.error);
//           console.log("Email sent to the user",
//            response)
    
//       return response;
//   } catch (error) {
//     console.log("error Occured "+error)
//   }
// }

import { transport } from "../config/mailtrap.config.js";
import { sender } from "../config/mailtrap.config.js";
import { WELCOME_MESSAGE } from "../config/mailtrap.template.js";

export const sendVerificationPassword = async (email, password, first_name, role) => {
    const recipients = [email];
    try {
        const response = await transport.sendMail({
            from: sender,
            to: recipients,
            subject: "Welcome to Abe Garage",
            html: WELCOME_MESSAGE.replace("{password}", password),
            category: "Password change",
        });

        console.log("Email sent to the user", response);
        return response;  // ✅ Ensure you return the response
    } catch (error) {
        console.error("Error occurred:", error);
        throw error;  // ✅ Let the calling function handle the error
    }
};

export const signUpVerificationCode = async (email, code) => {
    const recipients = [email];
    try {
        const response = await transport.sendMail({
            from: sender,
            to: recipients,
            subject: "Welcome to Abe Garage",
            html: WELCOME_MESSAGE.replace("{password}", code),
            category: "Account Verification",
        });

        console.log("Email sent to the user", response);
        return response;  // ✅ Ensure you return the response
    } catch (error) {
        console.error("Error occurred:", error);
        throw error;  // ✅ Let the calling function handle the error
    }
};
