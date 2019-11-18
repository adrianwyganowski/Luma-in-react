import React from "react"

import BlocksPromo from "../module-blocks-promo/BlockPromo"
import ContentHeading from "../module-content-heading/ContentHeading";
import BlockProductList from "../module-block-product-list/BlockProductList"

function Cms() {
    
    return(
        <main>
            <BlocksPromo />
            <ContentHeading/>
            <BlockProductList />
        </main>
    )
}

export default Cms