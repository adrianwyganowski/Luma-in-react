import React from "react"
import "./SixthBlock.css"
import "../BlocksPromo.css"

import sixthBlock from "./img/sixthBlock.jpg"

function SixthBlock(){
    return(
        <div className="sixthBlock">
            <img src={sixthBlock} className="img" alt="woman in woods"/>
        </div>
    ) 
}

export default SixthBlock