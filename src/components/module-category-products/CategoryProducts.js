import React from "react"
import "./CategoryProducts.css"

import CategoryHeader from "../module-category-header/CategoryHeader"
import CategoriesCompareAndWhishlist from "../module-categories-compare-and-wishlist/CategoriesCompareAndWhishlist"
import SidebarFilter from "../module-sidebarFilter/SidebarFilter"
import ProductClothPreview from "../module-cloth-product-preview/ProductClothPreview"

function CategoryProducts({setDataObj}) {
    return(
        <main className="categoryProducts">
            {/* TO DO TAKE DATA FROM COMPONTNTS STATE */}

            <CategoryHeader headerText="Category"/>
            <span style={{fontSize: "13px"}}>(With sample data and not working filter on sidemenu)</span>
            <div className="categoryProductsMainContainer"> 
                <div className="categoryProducts__sideBar">
                    <p className="categoryProducts__sideBar--header">Shopping Options</p>
                    <SidebarFilter  items={[
                        ["CATEGORY","Jackets","Hoodies & Sweatshirts","Tees","Bras & Tanks"],
                        ["STYLE","Insulated","Jacket","Lightweight","Hooded","Heavy Duty","Rain Coat","Hard Shell","Soft Shell", "Windbreaker","Full Zip","Reversible","Sweatshirt","Tank","Tee","Pullover","Hoodie","Camisole"],
                        ["SIZE","XS","S","M","L","XL"],
                        ["PRICE","$20.00 - $29.99", "$30.00 - $39.99", "$40.00 - $49.99", "$50.00 - $59.99", "$60.00 - $69.99" , "$70.00 - $79.99", "$80 and above"],
                        ["COLOR","Black","Blue","Brown","Gray","Green","Orange","Pink","Red","White","Yellow"],
                        ["MATERIAL","Cocona® performance fabric","Cotton","Fleece","Hemp","Jersey","LumaTech™","Mesh","Lycra®","Nylon","Microfiber","Polyester","Spandex","HeatTec®","EverCool™"],
                        ["ECO COLLECTION","Yes","No"],
                        ["PERFORMANCE FABRIC","Yes","No"],
                        ["ERIN RECOMMENDS","Yes","No"],
                        ["NEW","Yes","No"],
                        ["SALE","Yes","No"],
                        ["PATTERN","Checked","Color-Blocked","Solid","Striped"],
                        ["CLIMATE", "All-Weather","Cold", "Cool","Indoor","Mild","Rainy","Spring","Warm","Windy"]
                    ]}/>

                    <CategoriesCompareAndWhishlist />
                </div>

                <div className="categoryProducts__products">
                    <ProductClothPreview 
                    
                    setDataObj={setDataObj} 

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
                    imgsPaths ={{
                        0 : require ("../web/images/1-bg-img-id-1.jpg"),
                        1 : require ("../web/images/2-bg-img-id-1.jpg")
                        }}
                    itemNavigationPhotos={{
                        0 : require ("../web/images/1-sm-img-id-1.jpg"),
                        1 : require ("../web/images/2-sm-img-id-1.jpg")
                        }}
                    />
                    
                    <ProductClothPreview  

                    setDataObj={setDataObj} 

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
                    imgsPaths ={{
                        0 : require ("../web/images/1-bg-img-id-2.jpg"),
                        1 : require ("../web/images/2-bg-img-id-2.jpg")
                        }}
                    itemNavigationPhotos={{
                        0 : require ("../web/images/1-sm-img-id-2.jpg"),
                        1 : require ("../web/images/2-sm-img-id-2.jpg")
                        }}
                    />

                    <ProductClothPreview  

                    setDataObj={setDataObj} 
                    
                    imgSrc={require ("../web/images/product-id-3.jpg")} 
                    name ="Argus All-Weather Tank"
                    price ="22.00"
                    sizes = {["XS","S","M","L" ,"XL"]}
                    colors = {[["Gray" , "#8f8f8f"]]}
                    imgsPaths ={{
                        0 : require ("../web/images/1-bg-img-id-3.jpg"),
                        1 : require ("../web/images/2-bg-img-id-3.jpg")
                        }}
                    itemNavigationPhotos={{
                        0 : require ("../web/images/1-sm-img-id-3.jpg"),
                        1 : require ("../web/images/2-sm-img-id-3.jpg")
                        }}
                    />
                    
                    <ProductClothPreview  

                    setDataObj={setDataObj} 

                    imgSrc={require ("../web/images/product-id-4.jpg")} 
                    name ="Hero Hoodie"
                    price ="54.00"
                    sizes = {["XS","S","M","L" ,"XL"]}
                    colors = {[["Black" , "#000000"] , ["Gray" , "#8f8f8f"] , ["Green" , "##53a828"]]}
                    imgsPaths ={{
                        0 : require ("../web/images/1-bg-img-id-4.jpg"),
                        1 : require ("../web/images/2-bg-img-id-4.jpg")
                        }}
                    itemNavigationPhotos={{
                        0 : require ("../web/images/1-sm-img-id-4.jpg"),
                        1 : require ("../web/images/2-sm-img-id-4.jpg")
                        }}
                    />
                    <ProductClothPreview 
                    
                    setDataObj={setDataObj} 

                    imgSrc={require ("../web/images/product-id-13.jpg")} 
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
                        0 : require ("../web/images/1-bg-img-id-13.jpg"),
                        1 : require ("../web/images/2-bg-img-id-13.jpg")
                        }}
                    itemNavigationPhotos={{
                        0 : require ("../web/images/1-sm-img-id-13.jpg"),
                        1 : require ("../web/images/2-sm-img-id-13.jpg")
                        }}
                />
                <ProductClothPreview 

                    setDataObj={setDataObj} 

                    imgSrc={require ("../web/images/product-id-12.jpg")} 
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
                        0 : require ("../web/images/1-bg-img-id-12.jpg"),
                        1 : require ("../web/images/2-bg-img-id-12.jpg")
                        }}
                    itemNavigationPhotos={{
                        0 : require ("../web/images/1-sm-img-id-12.jpg"),
                        1 : require ("../web/images/2-sm-img-id-12.jpg")
                        }}
                />

                <ProductClothPreview 

                    setDataObj={setDataObj} 

                    imgSrc={require ("../web/images/product-id-14.jpg")} 
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
                        0 : require ("../web/images/1-bg-img-id-14.jpg"),
                        1 : require ("../web/images/2-bg-img-id-14.jpg")
                        }}
                    itemNavigationPhotos={{
                        0 : require ("../web/images/1-sm-img-id-14.jpg"),
                        1 : require ("../web/images/2-sm-img-id-14.jpg")
                        }}
                />
                <ProductClothPreview 

                    setDataObj={setDataObj} 

                    imgSrc={require ("../web/images/product-id-15.jpg")} 
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
                        0 : require ("../web/images/1-bg-img-id-15.jpg"),
                        1 : require ("../web/images/2-bg-img-id-15.jpg")
                        }}
                    itemNavigationPhotos={{
                        0 : require ("../web/images/1-sm-img-id-15.jpg"),
                        1 : require ("../web/images/2-sm-img-id-15.jpg")
                        }}
                />
                </div>
            </div>
            
        </main>
    )
}

export default CategoryProducts