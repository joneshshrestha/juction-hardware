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
  Clock
} from 'lucide-react';
import Carousel from '../components/Carousel';
import './Home.css';

const Home = () => {
  const features = [
    {
      icon: <Paintbrush size={32} />,
      title: "Premium Paints",
      description: "Complete range of Asian Paints including interior, exterior, and specialty paints"
    },
    {
      icon: <Shield size={32} />,
      title: "Quality Assured",
      description: "100% genuine Asian Paints products with warranty and quality guarantee"
    },
    {
      icon: <Truck size={32} />,
      title: "Free Delivery",
      description: "Free delivery within Chitwan district for orders above Rs. 5000"
    },
    {
      icon: <Users size={32} />,
      title: "Expert Support",
      description: "Professional painting consultation and color selection assistance"
    }
  ];

  const products = [
    {
      name: "Asian Paints Ace",
      category: "Interior Paint",
      image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=400&h=300&fit=crop",
      price: "₹2,500"
    },
    {
      name: "Asian Paints Apex",
      category: "Exterior Paint",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
      price: "₹3,200"
    },
    {
      name: "Asian Paints Royale",
      category: "Premium Interior",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop",
      price: "₹4,500"
    },
    {
      name: "Asian Paints Tractor",
      category: "Exterior Paint",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
      price: "₹2,800"
    },
    {
      name: "Asian Paints Texture",
      category: "Texture Paint",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop",
      price: "₹3,800"
    },
    {
      name: "Asian Paints Primer",
      category: "Primer",
      image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=400&h=300&fit=crop",
      price: "₹1,800"
    }
  ];

  // Banner slides for carousel
  const bannerSlides = [
    <div key="slide1" className="banner-slide">
      <div className="banner-content">
        <div className="banner-text">
          <h1>Welcome to Juction Hardware</h1>
          <h2>Official Asian Paints Dealer in Chitwan</h2>
          <p>
            Transform your space with premium Asian Paints. We offer the complete range 
            of interior, exterior, and specialty paints with expert consultation and 
            professional support.
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
        <div className="banner-image">
          <img 
            src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=600&h=400&fit=crop" 
            alt="Asian Paints Collection"
          />
        </div>
      </div>
    </div>,
    <div key="slide2" className="banner-slide">
      <div className="banner-content">
        <div className="banner-text">
          <h1>Premium Quality Paints</h1>
          <h2>100% Genuine Asian Paints</h2>
          <p>
            Experience the finest quality paints with superior coverage, durability, 
            and beautiful finishes. From interior to exterior, we have everything you need.
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
        <div className="banner-image">
          <img 
            src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop" 
            alt="Premium Paints"
          />
        </div>
      </div>
    </div>,
    <div key="slide3" className="banner-slide">
      <div className="banner-content">
        <div className="banner-text">
          <h1>Professional Painting Services</h1>
          <h2>Expert Team & Quality Work</h2>
          <p>
            Our professional painting team ensures perfect results with attention to detail. 
            From color consultation to final finish, we handle everything.
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
        <div className="banner-image">
          <img 
            src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop" 
            alt="Professional Services"
          />
        </div>
      </div>
    </div>
  ];

  // Product slides for carousel (without text)
  const productSlides = products.map((product, index) => (
    <div key={index} className="product-slide">
      <div className="product-slide-image">
        <img src={product.image} alt={product.name} />
        <div className="product-slide-overlay">
          <div className="product-slide-info">
            <h3>{product.name}</h3>
            <p className="product-slide-price">{product.price}</p>
          </div>
        </div>
      </div>
    </div>
  ));

  return (
    <div className="home">
      {/* Hero Section with Carousel */}
      <section className="hero">
        <div className="container">
          <Carousel 
            items={bannerSlides}
            autoPlay={true}
            interval={6000}
            showDots={true}
            showArrows={true}
          />
        </div>
      </section>

      {/* Features Section */}
      <section className="features section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Why Choose Juction Hardware?</h2>
            <p className="section-subtitle">
              We are your trusted partner for all painting needs in Chitwan
            </p>
          </div>
          <div className="features-grid">
            {features.map((feature, index) => (
              <motion.div 
                key={index}
                className="feature-card card"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="feature-icon">
                  {feature.icon}
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Preview with Carousel */}
      <section className="products-preview section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Featured Products</h2>
            <p className="section-subtitle">
              Explore our premium collection of Asian Paints
            </p>
          </div>
          <div className="products-carousel">
            <Carousel 
              items={productSlides}
              autoPlay={true}
              interval={4000}
              showDots={true}
              showArrows={true}
            />
          </div>
          <div className="text-center">
            <Link to="/products" className="btn btn-secondary">
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="contact-cta section">
        <div className="container">
          <div className="cta-content">
            <motion.div 
              className="cta-text"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2>Ready to Transform Your Space?</h2>
              <p>
                Get in touch with us for expert consultation, color selection, 
                and professional painting services.
              </p>
              <div className="cta-info">
                <div className="cta-item">
                  <Phone size={20} />
                  <span>+977-56-123456</span>
                </div>
                <div className="cta-item">
                  <MapPin size={20} />
                  <span>Chitwan, Nepal</span>
                </div>
                <div className="cta-item">
                  <Clock size={20} />
                  <span>Mon-Sat: 9AM-7PM</span>
                </div>
              </div>
              <Link to="/contact" className="btn btn-primary">
                Contact Us Today
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home; 