import React from 'react'
import {connect} from 'react-redux'
import { getWorkouts } from '../action/workout';
 class ListWorkouts extends React.Component{

  componentWillMount(){
   this.props.dispatch(getWorkouts())
  }
render(){
  console.log("workout props here:",this.props)
return (
<div>
<ul>

  </ul>
</div>
);
}
 }
const mapStateToProps =(state) =>{
  return {
    workout:state.workout
  }
}
export default connect(mapStateToProps)(ListWorkouts)