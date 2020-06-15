import React from 'react'
import CircularProgressbar from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import {connect} from 'react-redux'
import {newCal} from '../../action/Action_cal'
import Online from '../Online/online';

class Cal extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            weight: undefined,
            feet: undefined,
            inches: undefined,
            age: undefined,
            sex: undefined,
            percent: undefined,
            level: undefined

        }
    }
    handleWeightChanged(event) {
        this.setState({weight: event.target.value})
    }
    handleFeetChanged(event) {
        this.setState({feet: event.target.value})
    }
    handleInchesChanged(event) {
        this.setState({inches: event.target.value})
    }
    handleAgeChanged(event) {
        this.setState({age: event.target.value})
    }
    handleSexChanged(event) {
        this.setState({sex: event.target.value})
    }
    handlePercentChanged(event) {
        this.setState({percent: event.target.value})
    }
    handleLevelChanged(event) {
        this.setState({level: event.target.value})
    }

    submitForm(event) {
        event.preventDefault();
        this
            .props
            .dispatch(newCal(this.state))
        event.target.age.value = ""
        event.target.sex.value = ""
        event.target.weight.value = ""
        event.target.feet.value = ""
        event.target.inches.value = ""
        event.target.level.value = ""
        event.target.percent.value = ""

    }

    render() {

        return (
            <div className="landing_starter">
                <h1 className="bannerform">CALCULATE YOUR TOTAL DAILY ENERGY
                </h1>
                <div className="cal-form">
                    <form
                        onSubmit={this
                        .submitForm
                        .bind(this)}
                        className="calform">
                        <label>Age</label>
                        <input
                            required
                            onChange={this
                            .handleAgeChanged
                            .bind(this)}
                            name="age"
                            type="number"
                            min="0"
                            max="120"/>
  
                        <label>Sex</label>
                        <select
                            required
                            name="sex"
                            onChange={this
                            .handleSexChanged
                            .bind(this)}>
                            <option/>
                            <option value="male">MALE</option>
                            <option value="female">FEMALE</option>
                        </select>

                        <label>Weight Input</label>
                        <input
                            name="weight"
                            onChange={this
                            .handleWeightChanged
                            .bind(this)}
                            type="number"
                            required
                            min="0"/>
                        <h4>Height Input</h4>
                        <label>Feet Input</label>
                        <input
                            onChange={this
                            .handleFeetChanged
                            .bind(this)}
                            name="feet"
                            type="number"
                            required
                            min="0"/>
                        <label>Inches Input</label>
                        <input
                            name="inches"
                            onChange={this
                            .handleInchesChanged
                            .bind(this)}
                            type="number"
                            required
                            min="0"/>

                        <label>Activity Level</label>

                        <select
                            required
                            name="level"
                            onChange={this
                            .handleLevelChanged
                            .bind(this)}>
                            <option/>
                            <option value="1">Sedentary</option>
                            <option value="2">Light</option>
                            <option value="3">Moderate</option>
                            <option value="4">Extreme</option>
                        </select>

                        <label>Weight Deficit</label>

                        <select
                            required
                            name="percent"
                            onChange={this
                            .handlePercentChanged
                            .bind(this)}>
                            <option/>
                            <option value="1">10% Lose</option>
                            <option value="2">20% Lose</option>
                        </select>

                        <button  className="button-cal">Calculate</button>

                    </form>
                </div>
                {this
                    .props
                    .calulationData
                    .map((calulation, index) => (
                        <div key={index} className="dataOfEn">
                        <CircularProgressbar
  percentage={calulation.calories}
  initialAnimation={true}
  text={` Calories ${calulation.calories}`}
  className="circle-percent"
  styles={{
    background: {
      fill: '#3e98c7',
    },
    text: {
      fill: '#3c3c3d',
      fontSize:'10px'
    },
    path: {
      stroke: '#96d8ce',
    },
    trail: { stroke: 'transparent' },
  }}
/>
<CircularProgressbar
  percentage={calulation.protein}
  initialAnimation={true}
  text={` Protein ${calulation.protein}`}
  className="circle-percent"
  styles={{
    background: {
      fill: '#3e98c7',
    },
    text: {
      fill: '#3c3c3d',
      fontSize:'10px'
    },
    path: {
      stroke: '#96d8ce',
    },
    trail: { stroke: 'transparent' },
  }}
/>
<CircularProgressbar
  percentage={calulation.fat}
  initialAnimation={true}
  text={` Fat ${calulation.fat}`}
  className="circle-percent"
  styles={{
    background: {
      fill: '#3e98c7',
    },
    text: {
      fill: '#3c3c3d',
      fontSize:'10px'
    },
    path: {
      stroke: '#96d8ce',
    },
    trail: { stroke: 'transparent' },
  }}
/>

                        </div>
                    ))
}
<div className="online_user">
<h1>Online Users</h1>
<Online/>
</div>
            </div>

        );
    }
}
const mapStateToProps = (state) => {
    return {cal: state.cal, calulationData: state.cal.data}
}
//
export default connect(mapStateToProps)(Cal)