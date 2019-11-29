import React from "react";
import "./ProductInfoMain.css"

import ReviewsContainer from "../module-reviews-container/ReviewsContainer"
import SizeBoxes from "../module-size-boxes/SizeBoxes"
import ColorBoxes from "../module-color-boxes/ColorBoxes"

import chart from "../web/images/chart.png"

function ProductInfoMain({
    itemName,
    itemRanking,
    itemReviews,
    itemPrice,
    itemSizes,
    itemColours    
}) {
    return(
        <div className="productInfoMain">
            <div className="productInfoMain__title">
                <p>{itemName}</p>
                {/* <p>DUMMY TEXT</p> */}
            </div>
                <ReviewsContainer itemRanking={itemRanking} itemReviews={itemReviews}/>
                <div className="priceContainer">
                    <div className="priceContainer__priceContainer">
                        <p className="priceContainer__priceContainer-label">As low as</p>
                        <p className="priceContainer__priceContainer-price">${itemPrice}</p>
                    </div>
                    <div className="priceContainer__inStockContainer">
                        <p className="priceContainer__inStockContainer-inStock">IN STOCK</p>
                        <p className="priceContainer__inStockContainer-sku">SKU#: WT09</p>
                    </div>
                </div>
                <form className="productFormContainer">
                    <div className="productFormContainer__sizesContainer">
                        <p className="productFormContainer__sizesContainer--label">Size</p> 
                        {/* TODO crate state depending on click block size and displaying paragraph with choosen size next to size  */}
                        <div className="productFormContainer__sizesContainer--avelibleSizes">
                            <SizeBoxes sizes={itemSizes} />
                        </div>
                    </div>
                    <div className="productFormContainer__colourContainer">
                        <p className="productFormContainer__colourContainer--label">Color</p>
                        <div className="productFormContainer__colourContainer--avelibleColours">
                            <ColorBoxes colors={itemColours} />
                        </div>
                    </div>
                    <div className="productFormContainer__quantityContainer">
                        <p className="productFormContainer__quantityContainer--label">Qty</p> 
                        <input type="number" className="productFormContainer__quantityContainer--input" defaultValue="1"></input>
                    </div>
                    <button className="productFormContainer__button">
                        Add to Cart
                    </button>
                    <div className="productFormContainer__socialLinksContainer">
                        <div className="productFormContainer__socialLinksContainer--wishList">
                            <span>&#10084; </span> ADD TO WISH LIST
                        </div>
                        <div className="productFormContainer__socialLinksContainer--compare">
                            <span> <img src={chart}  alt="chart icon"/> </span>  ADD TO COMPERE
                        </div>
                    </div>
                </form>
            </div>
        
    )
}

export default ProductInfoMain
