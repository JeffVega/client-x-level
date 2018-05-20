import React from "react";
import { BrowserRouter as Router, Route,Redirect,Switch } from "react-router-dom";
import Login from './Login-in';
import Signup from './sign-up';
import  Main from './main';
import Food from './Food/food';
import Workout from './Workout/workout';
import Aside from './aside'
import Land from './land'
export default function Pages(){
  return(
    <Router>
    <div>
    <Switch> 
    <Redirect exact from="/" to="/home" />
     <Route exact path="/signin" component={Login} />
     <Route exact path="/signup" component={Signup} />
     <Route exact path="/cal" component={Main} />
     <Route exact path="/workout" component={Workout}/>
     <Route exact path="/workout/:id" component={Workout}/>
     <Route exact path="/food" component={Food}/>
     <Route exact path="/food/id" component={Food}/>
     <Route exact path="/page" component={Aside}/>
     <Route exact path="/home" component={Land}/>
     </Switch>      
    </div>
    </Router>
  )
};