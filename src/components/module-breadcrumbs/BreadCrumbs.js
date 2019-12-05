import React, {useState} from "react"

import "./BreadCrumbs.css"

function BreadCrumbs({breadCrumbs, changeToMainPage}) {
    
    const linkOnClick = x => {
        switch(x){
            case "Home":
                return <changeToMainPage />
                break;
            default:
                return console.log("elo");
        }
    } 

    // const displayPath = breadCrumbs.map((links) =>
    //     <div className="breadCrumbs__item" > 
    //         <div> {links} </div> 
    //         <span> > </span> 
    //     </div>
    //     )

    return(
        <div className="breadCrumbs">
            {/* {displayPath} */}
            <div onClick={changeToMainPage}> HOME BUTTON </div>
        </div>
    )
}

export default BreadCrumbs