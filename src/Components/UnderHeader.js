import React, {useEffect} from 'react';
import '../CSS/UnderHeader.css';
import Parallax from '../hooks/Parallax'; 

const UnderHeader = () => {
  const parallaxElements = document.querySelectorAll('.parallax');
  Parallax(parallaxElements, ".15");

  return (
    <section className="under-header">
      <div className='overlay'></div>
      <div className='blur'></div>
      <div className="under-header-content parallax">
        <h2>Enter Intelimmerse</h2>
        <h3 style={{color: 'white', maxWidth: '40em'}}>Welcome to a realm of endless possibilities - immersive experiences offering opportunities for personal growth, social interaction, and socializing and playing that transcend geographical boundaries</h3>
      </div>
    </section>
  );
};

export default UnderHeader;
