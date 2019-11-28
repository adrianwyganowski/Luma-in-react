import React from "react"
import "./ProductClothPreview.css";

import SizeBoxes from "../module-size-boxes/SizeBoxes"
import ColorBoxes from "../module-color-boxes/ColorBoxes"

function ProductClothPreview({ 
    changeToProductPage,
    setItemName,
    setItemRanking,
    setItemReviews,
    setItemPrice,
    setItemSizes,
    setItemColours,
    imgSrc,
    name,
    rating,
    reviews,
    price,
    sizes,
    colors
}) {
    
    function onClick(){
        changeToProductPage();
        setItemName(name);
        setItemRanking(rating)
        setItemReviews(reviews)
        setItemPrice(price)
        setItemSizes(sizes)
        setItemColours(colors)
    
    }

    return(
        <div className="productClothPreview" >
            <div className="productClothPreview_img" onClick={onClick}>
                <img src={imgSrc} alt="product"/>
                <p className="productClothPreview__name">
                {name}
                </p>
                <p className="productClothPreview__price">
                    <span className="productClothPreview__price--label">As low as </span>${price}   
                </p>
            </div>
            <div className="productClothPreview__size">
                <SizeBoxes  sizes={sizes}/>
            </div>
            <div className="productClothPreview__color">
                <ColorBoxes colors={colors} />
            </div>
          

        </div>
    )
    
} 
export default ProductClothPreview