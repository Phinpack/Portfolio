import React from "react";
import PropTypes from "prop-types";
import "../CSS/IslandInfo.css";
import Parallax from "../hooks/Parallax";

const IslandInfo = ({ videoSource, title, texts, googleURL }) => {
   const parallaxElements = document.querySelectorAll(".parallax");
   Parallax(parallaxElements, 0.3);

   return (
      <div className="island-info-block-container ">
         <div className="island-word-container">
            <h1 style={{ marginBottom: "40px", fontSize: "60px" }}>{title}</h1>
            <div className="info-row">
               {videoSource ? (
                  <video className="island-video" controls>
                     <source src={videoSource} type="video/mp4" />
                     Your browser does not support the video tag.
                  </video>
               ) : (
                  <iframe
                     style={{ borderRadius: "10px" }}
                     src={googleURL}
                     title="Google Slide Embed"
                     width="3250"
                     height="600"
                     allowFullScreen
                  >
                     Your browser doesn't support iframes
                  </iframe>
               )}
               <div className="flavor-text">
                  {Array.isArray(texts) &&
                     texts.map((text, index) => <h4 key={index}>{text}</h4>)}
               </div>
            </div>
         </div>
      </div>
   );
};

IslandInfo.propTypes = {
   title: PropTypes.string.isRequired,
   texts: PropTypes.arrayOf(PropTypes.string).isRequired,
   videoSource: PropTypes.string,
   googleSlideURL: PropTypes.string,
};

export default IslandInfo;
