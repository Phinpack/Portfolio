import React from 'react';
import Logo from './Logo';
import '../App.css';
import '../CSS/Header.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import HeaderButton from './HeaderButton';
import { IconButton } from '@mui/material';
import XIcon from '@mui/icons-material/X';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';

const Header = () => {
  return (
    <header className='app-header'>
      <div className='header-container'>
        <Logo />
        <div className="button-container">
          <HeaderButton buttonText={"Play"} />          
          <HeaderButton buttonText={"Learn"} />
          <HeaderButton buttonText={"Live"} />
          <HeaderButton buttonText={"About Us"} />
          <IconButton>
            {/* onClick={() => {
              
            }} */}
            <XIcon sx={{ color: 'white', marginLeft: '10px', marginBottom: '5px'}}/>
          </IconButton>
          <IconButton>
            {/* onClick={() => {
              
            }} */}
            <MailOutlineOutlinedIcon sx={{ fontSize: '30px', color: 'white', marginLeft: '15px', marginBottom: '4px'}}/>
          </IconButton>
          <IconButton>
            {/* onClick={() => {
              
            }} */}
            <YouTubeIcon sx={{ fontSize: '35px', color: 'white', marginLeft: '10px', marginBottom: '5px'}}/>
          </IconButton>
          <IconButton>
            {/* onClick={() => {
              
            }} */}
            <InstagramIcon sx={{ fontSize: '25px', color: 'white', marginLeft: '10px', marginBottom: '5px'}}/>
          </IconButton>
          
        </div>
      </div>
    </header>
  )
};

export default Header;