import React from "react"
import "./ProductNonClothPreview.css"

function ProductNonClothPreview(props) {    
    return(
        <div className="productNonClothPreview">
            <div className="productNonClothPreview_img"  onClick={props.changeToProductPage}>
                <img src={props.imgSrc} alt="product"/>
                <p className="productNonClothPreview__name">
                {props.name}
                </p>
                <p className="productNonClothPreview__price">
                    <span className="productNonClothPreview__price--label">As low as </span>${props.price}   
                </p>
            </div>
        </div>
    )
}

export default ProductNonClothPreview