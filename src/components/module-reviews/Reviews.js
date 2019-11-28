import React from "react"
import "./Reviews.css"

function Reviews({itemReviews}) {

    function lengthOfArray() {
        return <a>{itemReviews.length} Reviews </a>
    }
    return(
        <div className="reviews">
             {lengthOfArray()}
        </div>
    )
}

export default Reviews