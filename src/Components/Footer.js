
import '../Styles/Footer.css';
import Logo from '../assets/Logo1.jpg';
import { Link } from "react-router-dom";

export
const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-logo">
                <img src={Logo} alt="Logo" className="logo" />
                <h2>VELNAMBI VISUALS</h2>
                <div className="footer-socials-icons">
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
            <hr style={{ border: '1px solid yellowgreen', width: '90%', margin: '20px auto' }} />
            <div className="footer-Links">
                <h1>Quick Links</h1>
                <Link to="/"><i className='fas fa-home'></i> Home </Link>
                <Link to="/about"><i className="fas fa-info-circle"></i> About </Link>
                <Link to="/portfolio"><i className="fas fa-images"></i> Portfolio </Link>
                <Link to="/videos"><i className="fas fa-video"></i> Videos </Link>
                <Link to="/contact"><i className="fas fa-envelope"></i> Contact </Link>
            </div>
            <hr style={{ border: '1px solid yellowgreen', width: '90%', margin: '20px auto' }} />

            <div className="footer-address"> 
                <h1>Anthiyur Address</h1>
                <a href='' > <i className="fas fa-map-marker-alt"></i> 1st Floor,Street-2,Opp to VASU & Co, <br />
                    Thavittupalayam,Anthiyur, <br />
                    Tamilnadu 638501</a>
                <a href="tel:+919884888777"><i className="fas fa-phone-alt"></i> +91 97500 51899
                </a>    
                <a href="mailto:info@velnambivisuals.com">
                <i className="fas fa-envelope"></i> velnambivisuals@gmail.com
                </a>
            </div>
            <hr style={{ border: '1px solid yellowgreen', width: '90%', margin: '20px auto' }} />

        </div>
    );
}   

export default Footer;  