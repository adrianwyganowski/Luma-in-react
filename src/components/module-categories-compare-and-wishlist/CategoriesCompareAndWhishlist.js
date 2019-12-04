import React from "react"
import "./CategoriesCompareAndWhishlist.css"

function CategoriesCompareAndWhishlist(){
    return(
        <div className="CategoriesCompareAndWhishlist">
            <div className="CategoriesCompareAndWhishlistConatiner">
                <p className="CategoriesCompareAndWhishlistConatiner__title">Compare Products</p>
                <p>You have no items to compare.</p>
            </div>

            <div className="CategoriesCompareAndWhishlistConatiner">
                <p className="CategoriesCompareAndWhishlistConatiner__title">My Wish List</p>
                <p>You have no items in your wish list.</p>
            </div>
        </div>
    )
}

export default CategoriesCompareAndWhishlist