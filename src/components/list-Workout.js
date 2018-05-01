import React from 'react'
import {connect} from 'react-redux'
import { getWorkouts } from '../action/workout';
import './list-workout.css'
 class ListWorkouts extends React.Component{

  componentDidMount(){
   this.props.dispatch(getWorkouts())
  }
render(){
  console.log("workout props here:",this.props)

  
return (
 <div >
    {this.props.workoutOutput.map((workouts,index)=>(
    <div key={index} className="workout-happens">
    <ul>
<li >title:{workouts.title}</li>
  <li >muscle:{workouts.muscle}</li>
  <li >weight:{workouts.weight}</li>
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