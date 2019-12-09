import React from "react"
import "./ProductMedia.css"

import { ReactComponent as LeftArrow } from "../web/images/left-arrow.svg";
import { ReactComponent as RightArrow } from "../web/images/right-arrow.svg";

function ProductMedia({imgsPaths, navImgsPaths}) { 
    
    let imgArr = Object.values(imgsPaths);
    let navImgArr = Object.values(navImgsPaths);

    function moveToNextImg(){
        let carusele = document.getElementsByClassName("imgsContainer__carousel")[0];
        carusele.classList.add('nextImg');

        let borderNavImg = document.getElementsByClassName("productMedia__navigation--border")[0];
        borderNavImg.classList.add("nextNavImg")
    }

    function moveToPreviewsImg(){
        let carusele = document.getElementsByClassName("imgsContainer__carousel")[0];
        carusele.classList.remove('nextImg');
        
        let borderNavImg = document.getElementsByClassName("productMedia__navigation--border")[0];
        borderNavImg.classList.remove("nextNavImg")
    }

    return(
        <div className="productMedia">
            <div className="mediaContainer">
                <div className="imgsContainer">
                    <div className="imgsContainer__carousel">
                    {imgArr.map((path) => <img src={path} key={`img ${path}`}   alt="img of product"/>)}
                    </div>
                </div>
                
                <div  className="mediaContainer__firstButton" onClick={moveToPreviewsImg}>
                    <LeftArrow />
                </div> 
                <div  className="mediaContainer__secondButton" onClick={moveToNextImg}>
                    <RightArrow />
                </div>
            </div>
            <div className="productMedia__navigation">
                {navImgArr.map((path) => <img src={path} key={`img ${path}`}   alt="img of navigation product"/>)}
                <span className="productMedia__navigation--border">  </span>
            </div>
            
            
        </div>
    )
    
}

export default ProductMedia