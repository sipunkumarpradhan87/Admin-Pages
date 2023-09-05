import React, { useEffect, useRef, useState } from "react";

function TypeWrites({text})
{
    let index =useRef(0)
let [currenttext,setcurrenttext]=useState('');
useEffect(()=>{


    setTimeout(()=>{
        setcurrenttext((sip)=>sip + text.charAt(index.current))
        index.current ++ ;
        
    },100)
})
    return(
        <div>
          <h3>{currenttext}</h3>
        </div>
    )
}
export default TypeWrites;
