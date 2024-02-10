import React from "react";
import "../CSS/Experience.css";
import Parallax from "../hooks/Parallax";
import UnityLogo from "../images/unitylogo.png";
import ReactLogo from "../images/reactlogo.png";

const Experience = () => {
   const parallaxElements = document.querySelectorAll(".parallax");
   Parallax(parallaxElements, 0.3);

   return (
      <div className="experience-block-container ">
         <div className="experience-container">
            <h1>
               Experience -{" "}
               <a
                  href="https://www.metalitylab.com"
                  target="_blank"
                  rel="noopener noreferrer"
               >
                  MetalityLabs
               </a>
            </h1>
            <div className="experience-content">
               <h4>
                  During my time at MetalityLabs, I underwent training in
                  utilizing Unity software for 3D environment building, which
                  provided me with a comprehensive understanding of the
                  intricacies of virtual world creation. This experience allowed
                  me to immerse myself in the fascinating realm of 3D Metaverse
                  development, where I had the opportunity to flex my creative
                  muscles and bring immersive virtual environments to life.
                  Collaborating closely with seasoned developers, I not only
                  contributed to refining initial plans but also played an
                  integral role in designing captivating worlds that resonated
                  with users.
               </h4>
               <h4>
                  Moreover, I was tasked with upgrading and redesigning the
                  company's website on the SquareSpace platform. This presented
                  me with a unique opportunity to apply my creativity and
                  technical skills to enhance the online presence of
                  MetalityLabs. By revamping the website, I aimed to improve its
                  accessibility and visibility, ultimately attracting a broader
                  audience and showcasing the company's innovative project and
                  offerings in a more engaging manner. We did find, however,
                  that SquareSpace was a very limiting platform, so a switch to
                  React was made and is a current work in progress.
               </h4>
               <h4>
                  In essence, my experience at MetalityLabs was a journey of
                  exploration and growth, where I not only delved into the
                  exciting world of 3D Metaverse development but also honed my
                  abilities in web design and development. It was a testament to
                  my adaptability and passion for leveraging technology to
                  create immersive experiences and elevate digital platforms to
                  new heights.
               </h4>
            </div>
            <img className="unity-logo" src={UnityLogo}></img>
            <img className="react-logo" src={ReactLogo}></img>
         </div>
      </div>
   );
};

export default Experience;
