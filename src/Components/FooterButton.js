import React from "react";
import { Button } from "reactstrap";

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
