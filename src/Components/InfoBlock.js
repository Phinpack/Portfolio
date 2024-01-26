import React from "react";
import "../CSS/InfoBlock.css";
import Parallax from "../hooks/Parallax";

const InfoBlock = () => {
   const parallaxElements = document.querySelectorAll(".parallax");
   Parallax(parallaxElements, 0.3);

   return (
      <div className="info-block-container ">
         <div className="word-container">
            <h1>Unleash Your Imagination in the Intelimmerse</h1>
            <div className="right-content">
               <h4>
                  Welcome to a realm of endless possibilities unlocking the
                  potential of a digital universe bringing tangible benefits to
                  the real world.
               </h4>
               <h4>
                  It's a digital world providing an immersive experience
                  combining both education and play, offering opportunities for
                  personal growth, social interaction, and enjoyable experiences
                  that transcend geographical boundaries.
               </h4>
               <h4>
                  We embrace social interaction and connecting people in
                  meaningful ways through virtual communities, social events,
                  and platforms that facilitate real-time interactions and
                  foster a sense of belonging.
               </h4>
            </div>
         </div>
      </div>
   );
};

export default InfoBlock;
