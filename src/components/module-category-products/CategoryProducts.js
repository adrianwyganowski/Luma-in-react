import React from "react"
import "./CategoryProducts.css"

import CategoryHeader from "../module-category-header/CategoryHeader"
import CategoriesCompareAndWhishlist from "../module-categories-compare-and-wishlist/CategoriesCompareAndWhishlist"

function CategoryProducts() {
    return(
        <main className="categoryProducts">
            {/* TO DO TAKE DATA FROM COMPONTNTS STATE */}

            <CategoryHeader headerText="Category"/>
            <div className="categoryProductsMainContainer"> 
                <div className="categoryProducts__sideBar">
                    <p className="categoryProducts__sideBar--header">Shopping Options</p>
                    <div className="sidebarMenu">
                        <ol className="sidebarMenu__firstLevel"> SAMPLE DATA
                            <li className="sidebarMenu__secondLevel">Tops <span className="sidebarMenu__span">(12)</span></li>
                            <li className="sidebarMenu__secondLevel">Tops <span className="sidebarMenu__span">(12)</span></li>
                            <li className="sidebarMenu__secondLevel">Tops <span className="sidebarMenu__span">(12)</span></li>
                            <li className="sidebarMenu__secondLevel">Tops <span className="sidebarMenu__span">(12)</span></li>
                        </ol>
                    </div>
                    <CategoriesCompareAndWhishlist />
                </div>

                <div className="categoryProducts__products">
                    Cim
                </div>
            </div>
            
        </main>
    )
}

export default CategoryProducts