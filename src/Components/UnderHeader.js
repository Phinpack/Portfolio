import React from 'react';
import '../CSS/UnderHeader.css';

const UnderHeader = () => {
  return (
    <section className="under-header">
      <div className='overlay'></div>
      <div className='blur'></div>
      <div className="under-header-content">
        <h2>Enter Intelimmerse</h2>
        <h3 style={{color: 'white', maxWidth: '40em'}}>Welcome to a realm of endless possibilities - immersive experiences offering opportunities for personal growth, social interaction, and socializing and playing that transcend geographical boundaries</h3>
      </div>
    </section>
  );
};

export default UnderHeader;
