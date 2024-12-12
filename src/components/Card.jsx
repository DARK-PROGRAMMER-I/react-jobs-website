import React from 'react';
import profileImage from '../assets/ammar.jpg'

function Card(){
    return (
        <div className="card">
            <img src={profileImage} alt="Profile Picture" />
            <h2>Dark Programmer</h2>
            <p>Im Software Engineer and make Awesome Mobile Applications and Web Applications as well.</p>

        </div>
    );
}

export default Card