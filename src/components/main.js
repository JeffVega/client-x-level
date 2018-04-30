import React,{Component} from 'react'

import Header from './Header'
import Sign from './sign-form'
import Cal from './cal'
import SignIn from './sign-in'
import Workout from './workout'
import Food from './food'
import {BrowseRouter as Router,Route,Link} from 'react'
export default class Main extends Component{
constructor(){
  super()

}

render(){
return (
  <div>
    
<Header/>
<Cal/>
</div>

)
}


}

