import React from 'react'
import "./BlockProductList.css"

import ProductClothPreview from "../module-cloth-product-preview/ProductClothPreview"


function BlockProductList({
    setItemName,
    setItemRanking,
    setItemReviews,
    setItemPrice,
    setItemSizes,
    setItemColours}) {

    return(
        <div className="blockProductList">
            
            <ProductClothPreview 
            
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

            setItemName={setItemName}
            setItemRanking={setItemRanking}  
            setItemReviews={setItemReviews} 
            setItemPrice={setItemPrice}
            setItemSizes={setItemSizes}  
            setItemColours={setItemColours}  

            imgSrc={require ("../web/images/product-id-2.jpg")} 
            name ="Radiant Tee"
            rating = "60"
            reviews= {[
                    ["cool and dry",60,"What I rally love here is that it does the job of keeping me cool and dry. I'm a big guy and sweat A LOT! Even after a day of gulf, I'm still dry and comfortable. The problem is that the sleeves are very tight - actually bought a second shirt because i split the armpit/sleeve area of the first. Do yourself a favor and order a size bigger.", "Lakeisha  10/30/19"],
                    ["Not great",40,"Not great - buttons are too small and hurt my fingers trying to button it. I've seen better designs...","Collette 10/30/19"],
                    ["What a versatile shirt!",80,"What a versatile shirt! Not only does it feel very soft compared to my old worn out polos, but it also does the job promised. I like going out after my gamefor drinks so I look good then too and don't need to change into something fresh.","Adaline 10/30/19"]
                    ]}
            price ="22.00"
            sizes = {["XS","S","M","L" ,"XL"]}
            colors = {[["Blue" , "#1857f7"] , ["Orange" , "#eb6703"] , ["Purple" , "#ef3dff"]]}
            />

            <ProductClothPreview  

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

            setItemName={setItemName}
            setItemPrice={setItemPrice} 
            setItemRanking={setItemRanking}  
            setItemReviews={setItemReviews} 
            setItemSizes={setItemSizes}  
            setItemColours={setItemColours} 
            
            imgSrc={require ("../web/images/product-id-5.jpg")} 
            name ="LifeLong Fitness IV"
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

            imgSrc={require ("../web/images/product-id-7.jpg")} 
            name ="Push It Messenger Bag"
            rating = "67"
            reviews= {[
                    ["I bike four miles a day to work and back",80,"I bike four miles a day to work and back and I love this thing. It's a good size and it's pretty comfortable to wear across my back while I ride. So far I have not noticed much wear and tear on the fabric and I've had it for 6 months..", "Sadye 10/30/19"],
                    ["I would love this bag EXCEPT . . .",60,"I would love this bag EXCEPT with the case on my Iphone won't fit in the cell phone pocket! Why make a pocket for cell phones if it's not going to fit an Iphone.","Adena 10/30/19"],
                    ["it's really ugly,",60,"Its fine I guess but it's really ugly, I picked out a really cute bag for college but my mom got me this one instead."," Tracee 10/30/19"]
                    ]}
            price ="45.00"
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

            imgSrc={require ("../web/images/product-id-6.jpg")} 
            name ="Fusion Backpack"
            rating = "67"
            reviews= {[
                    ["I've had this thing for really long",100,"I've had this thing for a really long time and it barely shows any signs of wear and tear. It's really big, too! I've taken it on day trips as well as short vacations and usually have no trouble finding room for my stuff.", "Herb 10/30/19"],
                    ["Decent bag",60,"Decent bag. I keep my stuff in it for work and the gym. It's nice and roomy. I wish it had a more sophisticated design, though. Kinda looks like it's for kids."," Craig 10/30/19"],
                    ["Screwed up my back",40,`n't believe they're claiming these straps are "padded." Wearing this thing to class for a semester totally screwed up my back, and my shoulders would start to ache after a few minutes where the straps dug in.`," Orville 10/30/19"]
                    ]}
            price ="59.00"
            sizes = {[]}
            colors = {[]}
            />

        </div>
    )
}

export default BlockProductList