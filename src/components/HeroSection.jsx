import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/HeroSection.css';
import logo from '../assets/logo.png'; // Make sure to add your logo to assets folder

const HeroSection = () => {
  return (
    <div className="hero-container">
      <nav className="navbar">
        <div className="logo-container">
          <img src={logo} alt="FlowFi Logo" className="logo" />
        </div>
        <div className="nav-links">
          <Link to="/" className="nav-link active">Home</Link>
          <Link to="/learn" className="nav-link">Learn more</Link>
          <Link to="/demo" className="nav-link">Demo</Link>
        </div>
        <div className="cta-button-container">
          <Link to="/signup" className="cta-button">
            Get started for free <span className="arrow">→</span>
          </Link>
        </div>
      </nav>

      <div className="hero-content">
        <div className="hero-text">
          <h1>
            Think pension<br />
            but on the blockchain
          </h1>
          <p className="hero-description">
            Bringing the pension infrastructure to the<br />
            blockchain powered by <span className="highlight">SUI</span>
          </p>
          
          <div className="feature-box">
            <div className="feature-icon">💧</div>
            <p className="feature-text">
              Built for companies that need to exist on the<br />
              sui blockchain
            </p>
          </div>
          
          <div className="action-buttons">
            <Link to="/dashboard" className="login-button">Login to dashboard</Link>
            <Link to="/get-started" className="get-started-button">Get started</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;