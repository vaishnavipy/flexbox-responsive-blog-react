import React, { Fragment } from "react"

function Articles(){
    return(
    <Fragment>
        <div className="article">
                <div className="article-col1">
                    <div className="article-img"><img src="https://images.unsplash.com/photo-1496116218417-1a781b1c416c?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2850&q=80"/></div>
                    <p className="comments">July 19, 2019 | 3 comments</p>
                </div>
                <div className="article-col2">

                     <h2 className="article-title">How to keep your cooking simple</h2>

                    <p  className="article-content">Food is a very important part of everyone's life. If you want to be healthy, you have to eat healthy. 
                    One of the easiest ways to do that is to keep your cooking nice and simple.</p>

                    <a href="#" class="article-read-more">CONTINUE READING</a>
                    
                </div>
            </div>

            <div className="article">
                <div className="article-col1">
                    <div className="article-img"><img src="https://images.unsplash.com/photo-1449247709967-d4461a6a6103?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80"/></div>
                    <p className="comments">July 19, 2019 | 3 comments</p>
                </div>
                <div className="article-col2">

                     <h2 className="article-title">Simplicity and work</h2>

                    <p  className="article-content">Work is often a major source of stress. People get frustrated, it ruins their relationship with others and it leads to burnout. By keeping your work life as simple as possible, it will help balance everything out.</p>

                    <a href="#" class="article-read-more">CONTINUE READING</a>
                    
                </div>
            </div>

            <div className="article">
                <div className="article-col1">
                    <div className="article-img"><img src="https://images.unsplash.com/photo-1487700160041-babef9c3cb55?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2835&q=80"/></div>
                    <p className="comments">July 19, 2019 | 3 comments</p>
                </div>
                <div className="article-col2">

                     <h2 className="article-title">Simple decorations</h2>

                    <p  className="article-content">A home isn't a home until you've decorated a little. People either don't decorate, or they go overboard and it doesn't have the impact they were hoping for. Staying simple will help draw the eye where you want it to and make things pop like never before. </p>

                    <a href="#" class="article-read-more">CONTINUE READING</a>
                    
                </div>
            </div>
    </Fragment>)
}

export default Articles