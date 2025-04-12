import '../styles/Footer.css';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';


function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section">
                    <div className='name&logo'>
                        <div><h3> <img src="logo.png" id='footer-logo' alt="" />ShopEasy</h3></div>
                        <div><p>India's #1 Choice For Shopping</p></div>
                        
                        
                    </div>
                    
                    </div>
                        <div className="footer-section">
                        <h4>Contact</h4>
                        <p>Email: support@shopeasy.com</p>
                        <p>Phone: (123) 456-7890</p>
                    </div>
                <div className="footer-section">

                <h4>Follow Us</h4>
                <div className="social-links">
                    <a href="#" aria-label="Facebook"> <FaFacebook/></a>
                    <a href="#" aria-label="Instagram"><FaInstagram/></a>
                    <a href="#" aria-label="Twitter"><FaTwitter/></a>
                </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} ShopEasy. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;