import React from "react"
import "./Panel.css"

function Panel() {
    
    return (
        <div className="header__panel">
            <div className="header__panelContainer">
                <a href="#" className="header__panelContainer--item"> PL 
                    <svg height="7" width="14">
                        <polyline points="0,0 7,7 14,0 " style={{fill:"none",stroke:"white",strokeWidth:"2"}} />
                        Sorry, your browser does not support inline SVG.
                    </svg>
                </a>
                <a  href="#" className="header__panelContainer--item">
                    Utwórz konto
                </a>
                <span className="header__panelContainer--item">
                    lub
                </span>
                <a href="#" className="header__panelContainer--item">
                    Zaloguj się
                </a>
                <span className="header__panelContainer--item">
                    Domyślna wiadomość powitalna!
                </span>
            </div>
        </div>
    )
}

export default Panel