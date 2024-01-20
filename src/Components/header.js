import React from 'react';
import Logo from './Logo';
import '../App.css';
import '../CSS/Header.css'
import { Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css'


const Header = () => {
  return (
    <header className='app-header'>
      <div className='header-container'>
        <Logo />
        <div className="button-container">
          <Button
            outline
              style={{ 
                color: 'black', 
                border: 'none', 
                fontSize: '20px',
                transition: 'background-color 0.3s' 
              }}
              onMouseEnter={(e) => (
                e.target.style.backgroundColor = 'rgba(186, 186, 186, 0.4)'
              )}
              onMouseLeave={(e) => (
                e.target.style.backgroundColor = 'transparent'
              )}
          >Button 1
          </Button>
          <Button
            outline
              style={{ 
                color: 'black', 
                border: 'none', 
                fontSize: '20px',
                transition: 'background-color 0.3s' 
              }}
              onMouseEnter={(e) => (
                e.target.style.backgroundColor = 'rgba(186, 186, 186, 0.4)'
              )}
              onMouseLeave={(e) => (
                e.target.style.backgroundColor = 'transparent'
              )}
          >Button 2
          </Button>
        </div>
      </div>
    </header>
  )
};

export default Header;