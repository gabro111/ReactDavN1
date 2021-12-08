import React from 'react'
import '../Styles/PlanChooser.css'

function PlanChooser() {
    return (
        <div className="planChooseContainer">
            <h2 className="planTitleText">Choose your Plan</h2>

            <div className="planRow">
                <div className="planCol-4">
                    <p>Starter</p>
                    <h4>Free</h4>
                    <p>Dashboard</p>
                    <p>Limited Support</p>
                    <p>Forever free</p>
                    <button className="btn-login">Get Started</button>


                </div>
                <div className="planCol-2">
                    <p>premium</p>
                    <h4>$29</h4>
                    <p>Dashboard & Analysis</p>
                    <p>Premium Support</p>
                    <p>Tracking Service</p>
                    <button className="btn-login">Get Started</button>

                </div>
                <div className="planCol-4">
                    <p>Enterprise</p>
                    <h4>$49</h4>
                    <p>All features in Premium</p>
                    <p>Realtime overview</p>
                    <p>Mobile app</p>
                    <button className="btn-login">Get Started</button>
                </div>
            </div>
        </div>

    )
}

export default PlanChooser
