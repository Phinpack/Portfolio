require("dotenv").config();

const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());

app.post("/send-email", (req, res) => {
   const { name, email, message } = req.body;

   const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
         user: process.env.EMAIL_USER,
         pass: process.env.EMAIL_PASS,
      },
   });

   const mailOptions = {
      from: "your-email@gmail.com",
      to: "recipient-email@example.com",
      subject: "New Contact Form Submission",
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
   };

   transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
         console.error("Error sending email:", error);
         res.status(500).send("Error sending email");
      } else {
         console.log("Email sent:", info.response);
         res.status(200).send("Email sent successfully");
      }
   });
});

app.listen(PORT, () => {
   console.log(`Server is running on http://localhost:${PORT}`);
});
