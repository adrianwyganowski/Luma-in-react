import React , {useState} from "react"
import "./ProductPageMain.css"

import ProductMedia from "../module-product-media/ProductMedia"
import ProductInfoMain from "../module-product-info-main/ProductInfoMain";
import ProductDataItems from "../module-product-data-items/ProductDataItems"
import RelatedProducts from "../module-related-products/RelatedProducts"


function ProductPageMain({
    itemName,
    itemRanking,
    itemReviews,
    itemPrice,
    itemSizes,
    itemColours,

}){
    let imgsPaths ={
        0 : require ("../web/images/1-bg-img-id-1.jpg"),
        1   : require ("../web/images/2-bg-img-id-1.jpg")
    }

    let navImgsPaths ={
        0 : require ("../web/images/1-sm-img-id-1.jpg"),
        1   : require ("../web/images/2-sm-img-id-1.jpg")
    }

    return(
        <div className="productPageMain">
            <div className="productPageMain__mainColumn">
                <ProductMedia imgsPaths={imgsPaths} navImgsPaths={navImgsPaths} />
                <ProductInfoMain 
                    itemName={itemName}
                    itemRanking={itemRanking}
                    itemReviews={itemReviews}
                    itemPrice={itemPrice}
                    itemSizes={itemSizes}
                    itemColours={itemColours} 
                />
            </div>
            <ProductDataItems />
            <RelatedProducts />
        </div>
    )
}

export default ProductPageMain