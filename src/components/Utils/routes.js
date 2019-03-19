import React from "react";
import { BrowserRouter as Router, Route,Redirect,Switch } from "react-router-dom";
import LoginPage from '../Login/Login-Page';
import SignUpPage from '../SignUp/SignUp-Page';
import  Dashboard from '../main';
import FoodPage from '../Food/food';
import WorkOutPage from '../Workout/workout';
import LandingPage from '../LandingPg/land';
export default function Pages(){
  return(
    <Router>
    <div>
    <Switch> 
    <Redirect exact from="/" to="/home" />
     <Route exact path="/signin" component={LoginPage} />
     <Route exact path="/signup" component={SignUpPage} />
     <Route exact path="/dash" component={Dashboard} />
     <Route exact path="/workout" component={WorkOutPage}/>
     <Route exact path="/workout/:id" component={WorkOutPage}/>
     <Route exact path="/food" component={FoodPage}/>
     <Route exact path="/food/:id" component={FoodPage}/>
     <Route exact path="/home" component={LandingPage}/>
     </Switch>      
    </div>
    </Router>
  )
};