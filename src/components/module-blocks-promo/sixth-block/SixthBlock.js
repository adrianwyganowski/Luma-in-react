import React from "react"
import "./SixthBlock.css"
import "../BlocksPromo.css"

import sixthBlock from "./img/sixthBlock.jpg"

function SixthBlock(){
    return(
        <div className="sixthBlock">
            <img src={sixthBlock} className="img" alt="woman in woods"/>
            <div className="sixthBlock__content">
                <p className="sixthBlock__content--title">Twice around, twice as nice</p>
                <p className="sixthBlock__content--info"> Find conscientious, comfy clothing in our eco-friendly  collection </p>
                <p>Shop Eco-Friendly ></p>
                {/*Change arrow above  */}
            </div>
        </div>
    ) 
}

export default SixthBlock