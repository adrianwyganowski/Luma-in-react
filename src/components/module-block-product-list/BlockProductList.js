import React from 'react'
import "./BlockProductList.css"

import ProductClothPreview from "../module-cloth-product-preview/ProductClothPreview"


function BlockProductList({
    changeToProductPage,
    setItemName,
    setItemRanking,
    setItemReviews,
    setItemPrice,
    setItemSizes,
    setItemColours}) {

    return(
        <div className="blockProductList">
            
            <ProductClothPreview 
            
            changeToProductPage={changeToProductPage}
            setItemName={setItemName}
            setItemRanking={setItemRanking}  
            setItemReviews={setItemReviews} 
            setItemPrice={setItemPrice}
            setItemSizes={setItemSizes}  
            setItemColours={setItemColours} 

            imgSrc={require ("../web/images/product-id-1.jpg")} 
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
            setItemPrice={setItemPrice}
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
            setItemPrice={setItemPrice} 
            setItemSizes={setItemSizes}  
            setItemColours={setItemColours}  

            imgSrc={require ("../web/images/product-id-4.jpg")} 
            name ="Hero Hoodie"
            price ="54.00"
            sizes = {["XS","S","M","L" ,"XL"]}
            colors = {[["Black" , "#000000"] , ["Gray" , "#8f8f8f"] , ["Green" , "##53a828"]]}
            />

            <ProductClothPreview  
            changeToProductPage={changeToProductPage}
            setItemName={setItemName}
            setItemPrice={setItemPrice} 
            setItemRanking={setItemRanking}  
            setItemReviews={setItemReviews} 
            setItemSizes={setItemSizes}  
            setItemColours={setItemColours} 
            
            imgSrc={require ("../web/images/product-id-5.jpg")} 
            name ="Push It Messenger Bag"
            price ="14.00"
            sizes = {[]}
            colors = {[]}
           />

            <ProductClothPreview 
            changeToProductPage={changeToProductPage}
            setItemName={setItemName}
            setItemPrice={setItemPrice} 
            setItemRanking={setItemRanking}  
            setItemReviews={setItemReviews} 
            setItemSizes={setItemSizes}  
            setItemColours={setItemColours} 
            
            imgSrc={require ("../web/images/product-id-6.jpg")} 
            name ="Fusion Backpack"
            price ="59.00"
            sizes = {[]}
            colors = {[]}
            />

            <ProductClothPreview 
            changeToProductPage={changeToProductPage}
            setItemName={setItemName}
            setItemPrice={setItemPrice} 
            setItemRanking={setItemRanking}  
            setItemReviews={setItemReviews} 
            setItemSizes={setItemSizes}  
            setItemColours={setItemColours} 

            imgSrc={require ("../web/images/product-id-7.jpg")} 
            name ="LifeLong Fitness IV"
            price ="45.00"
            sizes = {[]}
            colors = {[]}
            />

        </div>
    )
}

export default BlockProductList