require("dotenv").config();

const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const { google } = require("googleapis");

const oauth2Client = new google.auth.OAuth2(
   process.env.CLIENT_ID,
   process.env.CLIENT_SECRET,
   "https://developers.google.com/oauthplayground"
);
oauth2Client.setCredentials({ refresh_token: process.env.REFRESH_TOKEN });

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post("/send-email", async (req, res) => {
   const { name, subject, message } = req.body;
   console.log(req.body);

   try {
      // Get access token
      const accessToken = await oauth2Client.getAccessToken();

      // Create transporter with OAuth2
      const transporter = nodemailer.createTransport({
         service: "gmail",
         auth: {
            type: "OAuth2",
            user: process.env.EMAIL_USER,
            clientId: process.env.CLIENT_ID,
            clientSecret: process.env.CLIENT_SECRET,
            refreshToken: process.env.REFRESH_TOKEN,
            accessToken: accessToken,
            tls: {
               rejectUnauthorized: false,
            },
         },
      });

      // Send mail
      const mailOptions = {
         from: process.env.EMAIL_USER,
         to: process.env.EMAIL_USER,
         subject: subject,
         text: `Name: ${name}\nMessage: ${message}`,
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
   } catch (error) {
      console.error("Error fetching access token:", error);
      res.status(500).send("Error fetching access token");
   }
});

app.listen(PORT, () => {
   console.log(`Server is running on http://localhost:${PORT}`);
});
