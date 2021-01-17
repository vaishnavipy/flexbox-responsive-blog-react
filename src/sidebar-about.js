import React from "react"
import './App.css';

function SidebarAbout(){
    return(
          <div className="right-col">
                <div className="right-col-container">
                    <h4 className="right-col-title">About Me</h4>
                    <img src="https://images.unsplash.com/photo-1521117177129-ca6b2e68cb26?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2190&q=80" />
                    <div className="article-content">I find life better, and I'm happier, when things are nice and simple.</div>
                </div>
            </div>
   )
}

export default SidebarAbout