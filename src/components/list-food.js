import React from 'react'
import {connect} from 'react-redux'
import { getFoods } from '../action/food';
import './list-workout.css'
 class ListFood extends React.Component{

  componentWillMount(){
   this.props.dispatch(getFoods())
  }
render(){
  console.log("workout props here:",this.props)
  {this.props.foodOutput.map((foods,index)=>(
     <div>
 <p key={index}>food:{foods.food}</p>
</div>
  ))}
 
  
return (
 <div>
    console.log("workout props here:",this.props)
  {this.props.foodOutput.map((foods,index)=>(
     <div>
 <p key={index}>food:{foods.food}</p>
</div>
  ))}

   </div>
);
}
 }
const mapStateToProps =(state) =>{
  return {
    food:state.food,
  foodOutput:state.food.foods
  }
}
export default connect(mapStateToProps)(ListWorkouts)