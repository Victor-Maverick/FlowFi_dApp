import React from 'react';
import FlowFiLogo from '../../App/FlowFi Logo.png';

const Navbar = () => {
  return (
    <nav className="navbar">
      <img src={FlowFiLogo} alt="FlowFi Logo" className="flowfi-logo" />
      <div className="nav-links">
        <a href="#" className="nav-link">Home</a>
        <a href="#" className="nav-link">Learn more</a>
        <a href="#" className="nav-link">Demo</a>
      </div>
      <button className="get-started-btn">Get started for free →</button>
    </nav>
  );
};

export default Navbar;