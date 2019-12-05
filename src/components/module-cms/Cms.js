import React , {useState} from "react"
import "./Cms.css"

import MainPage from "../module-main-page/MainPage"
import ProductPage from "../module-product-page/ProductPage"
import CategoriesPage from "../module-categories-pages/CategoriesPage"


function Cms() {
    let [displayedPage , setDisplayedPage] = useState(["CategoriesPage","SaleCategory"])
    const [breadCrumbs , setBreadCrumbs] = useState("Home");

    //Product Properties to dispaly them in ProductPage
    let [itemName , setItemName]= useState("");
    let [itemRanking , setItemRanking]= useState();
    let [itemReviews , setItemReviews]= useState([]);
    let [itemPrice , setItemPrice]= useState("");
    let [itemSizes , setItemSizes]= useState([]);
    let [itemColours , setItemColours]= useState([]);

    const changeToProductPage = event => setDisplayedPage (displayedPage = ["ProductPage"])
    const changeToMainPage = event => setDisplayedPage (displayedPage = ["MainPage"])

    const dispaly = x => {
        switch (x[0]) {
            case "MainPage":
                return  <MainPage 
                    changeToProductPage={changeToProductPage}
                    setItemName={setItemName}
                    setItemRanking={setItemRanking}  
                    setItemReviews={setItemReviews}
                    setItemPrice={setItemPrice} 
                    setItemSizes={setItemSizes}  
                    setItemColours={setItemColours}             
                />;
                break;
                
            case "ProductPage":
                return <ProductPage 
                    changeToMainPage={changeToMainPage}
                    breadCrumbs={breadCrumbs}
                    itemName={itemName}
                    itemRanking={itemRanking}
                    itemReviews={itemReviews}
                    itemPrice={itemPrice}
                    itemSizes={itemSizes}
                    itemColours={itemColours}
                    
                    setItemName={setItemName}
                    setItemRanking={setItemRanking}  
                    setItemReviews={setItemReviews}
                    setItemPrice={setItemPrice} 
                    setItemSizes={setItemSizes}  
                    setItemColours={setItemColours}          
                />;
                break;

            case "CategoriesPage":
                return <CategoriesPage 
                    subPage={x[1]}
                    changeToProductPage={changeToProductPage}
                    setItemName={setItemName}
                    setItemRanking={setItemRanking}  
                    setItemReviews={setItemReviews}
                    setItemPrice={setItemPrice} 
                    setItemSizes={setItemSizes}  
                    setItemColours={setItemColours}  
                />
                break;


            default:  
                return  <MainPage />
        }
    }
    
    return(
        <main className="cms">
            {dispaly(displayedPage)}
        </main>
    )
}

export default Cms