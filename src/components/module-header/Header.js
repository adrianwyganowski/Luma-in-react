import React from "react"
import "./Header.css"

import Panel from "../module-panel/Panel"
import HeaderContent from "../module-header-content/HeaderContent";
import Navigation from "../module-navigation/Navigation";

function Header() {
    
    return (
        <header className="header">
            <Panel />
            <HeaderContent />
            <Navigation />
        </header>
    )
}

export default Header