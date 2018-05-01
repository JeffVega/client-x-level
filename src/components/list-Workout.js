import React from 'react'
import {connect} from 'react-redux'
import { getWorkouts } from '../action/workout';
import './list-workout.css'
 class ListWorkouts extends React.Component{

  componentWillMount(){
   this.props.dispatch(getWorkouts())
  }
render(){
  console.log("workout props here:",this.props)
 {this.props.workoutOutput.map((workouts,index)=>(
    <div>
<p key={index}>title:{workouts.title}</p>
  <p key={index}>muscle:{workouts.muscle}</p>
  <p key={index}>weight:{workouts.weight}</p>
  

</div>
  ))}
  
return (
 <div >
    {this.props.workoutOutput.map((workouts,index)=>(
    <div className="workout-happens">
    <ul>
<li key={index}>title:{workouts.title}</li>
  <li key={index}>muscle:{workouts.muscle}</li>
  <li key={index}>weight:{workouts.weight}</li>
  </ul>

</div>
  ))}

   </div>
);
}
 }
const mapStateToProps =(state) =>{
  return {
    workout:state.workout,
    workoutOutput:state.workout.workouts
  }
}
export default connect(mapStateToProps)(ListWorkouts)