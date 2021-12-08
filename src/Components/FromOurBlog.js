import React from 'react'
import '../Styles/FromOurBlog.css'
import rectangle1 from '../Images/Rectangle1.png'
import rectangle2 from '../Images/Rectangle2.png'
import rectangle3 from '../Images/Rectangle3.png'
function FromOurBlog() {
    return (
        <div className="fromOutBlogContainer">
            <div className="topFlex">
                <h2>From our blog</h2>
                <button>View all</button>
            </div>
            <div className="blog">
                <div className="col-3">
                    <img src={rectangle1}></img>
                    <h4>What’s Fusely?</h4>
                    <p>A brand new company, created for everyone.<br/
                    >This article will help you understand what<br/>
                    "fusely" stands for.</p>
                    <a>Read More</a>
                </div>
                <div className="col-3">
                    <img src={rectangle2}></img>
                    <h4>Introducing Fusely Engage</h4>
                    <p>We’re happy to announce the Fusely Engage.
                    The first growth automation platform designed
                    for the digital interactions.</p>
                    <a>Read More</a>
                </div>
                <div className="col-3">
                    <img src={rectangle3}></img>
                    <h4>Premium vs Enterprise plan</h4>
                    <p>Let’s compare our most popular plans: Premium
                    and Enterprise. This article will help you decide
                    which one will be better for your needs.</p>
                    <a>Read More</a>
                </div>

            </div>
        </div>
    )
}

export default FromOurBlog
