import React from "react"
import "./ProductPageMain.css"

import ProductMedia from "../module-product-media/ProductMedia"
import ProductInfoMain from "../module-product-info-main/ProductInfoMain";
import ProductDataItems from "../module-product-data-items/ProductDataItems"
import RelatedProducts from "../module-related-products/RelatedProducts"


function ProductPageMain({
    dataToDisplayObj,
    setDataObj
}){

    return(
        <div className="productPageMain">
            <div className="productPageMain__mainColumn">
                <ProductMedia itemPhotos={dataToDisplayObj.itemPhotos} itemNavigationPhotos={dataToDisplayObj.itemNavigationPhotos} />
                <ProductInfoMain 
                    itemName={dataToDisplayObj.itemName}
                    itemRanking={dataToDisplayObj.itemRanking}
                    itemReviews={dataToDisplayObj.itemReviews}
                    itemPrice={dataToDisplayObj.itemPrice}
                    itemSizes={dataToDisplayObj.itemSizes}
                    itemColours={dataToDisplayObj.itemColours} 
                />
            </div>
            <ProductDataItems itemReviews={dataToDisplayObj.itemReviews}  itemName={dataToDisplayObj.itemName}/>
            <RelatedProducts setDataObj={setDataObj}/>
        </div>
    )
}

export default ProductPageMain