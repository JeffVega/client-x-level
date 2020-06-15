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
      <div className="food">
      <h3 className="food__banner">Food Inputs</h3>
    <form       
    onSubmit={this.submitForm.bind(this)}
    className="workForm">
 
    
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

    <button
    className="workForm__button" 
    type="submit">Add Food</button>
  
  </form>
  </div>

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