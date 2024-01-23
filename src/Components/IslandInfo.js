import React from 'react';
import '../CSS/IslandInfo.css';

const IslandInfo = () => {
  return (
    <div className='island-info-block-container'>
      <div className='island-word-container'>
          <h1>Relax & Play in Intelimmerse</h1>
          <video controls muted>
                <source src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4" />
                Your browser does not support the video tag.
          </video>
          <div className='flavor-text'>
            <h4>Immerse yourself in the thrill of the Entertainment District, where the night sparkles with a blend of excitement - from the glamour of the casino to the nostalgic echoes of the bowling alley and the pulsating energy of the arcade. Elevate your experience with our Inteliexperiences, weaving cutting-edge technology into every moment.</h4>
            <h4>In the Sports District, the field is yours to conquer! Engage in a symphony of athleticism as you explore diverse sports arenas, from virtual soccer to adrenaline-pumping racing. Whether you're a casual observer or a competitive player, our Sports District offers an immersive playground for enthusiasts of every kind.</h4>
            <h4>Unleash the adventurer in you - where the Intelimmerse meets entertainment, and every experience is a masterpiece of digital wonder.</h4>
          </div>
      </div>
    </div>
  )
};

export default IslandInfo;