import React from "react"

function Footer(){
    const d = new Date();

    return(
    <div className="footer">
        <h3>Living the Simple life</h3>
        <p>Copyright {d.getFullYear()}</p>
    </div>)
}

export default Footer