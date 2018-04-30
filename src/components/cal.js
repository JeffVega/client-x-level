import React from 'react'
import './cal.css'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {newCal} from '../action/cal'
 class Cal extends React.Component{
constructor(props){
  super(props)

  this.state ={
    weight:undefined,
    feet:undefined,
    inches:undefined,
    age:undefined,
    sex:undefined,
    percent:undefined,
    level:undefined

  }
}
handleWeightChanged(event){
  this.setState({
    weight:event.target.value
  })
}
handleFeetChanged(event){
  this.setState({
    feet:event.target.value
  })
}
handleInchesChanged(event){
  this.setState({
    inches:event.target.value
  })
}
handleAgeChanged(event){
  this.setState({
    age:event.target.value
  })
}
handleSexChanged(event){
  this.setState({
    sex:event.target.value
  })
}
handlePercentChanged(event){
  this.setState({
    percent:event.target.value
  })
}
handleLevelChanged(event){
  this.setState({
    level:event.target.value
  })
}

submitForm(event){
  event.preventDefault(); 
  console.log("OUR STATE",this.state)
  this.props.dispatch(newCal(
    this.state
  ))
}

render(){
  console.log('is my info working',this.state)
return (
<div>
<h1 className="bannerform">CALCULATE YOUR TOTAL DAILY ENERGY EXPENDITURE</h1>
<form
  onSubmit={this.submitForm.bind(this)}
 className="calform">
  <label>Age</label><br/>
  <input 
   onChange={this.handleAgeChanged.bind(this)}
  name="age" 
  type="number" 
  min="0"
   max="120"/>
  <br/>
    <label>I'm A</label><br/>
    <select
   value={this.state.sex}
   onChange={this.handleSexChanged.bind(this)}>
   <option/>
  <option value="male">male</option>
  <option value="female">female</option>
  </select>
    <br/>
    <label>Weight Input</label><br/>
  <input 
 
    onChange={this.handleWeightChanged.bind(this)}
  type="number"
   required min="0" />
    <h4>Height Input</h4>
    <label>Feet Input</label><br/>
  <input 
   
    onChange={this.handleFeetChanged.bind(this)}
  type="number" 
  required min="0"/><br/>
  <label>Inches Input</label><br/>
  <input
   
     onChange={this.handleInchesChanged.bind(this)}
   type="number" 
   required min="0"/>
  <br/><br/>
  <label>Actitiy Level</label>
  <br/>
  <select
   value={this.state.level}
   onChange={this.handleLevelChanged.bind(this)}>
   <option/>
  <option value="1">Sedentary</option>
  <option value="2">Light</option>
  <option value="3">Moderate</option>
  <option value="4">Extreme</option>
</select>
  <br/><br/>
  <select 
   value={this.state.percent}
   onChange={this.handlePercentChanged.bind(this)}>
   <option/>
  <option value="1">10% Lose</option>
  <option value="2">20% Lose</option>
</select>
<br/><br/>
  <button>Calculate</button>

  </form>
{this.props.calulationData.map((calulation,index) =>(
<div className="dataOfEn">
  <p key={index}>Calories:{calulation.calories}</p>
  <p key={index}>Protein:{calulation.protein}</p>
  <p key={index}>Fat:{calulation.fat}</p>
</div>
))
}
</div>
);
}
}
const mapStateToProps = (state) =>{
  console.log("THIS IS OUR STATE",state)
  return {
    cal:state.cal,
    calulationData:state.cal.data
  }
}

export default connect(mapStateToProps)(Cal)