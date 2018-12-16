import React from 'react'
import Header from '../Header/Header'
import {connect} from 'react-redux'
import {newFoods} from '../../action/Action_food'



import  FoodList from './list-food'
 class Food extends React.Component{
constructor(){
  super();
  this.state = {
    food:"",
    calories:""
  }
}
handleFoodChanged(event){
  this.setState({
    food:event.target.value
  })
}
handleCaloriesChanged(event){
  this.setState({
    calories:event.target.value
  })
}

submitForm(event){
  event.preventDefault();
  this.props.dispatch(newFoods(
    this.state
  ))
  event.target.food.value =""
  event.target.calories.value=""
}
render(){
  return (
    <div>
      <Header/>
      <div className="input-form">
      <h3 className="workout-input">Food Inputs</h3>
    <form       
    onSubmit={this.submitForm.bind(this)}
    className="container">
    <br/><br/>
    
    <input type="text"
    onChange={this.handleFoodChanged.bind(this)}
     placeholder="Apple...etc"
      name="food" 
      required/>
      <input type="text"
    onChange={this.handleCaloriesChanged.bind(this)}
     placeholder="Calories"
      name="calories" 
      required/>    
      <br/><br/>  
    <button
    className="button-sign" 
    type="submit">Add Food</button>
  <br/><br/>
  </form>
  </div>
  <br/><br/>
  <FoodList/>
  </div>
  );
  }
}
const mapStateToProps =(state) =>{
  return {
    food:state.food
  }
}
export default connect(mapStateToProps)(Food)