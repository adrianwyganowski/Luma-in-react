import React , {useState} from "react"
import "./Cms.css"

import MainPage from "../module-main-page/MainPage"
import ProductPage from "../module-product-page/ProductPage"

function Cms() {
    let [displayedPage , setDisplayedPage] = useState("MainPage")
    const [breadCrumbs , setBreadCrumbs] = useState(["Home"]);

    //Product Properties to dispaly them in ProductPage
    let [itemName , setItemName]= useState("");
    let [itemRanking , setItemRanking]= useState();
    let [itemReviews , setItemReviews]= useState([]);
    let [itemSizes , setItemSizes]= useState([]);
    let [itemColours , setItemColours]= useState([]);

    const changeToProductPage = event => setDisplayedPage (displayedPage = "ProductPage")
    const changeToMainPage = event => setDisplayedPage (displayedPage = "MainPage")


   

    

    const dispaly = x => {
        switch (x) {
            case "MainPage":
                return  <MainPage 
                    changeToProductPage={changeToProductPage}
                    setItemName={setItemName}
                    setItemRanking={setItemRanking}  
                    setItemReviews={setItemReviews} 
                    setItemSizes={setItemSizes}  
                    setItemColours={setItemColours}             
                />;
                break;
                
            case "ProductPage":
                return <ProductPage 
                    changeToMainPage={changeToMainPage}
                    breadCrumbs={breadCrumbs}
                />;
                break;
            default:  
                return  <MainPage />
                break;
                
        }
    }
    
    return(
        <main className="cms">
            {dispaly(displayedPage)}
        </main>
    )
}

export default Cms