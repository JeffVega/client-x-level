import React from 'react'
import Header from '../Header/Header'
import ReactSVG from 'react-svg'
import Svg from '../Utils/Imgs/push-up.svg'


export default class Landing extends React.Component{
  
        
    render(){
        
  return(
    <div className='landingPage'>

    <Header/>
        <h1 className="landingPage__banner">X-level</h1>
        <div className="landingPage__elements">
        <div className="landingPage__info">
        <h1>The Simplest way to lose weight</h1>
        <p>X-level mananges your weight loss program, so you dont have to  </p>
        
        </div>
        <img src={Svg} className="svgfile"/>
        </div>
      </div>
  )
}
}