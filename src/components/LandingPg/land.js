import React from 'react'
import Header from '../Header/Header';
import Svg from '../Utils/Imgs/push-up.svg';


export default class Landing extends React.Component{
  
        
    render(){
        
  return(
    <div className='landingPage'>

    <Header/>
        <div className="landingPage__elements">
        <div className="landingPage__info">
        <h1>The Simplest way to lose weight</h1>
        <p>X-level mananges your weight loss program, so you dont have to  </p>
        
        </div>
        <img src={Svg}  draggable="false" className="svgfile" alt="fitness man "/>
        </div>
      </div>
  )
}
}