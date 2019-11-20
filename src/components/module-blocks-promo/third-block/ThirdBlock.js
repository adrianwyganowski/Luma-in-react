import React from "react"
import "./ThirdBlock.css"
import "../BlocksPromo.css"

import thirdBlock from "./img/thirdBlock.png"

function ThirdBlock() {
    return(
        <div className="thirdBlock">
            <img src={thirdBlock} className="img" alt="shirts on yellow background"/>
        </div>
    )
}

export default ThirdBlock

