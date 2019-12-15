import React from "react"
import './RelatedProductPreview.css'

import chart from "../web/images/chart.png"

function RelatedProductPreview({    
    setItemName,
    setItemRanking,
    setItemReviews,
    setItemPrice,
    setItemSizes,
    setItemColours,
    setItemPhotos,
    setItemNavigationPhotos,

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
        setItemName(name);
        setItemRanking(rating)
        setItemReviews(reviews)
        setItemPrice(price)
        setItemSizes(sizes)
        setItemColours(colors)
        setItemPhotos(imgsPaths)
        setItemNavigationPhotos(itemNavigationPhotos)
    
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