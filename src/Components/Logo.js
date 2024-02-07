import React from "react";
import { Button } from "reactstrap";

const Logo = () => {
   return (
      <Button
         style={{
            color: "white",
            fontSize: "50px",
            fontWeight: "1000",
            backgroundColor: "rgba(0, 0, 0, 0.0)",
            border: "none",
            marginLeft: "60px",
            // filter: "drop-shadow(2px 4px #000000)",
         }}
      >
         Jordan Hannon
      </Button>
   );
};

export default Logo;
