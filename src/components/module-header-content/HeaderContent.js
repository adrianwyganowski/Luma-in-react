import React from "react"
import {Link} from "react-router-dom"
import "./HeaderContent.css"

import { ReactComponent as Logo } from "./img/logo.svg";
import cart from "./img/cart.png"

function HeaderContent(){

    function dispalyMobileNav(e){
        const nav = document.getElementsByClassName("header__navigation")[0];
        const app = document.getElementsByClassName("app")[0];
        const body = document.body;
        if (nav.dataset.mobilenavigationdisplayed === "false"){
            nav.classList.add("mobileNav")
            nav.dataset.mobilenavigationdisplayed = "true"
            app.classList.add("appMovedForMobileNav")
            body.classList.add("bodyStopScroll")
        }
        else{
            nav.classList.remove("mobileNav")
            nav.dataset.mobilenavigationdisplayed = "false"
            app.classList.remove("appMovedForMobileNav")
            body.classList.remove("bodyStopScroll")
        }
    }
    return(
        <div className="header__headerContent">
            <div className="headerContentContainer">
                
                <div className="headerContentContainer__logoAndMenu">
                    <div className="headerContentContainer__hamburgerMenu" onClick={dispalyMobileNav}>
                        <div className="headerContentContainer__hamburgerMenu--line"></div>
                        <div className="headerContentContainer__hamburgerMenu--line"></div>
                        <div className="headerContentContainer__hamburgerMenu--line"></div>
                    </div>
                    <Link to="/">
                        <Logo />
                    </Link>
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