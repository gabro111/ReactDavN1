import React from 'react'
import '../Styles/Banner.css'
import illustration from '../Images/Illustration3.png'

function Banner4() {
    return (
        <div className="bannerContainer">
        <div className="row">

            <div className="col-6"><img src={illustration}></img></div>
            <div className="col-6">
                <h3 className="maintext">Professional<br/>Team</h3>
                <p>Well, obviously, we're professionals. Don't<br/>
                hesitate - get to know us better.</p>
                <a>Learn more</a>

            </div>
        </div>

    </div>
    )
}

export default Banner4
