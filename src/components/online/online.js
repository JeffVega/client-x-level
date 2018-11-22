import React from 'react'
import {connect} from 'react-redux';
import { getOnlineUsers } from '../../action/Action_online';




 class onlineUsersBuild extends React.Component{
 
    componentWillMount() {
            this.props.dispatch(getOnlineUsers())
          }
     
     render(){
         
         return(
             <div>
              {this.props.onlineOutput
            .map((onliner,index) =>(
                
                <div key={index} >
                <p>Online:{onliner.username}</p>
                </div>
            ))}
             </div>
         )
     }
 }
 const mapStateToProps = (state) => {
     console.log(state)
    return {onlineUsers:state.online,onlineOutput:state.online.onlineUsers}
}
export default connect(mapStateToProps)(onlineUsersBuild)