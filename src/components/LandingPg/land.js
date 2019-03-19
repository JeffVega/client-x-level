import React from 'react'
import Header from '../Header/Header'
import BackgroundImg from '../Utils/Imgs/x-level-update.jpg'


export default class Landing extends React.Component{
  
        
    render(){
        
  return(
    <div className='landing-page'>

    <Header/>
    <div className='info-x-level'>
                <img className="photo_img" alt="logo_x-level" src={BackgroundImg}  />
                <h1 className="banner">A CUSTOM MACRO PLAN </h1>
                <div className="boxes_info">
                <div>
                    <p>
                        Marcos
                    </p>
                </div>
                <div>
                    <p>
                    Food
                    </p>
                </div>
                <div>
                    <p>
                    Workout
                    </p>
                </div>
                </div>
            </div>
      </div>
  )
}
}