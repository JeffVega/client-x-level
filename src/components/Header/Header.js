import React from 'react'
import './Header.css'
import Nav from './nav'
import logo from '../photos/logo.png'

export default function header(props){
      
  
    return (
      <div>
        <header role="banner" >
      
        <h1  className="banner"/>
        <Nav/>
          <img className="image-1"src={logo} alt="logo for x level" />
            
        </header>
      </div>
  );
  }