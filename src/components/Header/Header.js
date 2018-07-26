import React from 'react'
import './Header.css'
import Nav from './nav'
import logo from '../photos/logo.png'

export default function header(props){
      
  
    return (
      <div>
        <header role="banner" >
          <img className="image-2"src={logo} alt="logo for x level" />
         <Nav/>
         </header>
       
      </div>
  );
  }