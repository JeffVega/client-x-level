import React from 'react'
import './nav.css'
import {Link} from 'react-router-dom'
export default function nav(){

return (
<div>
<nav>
<ul className="nav">
<Link to="/">
  <li>Home</li>
  </Link>
  <Link to="/food">
  <a href="#"><li>Food</li></a>
  </Link>
  <Link to="/workout">
  <a ><li>Workouts</li></a>
  </Link>
  </ul>
</nav>
</div>
);
}