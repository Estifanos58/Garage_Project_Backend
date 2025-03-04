import nodemailer from 'nodemailer';
import {google} from 'googleapis'
import dotenv from 'dotenv'

dotenv.config();

const CLIENT_ID = process.env.GOOGLE_CLIENT_ID 
const CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET 
const REDIRECT_URI = process.env.GOOGLE_REDIRECT_URI 
const REFRESH_TOKEN = process.env.GOOGLE_REFRESH_TOKEN 

const oAuth2Client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);
oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });


// console.log("CLIENT_ID", CLIENT_ID);
// console.log("CLIENT_SECRET", CLIENT_SECRET);
// console.log("REDIRECT_URI", REDIRECT_URI);
// console.log("REFRESH_TOKEN", REFRESH_TOKEN);

const accessToken = await oAuth2Client.getAccessToken();
export const transport = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        type: 'OAuth2',
        user: "estifkebe08@gmail.com",
        clientId: CLIENT_ID,
        clientSecret: CLIENT_SECRET,
        refreshToken: REFRESH_TOKEN,
        accessToken: accessToken,
    },
});

export const sender = "ABE GARAGE <no-reply@gmail.com";

// export const sendMail = async (email, subject, text) => {
//     try {
//         const accessToken = await oAuth2Client.getAccessToken();
//         const transporter = nodemailer.createTransport({
//             service: 'gmail',
//             auth: {
//                 type: 'OAuth2',
//                 user: "estifkebe08@gmail.com",
//                 clientId: CLIENT_ID,
//                 clientSecret: CLIENT_SECRET,
//                 refreshToken: REFRESH_TOKEN,
//                 accessToken: accessToken,
//             },
//         });

//         const mailOptions = {
//             from: "ABE GARAGE <no-reply@gmail.com",
//             to: "estifanos.kebede-ug@aau.edu.et",
//             subject: "TEST",
//             text: "HI SECOND TEST",
//             html: '<h1>HI ENDET NEH</h1>'
//         };

//         const result = await transporter.sendMail(mailOptions);
//         return result;
//     } catch (error) {
//         console.error('Error in sending mail:', error);
//         return error;
//     }
// };

// sendMail().then(result => console.log('Email sent...', result));