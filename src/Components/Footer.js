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
      </div>
   );
};

export default Footer;
