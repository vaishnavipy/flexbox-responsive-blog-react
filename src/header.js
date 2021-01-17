import React from "react"
import {Link} from "react-router-dom"

function Header(){
    return(
    <div className="header">
        <div className="container container-nav">
            <div className="logo">
                <h1>Living the Simple Life</h1>
                <p>A Blog Exploring Minimalism in Life</p>
            </div>
            <ul>
               <Link to="/" className=" link"> <li className="active">Home</li></Link>
               <Link to="/about" className="link"> <li>About Me</li></Link>
               <Link to="/recent" className="link"> <li>Recent Posts</li></Link>
            </ul>
        </div>
    </div>)
}

export default Header