import React, { useState } from "react";
import "../CSS/ContactForm.css";
import axios from "axios";

const ContactForm = () => {
   const [formData, setFormData] = useState({
      name: "",
      email: "",
      message: "",
   });

   const [formSubmitted, setFormSubmitted] = useState(false);

   const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({
         ...formData,
         [name]: value,
      });
   };

   const handleSubmit = async (e) => {
      e.preventDefault();
      console.log(formData);
      try {
         const response = await axios.post(
            "https://us-central1-portfolio-ab484.cloudfunctions.net/submitForm",
            formData,
            { headers: { "Content-Type": "application/json" } }
         );
         console.log(response.data);
      } catch (error) {
         console.error("Error sending email:", error);
      }
      setFormData({
         name: "",
         email: "",
         message: "",
      });
      setFormSubmitted(true);
   };

   return (
      <div className="whole-container">
         <h2>Contact Me</h2>
         <form className="whole-form-container" onSubmit={handleSubmit}>
            <div className="form-no-submit">
               <div className="form-name-email-container">
                  <div className="form-name">
                     <label>Name:</label>
                     <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                     />
                  </div>
                  <div className="form-email">
                     <label>Email:</label>
                     <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                     />
                  </div>
               </div>
               <div className="form-message">
                  <label>Message:</label>
                  <textarea
                     name="message"
                     value={formData.message}
                     onChange={handleChange}
                  />
               </div>
            </div>
            <div className="submit-container">
               <button className="submit-btn" type="submit">
                  Submit
               </button>
               {formSubmitted && (
                  <span style={{ marginLeft: "10px", fontSize: "20px" }}>
                     Form submitted!
                  </span>
               )}
            </div>
         </form>
      </div>
   );
};

export default ContactForm;
