import React from "react";
import { Button } from "reactstrap";
import { Link, useLocation } from "react-router-dom";
import "../CSS/HeaderButton.css";

const HeaderButton = ({ buttonText, targetY }) => {
   const location = useLocation();

   const scrollToY = () => {
      if (location.pathname === "/contact") {
         window.location.href = "/";
         window.scrollTo({
            top: targetY,
            behavior: "smooth",
         });
      } else {
         window.scrollTo({
            top: targetY,
            behavior: "smooth",
         });
      }
   };

   return (
      <Button
         outline
         className="header-button"
         onMouseEnter={(e) =>
            (e.target.style.backgroundColor = "rgba(186, 186, 186, 0.4)")
         }
         onMouseLeave={(e) => (e.target.style.backgroundColor = "transparent")}
         onClick={scrollToY}
      >
         {buttonText}
      </Button>
   );
};

export default HeaderButton;
