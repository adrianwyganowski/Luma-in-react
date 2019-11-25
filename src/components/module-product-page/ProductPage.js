import React from "react"
import "./ProductPage.css"

import BreadCrumbs from "../module-breadcrumbs/BreadCrumbs"
import ProductPageMain from "../module-product-page-main/ProductPageMain"

function ProductPage() {
    return(
        <div className="productPage">
            <BreadCrumbs path={["Home", "Woman" , "Product"]}/>
            <ProductPageMain />
        </div>
    )
}

export default ProductPage;