import React from 'react';
import Logo from './Logo';
import '../App.css';
import '../CSS/Header.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import HeaderButton from './HeaderButton';
import { IconButton } from '@mui/material';
import XIcon from '@mui/icons-material/X';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';

const Header = () => {
  return (
    <header className='app-header'>
      <div className='header-container'>
        <Logo />
        <div className="button-container">
          <HeaderButton buttonText={"About us"} />          
          <HeaderButton buttonText={"Pricing"} />
          <IconButton>
            {/* onClick={() => {
              
            }} */}
            <XIcon sx={{ color: 'black', marginLeft: '10px', marginTop: '3px'}}/>
          </IconButton>
          <IconButton>
            {/* onClick={() => {
              
            }} */}
            <MailOutlineOutlinedIcon sx={{ fontSize: '30px', color: 'black', marginLeft: '15px', marginTop: '2px'}}/>
          </IconButton>
          
        </div>
      </div>
    </header>
  )
};

export default Header;