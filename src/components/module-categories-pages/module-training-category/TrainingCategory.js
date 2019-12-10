import React from "react"
import "./TrainingCategory.css"
import "../CategoiresPage.css"

import firstblock from "./img/training-block-1.jpg"
import secondblock from "./img/training-block-2.jpg"
import arrowdown from "./img/arrow-down.png"

//import BreadCrumbs from "../../module-breadcrumbs/BreadCrumbs"
import CategoryHeader from "../../module-category-header/CategoryHeader"
import CategoriesCompareAndWhishlist from "../../module-categories-compare-and-wishlist/CategoriesCompareAndWhishlist"
import CmsHeading from "../../module-cms-heading/CmsHeading";
import ProductClothPreview from "../../module-cloth-product-preview/ProductClothPreview"

function TrainingCategory({
    
    setItemName,
    setItemRanking,
    setItemReviews,
    setItemPrice,
    setItemSizes,
    setItemColours
}) { 
    return(
    <main className="category"> 
        {/* <BreadCrumbs />   */}
        <CategoryHeader headerText="Training"/>
        <div className="categoryContainer">
            <div className="categoryMenu">
                <CategoriesCompareAndWhishlist />
            </div>
            <div className="categoryMain">
                <div className="trainingCategoryFirstBlock">
                    <img  className="trainingCategoryFirstBlock__img categoryFirstBlockTrainingCategory__img" src={firstblock} alt="woman practising yoga"/>
                    <div className="trainingCategoryFirstBlock__container">
                        <p><strong>Motivate</strong> yourself.</p>
                        <p><strong>Reach</strong> goals.</p>
                        <p><strong>Boost</strong> amibtion.</p>
                        <p><strong>Max</strong> fitness.</p>
                        <p><strong>Upgrade</strong> lifestyle.</p>                     
                    </div>
                </div>

                <div className="trainingCategorySecondBlock">
                    <img  className="trainingCategorySecondBlock__img" src={secondblock} alt="Erin Renny in background"/>
                    <div className="trainingCategorySecondBlock__container">
                        <p className="trainingCategorySecondBlock__container--title">Before creating Luma, pro trainer Erin Renny helped world-class athletes reach peak fitness</p>
                        <p className="trainingCategorySecondBlock__container--info">Hand-selected by Erin, our training downloads reflect a commitment to yoga, health and wellness.</p>
                    </div>
                </div>

                <div className="trainingCategoryThirdBlock">
                    <img className="trainingCategoryThirdBlock__img" src={arrowdown}  alt="arrow down"/>
                    <p className="trainingCategoryThirdBlock__title">Training on demand</p>
                    <p className="trainingCategoryThirdBlock__info">Luma downloads to inspire and challenge. <br /> Your space, your pace</p>
                    <p className="trainingCategoryThirdBlock__link">Videos ></p>

                </div>

                <CmsHeading 
                    header="Top Videos" 
                    paragraph="Stream free with subscription"
                />

                <div className="trainingCategoryProductsPreview">
                    <ProductClothPreview 
                    
                        setItemName={setItemName}
                        setItemRanking={setItemRanking}  
                        setItemReviews={setItemReviews} 
                        setItemPrice={setItemPrice}
                        setItemSizes={setItemSizes}  
                        setItemColours={setItemColours} 

                        imgSrc={require ("../../web/images/product-id-22.jpg")} 
                        name =" Solo Power Circuit"
                        price ="14.00"
                        sizes = {[]}
                        colors = {[]}
                    />
                    <ProductClothPreview  
                    
                        setItemName={setItemName}
                        setItemPrice={setItemPrice} 
                        setItemRanking={setItemRanking}  
                        setItemReviews={setItemReviews} 
                        setItemSizes={setItemSizes}  
                        setItemColours={setItemColours} 
                        
                        imgSrc={require ("../../web/images/product-id-23.jpg")} 
                        name ="Luma Yoga For Life"
                        price ="0.00"
                        sizes = {[]}
                        colors = {[]}
                    />
                    <ProductClothPreview  
                    
                        setItemName={setItemName}
                        setItemRanking={setItemRanking}  
                        setItemReviews={setItemReviews} 
                        setItemPrice={setItemPrice}
                        setItemSizes={setItemSizes}  
                        setItemColours={setItemColours} 
                        
                        imgSrc={require ("../../web/images/product-id-24.jpg")} 
                        name = "LifeLong Fitness IV"
                        price ="14.00"
                        sizes = {[]}
                        colors = {[]}
                    />
                </div>
        
            </div>
        </div>
    </main>
    )
}

export default TrainingCategory