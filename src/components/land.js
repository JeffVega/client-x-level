import React from 'react'
import Header from './Header/Header'
import BackgroundImg from './photos/x-level-update.jpg'
    const mainBg = {
        backgroundColor: '#FFFFFF',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',

        backgroundPosition: 'center',
      }
     

export default class Landing extends React.Component{
  
        
    render(){
        
  return(
    <div className='landing-page'>

    <Header/>
    <div className='info-x-level'>
                <img className="photo_img" src={BackgroundImg}  />
                    <h1 className="instruction_one">We know losing weight isn't easy So we did the hard part for you</h1>
                    <ul className="listed-info">
                        <li className="changeinList box-one"><strong>
                            First: You can start by using our Marcos calculater,<br/>
                            which calculates your recommended daily intake by using our super secert
                            algorithm</strong>
                        </li>
                        <br/>
                        <li className="changeinList box-two"><strong>Second: You can take charge, of the food that you've eaten 
                        store them on your food dairy 
                        plus you can measure your workout and store them here as well.</strong>
                        <br/><br/>
                        </li>
                        <br/>
                        <li className="changeinList box-three"><strong>Third: This part is all you!!!</strong>
                        </li>
                    </ul>
            </div>
      </div>
  )
}
}