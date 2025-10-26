import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from '../assets/Logo.jpg';
import '../Styles/NavbarComponent.css';

const NavbarComponent = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [portfolioOpen, setPortfolioOpen] = useState(false); // for mobile dropdown

  return (
    <div className="navbar-component">
      <img src={Logo} alt="Logo" className="logo" />
      
      <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        &#9776;
      </div>

      <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        
        <div 
          className={`dropdown ${portfolioOpen ? 'open' : ''}`}
          onClick={() => setPortfolioOpen(!portfolioOpen)} // toggle on mobile
        >
          <Link className="dropbtn">Portfolio</Link>
          <div className="dropdown-content">
            <Link to="/portfolio/wedding">Wedding Photography</Link>
            <Link to="/portfolio/baby">Baby Photography</Link>
            <Link to="/portfolio/maternity">Maternity Photography</Link>
            <Link to="/portfolio/pre-wedding">Pre-Wedding Photography</Link>
          </div>
        </div>
         
         <div 
          className={`dropdown ${portfolioOpen ? 'open' : ''}`}
          onClick={() => setPortfolioOpen(!portfolioOpen)} // toggle on mobile
        >
          <Link className="dropbtn">Videos</Link>
          <div className="dropdown-content">
            <Link to="/videos/wedding-video">Wedding Video</Link>
            <Link to="/videos/baby-video">Baby Video</Link>
          </div>
        </div>
        
        <Link to="/contact">Contact</Link>
      </div>
    </div>
  );
};

export default NavbarComponent;
