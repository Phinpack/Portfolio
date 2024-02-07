import React from "react";
import Logo from "./Logo";
import "../App.css";
import "../CSS/Header.css";
import "bootstrap/dist/css/bootstrap.min.css";
import HeaderButton from "./HeaderButton";
import { IconButton } from "@mui/material";
import XIcon from "@mui/icons-material/X";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";

const Header = () => {
   return (
      <header className="app-header">
         <div className="header-container">
            <Logo />
            <div className="button-container">
               <HeaderButton buttonText={"Play"} targetY={1855} />
               <HeaderButton buttonText={"Learn"} targetY={2670} />
               <HeaderButton buttonText={"Live"} targetY={3485} />
               <HeaderButton buttonText={"About Us"} to={"/about"} />
               <IconButton>
                  {/* onClick={() => {
              
            }} */}
                  <XIcon
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
               <IconButton>
                  {/* onClick={() => {
              
            }} */}
                  <YouTubeIcon
                     sx={{
                        fontSize: "35px",
                        color: "white",
                        marginLeft: "10px",
                        // filter: "drop-shadow(2px 3px #000000)",
                     }}
                  />
               </IconButton>
               <IconButton>
                  {/* onClick={() => {
              
            }} */}
                  <InstagramIcon
                     sx={{
                        fontSize: "25px",
                        color: "white",
                        marginLeft: "10px",
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
