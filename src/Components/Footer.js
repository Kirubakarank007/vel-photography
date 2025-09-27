
import '../Styles/Footer.css';
import Logo from '../assets/Logo1.jpg';
import { Link } from "react-router-dom";

export const Footer = () => {
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
                <a href="https://www.google.com/maps/place/Vasu+%26+Co/@11.5741715,77.5836047,3a,75y,195.08h,81.24t/data=!3m7!1e1!3m5!1sn6r-CGlz6e620C9rZzRElQ!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D8.760213514747434%26panoid%3Dn6r-CGlz6e620C9rZzRElQ%26yaw%3D195.0815173370737!7i13312!8i6656!4m26!1m16!4m15!1m6!1m2!1s0x3bae15c0727cb205:0x9f38a28f9fd5427c!2s1st+Floor,+350%2F5%2F2,+2nd+Cross+Rd,+1st+Block,+Jayanagar+1st+Block,+Jayanagar,+Bengaluru,+Karnataka+560011!2m2!1d77.5864964!2d12.9448653!1m6!1m2!1s0x3ba947002e3fab77:0x476a1e13e1dad23f!2sVasu+%26+Co,+299,+Annasalai,+Thavittupalayam,+Anthiyur,+Tamil+Nadu+638501!2m2!1d77.5835298!2d11.574277!3e9!3m8!1s0x3ba947002e3fab77:0x476a1e13e1dad23f!8m2!3d11.574277!4d77.5835298!10e5!14m1!1BCgIgAQ!16s%2Fg%2F11vwdrcmtl?entry=ttu&g_ep=EgoyMDI1MDkyNC4wIKXMDSoASAFQAw%3D%3D" > <i className="fas fa-map-marker-alt"></i> 1st Floor,Street-2,Opp to VASU & Co, <br />
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