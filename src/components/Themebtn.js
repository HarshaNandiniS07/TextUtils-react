

import React, { useState } from 'react'

export default function Alert(props) {

    const handlerG=()=>{
        
     if(Bcolor==="green"){
            setBColor("light");
            document.body.style.backgroundColor="white";
        }
        else
        {
     console.log("green color set!");
     setBColor("green");
     document.body.style.backgroundColor="green";
     document.body.style.color="red ";
        }
    }

    const handlerC=()=>{
        
        if(Bcolor==="cyan"){
               setBColor("light");
               document.body.style.backgroundColor="white";
           }
           else
           {
        console.log("cyan color set!");
        setBColor("cyan");
        document.body.style.backgroundColor="cyan";
        document.body.style.color="blue";
           }
       }
    const[Bcolor,setBColor]=useState("light");




return (
<div>

{/* green button theme*/}
<button type="button" onClick={handlerG}class="btn btn-success mx-3">green</button>

{/* cyan button theme */}
<button type="button" onClick={handlerC} class="btn btn-info mx-3">cyan</button>

</div>

)
}