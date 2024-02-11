import React from "react";
import IslandInfo from "./IslandInfo";
import spotifyVideo from "../videos/TrendifyWeb.mp4";

const IslandInfoParameters = () => {
   const islandVideo1 =
      "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4";
   const islandVideo2 =
      "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4";
   const islandVideo3 =
      "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4";
   const title1 = "Senior Design Application - CuttingBoard";
   const title2 = "Spotify API Application - Trendify";
   const title3 = "Unity Engine Game - Subliminal";
   const texts1 = [
      "As the front-end developer for my Senior Design project, I spearheaded the development of a cross-platform mobile application using Flutter, leveraging its single-codebase approach to efficiently create a seamless user experience for both Android and iOS platforms.",
      "Collaborating closely with team members, including backend developers and designers, we integrated Firebase Authentication, Realtime Database, and Firebase Storage to enhance functionality and data management.",
      "Through meticulous planning, agile development practices, and effective communication, our team successfully delivered a polished product within the project timeline, showcasing our collective dedication and expertise in bringing innovative solutions to fruition",
   ];
   const texts2 = [
      "In our Spotify API application project, I took on the role of a front-end developer, leading the design and implementation of the website using React and the mobile application using React Native.",
      "Leveraging the Spotify API, we authenticated users and obtained necessary access tokens to access their listening data and display that data to the user. We deployed the application using Heroku, and used the CSS Tailwind framework for website styling, ensuring a seamless and visually appealing user experience across platforms.",
      "This project was a collaborative effort, with team members contributing their expertise in backend development, API integration, and UI/UX design, resulting in a successful implementation that showcased our collective ingenuity and dedication to creating a unique application.",
   ];
   const texts3 = [
      "In our Unity Engine project, Subliminal, I served as a key member responsible for the development and maintenance of the game codebase. Leveraging Unity's tilemap and canvas system, I efficiently constructed and populated game levels, ensuring smooth gameplay experiences for players.",
      "Additionally, I played a pivotal role in creating visually appealing game assets, including backgrounds, characters, and objects, aligning them with the game's art style and design vision.",
      "Also, as the creative lead for the project, I came up with the game's story from scratch, thinking up interesting characters, cool plot twists, and exciting adventures to make the game really fun and engaging for players.",
      "Video to the left is of our professor giving a live demo of our game!",
   ];
   const googleSlideURL =
      "https://docs.google.com/presentation/d/1ilqac5S4u_GMvwCVlrFpqgk9Reb4niPCvKiZdhxG130/edit#slide=id.p1";

   return (
      <div>
         <IslandInfo title={title1} texts={texts1} googleURL={googleSlideURL} />
         <IslandInfo videoSource={spotifyVideo} title={title2} texts={texts2} />
         <IslandInfo title={title3} texts={texts3} />
      </div>
   );
};

export default IslandInfoParameters;
