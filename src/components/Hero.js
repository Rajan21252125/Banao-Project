import React from 'react';
import './Hero.css';

export default function Hero() {
  return (
    <div>
      <div className="row">
        <div className="col">
          <div className="home-container">
            <img
              className="home-background"
              src="./image/background1.png"
              alt="Background"
            />
            <div className="home-content">
              <h1>Computer Engineering</h1>
              <p>142,765 Computer Engineers follow this</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
