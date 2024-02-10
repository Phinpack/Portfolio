import React from "react";
import "../CSS/InfoBlock.css";
import Parallax from "../hooks/Parallax";
import UCFlogo from "../images/ucflogo.png";

const InfoBlock = () => {
   const parallaxElements = document.querySelectorAll(".parallax");
   Parallax(parallaxElements, 0.3);

   return (
      <div className="info-block-container ">
         <div className="word-container">
            <h1>About Me</h1>
            <img className="ucfimage" src={UCFlogo}></img>
            <div className="right-content">
               <h4>
                  I am a recent graduate with a Bachelor of Science in Computer
                  Science, achieving a 3.5 GPA. Eager to embark on a journey in
                  the tech industry, I am actively seeking an entry-level
                  software engineering position where I can apply my academic
                  knowledge and practical skills to contribute to innovative
                  projects and solutions.
               </h4>
               <h4>
                  Throughout my academic journey, I've cultivated a strong
                  foundation in computer science principles, including
                  algorithms, data structures, and software development
                  methodologies. My coursework has equipped me with proficiency
                  in various programming languages, with a particular focus on
                  JavaScript, which I find both versatile and exciting.
               </h4>
               <h4>
                  During my studies, I engaged in hands-on projects that honed
                  my problem-solving abilities and fostered a collaborative
                  mindset. From developing mobile applications using React
                  Native to contributing to web-based projects, I've gained
                  practical experience in translating theoretical concepts into
                  real-world solutions.
               </h4>
            </div>
         </div>
      </div>
   );
};

export default InfoBlock;
