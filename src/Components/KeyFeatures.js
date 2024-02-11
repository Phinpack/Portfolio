import React from "react";
import "../CSS/KeyFeatures.css";

const KeyFeatures = () => {
   return (
      <div className="key-features-container">
         <div>
            <h1
               style={{
                  fontSize: "70px",
                  marginTop: "60px",
                  marginBottom: "40px",
                  fontWeight: "1000",
               }}
            >
               Key Skills
            </h1>
            <h3
               style={{
                  marginTop: "40px",
                  maxWidth: "1000px",
                  margin: "0 auto",
                  marginBottom: "100px",
                  fontWeight: "600",
               }}
            >
               Bringing a unique blend of creativity, technical expertise, and a
               keen eye for detail
            </h3>
         </div>
         <div className="features-container">
            <div>
               <h1>React / React Native</h1>
               <h5>
                  Able to build highly interactive and responsive user
                  interfaces
               </h5>
            </div>
            <div>
               <h1>JavaScript</h1>
               <h5>Desire to create dynamic and interactive web experiences</h5>
            </div>
            <div>
               <h1>HTML</h1>
               <h5>
                  Understanding of making a foundational structure to organize
                  web content effectively
               </h5>
            </div>
            <div>
               <h1>CSS</h1>
               <h5>Allows me to flex my creative muscles as a developer</h5>
            </div>
            <div>
               <h1>Back End</h1>
               <h5>
                  PHP, MySQL, and Firebase Authentication in conjunction with
                  Front End.
               </h5>
            </div>
            <div>
               <h1>Unity</h1>
               <h5>
                  Can bring creative visions to life within the Unity engine.
               </h5>
            </div>
         </div>
      </div>
   );
};

export default KeyFeatures;
