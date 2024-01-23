import React from 'react';
import IslandInfo from './IslandInfo';

const IslandInfoParameters = () => {
  const islandVideo1 = "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4";
  const islandVideo2 = "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4";
  const islandVideo3 = "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4";
  const title1 = 'Relax & Play in Intelimmerse';
  const title2 = 'Immersive Learning';
  const title3 = 'Live';
  const texts1 = [
    'Immerse yourself in the thrill of the Entertainment District, where the night sparkles with a blend of excitement - from the glamour of the casino to the nostalgic echoes of the bowling alley and the pulsating energy of the arcade. Elevate your experience with our Inteliexperiences, weaving cutting-edge technology into every moment', 
    'In the Sports District, the field is yours to conquer! Engage in a symphony of athleticism as you explore diverse sports arenas, from virtual soccer to adrenaline-pumping racing. Whether you are a casual observer or a competitive player, our Sports District offers an immersive playground for enthusiasts of every kind.', 
    'Unleash the adventurer in you - where the Intelimmerse meets entertainment, and every experience is a masterpiece of digital wonder.'
  ];
  const texts2 = [
    'Embark on a transcendent journey through the heart of Perdisco Island, where the allure of an island unites the tapestries of the world. Explore diverse nations, guided by AI companions, as history comes alive.', 
    'From the mystique of Ancient Egypt to the timeless elegance of Japan, let the immersive landscapes unveil the captivating stories of civilizations, creating a virtual odyssey unlike any other.', 
    'Welcome to the Perdisco Island - where the past converges with the future, and every step unveils a chapter in the grand narrative of human history.'
  ];
  const texts3 = [ 
    "Discover a world of endless possibilities in our metaverse, where you can own and reside in virtual properties that transcend imagination.",
    "Purchase your dream digital home and immerse yourself in a realm where each property is a unique expression of your virtual identity. Live, create, and explore in a metaverse designed for those seeking a personalized and limitless digital lifestyle.",
    "In Metality Place, embrace your entrepreneurial spirit with Intelimmerse! Our platform offers an incredible opportunity for visitors, featuring 616 open lots available for purchase. Here, you can create, build, and market your very own business from the ground up, harnessing its limitless potential. We are committed to providing assistance in building and customizing your business, and with multiple marketing and promotion options, you can thrive in the ever-growing market. What's more, our integrated payment system ensures smooth transactions for all businesses utilizing our platform."
  ];
  return <div>
        <IslandInfo videoSource={islandVideo1} title={title1} texts={texts1} />
        <IslandInfo videoSource={islandVideo2} title={title2} texts={texts2} />
        <IslandInfo videoSource={islandVideo3} title={title3} texts={texts3} />
    </div>;
};

export default IslandInfoParameters;