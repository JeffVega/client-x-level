import React from 'react'
import './Header.css'
import Nav from './nav-w-o'
import logo from '../photos/logo.png'

export default function header(props){
      
  
    return (
      <div>
        <img className="image-2"src={logo} alt="logo for x level" />
        <Nav/>
        
      </div>
  );
  }