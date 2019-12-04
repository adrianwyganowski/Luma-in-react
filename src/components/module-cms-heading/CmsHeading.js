import React from "react";
import "./CmsHeading.css"

function CmsHeading({header , paragraph}) {
    
    return(
        <div className="cmsHeading">
           <h2 className="cmsHeading__header">{header}</h2>
           <p className="cmsHeading__paragraph">{paragraph}</p>
        </div>
    )
}

export default CmsHeading