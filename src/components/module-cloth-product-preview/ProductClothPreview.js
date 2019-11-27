import React from "react"
import "./ProductClothPreview.css";

function ProductClothPreview({ 
    changeToProductPage,
    setItemName,
    //TO DO RANKING AND REVIEWS
    setItemRanking,
    setItemReviews,
    setItemSizes,
    setItemColours,
    imgSrc,
    name,
    price,
    sizes,
    colors
}) {
    
    function onClick(){
        changeToProductPage();
        setItemName(name);
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
                    <span className="productClothPreview__price--label">As low as </span>PLN{price}   
                </p>
            </div>
            <div className="productClothPreview__size">
                {sizes.map((size) => {return <div className="productClothPreview__size--block">{size}</div>})}
            </div>
            <div className="productClothPreview__color">
                {colors.map((color) => {
                    return <div className="productClothPreview__color--block" style={{backgroundColor: color[1] }}></div>})
                    }
            </div>
          

        </div>
    )
    
} 
export default ProductClothPreview