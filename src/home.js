import React from "react"
import Articles from "./articles"
import SidebarAbout from "./sidebar-about"
import SidebarRecent from "./sidebar-recent"



function Home(){
    return(
    <div className="container main-container">
        <div className="col-left">
            <div className="featured-article">
                <div className="featured-img"> 
                <img src="https://images.unsplash.com/photo-1533090161767-e6ffed986c88?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2850&q=80"  />
                </div>

                <p className="comments">July 23, 2019 | 3 comments</p>

                <h2 className="article-title">Find simplicity in life</h2>

                <p  className="article-content"><strong style={{color:"#707070"}}>Life can get complicated really quickly</strong>, but it doesn't have to be! There are many ways to simplify your life, <a href="#">a few of which we've explored in the past</a>. 
                This week we're taking a bit of a approach though, in how you can find simplicity in the life you already living.</p>

                <a href="#" class="article-read-more">CONTINUE READING</a>
            </div>
            <hr />
            
            <Articles />
       
        </div>

        

        <div className="col-right">
            <SidebarAbout />
            <SidebarRecent /> 
        </div>
    </div>)
}

export default Home