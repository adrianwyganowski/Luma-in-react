import React from "react"
import "./GearCategory.css"
import "../CategoiresPage.css"

import firstblock from "./img/gear-block-1.jpg"
import secondblock from "./img/gear-block-2.jpg"
import thirdblock from "./img/gear-block-3.jpg"

//import BreadCrumbs from "../../module-breadcrumbs/BreadCrumbs"
import CategoryHeader from "../../module-category-header/CategoryHeader"
import CategoriesCompareAndWhishlist from "../../module-categories-compare-and-wishlist/CategoriesCompareAndWhishlist"
import CmsHeading from "../../module-cms-heading/CmsHeading";
import ProductClothPreview from "../../module-cloth-product-preview/ProductClothPreview"
import CategoryThreePromoBlocks from"../../module-category-three-promo-blocks/CategoryThreePromoBlocks"

function GearCategory({setDataObj}) {
    return(
        <main className="category"> 
        {/* <BreadCrumbs />   */}
        <CategoryHeader headerText="Gear"/>
        <div className="categoryContainer">
            <div className="categoryMenu">
                <div className="categoryMenuContainer">
                    <p className="categoryMenuContainer__link">Bags</p>
                    <p className="categoryMenuContainer__link">Fitness Equipment</p>
                    <p className="categoryMenuContainer__link">Watches</p>
                </div>
                <CategoriesCompareAndWhishlist />
            </div>
            <div className="categoryMain">
                <div className="categoryBlocks">
                    <div className="categoryFirstBlock">
                        <img className="categoryBlocks--images categoryFirtsBlockGearCategory__img" src={firstblock}  alt="woman practicing yoga"/>
                        <div className="gearCategoryFirstBlock__content">
                            <p className="categoryBlock--title">Sprite Yoga Companion Kit</p>
                            <p className="categoryBlock--info">Save up to 20% on a bundle!</p>
                            <div className="categoryBlock--button">
                                <b>Shop Yoga Kit</b>
                            </div>
                        </div>
                    </div>
                    <div className="categorySecondBlock">
                            <img className="categoryBlocks--images" src={secondblock}  alt="shirts"/>
                            <div className="gearCategorySecondBlock__content">
                                <p className="categoryBlock--title">Loosen Up!</p>
                                <p className="categoryBlock--info"> Extend your training with yoga straps, tone bands, and jump ropes</p>
                                <span className="categoryBlock--span">Shop Fitness ></span>
                            </div>
                    </div>
                    <div className="categoryThirdBlock">
                        <img className="categoryBlocks--images" src={thirdblock}  alt="woman streching"/>
                        <div className="gearThirdBlock__content">
                            <p className="categoryBlock--title">Here’s to you!</p>
                            <p className="categoryBlock--info">$4 Luma water bottle <br /> (save 70%)</p>
                            <span className="gearThirdBlock--span">Enter promo code H2O <br /> at check out</span>
                        </div>
                    </div>
                </div>

                <CategoryThreePromoBlocks categoryPromoBlock={[
                    ["Tote, cart or carry", "Luma bags go the distance"," Shop Bags >", require ("./img/gear-promo-block-sm-1.jpg") ],
                    ["Let’s get after it!", "Luma gym equipment fits your goals and style"," Shop Equipment >", require ("./img/gear-promo-block-sm-2.jpg") ],
                    ["Luma watchess", "Keeping pace has never been more stylish"," Shop Watches >", require ("./img/gear-promo-block-sm-3.jpg") ]
                ]}/>

                <CmsHeading 
                    header="Hot Sellers" 
                    paragraph="Favorites from Luma shoppers"
                />
                <div className="categoryProductsPreview">
                    <ProductClothPreview 
                    
                        setDataObj={setDataObj} 

                        imgSrc={require ("../../web/images/product-id-20.jpg")} 
                        name =" Sprite Yoga Companion Kit"
                        price ="61.00"
                        sizes = {[]}
                        colors = {[]}
                        imgsPaths ={{
                            0 : require ("../../web/images/1-bg-img-id-1.jpg"),
                            1 : require ("../../web/images/2-bg-img-id-1.jpg")
                            }}
                        itemNavigationPhotos={{
                            0 : require ("../../web/images/1-sm-img-id-1.jpg"),
                            1 : require ("../../web/images/2-sm-img-id-1.jpg")
                            }}
                    />
                    <ProductClothPreview  
                    
                        setDataObj={setDataObj} 
                        
                        imgSrc={require ("../../web/images/product-id-7.jpg")} 
                        name ="Push It Messenger Bag"
                        price ="45.00"
                        sizes = {[]}
                        colors = {[]}
                        imgsPaths ={{
                            0 : require ("../../web/images/1-bg-img-id-1.jpg"),
                            1 : require ("../../web/images/2-bg-img-id-1.jpg")
                            }}
                        itemNavigationPhotos={{
                            0 : require ("../../web/images/1-sm-img-id-1.jpg"),
                            1 : require ("../../web/images/2-sm-img-id-1.jpg")
                            }}
                    />
                    <ProductClothPreview  
                    
                        setDataObj={setDataObj} 
                        
                        imgSrc={require ("../../web/images/product-id-21.jpg")} 
                        name = "Affirm Water Bottle "
                        price ="7.00"
                        sizes = {[]}
                        colors = {[]}
                        imgsPaths ={{
                            0 : require ("../../web/images/1-bg-img-id-1.jpg"),
                            1 : require ("../../web/images/2-bg-img-id-1.jpg")
                            }}
                        itemNavigationPhotos={{
                            0 : require ("../../web/images/1-sm-img-id-1.jpg"),
                            1 : require ("../../web/images/2-sm-img-id-1.jpg")
                            }}
                    />
                        
                    <ProductClothPreview 
                    
                        setDataObj={setDataObj} 
                        
                        imgSrc={require ("../../web/images/product-id-6.jpg")} 
                        name ="Fusion Backpack"
                        price ="59.00"
                        sizes = {[]}
                        colors = {[]}
                        imgsPaths ={{
                            0 : require ("../../web/images/1-bg-img-id-6.jpg"),
                            1 : require ("../../web/images/2-bg-img-id-6.jpg")
                            }}
                        itemNavigationPhotos={{
                            0 : require ("../../web/images/1-sm-img-id-6.jpg"),
                            1 : require ("../../web/images/2-sm-img-id-6.jpg")
                            }}
                    />
                </div>

            </div>

        </div>


    </main>
    )
}

export default GearCategory