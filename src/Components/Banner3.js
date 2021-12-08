import React from 'react'
import '../Styles/Banner.css'
import illustration from '../Images/Illustration2.png'

function Banner3() {
    return (
        <div className="bannerContainer">
        <div className="row">
        <div className="col-6">
                <h3 className="maintext">Creative<br/>Solutions</h3>
                <p>Creativity is our second name. We're full of<br/>inventive ideas and we're happy to present<br/>them to you.</p>
                <a>Learn more</a>

            </div>
            <div className="col-6"><img src={illustration}></img></div>
            
        </div>

    </div>
    )
}

export default Banner3
