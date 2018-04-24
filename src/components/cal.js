import React from 'react'
import './cal.css'
export default function Cal(props){

return (
<div>
<h1 className="bannerform">CALCULATE YOUR TOTAL DAILY ENERGY EXPENDITURE</h1>
<form className="calform">
  <label>Age</label>
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
  <br/>
    <label>Height Input</label><br/>
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