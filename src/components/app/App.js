import React , {useState} from "react"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"

import "./App.css"

import Header from"../module-header/Header"
import MainPage from "../module-main-page/MainPage"
import ProductPage from "../module-product-page/ProductPage"
import WhatsNew from "../module-categories-pages/module-whats-new/WhatsNew"
import WomenCategory from "../module-categories-pages/module-women-category/WomenCategory"
import MenCategory from "../module-categories-pages/module-men-category/MenCategory"
import GearCategory from "../module-categories-pages/module-gear-category/GearCategory"
import TrainingCategory from "../module-categories-pages/module-training-category/TrainingCategory"
import SaleCategory from "../module-categories-pages/module-sale-category/SaleCategory"
import Footer from "../module-footer/Footer"



function App() {

    const [breadCrumbs , setBreadCrumbs] = useState("Home");

    let [itemName , setItemName]= useState("");
    let [itemRanking , setItemRanking]= useState();
    let [itemReviews , setItemReviews]= useState([]);
    let [itemPrice , setItemPrice]= useState("");
    let [itemSizes , setItemSizes]= useState([]);
    let [itemColours , setItemColours]= useState([]);

    return (
        <div className="app">
            <Router>
                <Header />
                <Switch>
                    <Route path="/" exact component={ () => 
                        <MainPage 
                            setItemName={setItemName}
                            setItemRanking={setItemRanking}  
                            setItemReviews={setItemReviews}
                            setItemPrice={setItemPrice} 
                            setItemSizes={setItemSizes}  
                            setItemColours={setItemColours}      
                        />} 
                    />
                    <Route path="/product" exact component={() =>
                        <ProductPage 
                            
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
                        />}
                    />
                    <Route path="/what-is-new" exact component= {() =>
                        <WhatsNew 

                            setItemName={setItemName}
                            setItemRanking={setItemRanking}  
                            setItemReviews={setItemReviews}
                            setItemPrice={setItemPrice} 
                            setItemSizes={setItemSizes}  
                            setItemColours={setItemColours}  
                        />}
                    />
                    <Route path="/women" exact component = {() =>
                        <WomenCategory

                            setItemName={setItemName}
                            setItemRanking={setItemRanking}  
                            setItemReviews={setItemReviews}
                            setItemPrice={setItemPrice} 
                            setItemSizes={setItemSizes}  
                            setItemColours={setItemColours} 
                        />}
                    />
                    <Route path="/men" exact component= {() =>
                        <MenCategory 

                            setItemName={setItemName}
                            setItemRanking={setItemRanking}  
                            setItemReviews={setItemReviews}
                            setItemPrice={setItemPrice} 
                            setItemSizes={setItemSizes}  
                            setItemColours={setItemColours}  
                        />}
                    />
                    <Route path="/gear" exact component={() =>
                        <GearCategory

                            setItemName={setItemName}
                            setItemRanking={setItemRanking}  
                            setItemReviews={setItemReviews}
                            setItemPrice={setItemPrice} 
                            setItemSizes={setItemSizes}  
                            setItemColours={setItemColours}  
                        />}
                    />
                    <Route path="/training" exact component={() =>
                        <TrainingCategory

                            setItemName={setItemName}
                            setItemRanking={setItemRanking}  
                            setItemReviews={setItemReviews}
                            setItemPrice={setItemPrice} 
                            setItemSizes={setItemSizes}  
                            setItemColours={setItemColours}  
                        />} 
                    />
                    <Route path="/sale" exact component={() =>
                        <SaleCategory />} 
                    />
                </Switch>
                <Footer />
            </Router>
        </div>
    )
}

export default App;