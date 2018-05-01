import React from "react";
import { BrowserRouter as Router, Route, Link,Redirect,Switch } from "react-router-dom";
import Login from './Login-in'
import  Main from './main'
import Food from './food'
import Workout from './workout'
import workout from "./workout";
export default function Pages(){
  return(
    <Router>
    <div>
    <Switch> 
    <Redirect exact from="/" to="/signup" />
     <Route exact path="/signup" component={Login} />
     <Route exact path="/cal" component={Main} />
     <Route exact path="/workout" component={Workout}/>
     <Route exact path="/workout/:id" component={Workout}/>
     <Route exact path="/food" component={Food}/>
     <Route exact path="/food/id" component={Food}/>
     </Switch>      
    </div>
    </Router>
  )
};