import React,{Component} from 'react'
import Header from './Header'
import Sign from './sign-form'
import Cal from './cal'
export default class Main extends Component{
constructor(props){
  super(props)

}

render(){
return (
  <div>
    
<Header/>
<Sign/>
<Cal/>
</div>

)
}


}

