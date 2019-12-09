import React  from "react"

import BlocksPromo from "../module-blocks-promo/BlocksPromo"
import CmsHeading from "../module-cms-heading/CmsHeading";
import BlockProductList from "../module-block-product-list/BlockProductList"

function MainPage({
    setItemName,
    setItemRanking,
    setItemReviews,
    setItemPrice,
    setItemSizes,
    setItemColours}){
    

    return(
        <main>
            <BlocksPromo />
            <CmsHeading 
                header="Hot Sellers" 
                paragraph="Here is what`s trending on Luma right now"
            />
            <BlockProductList 
                setItemName={setItemName}
                setItemRanking={setItemRanking}
                setItemReviews={setItemReviews}
                setItemPrice={setItemPrice}
                setItemSizes={setItemSizes}
                setItemColours={setItemColours}
            />
        </main>
    )
}

export default MainPage;