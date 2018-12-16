import React from 'react'
import './Header.css'
import Nav from './nav'
import logo from '../photos/logo.png'

export default function header(props){
      
  
    return (
      <div className="header_main_page">
        <header role="banner" >
          <img className="logo_img"src={logo} alt="logo for x level" />
         <Nav/>
         </header>
       
      </div>
  );
  }