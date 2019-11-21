import React from "react"
import "./FifthBlock.css"
import "../BlocksPromo.css"

import fifthBlock from "./img/fifthBlock.jpg"

function FifthdBlock(){
    return(
        <div className="fifthBlock">
            <img src={fifthBlock} className="img" alt="standing woman"/>
            <div className="fifthBlock__content">
                <p className="fifthBlock__content--title">Science meets performance</p>
                <p className="fifthBlock__content--info"> Wicking to raingear, Luma covers you </p>
                <p>Shop Performance ></p>
                {/*Change arrow above  */}
            </div>
        </div>
    ) 
}

export default FifthdBlock