import React from 'react';
import profileImage from '../assets/img.png'


function Card(){
    return (
        <div className="card">
            <img className='card-image' src={profileImage} alt="Profile Picture" />
            <h2 className='card-heading'>Dark Programmer</h2>
            <p className='card-desc'>Im Software Engineer and make Awesome Mobile Applications and Web Applications as well.</p>

        </div>
    );
}

export default Card