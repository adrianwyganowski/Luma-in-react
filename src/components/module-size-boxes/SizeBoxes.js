import React from "react"
import "./SizeBoxes.css"

function SizeBoxes({sizes}){
    return(
        sizes.map((size) => {return <div className="sizeBox">{size}</div>})
    )
}

export default SizeBoxes