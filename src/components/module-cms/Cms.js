import React , {useState} from "react"
import "./Cms.css"

import MainPage from "../module-main-page/MainPage"
import ProductPage from "../module-product-page/ProductPage"

function Cms() {
    const [dispalyedPage , setDisplayedPage] = useState("MainPage") 
    // up in normal state should be  "MainPage"

    //const [breadCrumbs , setBreadCrumbs] = useState("");

    const changeToProductPage = event => setDisplayedPage (dispalyedPage = "ProductPage")

    const dispaly = x => {
        switch (x) {
            case "MainPage":
                return  <MainPage />
                break;
                
            case "ProductPage":
                return <ProductPage />;
                break;
            default:   console.log("smth went wrong in cms moudle");;
                
        }
    }
    
    return(
        <main className="cms">
            {dispaly(dispalyedPage)}
        </main>
    )
}

export default Cms