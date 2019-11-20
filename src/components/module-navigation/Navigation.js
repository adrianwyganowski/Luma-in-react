import React from "react"
import "./Navigation.css"
import { ReactComponent as Arrow  } from "./img/arrow.svg";

function Navigation() {

    return (
        <div className="header__navigation">
            <div className="navigationContainer">
                <nav>
                    <ul className="navigation">
                        <li><a href="#">What's new</a></li>

                        <li><a href="#">Women</a>
                            <ul>
                                <li><a href="#">Tops</a>
                                    <ul>
                                        <li><a href="#">Jackets</a></li>
                                        <li><a href="#">Hoodies & Sweatshirts</a></li>
                                        <li><a href="#">Tess</a></li>
                                        <li><a href="#">Bras & Tanks</a></li>
                                    </ul>
                                </li>
                                <li><a href="#">Bottoms</a>
                                    <ul>
                                        <li><a href="#">Pants</a></li>
                                        <li><a href="#">Shorts</a> </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>

                        <li><a href="#">Men</a>
                            <ul>
                                <li><a href="#">Tops</a>
                                    <ul>
                                        <li><a href="#">Jackets</a></li>
                                        <li><a href="#">Hoodies & Sweatshirts</a></li>
                                        <li><a href="#">Tess</a></li>
                                        <li><a href="#">Tanks</a></li>
                                    </ul>
                                </li>
                                <li><a href="#">Bottoms</a>
                                    <ul>
                                        <li><a href="#">Pants</a></li>
                                        <li><a href="#">Shorts</a> </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>

                        <li><a href="#">Gear</a>
                            <ul>
                                <li><a href="#">Bags</a></li>
                                <li><a href="#">Fitness Equipment</a></li>
                                <li><a href="#">Watches</a></li>
                            </ul>
                        </li>

                        <li><a href="#">Trening</a>
                            <ul>
                                <li><a href="#">Video Download</a></li>
                            </ul>
                        </li>

                        <li><a href="#"> Sale</a></li>

                    </ul>
                </nav>
            </div>  
        </div>

        
    )
}
export default Navigation 

