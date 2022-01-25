import React from 'react';
import './Button3.css';
import { Link } from 'react-router-dom';

export function Button3() {
 const removetoken =()=>{
    localStorage.removeItem('admintoken');
 }
  return (
    <Link to='/login'>
      <button className='btn2' onClick={removetoken}>Sign Out</button>
    </Link>
  );
}