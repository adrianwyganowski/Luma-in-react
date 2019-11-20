import React from "react"
import "./FourthBlock.css"
import "../BlocksPromo.css"

import fourthBlock from "./img/fourthBlock.jpg"

function FourthBlock(){
    return(
        <div className="fourthBlock">
            <img src={fourthBlock} className="img" alt="smiling woman"/>
        </div>
    ) 
}

export default FourthBlock