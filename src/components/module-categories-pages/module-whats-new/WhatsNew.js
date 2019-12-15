import React from "react"
import "./WhatsNew.css"
import "../CategoiresPage.css"

import firstblock from "./img/whats-new-block-1.jpg"
import secondblock from "./img/whats-new-block-2.jpg"
import thirdblock from "./img/whats-new-block-3.jpg"

//import BreadCrumbs from "../../module-breadcrumbs/BreadCrumbs"
import CategoryHeader from "../../module-category-header/CategoryHeader"
import CategoriesCompareAndWhishlist from "../../module-categories-compare-and-wishlist/CategoriesCompareAndWhishlist"
import CmsHeading from "../../module-cms-heading/CmsHeading";
import ProductClothPreview from "../../module-cloth-product-preview/ProductClothPreview"

function WhatsNew({ setDataObj }){

    return(
    <main className="category"> 
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
                        <img className="categoryBlocks--images categoryFirstBlockWhatsNew__img" src={firstblock}  alt="woman on sandy road"/>
                        <div className="whatsNewFirstBlock__content">
                            <p className="categoryBlock--info">New Luma Yoga Collection</p>
                            <p className="categoryBlock--title">The very latest yoga styles  plus twists on timeless classics</p>
                            <div className="categoryBlock--button">
                                <b>Shop New Yoga</b>
                            </div>
                        </div>
                    </div>
                    <div className="categorySecondBlock">
                        <img className="categoryBlocks--images" src={secondblock}  alt="man running on beach"/>
                        <div className="whatsNewSecondBlock__content">
                            <p className="categoryBlock--title">Whatever day brings</p>
                            <p className="categoryBlock--info"> Luma Cocona <sup>™</sup> for breathability, CoolTech <sup>™</sup>  for wicking, or a blend of both.</p>
                            <span className="categoryBlock--span">Performance Fabrics ></span>
                            
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
                    
                        setDataObj={setDataObj} 

                        imgSrc={require ("../../web/images/product-id-13.jpg")} 
                        name ="Echo Fit Compression Short"
                        rating = "67"
                        reviews= {[
                            ["I love these for when I walk the boardwa",100," love these for when I walk the boardwalk with my grandaughter. They seem pretty hip and I got lots of compliments on them from the ladies at the bingo night", "Lita 0/30/19"],
                            ["These looked really ugly on my feet when",40,"These looked really ugly on my feet when I got them. The picture online is much more flattering than the reality. I'm bummed.","Joyce 10/30/19"],
                            ["I can appreciate the concept, but I thin",60,"I can appreciate the concept, but I think I'll be going back to regular laced sneakers from now on, they just didn't seem to fit my feet as well I guess because my feet are so narrow. People with narrow feet shouldn't buy these!"," Gertrud 10/30/19"]
                        ]}
                        price ="24.00"
                        sizes = {["28","29","30","31" ,"32"]}
                        colors = {[["Black" , "#000000"] , ["Blue" , "#1857f7"] , ["Purple" , "#ef3dff"]]}
                        imgsPaths ={{
                            0 : require ("../../web/images/1-bg-img-id-13.jpg"),
                            1 : require ("../../web/images/2-bg-img-id-13.jpg")
                            }}
                        itemNavigationPhotos={{
                            0 : require ("../../web/images/1-sm-img-id-13.jpg"),
                            1 : require ("../../web/images/2-sm-img-id-13.jpg")
                            }}
                    />
                    <ProductClothPreview 

                        setDataObj={setDataObj} 

                        imgSrc={require ("../../web/images/product-id-12.jpg")} 
                        name ="Gwen Drawstring Bike Short"
                        rating = "90"
                        reviews= {[
                            ["Love a preppy sneaker! These are still a",100,"Love a preppy sneaker! These are still adorable but not as casual as running shoes! Love them!", "Shellie 10/30/19"],
                            ["These looked really ugly on my feet when",80,"These are my favorite new pair of sneakers! I just hate that they get dirty really fast.","Dena 10/30/19"]
                                ]}
                        price ="50.00"
                        sizes = {["28","29","30","31" ,"32"]}
                        colors = {[["Blue" , "#1857f7"] , ["Gray" , "#8f8f8f"] , ["Orange" , "#eb6703"]]}
                        imgsPaths ={{
                            0 : require ("../../web/images/1-bg-img-id-12.jpg"),
                            1 : require ("../../web/images/2-bg-img-id-12.jpg")
                            }}
                        itemNavigationPhotos={{
                            0 : require ("../../web/images/1-sm-img-id-12.jpg"),
                            1 : require ("../../web/images/2-sm-img-id-12.jpg")
                            }}
                    />
                    <ProductClothPreview 

                        setDataObj={setDataObj} 

                        imgSrc={require ("../../web/images/product-id-14.jpg")} 
                        name ="Fiona Fitness Short"
                        rating = "60"
                        reviews= {[
                            ["So comfortable I almost feel barefoot. T",100,"So comfortable I almost feel barefoot. The treads on these is so intricate and deep, so they can be hard to clean.", "Karisa 10/30/19"],
                            ["On the plus side, the perforated cushion",60,"On the plus side, the perforated cushioning is really soft and reduces friction. However, they seem to absorb sweat and don't dry very quickly, which causes a lot of odor.","Evelyn 10/30/19"],
                            ["I threw them out when the mushy lining s",40,"I threw them out when the mushy lining started to ooze.","Markita 10/30/19"]
                                ]}
                        price ="29.00"
                        sizes = {["28","29","30","31" ,"32"]}
                        colors = {[["Black" , "#000000"] , ["Green" , "#53a828"] , ["Red" , "#ff0000"]]}
                        imgsPaths ={{
                            0 : require ("../../web/images/1-bg-img-id-14.jpg"),
                            1 : require ("../../web/images/2-bg-img-id-14.jpg")
                            }}
                        itemNavigationPhotos={{
                            0 : require ("../../web/images/1-sm-img-id-14.jpg"),
                            1 : require ("../../web/images/2-sm-img-id-14.jpg")
                            }}
                    />
                    <ProductClothPreview 

                        setDataObj={setDataObj} 

                        imgSrc={require ("../../web/images/product-id-15.jpg")} 
                        name ="Ida Workout Parachute Pant"
                        rating = "67"
                        reviews= {[
                            ["I have 5 pairs",100,"I literally have about 5 pairs of these in my drawer. I don't just wear them to yoga though. Oh no! I wear them on a normal Saturday around town. Love them!", " Dannielle 10/30/19"],
                            ["These pants move so well!",80,"These pants move so well! They provide nice coverage so when I'm in Downward Dog, I don't have to worry. I don't know about this Cooltech technology though. I sweat in them, so they definitely don't keep me dry. They're pretty warm!","Deloise 0/30/19"],
                            ["Seams separated righth away",20,"I wear them once and the seams started to separate! Not constructed well at all. With the kazillion other yoga pants out there, there's no excuse for this!","Rosann 10/30/19"]
                        ]}
                        price ="248.00"
                        sizes = {["28","29","30","31" ,"32"]}
                        colors = {[["Black" , "#000000"] , ["Blue" , "#1857f7"] , ["Purple" , "#ef3dff"]]}
                        imgsPaths ={{
                            0 : require ("../../web/images/1-bg-img-id-15.jpg"),
                            1 : require ("../../web/images/2-bg-img-id-15.jpg")
                            }}
                        itemNavigationPhotos={{
                            0 : require ("../../web/images/1-sm-img-id-15.jpg"),
                            1 : require ("../../web/images/2-sm-img-id-15.jpg")
                            }}
                    />
                </div>

            </div>

        </div>


    </main>
    )
    
}

export default WhatsNew;