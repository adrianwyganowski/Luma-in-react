import React from "react"
import "./WomenCategory.css"

import firstblock from "./img/women-block-1.jpg"
import secondblock from "./img/women-block-2.png"
import thirdblock from "./img/women-block-3.jpg"
import womenpromobig from "./img/women-promo-big.jpg"

import BreadCrumbs from "../../module-breadcrumbs/BreadCrumbs"
import CategoryHeader from "../../module-category-header/CategoryHeader"
import CategoriesCompareAndWhishlist from "../../module-categories-compare-and-wishlist/CategoriesCompareAndWhishlist"
import CmsHeading from "../../module-cms-heading/CmsHeading";
import ProductClothPreview from "../../module-cloth-product-preview/ProductClothPreview"
import CategoryThreePromoBlocks from"../../module-category-three-promo-blocks/CategoryThreePromoBlocks"

function WomenCategory({
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
        {/* <BreadCrumbs />   */}
        <CategoryHeader headerText="Women"/>
        <div className="categoryContainer">
            <div className="categoryMenu">
                <div className="categoryMenuContainer">
                    <div className="categoryMenuContainer__title">
                        TOPS
                    </div>
                    <p className="categoryMenuContainer__link">Hoodies & Sweatshirts</p>
                    <p className="categoryMenuContainer__link">Jackets</p>
                    <p className="categoryMenuContainer__link">Tees</p>
                    <p className="categoryMenuContainer__link">Bras & Tanks</p>
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
                        <img className="categoryBlocks--images" src={firstblock}  alt="woman practicing yoga"/>
                        <div className="womensCategoryFirstBlock__content">
                            <p className="categoryBlock--info">New Luma Yoga Collection</p>
                            <p className="categoryBlock--title">Yoga is ancient <br />Clothing shouldn’t be </p>
                            <div className="categoryBlock--button">
                                <b>Shop New Yoga</b>
                            </div>
                        </div>
                    </div>
                    <div className="categorySecondBlock">
                        <div className="categorySecondBlock__backgorund">
                            <div className="categorySecondBlockImg__container">
                                <img className="categoryBlocks--images" src={secondblock}  alt="shirts"/>
                            </div>
                            <div className="womensCategorySecondBlock__content">
                                <p className="categoryBlock--title">You can’t have too many tees</p>
                                <div className="womensCategorySecondBlock__content--info">
                                    <p className="categoryBlock--info"> 4 tees for the price of 3. Right now</p>
                                    <span className="categoryBlock--span">Women's Tees ></span>
                                </div>    
                            </div>
                        </div>
                    </div>
                    <div className="categoryThirdBlock">
                        <img className="categoryBlocks--images" src={thirdblock}  alt="woman streching"/>
                        <div className="womansThirdBlock__content">
                            <p className="categoryBlock--title">Hot pants <br /> Hot deals</p>
                            <span className="womansThirdBlock--span">20% OFF</span>
                            <p className="categoryBlock--info"> Luma pants when you shop today*</p>
                            <span className="categoryBlock--span">Shop Pants ></span>
                        </div>
                    </div>
                </div>

                <div className="womanCategoryPromo">
                    <div className="womanCategoryPromo__content">
                        <p className="categoryBlock--title">What would Erin wear?</p>
                        <p className="categoryBlock--info"> It’s no secret: see Luma founder Erin Renny’s wardrobe go-to’s</p>
                        <span className="categoryBlock--span">Shop Erin Recommends ></span>
                    </div>

                    <div>
                        <img src={womenpromobig} alt="photo of Erin Renny's" />
                    </div>
                </div>
                <CategoryThreePromoBlocks categoryPromoBlock={[
                    ["Luma pants", "Pants for yoga, gym and outdoors"," Shop Pants >", require ("./img/women-promo-block-sm-1.jpg") ],
                    ["Luma shorts", "Exercuse comfort"," Shop Shorts >", require ("./img/women-promo-block-sm-2.jpg") ],
                    ["Luma Bras Tanks", "Stock up for summer"," Shop now >", require ("./img/women-promo-block-sm-3.jpg") ]
                ]}/>

                <CmsHeading 
                    header="Hot Sellers" 
                    paragraph="Favorites from Luma shoppers"
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

                        imgSrc={require ("../../web/images/product-id-16.jpg")} 
                        name ="Deirdre Relaxed-Fit Capri"
                        price ="63.00"
                        sizes = {["28","29"]}
                        colors = {[["Blue" , "#1857f7"] , ["Gray" , "#8f8f8f"] , ["Green" , "#53a828"]]}
                    />
                    <ProductClothPreview 
                    
                        changeToProductPage={changeToProductPage}
                        setItemName={setItemName}
                        setItemRanking={setItemRanking}  
                        setItemReviews={setItemReviews} 
                        setItemPrice={setItemPrice}
                        setItemSizes={setItemSizes}  
                        setItemColours={setItemColours} 

                        imgSrc={require ("../../web/images/product-id-1.jpg")} 
                        name ="Breathe-Easy Tank"
                        rating = "70"
                        reviews= {[
                                ["Great fit - love the v-neck design!",80,"Great fit - love the v-neck design!", "Thalia 10/30/19"],
                                ["The seams bother me",60,"Some of the seams bother me during certain workouts but otherwise very comfortable","Carma 10/30/19"]
                                ]}
                        price ="34.00"
                        sizes = {["XS","S","M","L" ,"XL"]}
                        colors = {[["Purple" , "#ef3dff"] , ["White" , "#ffffff"] , ["Yellow" , "#ffd500"]]}
                    />
                    <ProductClothPreview 

                        changeToProductPage={changeToProductPage}
                        setItemName={setItemName}
                        setItemRanking={setItemRanking}  
                        setItemReviews={setItemReviews} 
                        setItemPrice={setItemPrice}
                        setItemSizes={setItemSizes}  
                        setItemColours={setItemColours} 

                        imgSrc={require ("../../web/images/product-id-2.jpg")} 
                        name ="Radiant Tee"
                        price ="22.00"
                        sizes = {["XS","S","M","L" ,"XL"]}
                        colors = {[["Blue" , "#1857f7"] , ["Orange" , "#eb6703"] , ["Purple" , "#ef3dff"]]}
                    />
                    <ProductClothPreview 

                        changeToProductPage={changeToProductPage}
                        setItemName={setItemName}
                        setItemRanking={setItemRanking}  
                        setItemReviews={setItemReviews} 
                        setItemPrice={setItemPrice}
                        setItemSizes={setItemSizes}  
                        setItemColours={setItemColours} 

                        imgSrc={require ("../../web/images/product-id-17.jpg")} 
                        name ="Selene Yoga Hoodie"
                        rating = "80"
                        reviews= {[
                               {/* TO DO 3 rev */}
                                ]}
                        price ="248.00"
                        sizes = {["28","29","30","31" ,"32"]}
                        colors = {[["Orange" , "#eb6703"] , ["Purple" , "#ef3dff"] , ["White" , "#ffffff"]]}
                    />
                </div>

            </div>

        </div>


    </div>
    )
    
}

export default WomenCategory;