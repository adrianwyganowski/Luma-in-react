import React from "react"
import "./CategoiresPage.css"

import WhatsNew from "./module-whats-new/WhatsNew"
import WomenCategory from "./module-women-category/WomenCategory"
import MenCategory from "./module-men-category/MenCategory"
import GearCategory from "./module-gear-category/GearCategory"
import TrainingCategory from "./module-training-category/TrainingCategory"
import SaleCategory from "./module-sale-category/SaleCategory"

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
            case "WhatsNew":
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

            case "WomenCategory":
            return <WomenCategory  
                changeToProductPage={changeToProductPage}
                setItemName={setItemName}
                setItemRanking={setItemRanking}  
                setItemReviews={setItemReviews}
                setItemPrice={setItemPrice} 
                setItemSizes={setItemSizes}  
                setItemColours={setItemColours}  
            
            />
            break;

            case "MenCategory":
            return <MenCategory  
                changeToProductPage={changeToProductPage}
                setItemName={setItemName}
                setItemRanking={setItemRanking}  
                setItemReviews={setItemReviews}
                setItemPrice={setItemPrice} 
                setItemSizes={setItemSizes}  
                setItemColours={setItemColours}  
            
            />
            break;

            case "GearCategory":
            return <GearCategory 
                    changeToProductPage={changeToProductPage}
                    setItemName={setItemName}
                    setItemRanking={setItemRanking}  
                    setItemReviews={setItemReviews}
                    setItemPrice={setItemPrice} 
                    setItemSizes={setItemSizes}  
                    setItemColours={setItemColours}  
                />
            break;

            case "TrainingCategory":
            return <TrainingCategory 
                    changeToProductPage={changeToProductPage}
                    setItemName={setItemName}
                    setItemRanking={setItemRanking}  
                    setItemReviews={setItemReviews}
                    setItemPrice={setItemPrice} 
                    setItemSizes={setItemSizes}  
                    setItemColours={setItemColours}  
                />
            break;

            case "SaleCategory":
                return <SaleCategory />
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