// import { transport } from "../config/mailtrap.config.js";
import { transport, sender } from "../config/mail.config.js";

// import { sender } from "../config/mailtrap.config.js";
import { WELCOME_MESSAGE, CUSTOMER_PASSWORD, FORGOT_PASSWORD, ORDER_CONFIRMATION } from "../config/mailtrap.template.js";



export const sendWelcomeMessage = async (email,password,first_name, role) => {
    const recipients = [email];
    try {
        const response = await transport.sendMail({
            from: sender,
            to: recipients,
            subject: "Welcome to Abe Garage",
            html: WELCOME_MESSAGE.replace("{password}", password).replace("{name}", first_name).replace("{Position}", role),
            category: "Account Verification",
        });

        console.log("Email sent to the user", response);
        return response;  // ✅ Ensure you return the response
    } catch (error) {
        console.error("Error occurred:", error);
        throw error;  // ✅ Let the calling function handle the error
    }
};

export const customerAddedPassword = async (email, passwrod) => {
    const recipients = [email];
    try {
        const response = await transport.sendMail({
            from: sender,
            to: recipients,
            subject: "Your Password",
            html: CUSTOMER_PASSWORD.replace("{password}", passwrod),
            category: "Use this password"
        })
        console.log("Email sent to the user", response);
        return response;  // ✅ Ensure you return the response
    } catch (error) {
        console.error("Error occurred:", error);
        throw error;  // ✅ Let the calling function handle the error
    }
}

export const ForgotPassword = async (email,first_name, code) => {
    const recipients = [email];
    const hash = `${process.env.CLIENT_URL}/reset-password/${code}`;
    try {
        const response = await transport.sendMail({
            from: sender,
            to: recipients,
            subject: "Forgot Password",
            html: FORGOT_PASSWORD.replace("{rese_link}", hash).replace("{name}", first_name),
            category: "Forgot Password",
        });

        console.log("Email sent to the user", response);
        return response;  // ✅ Ensure you return the response
    } catch (error) {
        console.error("Error occurred:", error);
        throw error;  // ✅ Let the calling function handle the error
    }
}

export const sendOrderConfirmation = async (email, name, total) => {
    const recipients = [email];
    try {
        const response = await transport.sendMail({
            from: sender,
            to: recipients,
            subject: "Order Complete",
            html: ORDER_CONFIRMATION.replace("{Price}", total).replace("{name}", name),
            category: "Order Complete",
        });

        console.log("Email sent to the user", response);
        return response;  // ✅ Ensure you return the response
    } catch (error) {
        console.error("Error occurred:", error);
        throw error;  // ✅ Let the calling function handle the error
    }
}