import React from 'react'
import '../Styles/Banner.css'
import illustration from '../Images/Illustration.png'
function Banner2() {
    return (
        <div className="bannerContainer">
            <div className="row">

                <div className="col-6"><img src={illustration}></img></div>
                <div className="col-6">
                    <h3 className="maintext">Detailed<br/>Examination</h3>
                    <p>A daily dataset to keep you up to date on<br/> subscription market trends and what's<br/> happening in your vertical.</p>
                    <a>Learn more</a>

                </div>
            </div>

        </div>
    )
}

export default Banner2
