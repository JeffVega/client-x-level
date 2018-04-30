import React,{Component} from 'react'

import Header from './Header'
import Sign from './sign-form'
import Cal from './cal'
import SignIn from './sign-in'
export default class Main extends Component{
constructor(){
  super()

}

render(){
return (
  <div>
    
<Header/>
<SignIn/>
<Sign/>
<Cal/>
</div>

)
}


}

