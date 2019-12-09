import React from "react"

import "./StarRating.css"

function StarRating({itemRating}){
    
    function checkIfundefined(){
        if (itemRating !== undefined)
        return (<div className="starRating" title={itemRating + "%"}>
           
        <div className="starRating__top" style={{width: itemRating + "%"}}>
            <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
        </div>
        <div className="starRating__bottom" >
            <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
        </div>

        </div>)
        else
            return
    }

    return(
        <div>
            {checkIfundefined()}
        </div>
    )
}

export default StarRating