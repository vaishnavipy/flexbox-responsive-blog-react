import React from "react"

import SidebarRecent from "./sidebar-recent"


function About(){
    return(
    <div className="container main-container">
    
        <div className="col-left">
                <div className="featured-img about-img"> 
                <img src="https://images.unsplash.com/photo-1521117177129-ca6b2e68cb26?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2190&q=80"/>
                </div>

                <h1 className="about-me-h1">My name is Lia and living the simple life saved my life</h1>
                <p  className="article-content"><strong style={{color:"#707070"}}>I used to be a pack rat.</strong> I had so many things that I thought that I loved, but the truth was I couldn't even appreciate any of it because there was too much.

                Things were terrible. I had a job that I hated, a home that I didn't want to live in, and I couldn't hold a relationship.</p>

                <h3 className="about-me-h2">How I turned things around</h3>

                <p  className="article-content"><strong style={{color:"#707070"}}>I  was on the verge of a breakdown when I got rid of everything.</strong> I had so many things that I thought that I loved, but the truth was I couldn't even appreciate any of it because there was too much.
                I literally put 90% of my possessions in the garbage, sold my place and moved into a smaller apartment, and I quit my job.

                It wasn't easy at all, but everything around me was in such a bad place, I didn't know what else to do. And it worked.</p>

                <h3 className="about-me-h2">Now I live the simple life</h3>

                <p  className="article-content">Now that I'm living a simple life, things are so much better. I'm less stressed, enjoy life and work more, and I have more free time to enjoy.

                With how much it turned my life around, I felt like I had no choice but to start sharing how I did it, and how others can benefit from living a simple life as well, which is why I started this site!</p>

          
        </div>

        <div className="col-right">
            
            <SidebarRecent /> 
        </div>


</div>)
}

export default About