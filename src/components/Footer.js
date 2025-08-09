import React from 'react';
import { Link } from 'react-router-dom';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock,
  Facebook,
  Instagram
} from 'lucide-react';
import './Footer.css';

// Lightweight monochrome TikTok icon
const TikTokIcon = ({ size = 20, color = 'currentColor' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-.88-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1.04-.1z"/>
  </svg>
);

// Lightweight monochrome Google "G" icon
const GoogleIcon = ({ size = 20, color = 'currentColor' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12.24 10.285V14.4h6.806c-.275 1.765-2.056 5.174-6.806 5.174-4.095 0-7.439-3.389-7.439-7.574s3.345-7.574 7.439-7.574c2.33 0 3.891.989 4.785 1.849l3.254-3.138C18.189 1.186 15.479 0 12.24 0c-6.635 0-12 5.365-12 12s5.365 12 12 12c6.926 0 11.52-4.869 11.52-11.726 0-.788-.085-1.39-.189-1.989H12.24z"/>
  </svg>
);


const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          {/* Company Info */}
          <div className="footer-section">
            <div className="footer-brand">
              {/* <div className="brand-logo">JH</div> */}
              <div className="brand-text">
                <h3>Juction Hardware</h3>
                <p>Asian Paints Dealer</p>
              </div>
            </div>
            <p className="footer-description">
              Your trusted partner for premium Asian Paints in Chitwan, Nepal. Quality products,
              expert consultation, and professional services.
            </p>
            <div className="social-links">
              <a
                href="https://www.facebook.com/juctionhardware"
                className="social-link"
                target="_blank"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://www.instagram.com/juctionhardware"
                className="social-link"
                target="_blank"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://www.tiktok.com/@juctionhardware"
                className="social-link"
                target="_blank"
                aria-label="TikTok"
              >
                <TikTokIcon size={20} />
              </a>
              <a
                href="https://maps.app.goo.gl/PxpxTQo1X1vV7z1m8"
                className="social-link"
                target="_blank"
                aria-label="Google"
              >
                <GoogleIcon size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul className="footer-links">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/products">Products</Link>
              </li>
              <li>
                <Link to="/services">Services</Link>
              </li>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Our Services */}
          <div className="footer-section">
            <h3>Our Services</h3>
            <ul className="footer-links">
              <li>Interior Painting</li>
              <li>Exterior Painting</li>
              <li>Color Consultation</li>
              <li>Paint Supply</li>
              <li>Free Delivery</li>
            </ul>
          </div>

          {/* Contact Info - grid-aligned */}
          <div className="footer-section">
            <h3>Contact Info</h3>
            <ul className="contact-list">
              <li className="contact-item">
                <MapPin size={31} />
                <span className="contact-text">
                  Main Road, Narayangarh, Bharatpur, Chitwan, Nepal
                </span>
              </li>
              <li className="contact-item">
                <Phone size={16} />
                <span className="contact-text">+977-9845156783</span>
              </li>
              <li className="contact-item">
                <Mail size={16} />
                <span className="contact-text contact-email">contact@juctionhardware.com.np</span>
              </li>
              <li className="contact-item">
                <Clock size={16} />
                <span className="contact-text">Tue-Sun: 8AM-7PM</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>&copy; {currentYear} Juction Hardware. All rights reserved.</p>
            <div className="footer-bottom-links">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
              <a href="#">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 