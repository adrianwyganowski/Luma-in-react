import React, {useState} from "react"

import "./BreadCrumbs.css"

function BreadCrumbs({path}) {
    
    const displayPath = path.map((links) =>
        <div className="breadCrumbs__item"> 
            <a  href="#"> {links} </a> 
            <span> > </span> 
        </div>
        )

    return(
        <div className="breadCrumbs">
            {displayPath}

        </div>
    )
}

export default BreadCrumbs