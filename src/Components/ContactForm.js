import React, { useState } from "react";
import "../CSS/ContactForm.css";
import axios from "axios";

const ContactForm = () => {
   const [formData, setFormData] = useState({
      name: "",
      subject: "",
      message: "",
   });

   const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({
         ...formData,
         [name]: value,
      });
   };

   const handleSubmit = async (e) => {
      e.preventDefault();
      try {
         const response = await axios.post("/send-email", formData);
         console.log(response.data);
         // Optionally, display a success message to the user
      } catch (error) {
         console.error("Error sending email:", error);
         // Optionally, display an error message to the user
      }
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
                  <div className="form-subject">
                     <label>Subject:</label>
                     <input
                        type="subject"
                        name="subject"
                        value={formData.subject}
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
            <button className="submit-btn" type="submit">
               Submit
            </button>
         </form>
      </div>
   );
};

export default ContactForm;
