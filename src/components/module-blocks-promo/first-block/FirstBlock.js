import React from "react"
import "./FirstBlock.css"
import "../BlocksPromo.css"

import firstBlock from "./img/firstBlock.jpg"

function FirstBlock() {
    
    return(
        
        <div className="firstBlock">
            <img src={firstBlock} className="img" alt="meditating woman"/>
            <div className="firstBlock__content">
                <p className="firstBlock__content--info">New Luma Yoga Collection</p>
                <p className="firstBlock__content--title">Get fit and look fab in new seasonal styles</p>
                <div className="firstBlock__content--button">
                    <b>Shop New Yoga</b>
                </div>
            </div>  
        </div>
    )
}

export default FirstBlock