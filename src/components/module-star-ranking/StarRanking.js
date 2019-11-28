import React from "react"

import "./StarRanking.css"

function StarRanking({itemRanking}){
    return(
        <div className="starRanking" title={itemRanking + "%"}>
           
            <div className="starRanking__top" style={{width: itemRanking + "%"}}>
                <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
            </div>
            <div className="starRanking__bottom" >
                <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
            </div>

        </div>
    )
}

export default StarRanking