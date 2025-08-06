import React from 'react';
import { motion } from 'framer-motion';
import { 
  Paintbrush, 
  Palette, 
  Truck, 
  Users, 
  Shield, 
  Clock,
  CheckCircle,
  Star,
  Phone,
  MapPin
} from 'lucide-react';
import './Services.css';

const Services = () => {
  const services = [
    {
      icon: <Paintbrush size={32} />,
      title: "Interior Painting",
      description: "Professional interior painting services with premium Asian Paints products",
      features: [
        "Wall preparation and priming",
        "Color consultation and selection",
        "Premium finish application",
        "Clean-up and protection"
      ],
      price: "₹15/sq ft",
      duration: "2-5 days"
    },
    {
      icon: <Palette size={32} />,
      title: "Exterior Painting",
      description: "Weather-resistant exterior painting with superior protection",
      features: [
        "Surface preparation and repair",
        "Weather-resistant coatings",
        "UV protection application",
        "Long-lasting durability"
      ],
      price: "₹20/sq ft",
      duration: "3-7 days"
    },
    {
      icon: <Truck size={32} />,
      title: "Paint Supply & Delivery",
      description: "Complete paint supply with free delivery in Chitwan",
      features: [
        "Genuine Asian Paints products",
        "Free delivery above ₹5000",
        "Bulk order discounts",
        "Expert product guidance"
      ],
      price: "Free Delivery",
      duration: "Same day"
    },
    {
      icon: <Users size={32} />,
      title: "Color Consultation",
      description: "Professional color consultation for your space",
      features: [
        "Personalized color schemes",
        "Sample testing and approval",
        "Lighting consideration",
        "Trend and style guidance"
      ],
      price: "₹500",
      duration: "1-2 hours"
    },
    {
      icon: <Shield size={32} />,
      title: "Quality Assurance",
      description: "Guaranteed quality with warranty and support",
      features: [
        "5-year warranty on paints",
        "Quality inspection",
        "Post-service support",
        "Satisfaction guarantee"
      ],
      price: "Included",
      duration: "Ongoing"
    },
    {
      icon: <Clock size={32} />,
      title: "Emergency Services",
      description: "Quick response for urgent painting needs",
      features: [
        "24/7 emergency contact",
        "Quick assessment",
        "Priority scheduling",
        "Rapid completion"
      ],
      price: "₹25/sq ft",
      duration: "1-2 days"
    }
  ];

  const testimonials = [
    {
      name: "Ram Bahadur",
      location: "Bharatpur, Chitwan",
      rating: 5,
      comment: "Excellent service! The team was professional and the paint quality is outstanding. Highly recommended!"
    },
    {
      name: "Sita Devi",
      location: "Narayangarh, Chitwan",
      rating: 5,
      comment: "Great color consultation and the exterior paint has held up perfectly through monsoon season."
    },
    {
      name: "Hari Prasad",
      location: "Ratnanagar, Chitwan",
      rating: 5,
      comment: "Best Asian Paints dealer in Chitwan. Competitive prices and excellent customer service."
    }
  ];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        size={16}
        fill={i < rating ? "#f39c12" : "none"}
        stroke="#f39c12"
      />
    ));
  };

  return (
    <div className="services-page">
      <div className="container">
        {/* Header */}
        <div className="services-header">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="section-title">Our Services</h1>
            <p className="section-subtitle">
              Comprehensive painting solutions and expert consultation services. 
              From interior to exterior, we've got you covered with premium Asian Paints.
            </p>
          </motion.div>
        </div>

        {/* Services Grid */}
        <div className="services-grid">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="service-card card"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="service-icon">
                {service.icon}
              </div>
              <h3>{service.title}</h3>
              <p className="service-description">{service.description}</p>
              
              <div className="service-features">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="feature-item">
                    <CheckCircle size={16} />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <div className="service-meta">
                <div className="meta-item">
                  <span className="meta-label">Price:</span>
                  <span className="meta-value">{service.price}</span>
                </div>
                <div className="meta-item">
                  <span className="meta-label">Duration:</span>
                  <span className="meta-value">{service.duration}</span>
                </div>
              </div>

              <button className="service-btn">
                Get Quote
              </button>
            </motion.div>
          ))}
        </div>

        {/* Why Choose Us */}
        <section className="why-choose-us section">
          <div className="container">
            <h2 className="section-title">Why Choose Our Services?</h2>
            <div className="reasons-grid">
              <div className="reason-item">
                <div className="reason-icon">
                  <Shield size={24} />
                </div>
                <h3>Quality Guaranteed</h3>
                <p>100% genuine Asian Paints with warranty and quality assurance</p>
              </div>
              <div className="reason-item">
                <div className="reason-icon">
                  <Users size={24} />
                </div>
                <h3>Expert Team</h3>
                <p>Professional painters with years of experience and training</p>
              </div>
              <div className="reason-item">
                <div className="reason-icon">
                  <Clock size={24} />
                </div>
                <h3>Timely Delivery</h3>
                <p>On-time completion with minimal disruption to your routine</p>
              </div>
              <div className="reason-item">
                <div className="reason-icon">
                  <Truck size={24} />
                </div>
                <h3>Free Delivery</h3>
                <p>Free delivery within Chitwan for orders above ₹5000</p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="testimonials section">
          <div className="container">
            <h2 className="section-title">What Our Customers Say</h2>
            <div className="testimonials-grid">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  className="testimonial-card card"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="testimonial-rating">
                    {renderStars(testimonial.rating)}
                  </div>
                  <p className="testimonial-comment">"{testimonial.comment}"</p>
                  <div className="testimonial-author">
                    <div className="author-info">
                      <h4>{testimonial.name}</h4>
                      <span>{testimonial.location}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="services-cta section">
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
                  Get in touch with us for a free consultation and quote. 
                  Our expert team is ready to help you choose the perfect colors and services.
                </p>
                <div className="cta-contact">
                  <div className="contact-item">
                    <Phone size={20} />
                    <span>+977-56-123456</span>
                  </div>
                  <div className="contact-item">
                    <MapPin size={20} />
                    <span>Chitwan, Nepal</span>
                  </div>
                </div>
                <button className="btn btn-primary">
                  Get Free Quote
                </button>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Services; 