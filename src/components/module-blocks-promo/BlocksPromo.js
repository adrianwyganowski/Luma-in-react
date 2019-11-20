import React from "react"
import "./BlocksPromo.css"

import FirstBlock from "./first-block/FirstBlock"
import SecondBlock from "./second-block/SecondBlock"
import ThirdBlock from "./third-block/ThirdBlock"
import FourthBlock from "./fourth-block/FourthBlock"
import FifthBlock from "./fifth-block/FifthBlock"
import SixthBlock from "./sixth-block/SixthBlock"


function BlocksPromo() {

    return(
        <div className="blocksPromo">

            <div className="blocksPromoContainer">

                <FirstBlock />
                <SecondBlock />
                <ThirdBlock />
                <FourthBlock />
                <FifthBlock />
                <SixthBlock />


                


            </div> 
        </div>
    )
}

export default BlocksPromo