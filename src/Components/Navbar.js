import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import '../Styles/Navbar.css';
import Logo from '../assets/Logo.jpg';
const Navbar = () => {
  const images = [
    "../assets/Image1.jpeg",
    "../assets/Image2.jpeg",
    "../assets/Image3.jpeg",
  ];

  const [currentImage, setCurrentImage] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000); // 5000ms = 5 seconds

    return () => clearInterval(interval);
  }, [images.length]);

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
      <Link to="/portfolio">Portfolio</Link>
      <Link to="/videos">Videos</Link>
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
