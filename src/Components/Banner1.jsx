import React from 'react';
import Second from './second.mp4'
import './Banner1.css'

const Banner1 = () => {
  return (
    <div className='Banner2'>
      <video className='vid2' src={Second}  autoPlay loop muted width="600">
        Your browser does not support the video tag.
      </video>
      <div className="content2">
        <p>THE</p>
        <h1> iX1</h1>
        <h2> LONG WHEELBASE </h2>
        <p> Introductory Price of ₹ 49,00,000 </p>
        <button>Discover Now</button>
      </div>
    </div>

  );
}

export default Banner1;
