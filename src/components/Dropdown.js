import React, { useState } from 'react';
import { MenuItems } from './MenuItems';
import './Dropdown.css';
import { Link } from 'react-router-dom';
import jwt_decode from "jwt-decode";
import {useNavigate} from "react-router-dom";
import Notification from "./Notification";

function Dropdown() {
  
  
  
  
 


  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  const handleClick2 = ()=>{
    
    setClick(false);
  }

  return (
    <>
      <ul
        onClick={handleClick}
        className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}
      >
        {MenuItems.map((item, index) => {
          return (
            <li key={index}>
              <Link
                className={item.cName}
                to={item.path}
                onClick={handleClick2}
              >
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
      
    </>
  );
}

export default Dropdown;