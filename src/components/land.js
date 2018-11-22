import React from 'react'
import Header from './Header/Header'
import BackgroundImg from './photos/x-level-update.jpg'


export default class Landing extends React.Component{
  
        
    render(){
        
  return(
    <div className='landing-page'>

    <Header/>
    <div className='info-x-level'>
                <img className="photo_img" alt="logo_x-level" src={BackgroundImg}  />
                    <div className="landing_info_boxs">
                        <ul>
                        <li><p>Firdy</p></li>
                        <li><p>Sec</p></li>
                        <li><p>Third</p></li>


                        </ul>
                    </div>
                       
            </div>
      </div>
  )
}
}