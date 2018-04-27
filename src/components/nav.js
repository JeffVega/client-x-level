import React from 'react'
import './nav.css'
export default function nav(props){

return (
<div>
<nav>
<ul className="nav">
  <a href="Home"><li>Home</li></a>
  <a href="#"><li>Food</li></a>
  <a href="#"><li>Workouts</li></a>
  </ul>
</nav>
</div>
);
}