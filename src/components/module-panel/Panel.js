import React from "react"
import "./Panel.css"
import {ReactComponent as Arrow} from "./img/arrowMenu.svg"

function Panel() {
    
    return (
        <div className="header__panel">
            <div className="panelContainer">
                <p href="#" className="panelContainer__item"> 
                    <span>EN</span> 
                    <Arrow />
                </p>
                <p  href="#" className="panelContainer__item">
                    Create an Account
                </p>
                <span className="panelContainer__item">
                    or
                </span>
                <p href="#" className="panelContainer__item">
                    Sign
                </p>
                <span className="panelContainer__item">
                    Default welcome msg!
                </span>
            </div>
        </div>
    )
}

export default Panel