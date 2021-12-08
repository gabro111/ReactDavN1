import React from 'react'
import '../Styles/Footer.css'
import logo1 from '../Images/facebook.png'
import logo2 from '../Images/tweeter.png'
import logo3 from '../Images/linkedin.png'
import logo4 from '../Images/Logosmall.png'
function Footer() {
    return (
        <div className="posContainer">
            <div className="blackBox">
                <h3>Interested in<br/>getting fusely?</h3>
                <button>Let's talk</button>
            </div>
            <div className="footerConteiner">
                <div className="footerRow">
                    <div className="footercol">
                        <h4>Product</h4>
                        <a>How it works</a>
                        <a>Features</a>
                        <a>Pricing</a>
                        <a>FAQ</a>
                        <a>Download</a>

                    </div>
                    <div className="footercol">
                        <h4>Company</h4>
                        <a>About</a>
                        <a>Blog</a>
                        <a>Partnership</a>
                        <a>Terms of use</a>
                        <a>Privacy policy</a>

                    </div>
                    <div className="footercol">
                        <h4>Support</h4>
                        <a>Help center</a>
                        <a>Contact us</a>

                    </div>
                    <div className="footercol">
                        <h4>Get in touch</h4>
                        <div className="footercol-row">
                            <a><img src={logo1}></img></a>
                            <a><img src={logo2}></img></a>
                            <a><img src={logo3}></img></a>
                        </div>

                    </div>

                </div>
                <footer>

                    <img src={logo4}></img>


                    <p>© Fusely 2021. All rights reserved.</p>
                </footer>

            </div>
        </div>

    )
}

export default Footer
