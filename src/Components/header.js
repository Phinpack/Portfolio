import React from "react";
import Logo from "./Logo";
import "../CSS/Header.css";
import "bootstrap/dist/css/bootstrap.min.css";
import HeaderButton from "./HeaderButton";
import { IconButton } from "@mui/material";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Header = () => {
   return (
      <header className="app-header">
         <div className="header-container">
            <Logo />
            <div className="button-container">
               <HeaderButton buttonText={"About Me"} targetY={890} />
               <HeaderButton buttonText={"Experience"} targetY={1775} />
               <HeaderButton buttonText={"Projects"} targetY={2620} />
               <HeaderButton buttonText={"Contact Me"} to={"/about"} />
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
