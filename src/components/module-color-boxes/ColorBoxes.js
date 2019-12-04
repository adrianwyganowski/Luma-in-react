import React from "react";
import "./ColorBoxes.css"

function ColorBoxes({colors}) {
    let arrOfColors=[]
    function checkIfUndefined(){
        if (colors !== undefined){
            arrOfColors = colors;
        }
    }

    checkIfUndefined();
    
    return(
        arrOfColors.map((color) => {
            return <div className="colorBox" style={{backgroundColor: color[1] }}></div>}
        )
    )
}

export default ColorBoxes