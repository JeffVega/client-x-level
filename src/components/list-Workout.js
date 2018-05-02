import React from 'react'
import {connect} from 'react-redux'
import { getWorkouts } from '../action/Action_workout';
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
    
<p >TITLE:{workouts.title}</p>
  <p>MUSCLE:{workouts.muscle}</p>
  <p>WEIGHT:{workouts.weight}</p>
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