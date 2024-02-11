import React, { useState } from "react";
import "../CSS/ContactForm.css";

const ContactForm = () => {
   const [formData, setFormData] = useState({
      name: "",
      email: "",
      message: "",
   });

   const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({
         ...formData,
         [name]: value,
      });
   };

   const handleSubmit = (e) => {
      e.preventDefault();
      console.log("Form submitted:", formData);
      setFormData({
         name: "",
         email: "",
         message: "",
      });
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
            <button className="submit-btn" type="submit">
               Submit
            </button>
         </form>
      </div>
   );
};

export default ContactForm;
