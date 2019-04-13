import React from 'react'
import Header from '../Header/Header'
import BackgroundImg from '../Utils/Imgs/x-level-update.jpg'


export default class Landing extends React.Component{
  
        
    render(){
        
  return(
    <div className='landingPage'>

    <Header/>
    <div className='landingPage__info'>
        <img className="landingPage__bg" alt="bg-img-for-x-level" src={BackgroundImg}  />
            <h1 className="landingPage__banner">A CUSTOM MACRO PLAN </h1>
                <div className="landingPage__boxes">
                <div className="cards">
                    <p className="cards__text">
                    Macro
                    </p>
                </div>
                <div className="cards">
                    <p className="cards__text">
                    Food
                    </p>
                </div>
                <div className="cards">
                    <p className="cards__text">
                    Workout
                    </p>
                </div>
                </div>
            </div>
      </div>
  )
}
}