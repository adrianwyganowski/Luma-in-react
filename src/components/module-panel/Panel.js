import React from "react"
import "./Panel.css"
import {ReactComponent as Arrow} from "./img/arrowMenu.svg"

function Panel() {
    
    return (
        <div className="header__panel">
            <div className="panelContainer">
                <a href="#" className="panelContainer__item"> 
                    <span>EN</span> 
                    <Arrow />
                </a>
                <a  href="#" className="panelContainer__item">
                    Create an Account
                </a>
                <span className="panelContainer__item">
                    or
                </span>
                <a href="#" className="panelContainer__item">
                    Sign
                </a>
                <span className="panelContainer__item">
                    Default welcome msg!
                </span>
            </div>
        </div>
    )
}

export default Panel