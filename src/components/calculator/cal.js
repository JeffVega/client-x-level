import React from 'react'
import './cal.css'
import {connect} from 'react-redux'
import {newCal} from '../../action/Action_cal'
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
  console.log(event.target.sex.value)
  this.props.dispatch(newCal(
    this.state
  ))
  event.target.age.value =""
  event.target.sex.value =""
  event.target.weight.value =""
  event.target.feet.value =""
  event.target.inches.value =""
  event.target.level.value =""
  event.target.percent.value =""
}

render(){
  console.log('is my info working',this.state)
return (
<div>
<h1 className="bannerform">CALCULATE YOUR TOTAL DAILY ENERGY </h1>
<div className="cal-form">
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
    <label>Sex</label><br/>
    <select
   name="sex"
   onChange={this.handleSexChanged.bind(this)}>
   <option/>
  <option value="male">MALE</option>
  <option value="female">FEMALE</option>
  </select>
    <br/>
    <label>Weight Input</label><br/>
  <input 
  name="weight"
    onChange={this.handleWeightChanged.bind(this)}
  type="number"
   required min="0" />
    <h4>Height Input</h4>
    <label>Feet Input</label><br/>
  <input 
   
    onChange={this.handleFeetChanged.bind(this)}
    name="feet"
  type="number" 
  required min="0"/><br/>
  <label>Inches Input</label><br/>
  <input
      name="inches"
     onChange={this.handleInchesChanged.bind(this)}
   type="number" 
   required min="0"/>
  <br/><br/>
  <label>Actitiy Level</label>
  <br/>
  <select
   name="level"
   onChange={this.handleLevelChanged.bind(this)}>
   <option/>
  <option value="1">Sedentary</option>
  <option value="2">Light</option>
  <option value="3">Moderate</option>
  <option value="4">Extreme</option>
</select>
  <br/><br/>
  <select 
   name="percent"
   onChange={this.handlePercentChanged.bind(this)}>
   <option/>
  <option value="1">10% Lose</option>
  <option value="2">20% Lose</option>
</select>
<br/><br/>
  <button
  className="button-cal"
  >Calculate</button>

  </form>
  </div>
{this.props.calulationData.map((calulation,index) =>(
<div key={index} className="dataOfEn">
  <p >Calories:{calulation.calories}</p>
  <p >Protein:{calulation.protein}</p>
  <p >Fat:{calulation.fat}</p>
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