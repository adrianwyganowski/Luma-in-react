import React from "react"
import "./CategoiresPage.css"

import WhatsNew from "./module-whats-new/WhatsNew"

function CategoriesPage({
    subPage,
    changeToProductPage,
    setItemName,
    setItemRanking,
    setItemReviews,
    setItemPrice,
    setItemSizes,
    setItemColours
}){

    const display = x => {
        switch (x) {
            case "whatsNew":
                return <WhatsNew  
                    changeToProductPage={changeToProductPage}
                    setItemName={setItemName}
                    setItemRanking={setItemRanking}  
                    setItemReviews={setItemReviews}
                    setItemPrice={setItemPrice} 
                    setItemSizes={setItemSizes}  
                    setItemColours={setItemColours}  
                
                />
                break;

            default:
                return "Something went wrong"
        }
    }
    return(
        <div>
            {display(subPage)}
        </div>
    )
}

export default CategoriesPage