import React from "react";
import { Button } from "reactstrap";

const HeaderButton = ({ buttonText }) => {
   return (
      <Button
         outline
         style={{
            color: "white",
            border: "none",
            fontSize: "35px",
            fontWeight: "500",
            transition: "background-color 0.3s",
            marginRight: "20px",
         }}
         onMouseEnter={(e) =>
            (e.target.style.backgroundColor = "rgba(186, 186, 186, 0.4)")
         }
         onMouseLeave={(e) => (e.target.style.backgroundColor = "transparent")}
      >
         {buttonText}
      </Button>
   );
};

export default HeaderButton;
