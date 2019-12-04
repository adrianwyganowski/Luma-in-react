import React from "react"
import "./CategoryHeader.css"

function CategoryHeader({headerText}) {
    return(
        <div className="CategoryHeader">
        {headerText}
        </div>
    )
}

export default CategoryHeader