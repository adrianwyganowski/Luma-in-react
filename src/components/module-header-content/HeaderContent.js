import React from "react"
import "./HeaderContent.css"
import { ReactComponent as Logo } from "./img/logo.svg";
import cart from "./img/cart.png"

function HeaderContent(){

    return(
        <div className="header__headerContent">
            <div className="headerContentContainer">
                <div className="headerContentContainer__logo">
                    <Logo />
                </div>

                <div className="headerContentContainer__formAndCart">
                    {/* TODO add lupe to form */}
                    <form>
                        <input className="headerContentContainer__formAndCart--form" type="text" name="search" placeholder="Szukaj w sklepie..." /> 
                    </form>  
                    <div className="headerContentContainer__formAndCart--cartIcon">
                       <img src={cart} alt="cart icon" />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default HeaderContent