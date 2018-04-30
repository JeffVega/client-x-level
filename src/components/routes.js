import React from "react";
import { BrowserRouter as Router, Route, Link,Redirect } from "react-router-dom";
import Login from './Login-in'
import  Main from './main'
import Food from './food'
import Workout from './workout'
export default function Pages(){
  return(
    <Router>
    <div>
        
    <Redirect exact from="/" to="/signup" />
     <Route exact path="/signup" component={Login} />
     <Route exact path="/home" component={Main} />
     <Route exact path="/workout" component={Workout}/>
     <Route exact path="/food" component={Food}/>      
    </div>
    </Router>
  )
};