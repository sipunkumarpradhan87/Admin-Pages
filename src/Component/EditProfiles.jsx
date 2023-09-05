import React, { useState } from "react";
import './EditProfiles.css';
import TypeWrites from "./TypeWrites";


let EditProfiles=()=>{

    let [username,setusername]=useState('')

let UserNameChange=(e)=>{
setusername(e.target.value)
}

    let UserNameEdit=(e)=>{
   e.preventDefault();
   if(username === '')
   {
       alert('profile is blank')
    }
    else
    {
        alert(' edit is successfully')
        
    }
    console.log(username);
}

    return(
        // <div className="" id="Main">

      
        <div className="containerr">
            <div className="containers d-flex" style={{marginLeft:125}}>

         <div className="button mx-1" >
            <button onClick={UserNameEdit}>Edit Profile</button>
         </div>
         <div className="input">
          <input type="text"   placeholder="User profile" onChange={UserNameChange} value={username} 
           />
         </div> 
           </div>
         
          <div className="conain mt-5" style={{marginLeft:80}}>
         <TypeWrites text={"- : Welcome to admin Page :-"}/>

          </div>
           {/* <div class="wrapper">
    <div class="static-txt"></div>
    <ul class="dynamic-txts">
      <li><span>Wel Come to Admin Page</span></li> */}
      {/* <li><span>Designer</span></li>
      <li><span>Developer</span></li>
      <li><span>Freelancer</span></li> */}
    {/* </ul>
  </div> */}

        
        </div>
        // </div>
    
    )
}
export default EditProfiles; 