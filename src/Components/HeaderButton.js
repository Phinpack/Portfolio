import React from "react";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";

const HeaderButton = ({ buttonText, targetY, to }) => {
   const scrollToY = () => {
      window.scrollTo({
         top: targetY,
         behavior: "smooth",
      });
   };

   return (
      <Link to={to}>
         <Button
            outline
            style={{
               color: "white",
               border: "none",
               fontSize: "35px",
               fontWeight: "700",
               transition: "background-color 0.3s",
               // filter: "drop-shadow(2px 4px #000000)",
               marginRight: "20px",
            }}
            onMouseEnter={(e) =>
               (e.target.style.backgroundColor = "rgba(186, 186, 186, 0.4)")
            }
            onMouseLeave={(e) =>
               (e.target.style.backgroundColor = "transparent")
            }
            onClick={scrollToY}
         >
            {buttonText}
         </Button>
      </Link>
   );
};

export default HeaderButton;
