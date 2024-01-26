import React, { useState } from "react";
import "../CSS/FAQ.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const FAQ = () => {
   const [showAnswers, setShowAnswers] = useState([
      false,
      false,
      false,
      false,
      false,
   ]);

   const toggleAnswer = (index) => {
      const newShowAnswers = [...showAnswers];
      newShowAnswers[index] = !newShowAnswers[index];
      setShowAnswers(newShowAnswers);
   };

   const questions = [
      "How do I join Intelimmerse?",
      "What devices can I use?",
      "Are there age restrictions?",
      "Can I cancel my membership?",
      "Is there customer support available?",
   ];

   const answers = [
      "Navigate to the download page and install for Windows or Mac.",
      "Intelimmerse is compatible with all major VR headsets, as well as desktop for a seamless experience.",
      "Intelimmerse is open to adventurers of all ages, with parental consent required for users under 18 years old.",
      "Yes, you can cancel your membership at any time with no hidden fees or penalties.",
      "Absolutely! Our dedicated support team is available 24/7 to assist you with any inquiries or technical issues.",
   ];

   return (
      <div className="faq-container">
         <div>
            <h1
               style={{
                  fontSize: "80px",
                  marginTop: "70px",
                  marginBottom: "100px",
                  fontWeight: "700",
               }}
            >
               FAQ
            </h1>
         </div>
         <div className="all-questions-container">
            {Array.from({ length: 5 }, (_, index) => (
               <div className="question-container">
                  <div key={index} className="questions-row">
                     <h3>{questions[index]}</h3>
                     <KeyboardArrowDownIcon
                        style={{
                           cursor: "pointer",
                           marginLeft: "400px",
                        }}
                        onClick={() => toggleAnswer(index)}
                     />
                  </div>
                  <div>
                     {showAnswers[index] && (
                        <div className="answer-container">
                           <p>{answers[index]}</p>
                        </div>
                     )}
                  </div>
               </div>
            ))}
         </div>
      </div>
   );
};

export default FAQ;
