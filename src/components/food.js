import React from 'react'
import {API_BASE_URL} from '../config'
import Header from './Header'
import {connect} from 'react-redux'
import {newFoods} from '../action/food'
 class Food extends React.Component{
constructor(){
  super();
  this.state = {
    food:""
  }
}
handleFoodChanged(event){
  this.setState({
    food:event.target.value
  })
}

submitForm(event){
  console.log(event)
  event.preventDefault();
  this.props.dispatch(newFoods(
    this.state
  ))
}
render(){
  console.log('what state is this',this.state)
  return (
    <div>
      <Header/>
    <form 
    onSubmit={this.submitForm.bind(this)}
    className="container">
    <label htmlFor="food"><b>Food</b></label>
    <input type="text"    
    value={this.state.food}
    onChange={this.handleFoodChanged.bind(this)}
     placeholder="Apple...etc"
      name="food" 
      required/>    
    <button type="submit">Add Food</button>
 
  </form>
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