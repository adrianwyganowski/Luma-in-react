import React , {useState} from "react"
import {BrowserRouter as Router, Switch, Route } from "react-router-dom"

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
import CategoryProducts from "../module-category-products/CategoryProducts"
import Footer from "../module-footer/Footer"



function App() {

   // const [breadCrumbs , setBreadCrumbs] = useState("Home");
    

    let [itemName , setItemName]= useState("");
    let [itemRanking , setItemRanking]= useState();
    let [itemReviews , setItemReviews]= useState([]);
    let [itemPrice , setItemPrice]= useState("");
    let [itemSizes , setItemSizes]= useState([]);
    let [itemColours , setItemColours]= useState([]);
    let [itemPhotos , setItemPhotos]= useState({});
    let [itemNavigationPhotos , setItemNavigationPhotos]= useState({});

    let setDataObj = {
        setItemName: setItemName,
        setItemRanking: setItemRanking,
        setItemReviews: setItemReviews,
        setItemPrice: setItemPrice,
        setItemSizes: setItemSizes,
        setItemColours: setItemColours,
        setItemPhotos: setItemPhotos,
        setItemNavigationPhotos: setItemNavigationPhotos        
    }

    let dataToDisplayObj ={
        itemName: itemName,
        itemRanking: itemRanking,
        itemReviews: itemReviews,
        itemPrice: itemPrice,
        itemSizes: itemSizes,
        itemColours: itemColours,
        itemPhotos: itemPhotos,
        itemNavigationPhotos: itemNavigationPhotos
    }

    return (
        <div className="app">
            <Router>
                <Header />
                <Switch>
                    <Route path="/" exact component={ () => 
                        <MainPage 
                        setDataObj={setDataObj}
                        />} 
                    />
                    <Route path="/product" exact component={() =>
                        <ProductPage 
                            
                            dataToDisplayObj={dataToDisplayObj}
                            
                            setDataObj={setDataObj} 
                            
                        />}
                    />
                    <Route path="/what-is-new" exact component= {() =>
                        <WhatsNew  setDataObj={setDataObj} />}
                    />
                    <Route path="/women" exact component = {() =>
                        <WomenCategory setDataObj={setDataObj} />}
                    />
                    <Route path="/men" exact component= {() =>
                        <MenCategory setDataObj={setDataObj} />}
                    />
                    <Route path="/gear" exact component={() =>
                        <GearCategory setDataObj={setDataObj}  />}
                    />
                    <Route path="/training" exact component={() =>
                        <TrainingCategory setDataObj={setDataObj}  />} 
                    />
                    <Route path="/sale" exact component={() =>
                        <SaleCategory />} 
                    />
                    <Route path="/category" component={() =>
                        <CategoryProducts setDataObj={setDataObj}  />}
                    />
                </Switch>
                <Footer />
            </Router>
        </div>
    )
}

export default App;