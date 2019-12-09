import React from "react"
import "./SidebarFilter.css"

function SidebarFilter({items}) {
    function displaySubmenu(e){
        if (e.currentTarget.dataset.collapsed === "false"){
            e.currentTarget.className="sidebarFilterCollapsed"
            e.currentTarget.dataset.collapsed = "true"
        }
        else  {
            e.currentTarget.className="sidebarFilterNotCollapsed"
            e.currentTarget.dataset.collapsed = "false"
        }
    }


    let display = items.map(item => 
            <div className="sidebarFilterNotCollapsed" onClick={displaySubmenu} data-collapsed="false" key={item + String(Math.floor(Math.random() * 10))}>
                <p className="sidebarFilter__firstLevelItem" >{item.shift()}</p>
                {item.map(itemOf => <p className="sidebarFilter__secondLevelItem" key={itemOf + String(Math.floor(Math.random() * 10))}>{itemOf} </p>)}
            </div>
        )

    return(
        <div className="sidebarFilter">
            {display}
        </div>
    )
}

export default SidebarFilter