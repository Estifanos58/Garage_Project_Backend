// import { transport } from "../config/mailtrap.config.js";
import { transport, sender } from "../config/mail.config.js";

// import { sender } from "../config/mailtrap.config.js";
import { WELCOME_MESSAGE, WELLCOME_CUSTOMER, FORGOT_PASSWORD, ORDER_CONFIRMATION, EMPLOYEE_FIRED, CUSTOMER_VEHICLE } from "../config/mailtrap.template.js";



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

export const customerWellcome = async (email, first_name, last_name) => {
    const recipients = [email];
    const baseUrl = process.env.CLIENT_URL;
    try {
        const response = await transport.sendMail({
            from: sender,
            to: recipients,
            subject: "Welcome to Abe Garage",
            html: WELLCOME_CUSTOMER.replace("{website_url}", baseUrl).replace("{first_name}",first_name).replace("{last_name}", last_name),
            category: "Your newly created account"
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
            html: FORGOT_PASSWORD.replace("{reset_link}", hash).replace("{Name}", first_name),
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

export const EmployeeFired = async (email,name) => {
    const recipients = [email];
    const date = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
    try {
        const response = await transport.sendMail({
            from: sender,
            to: recipients,
            subject: "You have been fired",
            html: EMPLOYEE_FIRED.replace("{date}", date).replace("{name}", name),
            category: "Employee Fired",
        });

        console.log("Email sent to the user", response);
        return response;  // ✅ Ensure you return the response
    } catch (error) {
        console.error("Error occurred:", error);
        throw error;  // ✅ Let the calling function handle the error
    }
}

export const SendCustomerVehicle = async (email, first_name,last_name, year, make, model, type, mileage, tag, serial_number, color) => {
    const recipients = [email];
    try {
        const response = await transport.sendMail({
            from: sender,
            to: recipients,
            subject: "A NEW VEHICLE IS ADDED",
            html: CUSTOMER_VEHICLE.replace("{first_name}",first_name).replace("{last_name}",last_name).replace("{year}",year).replace("{make}",make).replace("{model}",model).replace("{type}",type).replace("{mileage}",mileage).replace("{tag}",tag).replace("{serial_number}", serial_number).replace("{color}",color),
            category: "NEW VEHICLE ADDED",
        });

        console.log("Email sent to the user", response);
        return response;  // ✅ Ensure you return the response
    } catch (error) {
        console.error("Error occurred:", error);
        throw error;  // ✅ Let the calling function handle the error
    }
}