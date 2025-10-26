import { useState } from "react";
import { Link } from "react-router-dom";
import '../Styles/Navbar.css';
import Logo from '../assets/Logo.jpg';
// import Image1 from '../assets/Image1.jpeg';
// import Image2 from '../assets/Image2.jpeg';
// import Image3 from '../assets/Image3.jpeg';

const Navbar = () => {
 

  const [menuOpen, setMenuOpen] = useState(false);
  const [portfolioOpen, setPortfolioOpen] = useState(false); // for mobile dropdown
  
  return (
   <nav className="navbar text-white p-4 flex justify-between">
    <div className="Logo">
    <img src={Logo} alt="Logo" className="logo"/>
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
    <div className="navbar-center">
      <h1>VELNAMBI VISUALS</h1>
      <p> About Carnivals</p>
      <div className="navbar-center-social-icons">
      <a href="https://www.instagram.com/velnambivisuals/?igsh=dWJsb2VwZDF4cmJh#" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-instagram"></i>
      </a>
      <a href="https://www.facebook.com/Velnambi" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-facebook"></i>
      </a>
      <a href="https://www.youtube.com/@velnambib" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-youtube"></i>
      </a>
      </div>
    </div>
</nav>

  );
};

export default Navbar;
