import React from 'react'
import './Header.css'
import Nav from './nav'

export default function header(props){
      
  
return (
<div>
  <header role="banner">
<h1  className="banner"><span className="x-level">X-LEVEL</span></h1>

<Nav/>
</header>
</div>
);
}