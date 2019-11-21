import React from "react"
import "./ThirdBlock.css"
import "../BlocksPromo.css"

import thirdBlock from "./img/thirdBlock.png"

function ThirdBlock() {
    return(
        <div className="thirdBlock">
            <div className="thirdBlock__imgContainer">
                <img src={thirdBlock} className="thirdBlock__imgContainer--img" alt="shirts on yellow background"/>
            </div>
            <div className="thirdBlock__contentContainer">
                <p className="thirdBlock__contentContainer--title">Even more ways to mix and match</p>
                <p className="thirdBlock__contentContainer--info">Buy 3 Luma tees get a 4th free</p>
                <p>Shop Tess ></p>
                {/* TO DO ARROW ABOVE */}
            </div>
            
        </div>
    )
}

export default ThirdBlock

