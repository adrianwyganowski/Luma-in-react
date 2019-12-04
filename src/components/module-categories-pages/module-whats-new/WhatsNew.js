import React from "react"
import "./WhatsNew.css"
import "../CategoiresPage.css"

import firstblock from "./img/whats-new-block-1.jpg"
import secondblock from "./img/whats-new-block-2.jpg"
import thirdblock from "./img/whats-new-block-3.jpg"

import BreadCrumbs from "../../module-breadcrumbs/BreadCrumbs"
import CategoryHeader from "../../module-category-header/CategoryHeader"
import CategoriesCompareAndWhishlist from "../../module-categories-compare-and-wishlist/CategoriesCompareAndWhishlist"
import CmsHeading from "../../module-cms-heading/CmsHeading";
import ProductClothPreview from "../../module-cloth-product-preview/ProductClothPreview"

function WhatsNew({
    changeToProductPage,
    setItemName,
    setItemRanking,
    setItemReviews,
    setItemPrice,
    setItemSizes,
    setItemColours
}){

    return(
    <div className="category"> 
        {/* <BreadCrumbs /> */}
        <CategoryHeader headerText="What's New"/>
        <div className="categoryContainer">
            <div className="categoryMenu">
                <div className="categoryMenuContainer">
                    <div className="categoryMenuContainer__title">
                        NEW IN WOMEN'S
                    </div>
                    <p className="categoryMenuContainer__link">Hoodies & Sweatshirts</p>
                    <p className="categoryMenuContainer__link">Jackets</p>
                    <p className="categoryMenuContainer__link">Tees</p>
                    <p className="categoryMenuContainer__link">Bras & Tanks</p>
                    <p className="categoryMenuContainer__link">Pants</p>
                    <p className="categoryMenuContainer__link">Shorts</p>
                </div>

                <div className="categoryMenuContainer">
                    <div className="categoryMenuContainer__title">
                        NEW IN MEN'S
                    </div>
                    <p className="categoryMenuContainer__link">Hoodies & Sweatshirts</p>
                    <p className="categoryMenuContainer__link">Jackets</p>
                    <p className="categoryMenuContainer__link">Tees</p>
                    <p className="categoryMenuContainer__link">Bras & Tanks</p>
                    <p className="categoryMenuContainer__link">Pants</p>
                    <p className="categoryMenuContainer__link">Shorts</p>
                </div>
                <CategoriesCompareAndWhishlist />
            </div>
            <div className="categoryMain">
                <div className="categoryBlocks">
                    <div className="categoryFirstBlock">
                        <img className="categoryBlocks--images" src={firstblock}  alt="woman on sandy road"/>
                        <div className="whatsNewFirstBlock__content">
                            <p className="categoryBlock--info">New Luma Yoga Collection</p>
                            <p className="categoryBlock--title">The very latest yoga styles  plus twists on timeless classics</p>
                            <div className="whatsNewFirstBlock__content--button">
                                <b>Shop New Yoga</b>
                            </div>
                        </div>
                    </div>
                    <div className="categorySecondBlock">
                        <img className="categoryBlocks--images" src={secondblock}  alt="man running on beach"/>
                        <div className="whatsNewSecondBlock__content">
                            <p className="categoryBlock--title">Whatever day brings</p>
                            <p className="categoryBlock--info"> Luma Cocona <sup>™</sup> for breathability, CoolTech <sup>™</sup>  for wicking, or a blend of both.</p>
                            <span className="whatsNewBlock--span">Performance Fabrics ></span>
                            
                        </div>
                    </div>
                    <div className="categoryThirdBlock">
                        <img className="categoryBlocks--images" src={thirdblock}  alt="woman in woods"/>
                        <div className="whatsNewThirdBlock__content">
                            <p className="categoryBlock--title">A sense of renewal</p>
                            <p className="categoryBlock--info"> Enjoy comfort of body and mind with Luma eco-friendly choices.</p>
                            <span className="categoryBlock--span">Shop Eco Friendly ></span>
                        </div>
                    </div>
                </div>
                <CmsHeading 
                    header="Luma's Latest" 
                    paragraph="Just in time for the new season!"
                />
                <div className="categoryProductsPreview">
                    <ProductClothPreview 

                        changeToProductPage={changeToProductPage}
                        setItemName={setItemName}
                        setItemRanking={setItemRanking}  
                        setItemReviews={setItemReviews} 
                        setItemPrice={setItemPrice}
                        setItemSizes={setItemSizes}  
                        setItemColours={setItemColours} 

                        imgSrc={require ("../../web/images/product-id-12.jpg")} 
                        name ="Gwen Drawstring Bike Short"
                        rating = "90"
                        reviews= {[
                               {/* TO DO 2 rev */}
                                ]}
                        price ="50.00"
                        sizes = {["28","29","30","31" ,"32"]}
                        colors = {[["Blue" , "#1857f7"] , ["Gray" , "#8f8f8f"] , ["Orange" , "#eb6703"]]}
                    />
                    <ProductClothPreview 
                    
                        changeToProductPage={changeToProductPage}
                        setItemName={setItemName}
                        setItemRanking={setItemRanking}  
                        setItemReviews={setItemReviews} 
                        setItemPrice={setItemPrice}
                        setItemSizes={setItemSizes}  
                        setItemColours={setItemColours} 

                        imgSrc={require ("../../web/images/product-id-13.jpg")} 
                        name ="Echo Fit Compression Short"
                        rating = "67"
                        reviews= {[
                               {/* TO DO 3 rev */}
                                ]}
                        price ="24.00"
                        sizes = {["28","29","30","31" ,"32"]}
                        colors = {[["Black" , "#000000"] , ["Blue" , "#1857f7"] , ["Purple" , "#ef3dff"]]}
                    />
                    <ProductClothPreview 

                        changeToProductPage={changeToProductPage}
                        setItemName={setItemName}
                        setItemRanking={setItemRanking}  
                        setItemReviews={setItemReviews} 
                        setItemPrice={setItemPrice}
                        setItemSizes={setItemSizes}  
                        setItemColours={setItemColours} 

                        imgSrc={require ("../../web/images/product-id-14.jpg")} 
                        name ="Fiona Fitness Short"
                        rating = "60"
                        reviews= {[
                               {/* TO DO 3 rev */}
                                ]}
                        price ="29.00"
                        sizes = {["28","29","30","31" ,"32"]}
                        colors = {[["Black" , "#000000"] , ["Green" , "#53a828"] , ["Red" , "#ff0000"]]}
                    />
                    <ProductClothPreview 

                        changeToProductPage={changeToProductPage}
                        setItemName={setItemName}
                        setItemRanking={setItemRanking}  
                        setItemReviews={setItemReviews} 
                        setItemPrice={setItemPrice}
                        setItemSizes={setItemSizes}  
                        setItemColours={setItemColours} 

                        imgSrc={require ("../../web/images/product-id-15.jpg")} 
                        name ="Ida Workout Parachute Pant"
                        rating = "67"
                        reviews= {[
                               {/* TO DO 3 rev */}
                                ]}
                        price ="248.00"
                        sizes = {["28","29","30","31" ,"32"]}
                        colors = {[["Black" , "#000000"] , ["Blue" , "#1857f7"] , ["Purple" , "#ef3dff"]]}
                    />
                </div>

            </div>

        </div>


    </div>
    )
    
}

export default WhatsNew;