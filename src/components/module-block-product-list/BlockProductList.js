import React from 'react'
import "./BlockProductList.css"

import ProductClothPreview from "../module-cloth-product-preview/ProductClothPreview"
import ProductNonClothPreview from "../module-noncloth-product-preview/ProductNonClothPreview"

function BlockProductList({
    changeToProductPage,
    setItemName,
    setItemRanking,
    setItemReviews,
    setItemSizes,
    setItemColours}) {

    return(
        <div className="blockProductList">
            
            <ProductClothPreview 
            
            changeToProductPage={changeToProductPage}
            setItemName={setItemName}
            setItemRanking={setItemRanking}  
            setItemReviews={setItemReviews} 
            setItemSizes={setItemSizes}  
            setItemColours={setItemColours}  
            imgSrc={require ("../web/images/product-id-1.jpg")} 
            name ="Breathe-Easy Tank"
            price ="34.00"
            sizes = {["XS","S","M","L" ,"XL"]}
            colors = {[["Purple" , "#ef3dff"] , ["White" , "#ffffff"] , ["Yellow" , "#ffd500"]]}
            />
            
            <ProductClothPreview  
            changeToProductPage={changeToProductPage}
            setItemName={setItemName}
            setItemRanking={setItemRanking}  
            setItemReviews={setItemReviews} 
            setItemSizes={setItemSizes}  
            setItemColours={setItemColours}  
            imgSrc={require ("../web/images/product-id-2.jpg")} 
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
            setItemSizes={setItemSizes}  
            setItemColours={setItemColours}  
            imgSrc={require ("../web/images/product-id-3.jpg")} 
            name ="Argus All-Weather Tank"
            price ="22.00"
            sizes = {["XS","S","M","L" ,"XL"]}
            colors = {[["Gray" , "#8f8f8f"]]}
            />
            
            <ProductClothPreview  
            changeToProductPage={changeToProductPage}
            setItemName={setItemName}
            setItemRanking={setItemRanking}  
            setItemReviews={setItemReviews} 
            setItemSizes={setItemSizes}  
            setItemColours={setItemColours}  
            imgSrc={require ("../web/images/product-id-4.jpg")} 
            name ="Hero Hoodie"
            price ="54.00"
            sizes = {["XS","S","M","L" ,"XL"]}
            colors = {[["Black" , "#000000"] , ["Gray" , "#8f8f8f"] , ["Green" , "##53a828"]]}
            />

            <ProductNonClothPreview  
            setItemName={setItemName}
            setItemRanking={setItemRanking}  
            setItemReviews={setItemReviews} 
            changeToProductPage={changeToProductPage}
            imgSrc={require ("../web/images/product-id-5.jpg")} 
            name ="LifeLong Fitness IV"
            price ="14.00"
           />

            <ProductNonClothPreview 
            setItemName={setItemName}
            setItemRanking={setItemRanking}  
            setItemReviews={setItemReviews} 
            changeToProductPage={changeToProductPage}
            imgSrc={require ("../web/images/product-id-6.jpg")} 
            name ="LifeLong Fitness IV"
            price ="59.00"
            />

            <ProductNonClothPreview 
            changeToProductPage={changeToProductPage}
            imgSrc={require ("../web/images/product-id-7.jpg")} 
            name ="LifeLong Fitness IV"
            price ="45.00"
            />

        </div>
    )
}

export default BlockProductList