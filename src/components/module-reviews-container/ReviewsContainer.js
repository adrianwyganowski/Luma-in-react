import React from "react"
import "./ReviewsContainer.css"

import StarRating from "../module-star-rating/StarRating"
import Reviews from "../module-reviews/Reviews"

function ReviewsContainer({itemRanking,itemReviews}) {
    
    function checkIfItemHasReviews() {
        if (itemReviews === undefined) {
            return (
            <div className="reviewsContainer">
                <a className="reviewsContainer__noReviews"> Be the first to review this product </a>
            </div>
            )
        }
        else {
            return(
                <div className="reviewsContainer">
                    <div className="reviewsContainer__stars">
                        <StarRating itemRating={itemRanking}/>
                    </div>
                    <div className="reviewsContainer__reviews">
                        <Reviews itemReviews={itemReviews}/>
                    </div>
                    <div className="reviewsContainer__addReview">
                        <a>Add Your Review</a>
                    </div>
                </div>
            )
        }

    }

    return(
            checkIfItemHasReviews()   
    )
}

export default ReviewsContainer