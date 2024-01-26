import React from "react";
import "../CSS/Gallery.css";
import clothing from "../images/ClothingStoreFromSecondFloor.png";
import coaching from "../images/Coaching.png";
import diner from "../images/DinerLeft.png";
import zen from "../images/ZenEntrance.png";

const Gallery = () => {
   return (
      <div className="gallery-container">
         <h1 style={{ fontSize: "80px", maxWidth: "800px", fontWeight: "700" }}>
            Virtual Adventures Gallery
         </h1>
         <div className="image-row-container">
            <div className="image-container">
               <img className="image" src={clothing}></img>
            </div>
            <div className="image-container">
               <img className="image" src={coaching}></img>
            </div>
            <div className="image-container">
               <img className="image" src={diner}></img>
            </div>
            <div className="image-container">
               <img className="image" src={zen}></img>
            </div>
         </div>
      </div>
   );
};

export default Gallery;
