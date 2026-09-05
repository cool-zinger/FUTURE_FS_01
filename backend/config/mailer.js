import "dotenv/config";
import nodemailer from "nodemailer";

console.log(
  "EMAIL_USER loaded:",
  process.env.EMAIL_USER ? "YES" : "NO"
);

console.log(
  "EMAIL_APP_PASSWORD loaded:",
  process.env.EMAIL_APP_PASSWORD ? "YES" : "NO"
);

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,

  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_APP_PASSWORD,
  },
});

export default transporter;