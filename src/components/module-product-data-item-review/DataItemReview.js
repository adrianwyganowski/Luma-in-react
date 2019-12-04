import React from "react"
import "./DataItemReview.css"

import StarRating from "../module-star-rating/StarRating"

function DataItemReview ({header, rating, comment, author}){
    return (
        <div className="reviewContainer">
            <div className="reviewContainer__header">
                <p>{header}</p>
            </div>

            <div className="rewiewContent">
                <div className="rewiewContent__rating">
                    <span className="rewiewContent__rating--label">Rating</span> <StarRating itemRating={rating}/>
                </div>
                <div className="rewiewContent__commentary">
                    <div className="rewiewContent__commentary--content">
                        <p>{comment}</p>
                    </div>
                    <div className="rewiewContent__commentary--author"> 
                        <p>Review by {author}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DataItemReview