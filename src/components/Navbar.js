import React, { useState } from 'react';
import { Button } from './Button';
import {Button2} from './Button2'
import { Link } from 'react-router-dom';
import './Navbar.css';
import Dropdown from './Dropdown';
const token = localStorage.getItem("token");
const signin="Sign In";
const signout="Sign Out"

function Navbar() {
  
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  
  

  const handleClick = () => setClick(!click);

  const closeMobileMenu=()=>setClick(false);

  const closeMobileMenu1 = () => {
    localStorage.removeItem('token');
    window.location.reload();
    setClick(false);
  }

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  return (
    <>
      <nav className='navbar'>
        <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
          Goldling
          <i class='fab fa-firstdraft' />
        </Link>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li
            className='nav-item'
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link
              to='/services'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Services <i className='fas fa-caret-down' />
            </Link>
            {dropdown && <Dropdown />}
          </li>
         
          <li className='nav-item'>
            <Link
              to='/contact-us'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Contact Us
            </Link>
          </li>
          <li>
            {token?<Link
              to='/'
              className='nav-links-mobile'
              onClick={closeMobileMenu1}>Sign Out</Link>:<Link
              to='/login'
              className='nav-links-mobile'
              onClick={closeMobileMenu}>Sign In</Link>}
           
          </li>
        </ul>
        {token?<Button2/>:<Button/>}
        
      </nav>
    </>
  );
}

export default Navbar;