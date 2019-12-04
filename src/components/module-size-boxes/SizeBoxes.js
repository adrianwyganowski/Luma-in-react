import React from "react"
import "./SizeBoxes.css"

function SizeBoxes({sizes}){
    let arrOfSizes=[]
    function checkIfUndefined(){
        if (sizes !== undefined){
            arrOfSizes = sizes;
        }
    }

    checkIfUndefined();

    return(
            arrOfSizes.map((size) => {return <div className="sizeBox">{size}</div>})
        
    )
}

export default SizeBoxes