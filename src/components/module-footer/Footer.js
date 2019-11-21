import React from "react"
import "./Footer.css"

import FooterContent from "../module-footer-content/FooterContent"
import Copyright from "../module-copyright/Copyright"

function Footer() {
    return(
        <footer className="footer">
            <FooterContent />
            <Copyright />
        </footer>
    )
}

export default Footer