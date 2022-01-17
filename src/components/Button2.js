import React from 'react';
import './Button2.css';
import { Link } from 'react-router-dom';

export function Button2() {
  const refreshpage =()=>{
    localStorage.removeItem('token');
    window.location.reload();
  }
  return (
    <Link to='/'>
      <button className='btn2' onClick={refreshpage}>Sign Out</button>
    </Link>
  );
}