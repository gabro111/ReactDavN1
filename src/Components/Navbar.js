import React from 'react'
import '../Styles/Navbar.css'
import logo from '../Images/Vector.png'
function Navbar() {
    return (
        <div className="navbarcontainer">


            <div className="mainlogo">
                <div className="mainlogo-row">
                    <img className="navbarLogo" src={logo}></img>
                    <a>fusely</a>
                </div>

            </div>

            <div className="navbar">
                <a>Home</a>
                <a>Features</a>
                <a>Pricing</a>
                <a>Blog</a>
                <a>Contact</a>
            </div>
            <div className="startButtons">

                <button className="btn-login">Log In</button>
                <button className="btn-main">Get Started</button>
            </div>

        </div>

    )
}

export default Navbar
