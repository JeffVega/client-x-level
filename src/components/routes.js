import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import  Main from './main'
export default function Pages(){
  return(
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/topics">User/Login</Link>
        </li>
      </ul>

      <hr />

      <Route exact path="/" component={Main} />
      {/* <Route path="/about" component={About} />
      <Route path="/topics" component={Topics} /> */}
    </div>
  </Router>
  )
};