import React from "react"

import BlocksPromo from "../module-blocks-promo/BlocksPromo"
import CmsHeading from "../module-cms-heading/CmsHeading";
import BlockProductList from "../module-block-product-list/BlockProductList"

function MainPage(){
    return(
        <div>
            <BlocksPromo />
            <CmsHeading/>
            <BlockProductList />
        </div>
    )
}

export default MainPage;