import React from 'react';
import FlowFiLogo from '../public/images/FlowFi Logo.png';
import SuiLogo from '../public/images/Sui_Symbol bluw.png';
import SecurityFrame from '../public/images/Red frame.png';
import PurpleGradient from '../public/images/Purple gradient.png';
import GreenGradient from '../public/images/Green gradient.png';
import Image from 'next/image';
import './styles.css';

const HeroSection = () => {
  return (
    <div className="hero-container">
      <nav className="navbar">
        <Image src={FlowFiLogo} alt="FlowFi Logo" className="flowfi-logo" />
        <div className="nav-links">
          <a href="#" className="nav-link">Home</a>
          <a href="#" className="nav-link">Learn more</a>
          <a href="#" className="nav-link">Demo</a>
        </div>
        <button className="get-started-btn">Get started for free →</button>
      </nav>
      
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
          <Image src={SuiLogo} alt="Sui Logo" className="sui-logo" />
          <p>Built for companies that need to exist on the sui blockchain</p>
        </div>
        <div className="hero-buttons">
          <button className="login-btn">Login to dashboard</button>
          <button className="get-started-btn-hero">Get started</button>
        </div>
      </div>
      
      <h2 className="section-title">How we'd help with <br />
      your pension plan management</h2>
      <div className="feature-cards">
        <div className="feature-card-security">
          <Image src={SecurityFrame} alt="Security Frame" className="feature-image" />
          <div className="feature-content">
            <h3>Securely save on the blockchain</h3>
            <p>With our solution, participants can securely save their pension on the sui blockchain</p>
          </div>
        </div>
        <div className="feature-card-regulations">
          <Image src={PurpleGradient} alt="Purple Gradient" className="feature-image" />
          <div className="feature-content">
            <h3>Regulations</h3>
            <p>Stay clear of government regulations while keeping your pension safe</p>
          </div>
        </div>
        <div className="feature-card-leverage">
          <Image src={GreenGradient} alt="Green Gradient" className="feature-image" />
          <div className="feature-content">
            <h3>Leverage on loans</h3>
            <p>Employees can easily leverage their pension funds at any time</p>
          </div>
        </div>
      </div>

      <div className="onboard-section">
        <h2>Onboard on FlowFi today <br></br>to get started.</h2>
        <p>Bring your company to SUI while helping them leverage on the power of the blockchain</p>
        <button className="onboard-btn">Onboard my company →</button>
      </div>
    </div>
  );
};

export default HeroSection;