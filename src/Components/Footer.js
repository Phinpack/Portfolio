import "../CSS/Footer.css";
import FooterButton from "./FooterButton";
import { Link } from "react-router-dom";

const Footer = () => {
   return (
      <div className="footer-container">
         <Link to={"/"}>
            <FooterButton buttonText={"Home"} />
         </Link>
         <Link to={"/contact"}>
            <FooterButton buttonText={"Contact"} />
         </Link>
         <a
            href="https://www.linkedin.com/in/jordan-hannon-40018027b/"
            target="_blank"
         >
            <FooterButton buttonText={"LinkedIn"} />
         </a>
         <a href="https://github.com/Phinpack" target="_blank">
            <FooterButton buttonText={"GitHub"} />
         </a>
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
