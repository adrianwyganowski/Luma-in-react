import React from "react"
import "./CategoryThreePromoBlocks.css"

function CategoryThreePromoBlocks({categoryPromoBlock}){

// TO DO DRY 

    return(
        <div className="categoryThrerPromoBlocks">
            <div className="categoryBlockPromo"> 
                <div className="categoryBlockPromo__content">
                    <div className="categoryBlockPromo__content--title">
                        {categoryPromoBlock[0][0]}
                    </div>
                    <div className="categoryBlockPromo__content--info">
                        {categoryPromoBlock[0][1]}
                    </div>
                    <div className="categoryBlockPromo__content--span">
                        {categoryPromoBlock[0][2]}
                    </div>
                </div>
                <div className="categoryBlockPromo__img">
                    <img src={categoryPromoBlock[0][3]} alt="photo of product"/>
                </div>
            </div>

            <div className="categoryBlockPromo"> 
                <div className="categoryBlockPromo__content">
                    <div className="categoryBlockPromo__content--title">
                        {categoryPromoBlock[1][0]}
                    </div>
                    <div className="categoryBlockPromo__content--info">
                        {categoryPromoBlock[1][1]}
                    </div>
                    <div className="categoryBlockPromo__content--span">
                        {categoryPromoBlock[1][2]}
                    </div>
    
                </div>
                <div className="categoryBlockPromo__img">
                    <img src={categoryPromoBlock[1][3]} alt="photo of product"/>
                </div>
            </div>

            <div className="categoryBlockPromo"> 
                <div className="categoryBlockPromo__content">
                    <div className="categoryBlockPromo__content--title">
                        {categoryPromoBlock[2][0]}
                    </div>
                    <div className="categoryBlockPromo__content--info">
                        {categoryPromoBlock[2][1]}
                    </div>
                    <div className="categoryBlockPromo__content--span">
                        {categoryPromoBlock[2][2]}
                    </div>
    
                </div>
                <div className="categoryBlockPromo__img">
                    <img src={categoryPromoBlock[2][3]} alt="photo of product"/>
                </div>
            </div>
        </div>
    )
}

export default CategoryThreePromoBlocks;