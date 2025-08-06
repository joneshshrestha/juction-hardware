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
    }
  ];

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <motion.div 
              className="hero-text"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1>Welcome to Juction Hardware</h1>
              <h2>Official Asian Paints Dealer in Chitwan</h2>
              <p>
                Transform your space with premium Asian Paints. We offer the complete range 
                of interior, exterior, and specialty paints with expert consultation and 
                professional support.
              </p>
              <div className="hero-buttons">
                <Link to="/products" className="btn btn-primary">
                  Explore Products
                  <ArrowRight size={16} />
                </Link>
                <Link to="/contact" className="btn btn-secondary">
                  Get Quote
                </Link>
              </div>
            </motion.div>
            <motion.div 
              className="hero-image"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=600&h=400&fit=crop" 
                alt="Asian Paints Collection"
              />
            </motion.div>
          </div>
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

      {/* Products Preview */}
      <section className="products-preview section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Featured Products</h2>
            <p className="section-subtitle">
              Explore our premium collection of Asian Paints
            </p>
          </div>
          <div className="products-grid">
            {products.map((product, index) => (
              <motion.div 
                key={index}
                className="product-card card"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="product-image">
                  <img src={product.image} alt={product.name} />
                </div>
                <div className="product-info">
                  <span className="product-category">{product.category}</span>
                  <h3>{product.name}</h3>
                  <div className="product-price">{product.price}</div>
                  <Link to="/products" className="btn btn-primary">
                    View Details
                  </Link>
                </div>
              </motion.div>
            ))}
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