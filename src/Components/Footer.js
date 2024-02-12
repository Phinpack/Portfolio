import React from "react";
import "../CSS/Footer.css";
import FooterButton from "./FooterButton";

const Footer = () => {
   return (
      <div className="footer-container">
         <FooterButton buttonText={"Home"} />
         <FooterButton buttonText={"Contact"} />
         <FooterButton buttonText={"LinkedIn"} />
         <FooterButton buttonText={"GitHub"} />
         <h3
            style={{
               fontSize: "16px",
               marginTop: "-19px",
               marginBottom: "0",
               color: "rgb(128, 128, 128)",
               fontWeight: "bold",
            }}
         >
            Portfolio made in React
         </h3>
      </div>
   );
};

export default Footer;
