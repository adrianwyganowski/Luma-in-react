import React from "react"

import "./App.css"

import Header from"../module-header/Header"
import Cms from "../module-cms/Cms";
import Footer from "../module-footer/Footer"



function App() {
    return (
        <div>
            <Header />
            <Cms />
            <Footer />
        </div>
    )
}

export default App;