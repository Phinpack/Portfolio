import React from "react";
import { Button } from "reactstrap";

const Logo = () => {
   const refreshPage = () => {
      window.scrollTo(0, 0);
   };

   return (
      <Button
         onClick={refreshPage}
         style={{
            color: "white",
            fontSize: "50px",
            fontWeight: "700",
            backgroundColor: "rgba(0, 0, 0, 0.0)",
            border: "none",
            marginLeft: "60px",
         }}
      >
         Jordan Hannon
      </Button>
   );
};

export default Logo;
