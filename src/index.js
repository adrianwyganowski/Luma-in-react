import React from "react"
import ReactDOM from "react-dom"
import "./index.css"

import App from "./components/app/App"

function Index() {
    return (
        <div>
            <App />
        </div>
    )
}

ReactDOM.render(<Index />, document.getElementById("root"))