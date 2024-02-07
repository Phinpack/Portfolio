import React from "react";
import { Button } from "reactstrap";
import "../CSS/FooterButton.css";

const FooterButton = ({ buttonText }) => {
   return (
      <Button
         outline
         style={{
            color: "white",
            border: "none",
            fontSize: "35px",
            // filter: "drop-shadow(2px 4px #000000)",
            marginTop: "30px",
            marginRight: "20px",
            marginBottom: "30px",
         }}
      >
         {buttonText}
      </Button>
   );
};

export default FooterButton;
