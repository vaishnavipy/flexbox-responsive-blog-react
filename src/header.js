import React from "react"
import {Link} from "react-router-dom"

function Header(){

    const menu = document.querySelectorAll("li")

    function handleClick(e){

        menu.forEach(elm => elm.classList.remove("active"))

        e.target.classList.add("active")

    }

    return(
    <div className="header">
        <div className="container container-nav">
            <div className="logo">
                <h1>Living the Simple Life</h1>
                <p>A Blog Exploring Minimalism in Life</p>
            </div>
            <ul>
               <Link to="/" className=" link"> <li className="active" onClick={handleClick}>Home</li></Link>
               <Link to="/about" className="link"> <li onClick={handleClick}>About Me</li></Link>
               <Link to="/recent" className="link"> <li onClick={handleClick}>Recent Posts</li></Link>
            </ul>
        </div>
    </div>)
}

export default Header