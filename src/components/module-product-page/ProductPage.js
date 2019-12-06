import React from "react"
import "./ProductPage.css"

import BreadCrumbs from "../module-breadcrumbs/BreadCrumbs"
import ProductPageMain from "../module-product-page-main/ProductPageMain"

function ProductPage({
        breadCrumbs,
        itemName,
        itemRanking,
        itemReviews,
        itemPrice,
        itemSizes,
        itemColours,

        setItemName,
        setItemRanking,
        setItemReviews,
        setItemPrice,
        setItemSizes,
        setItemColours

    }) {
    return(
        <div className="productPage">
            <BreadCrumbs breadCrumbs={breadCrumbs}/>
            <ProductPageMain
                itemName={itemName}
                itemRanking={itemRanking}
                itemReviews={itemReviews}
                itemPrice={itemPrice}
                itemSizes={itemSizes}
                itemColours={itemColours} 

                setItemName={setItemName}
                setItemRanking={setItemRanking}  
                setItemReviews={setItemReviews}
                setItemPrice={setItemPrice} 
                setItemSizes={setItemSizes}  
                setItemColours={setItemColours}          
            />
        </div>
    )
}

export default ProductPage;