import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Paintbrush, 
  Shield, 
  Truck, 
  Users, 
  Star,
  ArrowRight,
  Phone,
  MapPin,
  Clock,
  ShieldQuestion,
  ShieldCheck,
  SwatchBook,
  SlidersHorizontal,
  PaintRoller
} from 'lucide-react';
import Carousel from '../components/Carousel';
import './Home.css';

const Home = () => {
  const features = [
    {
      icon: <Paintbrush size={32} />,
      title: 'Premium Paints',
      description:
        'Complete range of Asian Paints including interior, exterior, and specialty paints',
    },
    {
      icon: <ShieldCheck size={32} />,
      title: 'Quality Assured',
      description:
        'Asian Paints products with quality guarantee and upto 15 years warranty',
    },
    {
      icon: <Truck size={32} />,
      title: 'Free Delivery',
      description: 'Free delivery within Chitwan district for orders above Rs. 50000',
    },
    {
      icon: <SwatchBook size={32} />,
      title: 'Expert Color Consultation',
      description:
        'Use our Color Visualizer and professional painting consultation for color selection',
    },
    {
      icon: <SlidersHorizontal size={32} />,
      title: 'Fully Automated Color Mixing',
      description: 'Advanced computerized mixing for precise and accurate color every time',
    },
    {
      icon: <PaintRoller size={32} />,
      title: 'Complete Painting Solutions',
      description: 'Your one-stop-shop for all painting tools, from quality brushes to primers',
    },
  ];

  // Hero slides: first is video, then 3 images from /public/images
  const bannerSlides = [
    <div key="slide0" className="banner-slide">
      <div className="banner-image">
        <video
          className="banner-media"
          src="/images/banner-0.mp4"
          autoPlay
          muted
          playsInline
          preload="metadata"
        ></video>
      </div>
      <div className="banner-content">
        <div className="banner-text">
          <h1>Welcome to Juction Hardware</h1>
          <h2>Official Asian Paints Dealer in Chitwan</h2>
          <p>
            Transform your space with premium Asian Paints. We offer the complete range of interior,
            exterior, and specialty paints with expert consultation and professional support.
          </p>
          <div className="banner-buttons">
            <Link to="/products" className="btn btn-primary">
              Explore Products
              <ArrowRight size={16} />
            </Link>
            <Link to="/contact" className="btn btn-secondary">
              Get Quote
            </Link>
          </div>
        </div>
      </div>
    </div>,
    <div key="slide1" className="banner-slide">
      <div className="banner-image">
        <img className="banner-media" src="/images/banner-1.jpg" alt="Banner 1" />
      </div>
      <div className="banner-content">
        <div className="banner-text">
          <h1>Best Price Guarantee</h1>
          <h2>Retail and Wholesale</h2>
          <p>
            Experience the finest quality paints at the cheapest price with superior coverage,
            durability, and beautiful finishes. From interior to exterior, we have everything you
            need.
          </p>
          <div className="banner-buttons">
            <Link to="/services" className="btn btn-primary">
              Our Services
              <ArrowRight size={16} />
            </Link>
            <Link to="/contact" className="btn btn-secondary">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>,
    <div key="slide2" className="banner-slide">
      <div className="banner-image">
        <img className="banner-media" src="/images/banner-2.jpg" alt="Banner 2" />
      </div>
      <div className="banner-content">
        <div className="banner-text">
          <h1>Color Visualizer</h1>
          <h2>Pick the perfect shades</h2>
          <p>
            Visualize it before you paint it! We provide free color visualizer to help you choose
            the perfect color for your home.
          </p>
          <div className="banner-buttons">
            <Link to="/services" className="btn btn-primary">
              View Services
              <ArrowRight size={16} />
            </Link>
            <Link to="/about" className="btn btn-secondary">
              About Us
            </Link>
          </div>
        </div>
      </div>
    </div>,
    <div key="slide3" className="banner-slide">
      <div className="banner-image">
        <img className="banner-media" src="/images/banner-3.jpg" alt="Banner 3" />
      </div>
      <div className="banner-content">
        <div className="banner-text">
          <h1>Trusted by Homeowners</h1>
          <h2>Quality Products & Service</h2>
          <p>
            From premium paints to expert guidance, we are your partner for beautiful, long-lasting
            finishes.
          </p>
          <div className="banner-buttons">
            <Link to="/products" className="btn btn-primary">
              Explore Products
              <ArrowRight size={16} />
            </Link>
            <Link to="/contact" className="btn btn-secondary">
              Get Quote
            </Link>
          </div>
        </div>
      </div>
    </div>,
  ];

  // Featured products promotional slides (image-only)
  const featuredSlides = [
    <div key="fp1" className="product-promo-slide">
      <img className="product-promo-bg" src="/images/featured-1.jpeg" alt="Featured Product 1" />
      <Link to="/products" className="btn btn-primary btn-pill product-promo-cta">View All Products<ArrowRight size={16} /></Link>
    </div>,
    <div key="fp2" className="product-promo-slide">
      <img className="product-promo-bg" src="/images/featured-2.jpeg" alt="Featured Product 2" />
      <Link to="/products" className="btn btn-primary btn-pill product-promo-cta">View All Products<ArrowRight size={16} /></Link>
    </div>,
    <div key="fp3" className="product-promo-slide">
      <img className="product-promo-bg" src="/images/featured-3.jpeg" alt="Featured Product 3" />
      <Link to="/products" className="btn btn-primary btn-pill product-promo-cta">View All Products<ArrowRight size={16} /></Link>
    </div>
  ];

  return (
    <div className="home">
      <section className="hero">
        <Carousel items={bannerSlides} autoPlay={true} interval={6000} showDots={true} showArrows={true} />
      </section>

      <section className="features section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Why Choose Juction Hardware?</h2>
          </div>
          <div className="features-grid">
            {features.map((feature, index) => (
              <motion.div key={index} className="feature-card card" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: index * 0.1 }}>
                <div className="feature-icon">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="products-preview section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Featured Products</h2>
          </div>
          <div className="products-carousel">
            <Carousel items={featuredSlides} autoPlay={true} interval={7000} showDots={true} showArrows={true} />
          </div>
        </div>
      </section>

      <section className="contact-cta section">
        <div className="container">
          <div className="cta-content">
            <motion.div className="cta-text" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <h2>Ready to Transform Your Space?</h2>
              <p>Get in touch with us for expert consultation, color selection, and professional painting services.</p>
              <div className="cta-info">
                <div className="cta-item"><Phone size={20} /><span>+977-9845156783</span></div>
                <div className="cta-item"><MapPin size={20} /><span>Chitwan, Nepal</span></div>
                <div className="cta-item"><Clock size={20} /><span>Sun-Sat: 9AM-7PM</span></div>
              </div>
              <Link to="/contact" className="btn btn-primary">Contact Us Today</Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home; 