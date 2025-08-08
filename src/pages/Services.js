import React from 'react';
import { motion } from 'framer-motion';
import { 
  Paintbrush, 
  Truck, 
  CheckCircle,
  Star,
  Phone,
  MapPin,
  PaintRoller,
  SwatchBook,
  ShieldCheck,
  DollarSign
} from 'lucide-react';
import './Services.css';

const Services = () => {
  const services = [
    {
      icon: <DollarSign size={32} />,
      title: 'Cheapest Price Guarantee',
      description: 'We offer the lowest prices on all Asian Paints products',
      features: [
        'Guaranteed best price',
        'Wholesale rates for bulk purchases',
        'Direct dealer pricing',
        'Price beat guarantee on all products',
      ],
    },
    {
      icon: <Paintbrush size={32} />,
      title: 'Interior Painting',
      description: 'Professional interior painting services with premium Asian Paints products',
      features: [
        'Wall preparation and priming',
        'Color consultation and selection',
        'Premium finish application',
        'Clean-up and protection',
      ],
    },
    {
      icon: <PaintRoller size={32} />,
      title: 'Exterior Painting',
      description: 'Weather-resistant exterior painting with superior protection',
      features: [
        'Surface preparation and repair',
        'Weather-resistant coatings',
        'UV protection application',
        'Long-lasting durability',
      ],
    },
    {
      icon: <SwatchBook size={32} />,
      title: 'Color Consultation',
      description: 'Professional color consultation for your space',
      features: [
        'Personalized color schemes',
        'Sample testing and approval',
        'Lighting consideration',
        'Trend and style guidance',
      ],
    },
    {
      icon: <Truck size={32} />,
      title: 'Paint Supply & Delivery',
      description: 'Complete paint supply with free delivery in Chitwan',
      features: [
        'Genuine Asian Paints products',
        'Free delivery above ₹5000',
        'Bulk order discounts',
        'Expert product guidance',
      ],
    },
    {
      icon: <ShieldCheck size={32} />,
      title: 'Quality Assurance',
      description: 'Guaranteed quality with warranty and support',
      features: [
        'Upto 15-year warranty on paints',
        'Quality inspection',
        'Post-service support',
        'Satisfaction guarantee',
      ],
    },
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
    <>
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

            </motion.div>
          ))}
        </div>

        {/* Awards & Recognition */}
        </div>
      </div>
      <section className="awards section">
        <div className="container">
            <h2 className="section-title">Awards & Recognition</h2>
            <p className="section-subtitle">Proud moments that reflect our commitment to quality, service, and trust</p>
            <div className="awards-grid">
              <div className="award-card card">
                <div className="award-image-wrap">
                  <img src="/images/award-1.jpg" alt="Award" className="award-image" />
                </div>
                <h3>Top Dealer Award</h3>
                <p>Recognized for exceptional performance and customer satisfaction in the region</p>
                <span className="award-year">2023</span>
              </div>
              <div className="award-card card">
                <div className="award-image-wrap">
                  <img src="/images/award-1.jpg" alt="Award" className="award-image" />
                </div>
                <h3>Excellence in Service</h3>
                <p>Honored for delivering consistent and reliable service across all projects</p>
                <span className="award-year">2022</span>
              </div>
              <div className="award-card card">
                <div className="award-image-wrap">
                  <img src="/images/award-1.jpg" alt="Award" className="award-image" />
                </div>
                <h3>Customer Choice</h3>
                <p>Voted as the most trusted hardware and paints partner by our customers</p>
                <span className="award-year">2021</span>
              </div>
              <div className="award-card card">
                <div className="award-image-wrap">
                  <img src="/images/award-1.jpg" alt="Award" className="award-image" />
                </div>
                <h3>Quality Leadership</h3>
                <p>Awarded for maintaining the highest standards in products and execution</p>
                <span className="award-year">2020</span>
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
                <span>+977-9845156783</span>
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
    </>
  );
};

export default Services; 