import React from 'react';
import First from './first.mp4'
import './Banner.css'

const Banner = (props) => {
  return (
    <div className='Banner1'>
      <video className='vid' src={props.src}  autoPlay loop muted width="600">
        Your browser does not support the video tag.
      </video>
      <div className="content1">
        <p>{props.p1}</p>
        <h1> {props.h1}</h1>
        <h2> {props.h2} </h2>
        <p> {props.p2} </p>
        <button>Discover Now</button>
      </div>
      <div className="low">
      {props.low}
      </div>
    </div>

  );
}

export default Banner;
