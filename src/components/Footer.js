import React from 'react';
import { Link } from 'react-router-dom';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock,
  Facebook,
  Instagram,
  Twitter
} from 'lucide-react';
import './Footer.css';

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
              Your trusted partner for premium Asian Paints in Chitwan, Nepal. 
              Quality products, expert consultation, and professional services.
            </p>
            <div className="social-links">
              <a href="#" className="social-link">
                <Facebook size={20} />
              </a>
              <a href="#" className="social-link">
                <Instagram size={20} />
              </a>
              <a href="#" className="social-link">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/products">Products</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/contact">Contact</Link></li>
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
                <span className="contact-text">Main Road, Narayangarh, Bharatpur, Chitwan, Nepal</span>
              </li>
              <li className="contact-item">
                <Phone size={16} />
                <span className="contact-text">+977-9845156783</span>
              </li>
              <li className="contact-item">
                <Mail size={16} />
                <span className="contact-text contact-email">bhimshrestha3669@gmail.com</span>
              </li>
              <li className="contact-item">
                <Clock size={16} />
                <span className="contact-text">Sun-Sat: 8AM-7PM</span>
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