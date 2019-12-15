import React from "react"
import "./ProductPage.css"

import BreadCrumbs from "../module-breadcrumbs/BreadCrumbs"
import ProductPageMain from "../module-product-page-main/ProductPageMain"

function ProductPage({
        breadCrumbs,
        dataToDisplayObj,
        setDataObj

    }) {
    return(
        <div className="productPage">
            <BreadCrumbs breadCrumbs={breadCrumbs}/>
            <ProductPageMain
                dataToDisplayObj={dataToDisplayObj}

                setDataObj={setDataObj}
            />
        </div>
    )
}

export default ProductPage;