import React from 'react';
import '../App.css';
import '../CSS/NewHeader.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import HeaderButton from './HeaderButton';

const NewHeader = () => {
  return (
    <header className='new-app-header'>
      <div className='new-header-container'>
        <div className='new-button-container'>
          <HeaderButton buttonText={"PLAY"} />          
          <HeaderButton buttonText={"LEARN"} />
          <HeaderButton buttonText={"LIVE"} />
          <HeaderButton buttonText={"ABOUT US"} />
        </div>
      </div>
    </header>
  )
};

export default NewHeader;