import React from "react"
import ReactDOM from "react-dom"
import "./index.css"


import Header from "./components/module-header/Header"
import Cms from "./components/module-cms/Cms";
import Footer from "./components/module-footer/Footer"




function Index() {
    return (
        <div>
            <Header />
            <Cms />
            <Footer />
        </div>
    )
}

ReactDOM.render(<Index />, document.getElementById("root"))