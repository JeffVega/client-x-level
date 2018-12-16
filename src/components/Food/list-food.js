import React from 'react'
import {connect} from 'react-redux'
import {getFoods} from '../../action/Action_food';
import {deletefood} from '../../action/Action_food'
import '../listed-items.css'
// import './list-workout.css'
class ListFood extends React.Component {

    componentDidMount() {
        this
            .props
            .dispatch(getFoods())
    }
   
    render() {
       
        return (
            <div>
                {this
                    .props
                    .foodOutput
                    .map((foods, index) => (
                        
                        <div key={index} className="workout-happens">

                            <p><strong>Food:</strong>{foods.food}</p>
                            <p><strong>Calories:</strong>{foods.calories}</p>
                            <p className="list-date">{foods.create}</p>
                            
<button onClick={() =>this.props.dispatch(deletefood(foods.id))}> Trash</button>                            
                        </div>
                    ))}
        
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {food: state.food, foodOutput: state.food.foods}
}
export default connect(mapStateToProps)(ListFood)