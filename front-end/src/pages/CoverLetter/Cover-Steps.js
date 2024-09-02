import React from 'react';
import './Cover-Steps.css';

const Card = () => {
  return (
    <div className='card-container'>
      {/* Heading */}
      <h2 className="section-heading">Cover Letter in 3 Steps </h2>

      {/* Cards */}
      <div className="cards-wrapper">
        <div className="card1">
          <img src="approved.svg" alt="Professionally designed template icon" className="card-image" />
          <p>Choose your professionally designed template</p>
        </div>

        <div className="card1">
          <img src="burger.png" alt="Pre-written examples icon" className="card-image" />
          <p>Add pre-written examples to each section</p>
        </div>

        <div className="card1">
          <img src="download.png" alt="Download CV icon" className="card-image" />
          <p>Download and start applying</p>
        </div>
      </div>

      {/* Buttons */}
      <div className="buttons-container">
        <button className="btn-primary">Start Now</button>
        <button className="btn-secondary">Learn More</button>
      </div>
    </div>
  );
}

export default Card;
