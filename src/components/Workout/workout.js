import React from 'react'
import Header from '../Header/Header'
import {connect} from 'react-redux'
import { newWorkout } from '../../action/Action_workout';
import ListWorkout from './list-Workout'
import './style/workout.css'
 class Workout extends React.Component{
constructor(){
  super();
  this.state = {
    title:"",
    muscle:"",
    weight:""
  }
}
handleTitleChanged(event){
  this.setState({
    title:event.target.value
  })
}
handleMuscleChanged(event){
  this.setState({
    muscle:event.target.value
  })
}
handleWeightChanged(event){
  this.setState({
    weight:event.target.value
  })
}


submitForm(event){
  event.preventDefault();
  this.props.dispatch(newWorkout(
    this.state
  ))
  event.target.title.value =""
  event.target.muscle.value =""
  event.target.weight.value =""
}
render(){
  return (<div>
    <Header/>
    <div className="input-form">
    <h3 className="workout-input">Workout Inputs</h3>
    <form 
    onSubmit={this.submitForm.bind(this)}
    className="workoutForm">

    <input type="text"    
    onChange={this.handleTitleChanged.bind(this)}
     placeholder="Title.."
      name="title" 
      required/>
          <input type="text"    
    onChange={this.handleMuscleChanged.bind(this)}
     placeholder="Muscle"
      name="muscle" 
      required/>  
          <input type="text"    
    onChange={this.handleWeightChanged.bind(this)}
     placeholder="Enter Weight"
      name="weight" 
      required/>
      <br/><br/>     
    <button 
    className="button-sign"
    type="submit">Add Workout</button>
 
  </form>
  </div>
  <br/><br/><br/><br/>
  <ListWorkout/>
  </div>
  );
  }
}
const mapStateToProps =(state) =>{
  return {
    workout:state.workout
  }
}
export default connect(mapStateToProps)(Workout)