import React from 'react'
import './cal.css'
export default class Cal extends React.Component{
constructor(props){
  super(props)

  this.state ={
    weight:undefined,
    feet:undefined,
    inches:undefined,
    age:undefined,
    sex:undefined,
    Actitiy:undefined

  }
}
//   For men:	BMR = 10 × weight(kg) + 6.25 × height(cm) - 5 × age(y) + 5
// 10 x weight (kg) + 6.25 x height (cm) – 5 x age (y) + 5 = REE
// For women:	BMR = 10 × weight(kg) + 6.25 × height(cm) - 5 × age(y) - 161
// 10 x weight (kg) + 6.25 x height (cm) – 5 x age (y) – 161 = REE
//---------------------------------------------------------------------------------------------------
// Sedentary
// Just normal everyday activity like a little walking, a couple flights of stairs, eating, talking etc. (REE X 1.2)
// Light activity
// Any activity that burns an additional 200-400 calories for females or 250-500 calories for males more than your sedentary amount. (REE x 1.375)
// Moderate activity
// Any activity that burns an additional 400-650 calories for females or 500-800 calories for males more than your sedentary amount. (REE x 1.55)
// Very Active
// Any activity that burns more than about 650 calories for females or more than 800 calories for males in addition to your sedentary amount. (REE x 1.725)
//----------------------------------------------------------------------------------------------------

calculateHeightToCm(feet,inches){
  let cm = (feet * 12) + inches ;
  let newCm = cm * 2.54;
  return Math.round(newCm)
}
render(){
return (
<div>
<h1 className="bannerform">CALCULATE YOUR TOTAL DAILY ENERGY EXPENDITURE</h1>
<form className="calform">
  <label>Age</label><br/>
  <input type="number" min="0" max="120"/>
  <br/>
    <label>I'm A</label><br/>
    <input type="radio" name="radio"/>
    <label>Male</label>
    <input type="radio"  name="radio"/>
    <label>Female</label>
    <br/>
    <label>Weight Input</label><br/>
  <input type="number" required min="0" />
    <h4>Height Input</h4>
    <label>Feet Input</label><br/>
  <input type="number" required min="0"/><br/>
  <label>Inches Input</label><br/>
  <input type="number" required min="0"/>
  <br/><br/>
  <label>Actitiy Level</label>
  <br/>
  <select>
  <option value="sed">Sedentary</option>
  <option value="light">Light</option>
  <option value="modern">Moderate</option>
  <option value="extr">Extreme</option>
</select>
  <br/><br/>
  <button>Calculate</button>

  </form>
</div>
);
}
}