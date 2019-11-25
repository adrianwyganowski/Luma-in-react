import React from "react"
import "./ProductMedia.css"

function ProductMedia({imgPath, previousImg, nextImg}) {  
    

    
    return(
        <div className="productMedia">
            <div className="productMedia">
                <img src={imgPath}/>
            </div>
        </div>
    )
    
}

export default ProductMedia