import React from "react"
import "./SaleCategory.css"

import firstblock from "./img/sale-block-1.jpg"
import secondblock from "./img/sale-block-2.jpg"
import thirdblock from "./img/sale-block-3.jpg"
import fourthblock from "./img/sale-block-4.png"
import fifthblock from "./img/sale-block-5.png"
import sixthblock from "../module-women-category/img/women-block-2.png"

import BreadCrumbs from "../../module-breadcrumbs/BreadCrumbs"
import CategoryHeader from "../../module-category-header/CategoryHeader"
import CategoriesCompareAndWhishlist from "../../module-categories-compare-and-wishlist/CategoriesCompareAndWhishlist"

function SaleCategory({

}) {
    return(
        <div className="category"> 
        {/* <BreadCrumbs />   */}
        <CategoryHeader headerText="Sale"/>
        <div className="categoryContainer">
            <div className="categoryMenu">
                <div className="categoryMenuContainer">
                    <div className="categoryMenuContainer__title">
                    WOMEN'S DEALS
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
                    MENS'S DEALS
                    </div>
                    <p className="categoryMenuContainer__link">Hoodies & Sweatshirts</p>
                    <p className="categoryMenuContainer__link">Jackets</p>
                    <p className="categoryMenuContainer__link">Tees</p>
                    <p className="categoryMenuContainer__link">Pants</p>
                    <p className="categoryMenuContainer__link">Shorts</p>
                </div>
                <div className="categoryMenuContainer">
                    <div className="categoryMenuContainer__title">
                    GEAR DEALS
                    </div>
                    <p className="categoryMenuContainer__link">Bags</p>
                    <p className="categoryMenuContainer__link">Fitness Equipment</p>
                </div>
                <CategoriesCompareAndWhishlist />
            </div>
            <div className="categoryMain">
                <div className="categoryBlocks">
                    <div className="categoryFirstBlock">
                        <img className="categoryBlocks--images" src={firstblock}  alt="woman practicing yoga"/>
                        <div className="saleCategoryFirstBlock__content">
                            <p className="categoryBlock--info">Women’s Deals</p>
                            <p className="categoryBlock--title">Pristine prices on pants, tanks and bras.</p>
                            <div className="saleCategoryFirstBlock__button">
                                <b>Shop Women’s Deals</b>
                            </div>
                        </div>
                    </div>
                    <div className="categorySecondBlock">
                            <img className="categoryBlocks--images" src={secondblock}  alt="shirts"/>
                            <div className="saleCategorySecondBlock__content">
                                <p className="categoryBlock--title">Men’s Bargains</p>
                                <p className="categoryBlock--info">Stretch your budget with active attire</p>
                                <span className="categoryBlock--span">Shop Men’s Deals ></span>
                            </div>
                    </div>
                    <div className="categoryThirdBlock">
                        <img className="categoryBlocks--images" src={thirdblock}  alt="woman streching"/>
                        <div className="saleThirdBlock__content">
                            <p className="categoryBlock--title">Luma Gear Steals</p>
                            <p className="categoryBlock--info">Your best efforts deserve a deal</p>
                            <span className="gearThirdBlock--span">Shop Luma Gear ></span>
                        </div>
                    </div>
                </div>

                <div className="saleCategoryThreeBlocks">
                    <div className="saleCategoryThreeBlocks__block">
                        <div className="firstSmallSaleBlock">
                            <p className="firstSmallSaleBlock__title">20% OFF</p>
                            <p className="firstSmallSaleBlock__info">Every $200-plus <br /> purchase!</p>
                            <img className="firstSmallSaleBlock__img" src={fourthblock}/> 
                        </div>
                    </div>
                    <div className="saleCategoryThreeBlocks__block">
                        <div className="secondSmallSaleBlock">
                            <p className="secondSmallSaleBlock__title">Spend $50 or more — shipping is free!</p>
                            <img className="secondSmallSaleBlock__img" src={fifthblock}/>
                            <p className="secondSmallSaleBlock__info">Buy more, save more</p>

                        </div>
                    </div>
                    <div className="saleCategoryThreeBlocks__block">
                        <div className="thirdSmallSaleBlock">
                            <p className="thirdSmallSaleBlock__title">You can't have too many tees</p>
                            <p className="thirdSmallSaleBlock__info">4 tees for the price of 3. Right now</p>
                            <span className="thirdSmallSaleBlock__span"> Tees on sale ></span>
                            <img className="thirdSmallSaleBlock__img" src={sixthblock}/>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default SaleCategory