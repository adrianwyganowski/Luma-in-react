import React from "react"
import "./SecondBlock.css"
import "../BlocksPromo.css"

import secondBlock from "./img/secondBlock.jpg"

function SecondBlock(){
    return(
    <div className="secondBlock">
        <img src={secondBlock} className="img" alt="man standing"/>
        <div className="secondBlock_content">  
            <p className="secondBlock_content--title"> <b>20% OFF</b> </p>
            <p className="secondBlock_content--info">Luma pants when you shop today*</p>
            <p>Shop Pants ></p>
            {/*Change arrow above  */}

        </div>
    </div>
    )
}

export default SecondBlock
