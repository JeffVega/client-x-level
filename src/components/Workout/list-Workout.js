import React from 'react'
import {connect} from 'react-redux'
import {deleteWorkouts}  from '../../action/Action_workout';
import { getWorkouts } from '../../action/Action_workout';
import './style/list-workout.css'
 class ListWorkouts extends React.Component{

  componentDidMount(){
   this.props.dispatch(getWorkouts())
  }
render(){

  
return (
 <div >
    {this.props.workoutOutput.map((workouts,index)=>(
    <div key={index} className="workout-happens">
    
<p ><strong>Title:</strong>   {workouts.title}</p>
  <p><strong>Muscle:</strong>  {workouts.muscle}</p>
  <p><strong>Weight:</strong>  {workouts.weight}</p>
  <p>{workouts.create}</p>
  <button onClick={() =>this.props.dispatch(deleteWorkouts(workouts.id))}> Trash</button>
            
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