import React from "react"
import {Link} from "react-router-dom"
import "./ProductClothPreview.css";

import SizeBoxes from "../module-size-boxes/SizeBoxes"
import ColorBoxes from "../module-color-boxes/ColorBoxes"
import StarRating from "../module-star-rating/StarRating"
import Reviews from "../module-reviews/Reviews"

import chart from "../web/images/chart.png"

function ProductClothPreview({ 
 
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
        <div className="productClothPreview" >
            <Link to="/product">
                <div className="productClothPreview_img" onClick={sendDataToState}>
                    <img src={imgSrc} alt="product"/>
                    <p className="productClothPreview__name">
                    {name}
                    </p>
                    <div className="productClothPreview__ratingAndReviews">
                        <StarRating itemRating={rating} />
                        <Reviews itemReviews={reviews}/>
                    </div>
                    <p className="productClothPreview__price">
                        <span className="productClothPreview__price--label">As low as </span>${price}   
                    </p>
                </div>
            </Link>
            <div className="productClothPreview__size">
                <SizeBoxes  sizes={sizes}/>
            </div>
            <div className="productClothPreview__color">
                <ColorBoxes colors={colors} />
            </div>
            <div className="productClothPreview__onHover">
                <div className="productActionsContainer">
                    <div className="productActionsContainer__button">
                        Add to Cart
                    </div>
                    <div>
                        <span className="productActionsContainer__wishList">&#10084; </span>
                    </div>
                    <div>
                        <img src={chart}  alt="chart icon"/> 
                    </div>
                </div>
            </div>
          

        </div>
    )
    
} 
export default ProductClothPreview