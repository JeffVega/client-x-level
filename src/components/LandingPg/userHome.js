import React from 'react';
import Cal from './Calculator/cal';
import Online from '../Online/online';


export default function UserHome() {
   return(

   <div className="user">
       <div>

       </div>
       <div className="user_cal panel-open">
            <Cal/>
       </div>
       <div className="user_online">

        <Online/>
       </div>
    </div>
   ) 
}
