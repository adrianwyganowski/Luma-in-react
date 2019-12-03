import React from "react"
import "./RelatedProducts.css"

import RelatedProductPreview from "../module-related-products-preview/RelatedProductPreview"

function RelatedProducts({
    setItemName,
    setItemRanking,
    setItemReviews,
    setItemPrice,
    setItemSizes,
    setItemColours
}) {
    return(
        <div className="relatedProducts">
            <p className="relatedProducts_heading">Related Products</p>
            <div className="relatedProductPreviewContainer">
                <RelatedProductPreview 
                
                setItemName={setItemName}
                setItemRanking={setItemRanking}  
                setItemReviews={setItemReviews}
                setItemPrice={setItemPrice} 
                setItemSizes={setItemSizes}  
                setItemColours={setItemColours}  

                imgSrc={require ("../web/images/1-sm-img-id-8.jpg")}
                name ="Mimi All-Purpose Short"
                rating= "67"
                reviews={[
                    ["Ummm, fashion? If you say so. They're co", 20, "Ummm, fashion? If you say so. They're comfy and all, but these shoes are hideous.", "Katy Posted 10/30/19"],
                    ["Cute and comfortable definitely. The ela", 80, "Cute and comfortable definitely. The elastic streteched out a bit too much but I still wear them.", "Laurice Posted 10/30/19"],
                    ["Love love LOVE!!! I can't get enough of", 100, "Love love LOVE!!! I can't get enough of these shoes. They are SUPER comfy and go with everything!","Kara Posted 10/30/19"]
                ]}
                price="44.00"
                sizes={["28","29"]}
                colors={[["Gray", "#8f8f8f"],["Green" ,"#53a828"], ["White" , "#ffffff"]]}

                />
                <RelatedProductPreview 
                
                setItemName={setItemName}
                setItemRanking={setItemRanking}  
                setItemReviews={setItemReviews}
                setItemPrice={setItemPrice} 
                setItemSizes={setItemSizes}  
                setItemColours={setItemColours}  

                imgSrc={require ("../web/images/1-sm-img-id-9.jpg")}
                name= "Gabrielle Micro Sleeve Top"
                rating= "73"
                reviews={[
                    ["This shirt is decent for running",80,"This shirt is pretty good! I'm a long distance runner and it keeps me pretty comfortable, although these companies always act like their shirts are magical and really it's just pretty basic stuff. Still it's a decent shirt and I would recommend it. Just don't expect it to change your life.","Allyson Posted 10/30/19"],
                    ["Wish it was longer",60,"fits kind of awkward wish it was longer","Chloe Posted 10/30/19"],
                    ["Fits my large head TG",80,"So I have a really large head and I love this shirt bc the neckline is so stretchy! Honestly I have gotten stuck in other running shirts with the really small collar hahahahaha so embarrassing!!! !!","Hsiu Posted 10/30/19"]

                ]}
                price="28.00"
                sizes={["XS","S","M","L","XL"]}
                colors={[["Blue","#1857f7"],["Green" ,"#53a828"],["Red", "#ff0000"]]}

                />
                <RelatedProductPreview 
                
                setItemName={setItemName}
                setItemRanking={setItemRanking}  
                setItemReviews={setItemReviews}
                setItemPrice={setItemPrice} 
                setItemSizes={setItemSizes}  
                setItemColours={setItemColours}  

                imgSrc={require ("../web/images/1-sm-img-id-10.jpg")}
                name="Ana Running Short"
                rating="80"
                reviews={[
                    ["It was really hard to find the right siz",80,"It was really hard to find the right size for these. I had to send them back 3 times before I got a pair that fit. Really aggravating!!! I ended up having to get two sizes larger than I usually wear and a wide, which I've never worn before in my life. Sizing is messed up do yourself a favor, go to the store and try them on.","Angeline Posted 10/30/19"],
                    ["VERY LIGHTWEIGHT COMFY-GOOD SHOES",100,"VERY LIGHTWEIGHT COMFY-GOOD SHOES","Marita Posted 10/30/19"],
                    ["Wore these for a year and they started f",60,"Wore these for a year and they started falling apart. For the price I guess I'll just get another pair cuz I do like them. But I think a shoe should last longer. It's not like I can take my sneakers to a cobbler haha","Pura Posted 10/30/19"]
                ]}
                price="40.00"
                sizes={["28","29"]}
                colors={[["Black","#000000"],["Orange","#eb6703"],["white","#ffffff"]]}

                
                />
                <RelatedProductPreview 
                
                setItemName={setItemName}
                setItemRanking={setItemRanking}  
                setItemReviews={setItemReviews}
                setItemPrice={setItemPrice} 
                setItemSizes={setItemSizes}  
                setItemColours={setItemColours}  

                imgSrc={require ("../web/images/1-sm-img-id-11.jpg")}
                name="Juliana Short-Sleeve Tee"
                rating="60"
                reviews={[
                    ["Not at all soft",40,"There's a ton of other t-shirts I'd choose over this one. It's not soft at all and the fabric feels like sandpaper next to my skin-was really hoping for better.","Ashli Posted 10/30/19"],
                    ["This T is a no brainer-solid color",80,"This T is a no brainer-solid color, pairs with everything, and keeps me cool. What more could I want during my run?","Ruth Posted 10/30/19"]
                ]}
                price="42.00"
                sizes={["XS","S","M","L","XL"]}
                colors={[["Black","#000000"],["White","#000000"],["Yellow","#ffd500"]]}
                
                />
            </div>

        </div>
    )
}

export default RelatedProducts