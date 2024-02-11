import React from "react";
import { Button } from "reactstrap";
import Logo from "./Logo";
import "../CSS/Header.css";
import "bootstrap/dist/css/bootstrap.min.css";
import HeaderButton from "./HeaderButton";
import { IconButton } from "@mui/material";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Link } from "react-router-dom";

const Header = () => {
   return (
      <header className="app-header">
         <div className="header-container">
            <Logo />
            <div className="button-container">
               <HeaderButton buttonText={"About Me"} targetY={890} />
               <HeaderButton buttonText={"Experience"} targetY={1775} />
               <HeaderButton buttonText={"Projects"} targetY={2620} />
               <HeaderButton buttonText={"Skills"} targetY={5215} />
               {/* <HeaderButton buttonText={"Contact Me"} to={"/about"} /> */}
               <Link to={"/contact"}>
                  <Button
                     outline
                     to={"/about"}
                     style={{
                        color: "white",
                        border: "none",
                        fontSize: "35px",
                        fontWeight: "700",
                        transition: "background-color 0.3s",
                        marginRight: "20px",
                     }}
                     onMouseEnter={(e) =>
                        (e.target.style.backgroundColor =
                           "rgba(186, 186, 186, 0.4)")
                     }
                     onMouseLeave={(e) =>
                        (e.target.style.backgroundColor = "transparent")
                     }
                  >
                     Contact Me
                  </Button>
               </Link>
               <IconButton>
                  {/* onClick={() => {
              
            }} */}
                  <LinkedInIcon
                     sx={{
                        color: "white",
                        marginLeft: "10px",
                        // filter: "drop-shadow(2px 3px #000000)",
                     }}
                  />
               </IconButton>
               <IconButton>
                  {/* onClick={() => {
              
            }} */}
                  <MailOutlineOutlinedIcon
                     sx={{
                        fontSize: "30px",
                        color: "white",
                        marginLeft: "15px",
                        // filter: "drop-shadow(2px 3px #000000)",
                     }}
                  />
               </IconButton>
            </div>
         </div>
      </header>
   );
};

export default Header;
