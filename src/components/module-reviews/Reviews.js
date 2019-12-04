import React from "react"
import "./Reviews.css"

function Reviews({itemReviews}) {

    function lengthOfArray() {
        if(itemReviews !== undefined)
          return <a>{itemReviews.length} Reviews </a>
        else
            return 
    }
    return(
        <div className="reviews">
             {lengthOfArray()}
        </div>
    )
}

export default Reviews