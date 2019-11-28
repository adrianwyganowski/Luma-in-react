import React from "react"
import "./ProductPage.css"

import BreadCrumbs from "../module-breadcrumbs/BreadCrumbs"
import ProductPageMain from "../module-product-page-main/ProductPageMain"

function ProductPage({
        breadCrumbs,
        changeToMainPage,
        itemName,
        itemRanking,
        itemReviews,
        itemPrice,
        itemSizes,
        itemColours
    }) {
    return(
        <div className="productPage">
            <BreadCrumbs 
                breadCrumbs={breadCrumbs}
                changeToMainPage={changeToMainPage}/>
            <ProductPageMain
                itemName={itemName}
                itemRanking={itemRanking}
                itemReviews={itemReviews}
                itemPrice={itemPrice}
                itemSizes={itemSizes}
                itemColours={itemColours} 
            />
        </div>
    )
}

export default ProductPage;