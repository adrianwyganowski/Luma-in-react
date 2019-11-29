import React from "react"
import "./ProductDataItems.css"

function ProductDataItems() {
    return(
        <div className="productDataItems">   
            <div className="productDataItems__labels">
                <div className="productDataItems__labels--label">
                    Details
                </div>
                <div  className="productDataItems__labels--label">
                    More Information
                </div>
                <div  className="productDataItems__labels--label">
                    Reviews
                </div>
            </div>
            <div className="productDataItems__content">
                TEST TEXT 
                <p>test</p>
            </div>
        </div>
    )
}

export default ProductDataItems