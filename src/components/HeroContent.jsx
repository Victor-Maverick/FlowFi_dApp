import React from 'react';
import SuiLogo from '../../App/Sui_Symbol bluw.png';

const HeroContent = () => {
  return (
    <div className="hero-content">
      <h1 className="hero-title">
        Think pension<br />
        but on the blockchain
      </h1>
      <p className="hero-subtitle">
        Bringing the pension infrastructure to the<br />
        blockchain powered by <span className="sui-text">SUI</span>
      </p>
      <div className="hero-feature">
        <img src={SuiLogo} alt="Sui Logo" className="sui-logo" />
        <p>Built for companies that need to exist on the sui blockchain</p>
      </div>
      <div className="hero-buttons">
        <button className="login-btn">Login to dashboard</button>
        <button className="get-started-btn-hero">Get started</button>
      </div>
    </div>
  );
};

export default HeroContent;