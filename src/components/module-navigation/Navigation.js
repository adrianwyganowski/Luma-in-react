import React from "react"
import {Link} from "react-router-dom"
import "./Navigation.css"

import { ReactComponent as Arrow  } from "../web/images/down-arrow-menu.svg";
import { ReactComponent as RightArrow  } from "../web/images/right-arrow-menu.svg";


function Navigation() {

    return (
        <div className="header__navigation " data-mobilenavigationdisplayed="false">
            <div className="navigationContainer">
                <nav>
                    <ul className="navigation">
                        <Link to="/what-is-new"> <li className="firstLevelNav"><p>What's new</p></li> </Link>

                        <li className="firstLevelNav"><Link to="/women"><p>Women <span className='navigation__arrowDown'><Arrow /></span> </p> </Link>
                        
                            <ul>
                                <li className="secondLevelNav"><Link to="/category"> <p>Tops <span className='navigation__arrowRight'> <RightArrow /> </span></p> </Link>
                                    <ul>
                                        <Link to="/category"><li><p>Jackets</p> </li> </Link>
                                        <Link to="/category"><li><p>Hoodies & Sweatshirts</p></li> </Link>
                                        <Link to="/category"><li><p>Tees</p></li> </Link>
                                        <Link to="/category"><li><p>Bras & Tanks</p></li> </Link>
                                    </ul>
                                </li>
                                <li className="secondLevelNav"><Link to="/category"> <p>Bottoms <span className='navigation__arrowRight'> <RightArrow /> </span></p>  </Link>
                                    <ul>
                                        <Link to="/category"><li><p>Pants</p></li> </Link>
                                        <Link to="/category"><li><p>Shorts</p> </li> </Link>
                                    </ul>
                                </li>
                            </ul>
                        </li>

                        <li className="firstLevelNav"><Link to="/men"> <p>Men <span className='navigation__arrowDown'><Arrow /></span> </p> </Link>
                            <ul>
                                <li className="secondLevelNav"><Link to="/category"><p>Tops <span className='navigation__arrowRight'> <RightArrow /> </span></p> </Link>
                                    <ul>
                                        <Link to="/category"><li><p>Jackets</p></li> </Link>
                                        <Link to="/category"><li><p>Hoodies & Sweatshirts</p></li> </Link>
                                        <Link to="/category"><li><p>Tees</p></li> </Link>
                                        <Link to="/category"><li><p>Tanks</p></li> </Link>
                                    </ul>
                                </li>
                                <li className="secondLevelNav"><Link to="/category"> <p>Bottoms <span className='navigation__arrowRight'> <RightArrow /> </span></p> </Link>
                                    <ul>
                                        <Link to="/category"><li><p>Pants</p></li> </Link>
                                        <Link to="/category"><li><p>Shorts</p> </li> </Link>
                                    </ul>
                                </li>
                            </ul>
                        </li>

                        <li className="firstLevelNav"> <Link to="/gear"> <p>Gear <span className='navigation__arrowDown'><Arrow /></span></p> </Link>
                            <ul>
                                <Link to="/category"><li><p>Bags</p></li> </Link>
                                <Link to="/category"><li><p>Fitness Equipment</p></li> </Link>
                                <Link to="/category"><li><p>Watches</p></li> </Link>
                            </ul>
                        </li>

                        <li className="firstLevelNav"><Link to="/training"><p>Training <span className='navigation__arrowDown'><Arrow /></span></p> </Link>
                            <ul>
                                <Link to="/category"><li><p>Video Download</p></li></Link>
                            </ul>
                        </li>

                        <Link to="/sale"><li className="firstLevelNav"><p>Sale</p></li></Link> 

                    </ul>
                </nav>
            </div>  
        </div>

        
    )
}
export default Navigation 

