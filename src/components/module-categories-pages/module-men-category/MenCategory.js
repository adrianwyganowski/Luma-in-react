import React from "react"
import "./MenCategory.css"
import "../CategoiresPage.css"

import firstblock from "./img/men-block-1.jpg"
import secondblock from "./img/men-block-2.png"
import thirdblock from "./img/men-block-3.jpg"

//import BreadCrumbs from "../../module-breadcrumbs/BreadCrumbs"
import CategoryHeader from "../../module-category-header/CategoryHeader"
import CategoriesCompareAndWhishlist from "../../module-categories-compare-and-wishlist/CategoriesCompareAndWhishlist"
import CmsHeading from "../../module-cms-heading/CmsHeading";
import ProductClothPreview from "../../module-cloth-product-preview/ProductClothPreview"
import CategoryThreePromoBlocks from"../../module-category-three-promo-blocks/CategoryThreePromoBlocks"

function MenCategory({
    setItemName,
    setItemRanking,
    setItemReviews,
    setItemPrice,
    setItemSizes,
    setItemColours,
    setItemPhotos,  
    setItemNavigationPhotos,
}) {
    return(
        <main className="category"> 
        {/* <BreadCrumbs />   */}
        <CategoryHeader headerText="Men"/>
        <div className="categoryContainer">
            <div className="categoryMenu">
                <div className="categoryMenuContainer">
                    <div className="categoryMenuContainer__title">
                        TOPS
                    </div>
                    <p className="categoryMenuContainer__link">Hoodies & Sweatshirts</p>
                    <p className="categoryMenuContainer__link">Jackets</p>
                    <p className="categoryMenuContainer__link">Tees</p>
                    <p className="categoryMenuContainer__link">Tanks</p>
                </div>

                <div className="categoryMenuContainer">
                    <div className="categoryMenuContainer__title">
                        BOTTOMS
                    </div>
                    <p className="categoryMenuContainer__link">Pants</p>
                    <p className="categoryMenuContainer__link">Shorts</p>
                </div>
                <CategoriesCompareAndWhishlist />
            </div>
            <div className="categoryMain">
                <div className="categoryBlocks">
                    <div className="categoryFirstBlock">
                        <img className="categoryBlocks--images categoryFirstBlockMenCategory__img" src={firstblock}  alt="woman practicing yoga"/>
                        <div className="menCategoryFirstBlock__content">
                            <p className="categoryBlock--info">Luma’s Performance Fabric collection</p>
                            <p className="categoryBlock--title">Going the extra mile just got extra comfortable</p>
                            <div className="menCategoryFirstBlock__button">
                                <b>Shop Performance</b>
                            </div>
                        </div>
                    </div>
                    <div className="categorySecondBlock categorySecondBlockMenCategoryMobile">
                        <div className="categorySecondBlock__backgorund">
                            <div className="categorySecondBlockImg__container">
                                <img className="categoryBlocks--images" src={secondblock}  alt="shirts"/>
                            </div>
                            <div className="menCategorySecondBlock__content">
                                <p className="categoryBlock--title">Save up to $24!</p>
                                <div className="menCategorySecondBlock__content--info">
                                    <p> Buy 3 Luma tees, get 4 instead</p>
                                    <span className="categoryBlock--span">Shop Tees ></span>
                                </div>    
                            </div>
                        </div>
                    </div>
                    <div className="categoryThirdBlock">
                        <img className="categoryBlocks--images categoryThirdBlockMenCategory__img" src={thirdblock}  alt="woman streching"/>
                        <div className="menThirdBlock__content">
                            <p className="categoryBlock--title">Last chance <br /> for pants</p>
                            <span>Take</span> <br />
                            <span className="menThirdBlock--span">20% OFF</span>
                            <p className="categoryBlock--info">and save bigtime*</p>
                            <span className="categoryBlock--span">Shop Pants ></span>
                        </div>
                    </div>
                </div>

                <CategoryThreePromoBlocks categoryPromoBlock={[
                    ["Luma shorts", "Cool it now"," Shop Shorts >", require ("./img/men-promo-block-sm-1.jpg") ],
                    ["Luma tees", "Grab a tee or two!"," Shop Tees >", require ("./img/men-promo-block-sm-2.jpg") ],
                    ["Luma hoodies", "Dress for fitness"," Shop hoodies >", require ("./img/men-promo-block-sm-3.jpg") ]
                ]}/>

                <CmsHeading 
                    header="Hot Sellers" 
                    paragraph="Favorites from Luma shoppers"
                />
                <div className="categoryProductsPreview">
                    <ProductClothPreview 

                        setItemName={setItemName}
                        setItemRanking={setItemRanking}  
                        setItemReviews={setItemReviews} 
                        setItemPrice={setItemPrice}
                        setItemSizes={setItemSizes}  
                        setItemColours={setItemColours} 
                        setItemPhotos={setItemPhotos}  
                        setItemNavigationPhotos={setItemNavigationPhotos}

                        imgSrc={require ("../../web/images/product-id-18.jpg")} 
                        name ="Meteor Workout Short"
                        rating = "73"
                        reviews= {[
                               {/* TO DO */}
                                ]}
                        price ="32.00"
                        sizes = {["32","33","34","36"]}
                        colors = {[["Black" , "#000000"] , ["Blue" , "#1857f7"] , ["Green" , "#53a828"]]}
                        imgsPaths ={{
                            0 : require ("../../web/images/1-bg-img-id-18.jpg"),
                            1 : require ("../../web/images/2-bg-img-id-18.jpg")
                            }}
                        itemNavigationPhotos={{
                            0 : require ("../../web/images/1-sm-img-id-18.jpg"),
                            1 : require ("../../web/images/2-sm-img-id-18.jpg")
                            }}
                    />
                    <ProductClothPreview 
                    
                        setItemName={setItemName}
                        setItemRanking={setItemRanking}  
                        setItemReviews={setItemReviews} 
                        setItemPrice={setItemPrice}
                        setItemSizes={setItemSizes}  
                        setItemColours={setItemColours} 
                        setItemPhotos={setItemPhotos}  
                        setItemNavigationPhotos={setItemNavigationPhotos}

                        imgSrc={require ("../../web/images/product-id-19.jpg")} 
                        name ="Geo Insulated Jogging Pant"
                        rating = "70"
                        reviews= {[
                               {/* TO DO  */}
                                ]}
                        price ="51.00"
                        sizes = {["32","33","34","36"]}
                        colors = {[["Blue" , "#1857f7"] , ["Green" , "#53a828"] , ["Red" , "#ff0000"]]}
                        imgsPaths ={{
                            0 : require ("../../web/images/1-bg-img-id-19.jpg"),
                            1 : require ("../../web/images/2-bg-img-id-19.jpg")
                            }}
                        itemNavigationPhotos={{
                            0 : require ("../../web/images/1-sm-img-id-19.jpg"),
                            1 : require ("../../web/images/2-sm-img-id-19.jpg")
                            }}
                    />
                    <ProductClothPreview  
                    
                        setItemName={setItemName}
                        setItemRanking={setItemRanking}  
                        setItemReviews={setItemReviews} 
                        setItemPrice={setItemPrice}
                        setItemSizes={setItemSizes}  
                        setItemColours={setItemColours} 
                        setItemPhotos={setItemPhotos}  
                        setItemNavigationPhotos={setItemNavigationPhotos}
                        
                        imgSrc={require ("../../web/images/product-id-3.jpg")} 
                        name ="Argus All-Weather Tank"
                        price ="22.00"
                        sizes = {["XS","S","M","L" ,"XL"]}
                        colors = {[["Gray" , "#8f8f8f"]]}
                        imgsPaths ={{
                            0 : require ("../../web/images/1-bg-img-id-3.jpg"),
                            1 : require ("../../web/images/2-bg-img-id-3.jpg")
                            }}
                        itemNavigationPhotos={{
                            0 : require ("../../web/images/1-sm-img-id-3.jpg"),
                            1 : require ("../../web/images/2-sm-img-id-3.jpg")
                            }}
                        />
                        
                        <ProductClothPreview  
                        
                        setItemName={setItemName}
                        setItemRanking={setItemRanking}  
                        setItemReviews={setItemReviews}
                        setItemPrice={setItemPrice} 
                        setItemSizes={setItemSizes}  
                        setItemColours={setItemColours}  
                        setItemPhotos={setItemPhotos}  
                        setItemNavigationPhotos={setItemNavigationPhotos}

                        imgSrc={require ("../../web/images/product-id-4.jpg")} 
                        name ="Hero Hoodie"
                        price ="54.00"
                        sizes = {["XS","S","M","L" ,"XL"]}
                        colors = {[["Black" , "#000000"] , ["Gray" , "#8f8f8f"] , ["Green" , "##53a828"]]}
                        imgsPaths ={{
                            0 : require ("../../web/images/1-bg-img-id-4.jpg"),
                            1 : require ("../../web/images/2-bg-img-id-4.jpg")
                            }}
                        itemNavigationPhotos={{
                            0 : require ("../../web/images/1-sm-img-id-4.jpg"),
                            1 : require ("../../web/images/2-sm-img-id-4.jpg")
                            }}
                        />
                </div>

            </div>

        </div>


    </main>
    )
}

export default MenCategory