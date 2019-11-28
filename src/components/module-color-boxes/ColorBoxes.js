import React from "react";
import "./ColorBoxes.css"

function ColorBoxes({colors}) {
    return(
        colors.map((color) => {
            return <div className="colorBox" style={{backgroundColor: color[1] }}></div>}
        )
    )
}

export default ColorBoxes