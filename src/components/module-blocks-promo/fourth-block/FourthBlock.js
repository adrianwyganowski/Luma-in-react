import React from "react"
import "./FourthBlock.css"
import "../BlocksPromo.css"

import fourthBlock from "./img/fourthBlock.jpg"

function FourthBlock(){
    return(
        <div className="fourthBlock">
            <img src={fourthBlock} className="img" alt="smiling woman"/>
            <div className="fourthBlock__content">
                <p className="fourthBlock__content--title">Take it from Erin</p>
                <p className="fourthBlock__content--info">Luma founder Erin Renny shares her favorites!</p>
                <p>Shop Erin Recommends ></p>
            </div>
        </div>
    ) 
}

export default FourthBlock