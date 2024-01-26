import React from "react";
import "../CSS/Footer.css";
import FooterButton from "./FooterButton";

const Footer = () => {
   return (
      <div className="footer-container">
         <FooterButton buttonText={"Home"} />
         <FooterButton buttonText={"About"} />
         <FooterButton buttonText={"Blog"} />
         <FooterButton buttonText={"Contact"} />
         <h2>© 2024 Intelimmerse. All rights reserved.</h2>
      </div>
   );
};

export default Footer;
