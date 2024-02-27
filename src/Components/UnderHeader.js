import React, { useEffect } from "react";
import "../CSS/UnderHeader.css";
// import Parallax from "../hooks/Parallax";
import mypicture from "../images/me.JPG";

const UnderHeader = () => {
   // const parallaxElements = document.querySelectorAll(".parallax");
   // Parallax(parallaxElements, ".5");

   return (
      <section className="under-header">
         <div className="overlay"></div>
         <div className="blur"></div>
         <div className="under-header-content ">
            <div className="my-picture-container">
               <img className="my-picture" src={mypicture}></img>
            </div>
            <div className="words">
               <h2>I'm Jordan Hannon</h2>
               <h3>Recent graduate seeking a software engineering position</h3>
               <h3 style={{ fontSize: "20px", marginTop: "30px" }}>
                  Email - jordanhannon01@gmail.com
               </h3>
            </div>
         </div>
      </section>
   );
};

export default UnderHeader;
