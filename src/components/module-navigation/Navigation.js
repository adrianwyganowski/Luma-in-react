import React from "react"
import "./Navigation.css"

import { ReactComponent as Arrow  } from "../web/images/down-arrow-menu.svg";
import { ReactComponent as RightArrow  } from "../web/images/right-arrow-menu.svg";


function Navigation() {

    return (
        <div className="header__navigation">
            <div className="navigationContainer">
                <nav>
                    <ul className="navigation">
                        <li className="firstLevelNav"><a href="#">What's new</a></li>

                        <li className="firstLevelNav"><a href="#">Women <span className='navigation__arrowDown'><Arrow /></span></a>
                        
                            <ul>
                                <li className="secondLevelNav"><a href="#">Tops <span className='navigation__arrowRight'> <RightArrow /> </span></a>
                                    <ul>
                                        <li><a href="#">Jackets</a></li>
                                        <li><a href="#">Hoodies & Sweatshirts</a></li>
                                        <li><a href="#">Tees</a></li>
                                        <li><a href="#">Bras & Tanks</a></li>
                                    </ul>
                                </li>
                                <li className="secondLevelNav"><a href="#">Bottoms <span className='navigation__arrowRight'> <RightArrow /> </span></a>
                                    <ul>
                                        <li><a href="#">Pants</a></li>
                                        <li><a href="#">Shorts</a> </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>

                        <li className="firstLevelNav"><a href="#">Men <span className='navigation__arrowDown'><Arrow /></span></a>
                            <ul>
                                <li className="secondLevelNav"><a href="#">Tops <span className='navigation__arrowRight'> <RightArrow /> </span></a>
                                    <ul>
                                        <li><a href="#">Jackets</a></li>
                                        <li><a href="#">Hoodies & Sweatshirts</a></li>
                                        <li><a href="#">Tees</a></li>
                                        <li><a href="#">Tanks</a></li>
                                    </ul>
                                </li>
                                <li className="secondLevelNav"><a href="#">Bottoms <span className='navigation__arrowRight'> <RightArrow /> </span></a>
                                    <ul>
                                        <li><a href="#">Pants</a></li>
                                        <li><a href="#">Shorts</a> </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>

                        <li className="firstLevelNav"><a href="#">Gear <span className='navigation__arrowDown'><Arrow /></span></a>
                            <ul>
                                <li><a href="#">Bags</a></li>
                                <li><a href="#">Fitness Equipment</a></li>
                                <li><a href="#">Watches</a></li>
                            </ul>
                        </li>

                        <li className="firstLevelNav"><a href="#">Trening <span className='navigation__arrowDown'><Arrow /></span></a>
                            <ul>
                                <li><a href="#">Video Download</a></li>
                            </ul>
                        </li>

                        <li className="firstLevelNav"><a href="#"> Sale</a></li>

                    </ul>
                </nav>
            </div>  
        </div>

        
    )
}
export default Navigation 

