import React from "react"
import "./Reviews.css"

function Reviews({itemReviews}) {

    function lengthOfArray() {
        if(itemReviews !== undefined)
          return <p>{itemReviews.length} Reviews </p>
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