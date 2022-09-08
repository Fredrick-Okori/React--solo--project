import React from "react"
import profilePicture from "../images/pexels-hamza-nouasria-8141168.jpg"

export default function Info() {
    return (
        <div>
            <img src={profilePicture} alt="" />
            <div className="profile">
                <span className="name">Fredrick Okori</span><br></br>
                <span>Frontend Developer | Refactory Uganda</span><br/>
            </div>
            <div className="social">
                <button id="email">Email</button>
                <button id="linkin">LinkedIn</button>
            </div>
            
        </div>
    )
}
