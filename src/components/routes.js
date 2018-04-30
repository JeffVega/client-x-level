import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Login from './Login-in'
import  Main from './main'
import Food from './food'
import Workout from './workout'
export default function Pages(){
  return(
    <Router>
    <div>
        
       
     <Route exact path="/" component={Login} />
     <Route exact path="/workout" component={Workout}/>
     <Route exact path="/food" component={Food}/>      
    </div>
    </Router>
  )
};