import React from "react"
import "./ProductPage.css"

import BreadCrumbs from "../module-breadcrumbs/BreadCrumbs"
import ProductPageMain from "../module-product-page-main/ProductPageMain"

function ProductPage({breadCrumbs ,changeToMainPage}) {
    return(
        <div className="productPage">
            <BreadCrumbs 
                breadCrumbs={breadCrumbs}
                changeToMainPage={changeToMainPage}/>
            <ProductPageMain />
        </div>
    )
}

export default ProductPage;