import React from 'react'
import '../Styles/SponsorBanner.css'
import logo1 from '../Images/binator logo.png'
import logo2 from '../Images/buyme logo.png'
import logo3 from '../Images/loogipsum logo.png'
import logo4 from '../Images/umbrella logo.png'
import logo5 from '../Images/square logo.png'
function SponsorBanner() {
    return (
        <div className="sponsorRow">
            <img src={logo1}></img>
            <img src={logo2}></img>
            <img src={logo3}></img>
            <img src={logo4}></img>
            <img src={logo5}></img>
            
        </div>
    )
}

export default SponsorBanner
