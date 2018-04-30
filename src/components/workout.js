import React from 'react'
import Header from './Header'
import {API_BASE_URL} from '../config'
import {connect} from 'react-redux'
 class Workout extends React.Component{
constructor(){
  super();
  this.state = {
    title:"",
    muscle:"",
    weight:"",
    content:""
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
handleContentChanged(event){
  this.setState({
    content:event.target.value
  })
}

submitForm(event){
  console.log(event)
  event.preventDefault();
}
render(){
  console.log('what state is this',this.state)
  return (<div>
    <Header/>
    <form 
    onSubmit={this.submitForm.bind(this)}
    className="container">
    <label htmlFor="title"><b>Title</b></label>
    <input type="text"    
    value={this.state.title}
    onChange={this.handleTitleChanged.bind(this)}
     placeholder="Title.."
      name="food" 
      required/>
          <input type="text"    
    value={this.state.muscle}
    onChange={this.handleMuscleChanged.bind(this)}
     placeholder="Muscle"
      name="muscle" 
      required/>  
          <input type="text"    
    value={this.state.weight}
    onChange={this.handleWeightChanged.bind(this)}
     placeholder="Enter Weight"
      name="food" 
      required/>  
          <input type="textarea"    
    value={this.state.content}
    onChange={this.handleContentChanged.bind(this)}
     placeholder="Notes..."
      name="food" 
      />      
    <button type="submit">Add Workout</button>
 
  </form>
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