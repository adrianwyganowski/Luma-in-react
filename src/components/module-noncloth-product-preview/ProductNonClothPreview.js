import React from "react"
import "./ProductNonClothPreview.css"

function ProductNonClothPreview(props) {    
    return(
        <div className="productNonClothPreview" >
            <a className="productNonClothPreview_img" href="#">
                <img src={props.imgSrc} alt="product"/>
                <p className="productNonClothPreview__name">
                {props.name}
                </p>
                <p className="productNonClothPreview__price">
                    <span className="productNonClothPreview__price--label">As low as </span>PLN{props.price}   
                </p>
            </a>
        </div>
    )
}

export default ProductNonClothPreview