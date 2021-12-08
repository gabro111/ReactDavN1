import React from 'react'
import '../Styles/Banner.css'
import main from '../Images/Hero image.png'
function Banner() {
    return (
        <div className="bannerContainer">
            <div className="row">
                <div className="col-6">
                    <h2 className="maintext">Let's get<br /> fusely<br /> together</h2>
                    <p>Outcome-centered product that reduce churn,<br />
                        optimize pricing, and grow your subscription<br />
                        business end-to-end.</p>
                    <button className="btn-main">Get Started</button>

                </div>
                <div className="col-6"><img src={main}></img></div>
            </div>

        </div>
    )
}

export default Banner
