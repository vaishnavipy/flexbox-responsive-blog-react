import React from "react"

import './App.css';

function SidebarRecent(){
    return(
        <div className="right-col">
            <div className="right-col-container">
                <h4 className="right-col-title">Recent Posts</h4>

                <img src="https://images.unsplash.com/photo-1496116218417-1a781b1c416c?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2850&q=80"/>
                <p className="right-col-article-title">Keeping cooking simple </p>
                <hr/>

                <img src="https://images.unsplash.com/photo-1449247709967-d4461a6a6103?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80"/>
                <p className="right-col-article-title">Simplicity and Work </p>
                <hr/>

                <img src="https://images.unsplash.com/photo-1487700160041-babef9c3cb55?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2835&q=80"/>
                <p className="right-col-article-title">Simple decorations</p>
                
            </div>

            
            </div>
    )
}

export default SidebarRecent