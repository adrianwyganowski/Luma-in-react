import React from "react"
import "./Navigation.css"

function Navigation() {

    return (
        <div className="header__navigation">
            <nav className="navigationContainer">  
                <ul className="navigationList">
                    <li className="navigationList__firstLevel">
                        <a >What's New</a>
                    </li>

                    <li  className="navigationList__firstLevel">
                        <a>Woman</a>
                        
                        <ul>
                            <li className="navigationList__secondLevel">
                                <a>Tops</a>
                                <ul>
                                    <li className="navigationList__thirdLevel">
                                        <a>Jackets</a>
                                    </li>
                                    
                                    <li className="navigationList__thirdLevel">
                                        <a>Hoodies & Sweatshirts</a> 
                                    </li>
                                    
                                    <li className="navigationList__thirdLevel">
                                        <a>Tees</a> 
                                    </li>
                                    
                                    <li className="navigationList__thirdLevel">
                                        <a>Bras & Tanks</a> 
                                    </li>
                                </ul>
                            </li>
                        </ul> 

                        <ul>
                            <li className="navigationList__secondLevel">
                                <a>Bottoms</a>
                                <ul>
                                    <li className="navigationList__thirdLevel"> 
                                        <a>Pants</a>
                                    </li>
                                    
                                    <li className="navigationList__thirdLevel">
                                        <a>Shorts</a> 
                                    </li>

                                </ul>
                            </li>
                        </ul> 
                    </li>

                    <li className="navigationList__firstLevel">
                        <a>Mam</a>
                        
                        <ul>
                            <li className="navigationList__secondLevel">
                                <a>Tops</a>
                                <ul>
                                    <li className="navigationList__thirdLevel">
                                        <a>Jackets</a>
                                    </li>
                                    
                                    <li className="navigationList__thirdLevel">
                                        <a>Hoodies & Sweatshirts</a> 
                                    </li>
                                    
                                    <li className="navigationList__thirdLevel">
                                        <a>Tees</a> 
                                    </li>
                                    
                                    <li className="navigationList__thirdLevel">
                                        <a>Tanks</a> 
                                    </li>
                                </ul>
                            </li>
                        </ul> 

                        <ul>
                            <li className="navigationList__secondLevel">
                                <a>Bottoms</a>
                                <ul>
                                    <li className="navigationList__thirdLevel">
                                        <a>Pants</a>
                                    </li>
                                    
                                    <li className="navigationList__thirdLevel">
                                        <a>Shorts</a> 
                                    </li>

                                </ul>
                            </li>
                        </ul> 
                    </li>

                    <li className="navigationList__firstLevel">
                       <a>Gear</a>
                        <ul>
                            <li className="navigationList__secondLevel">
                              <a>Bags</a>
                            </li>

                            <li className="navigationList__secondLevel">
                                <a>Fitness Equipment</a>
                            </li>

                            <li className="navigationList__secondLevel">
                                <a>Watches</a>
                            </li>  
                        </ul>
                    </li>

                    <li className="navigationList__firstLevel"> 
                        <a>Trening</a>

                        <ul>
                            <li className="navigationList__secondLevel">
                                <a>Video Download</a>   
                            </li>
                           
                        </ul> 
                    </li>

                    <li className="navigationList__firstLevel">
                        <ul>
                            <li className="navigationList__secondLevel">
                                <a>Sale</a>     
                            </li>
                        </ul>
                               
                    </li>
                </ul>
            </nav>
        </div>
    )
}
export default Navigation 