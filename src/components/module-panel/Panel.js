import React from "react"
import "./Panel.css"
import {ReactComponent as Arrow} from "./img/arrowMenu.svg"

function Panel() {
    
    return (
        <div className="header__panel">
            <div className="panelContainer">
                <a href="#" className="panelContainer__item"> 
                    <span>PL</span> 
                    <Arrow />
                </a>
                <a  href="#" className="panelContainer__item">
                    Utwórz konto
                </a>
                <span className="panelContainer__item">
                    lub
                </span>
                <a href="#" className="panelContainer__item">
                    Zaloguj się
                </a>
                <span className="panelContainer__item">
                    Domyślna wiadomość powitalna!
                </span>
            </div>
        </div>
    )
}

export default Panel