import React , {useState} from "react"
import "./ProductDataItems.css"

import DataItemReview from "../module-product-data-item-review/DataItemReview"
import AddReview from "../module-add-review/AddReview"


function ProductDataItems({itemReviews , itemName}) {

    let [dataItemDisplayed  , setDataItemDisplayed] = useState("Details")

    const changeToDetails = event => setDataItemDisplayed (dataItemDisplayed = "Details")
    const changeToMoreInformation = event => setDataItemDisplayed (dataItemDisplayed = "More Information")
    const changeToReviews = event => setDataItemDisplayed (dataItemDisplayed = "Reviews")


    const display = x => {
        switch (x) {
            case "Details":
                return (
                    <div>
                    <p>The Breathe Easy Tank is so soft, lightweight, and comfortable, you won't even know it's there -- until its high-tech Cocona® fabric starts wicking sweat away from your body to help you stay dry and focused. Layer it over your favorite sports bra and get moving.</p>
                        <br />
                        <p>• Machine wash/dry. </p>
                        • Cocona® fabric.
                    </div>
                )

            case "More Information":
                return (
                    <div className="moreInformationContainer">
                        <div className="moreInformationContainer__categories">
                            <p className="moreInformationContainer__categories--item">Style</p>
                            <p className="moreInformationContainer__categories--item">Material</p>
                            <p className="moreInformationContainer__categories--item">Pattern</p>
                            <p className="moreInformationContainer__categories--item">Climate</p>
                        </div>
                        <div>
                            <p className="moreInformationContainer__categories--item">Tank</p>
                            <p className="moreInformationContainer__categories--item">Cocona® performance fabric, Cotton</p>
                            <p className="moreInformationContainer__categories--item">Solid</p>
                            <p className="moreInformationContainer__categories--item">Indoor, Warm</p>
                        </div>
                    </div>
                )
            case "Reviews":
                return (  
                    
                    <div className="reviewsInfoContainer">
                        <p className="reviewsInfoContainer__header">Customer Reviews</p>
                        {itemReviews.map((review) => {
                            return (
                                <DataItemReview  header={review[0]} rating={review[1]} comment={review[2]} author={review[3]} />
                            )
                        })}
                        <AddReview itemName={itemName}/>
                    </div>
                )
            default:
                return (
                    <div>
                        Something went wrong
                    </div>
                )
          
        } 
    }


    return(
        <div className="productDataItems">   
            <div className="productDataItems__labels">
                <div className="productDataItems__labels--label" onClick={changeToDetails}>
                    Details
                </div>
                <div  className="productDataItems__labels--label" onClick={changeToMoreInformation}>
                    More Information
                </div>
                <div  className="productDataItems__labels--label" onClick={changeToReviews}>
                    Reviews
                </div>
            </div>
            <div className="productDataItems__content">
                {display(dataItemDisplayed)}
            </div>
        </div>
    )
}

export default ProductDataItems