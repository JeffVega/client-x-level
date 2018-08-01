import React from 'react'
import './nav.css'
import {Link} from 'react-router-dom'
export default function nav(){

return (
<div>
<nav className="nav-bar">
<h1>X-LEVEL</h1>
<ul className="nav-duo">
  <Link to="/signin">
  <li>Login</li>
  </Link>
  <Link to="/signup">
  <li>SignUp</li>
  </Link>

  </ul>
</nav>
</div>
);
}