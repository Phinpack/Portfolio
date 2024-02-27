require("dotenv").config();
const nodemailer = require("nodemailer");
const { google } = require("googleapis");
const functions = require("firebase-functions");
const cors = require("cors")({ origin: true });

const oauth2Client = new google.auth.OAuth2(
   process.env.CLIENT_ID,
   process.env.CLIENT_SECRET,
   "https://developers.google.com/oauthplayground"
);
oauth2Client.setCredentials({ refresh_token: process.env.REFRESH_TOKEN });

const accessToken = oauth2Client.getAccessToken();

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

exports.submitForm = functions.https.onRequest(async (req, res) => {
   cors(req, res, async () => {
      const { name, email, message, honeypot } = req.body;

      // Added for contact spam
      if (honeypot) {
         console.log("Submission detected as spam.");
         return res
            .status(400)
            .send("Submission ignored due to suspected spam.");
      }

      await transporter.sendMail({
         from: process.env.EMAIL_USER,
         to: process.env.EMAIL_USER,
         subject: "New Message from Contact Form",
         text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      });

      res.status(200).send("Form submitted successfully!");
   });
});
