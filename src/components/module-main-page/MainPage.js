import React  from "react"

import BlocksPromo from "../module-blocks-promo/BlocksPromo"
import CmsHeading from "../module-cms-heading/CmsHeading";
import BlockProductList from "../module-block-product-list/BlockProductList"

function MainPage({setDataObj}){
    

    return(
        <main>
            <BlocksPromo />
            <CmsHeading 
                header="Hot Sellers" 
                paragraph="Here is what`s trending on Luma right now"
            />
            <BlockProductList 
            setDataObj={setDataObj}
            />
        </main>
    )
}

export default MainPage;