import React , {useState} from "react"

import BlocksPromo from "../module-blocks-promo/BlocksPromo"
import CmsHeading from "../module-cms-heading/CmsHeading";
import BlockProductList from "../module-block-product-list/BlockProductList"

function MainPage({
    changeToProductPage,
    setItemName,
    setItemRanking,
    setItemReviews,
    setItemSizes,
    setItemColours}){
    

    return(
        <div>
            <BlocksPromo />
            <CmsHeading/>
            <BlockProductList 
                changeToProductPage={changeToProductPage}
                setItemName={setItemName}
                setItemRanking={setItemRanking}
                setItemReviews={setItemReviews}
                setItemSizes={setItemSizes}
                setItemColours={setItemColours}
            />
        </div>
    )
}

export default MainPage;