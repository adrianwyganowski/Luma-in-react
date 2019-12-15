import React from "react"
import './RelatedProductPreview.css'

import chart from "../web/images/chart.png"

function RelatedProductPreview({    
    
    setDataObj,

    imgSrc,
    name,
    rating,
    reviews,
    price,
    sizes,
    colors,  
    imgsPaths,
    itemNavigationPhotos

    }) {

    function sendDataToState(){
        setDataObj.setItemName(name);
        setDataObj.setItemRanking(rating)
        setDataObj.setItemReviews(reviews)
        setDataObj.setItemPrice(price)
        setDataObj.setItemSizes(sizes)
        setDataObj.setItemColours(colors)
        setDataObj.setItemPhotos(imgsPaths)
        setDataObj.setItemNavigationPhotos(itemNavigationPhotos)
        }

    return(
        <div className="relatedProductPreview">
            <div className="relatedProductPreview__img" onClick={sendDataToState}>
                <img src={imgSrc} alt="product"/>
                <p className="relatedProductPreview__name">
                {name}
                </p>
                <p className="relatedProductPreview__price">
                    <span className="relatedProductPreview__price--label">As low as </span>${price}   
                </p>
            </div>
            <div className="relatedProductPreview__social">
                <span>&#10084; </span> <img src={chart} alt="chart icon"/>
            </div>
        </div>
    )
}

export default RelatedProductPreview