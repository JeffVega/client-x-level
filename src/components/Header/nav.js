import React from 'react'
import './nav.css'
import {clearAuthToken} from '../../local-storage'
import {Link} from 'react-router-dom'
export default function nav(){

return (
<div>
<nav className='listed-links'>
<ul className="nav-links">
<Link to="/cal">
  <li>Home</li>
  </Link>
  <Link to="/food">
  <li>Food</li>
  </Link>
  <Link to="/workout">
 <li>Workouts</li>
  </Link>
  <Link onClick={clearAuthToken}  to="/">
 <li>Logout</li>
  </Link>
  </ul>
</nav>
</div>
);
}