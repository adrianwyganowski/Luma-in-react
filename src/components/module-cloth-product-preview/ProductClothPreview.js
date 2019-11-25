import React from "react"
import "./ProductClothPreview.css";

function ProductClothPreview(props) {
    
    return(
        <div className="productClothPreview" >
            <a className="productClothPreview_img" href="#">
                <img src={props.imgSrc} alt="product"/>
                <p className="productClothPreview__name">
                {props.name}
                </p>
                <p className="productClothPreview__price">
                    <span className="productClothPreview__price--label">As low as </span>PLN{props.price}   
                </p>
            </a>
            <div className="productClothPreview__size">
                {props.sizes.map((size) => {return <div className="productClothPreview__size--block">{size}</div>})}
            </div>
            <div className="productClothPreview__color">
                {props.colors.map((color) => {
                    return <div className="productClothPreview__color--block" style={{backgroundColor: color[1] }}></div>})
                    }
            </div>
          

        </div>
    )
    
} 
export default ProductClothPreview