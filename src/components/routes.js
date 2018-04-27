import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import  Main from './main'
import Food from './food'
import Workout from './workouts'
export default function Pages(){
  return(
    <Router>
    <div className="email">
        <Sidebar />
        <main>
            <Switch>
                <Route exact path="/" component={Food} />
            </Switch>
        </main>
    </div>
  )
};