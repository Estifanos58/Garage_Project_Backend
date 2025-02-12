import Nodemailer from "nodemailer"
import {MailtrapTransport} from "mailtrap";

const TOKEN = "2559cfaa31c01ec3795bd1ff7cbd86d9";

 export const transport = Nodemailer.createTransport(
  MailtrapTransport({
    token: TOKEN,
  })
);

export const sender = {
  address: "hello@demomailtrap.com",
  name: "Mailtrap Test",
};
// const recipients = [
//   "estifkebe08@gmail.com",
// ];

// transport
//   .sendMail({
//     from: sender,
//     to: recipients,
//     subject: "You are awesome!",
//     html: "Congrats for sending test email with Mailtrap!",
//     category: "Integration Test",
//   })
//   .then(console.log, console.error);