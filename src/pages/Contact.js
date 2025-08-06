import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock,
  Send,
  CheckCircle
} from 'lucide-react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
    
    // Reset submission status after 3 seconds
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const contactInfo = [
    {
      icon: <MapPin size={24} />,
      title: "Visit Us",
      details: "Main Street, Bharatpur, Chitwan, Nepal",
      action: "Get Directions"
    },
    {
      icon: <Phone size={24} />,
      title: "Call Us",
      details: "+977-56-123456\n+977-985-123456",
      action: "Call Now"
    },
    {
      icon: <Mail size={24} />,
      title: "Email Us",
      details: "info@juctionhardware.com\nsales@juctionhardware.com",
      action: "Send Email"
    },
    {
      icon: <Clock size={24} />,
      title: "Business Hours",
      details: "Monday - Saturday\n9:00 AM - 7:00 PM",
      action: "Sunday Closed"
    }
  ];

  return (
    <div className="contact-page">
      <div className="container">
        {/* Header */}
        <div className="contact-header">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="section-title">Contact Us</h1>
            <p className="section-subtitle">
              Get in touch with us for any inquiries, quotes, or support. 
              Our team is ready to help you with all your painting needs.
            </p>
          </motion.div>
        </div>

        <div className="contact-content">
          {/* Contact Info */}
          <motion.div
            className="contact-info-section"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2>Get In Touch</h2>
            <div className="contact-info-grid">
              {contactInfo.map((info, index) => (
                <div key={index} className="contact-info-card">
                  <div className="info-icon">
                    {info.icon}
                  </div>
                  <div className="info-content">
                    <h3>{info.title}</h3>
                    <p>{info.details}</p>
                    <button className="info-action-btn">
                      {info.action}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="contact-form-section"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2>Send Us a Message</h2>
            {isSubmitted ? (
              <motion.div
                className="success-message"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <CheckCircle size={48} />
                <h3>Message Sent Successfully!</h3>
                <p>Thank you for contacting us. We'll get back to you soon.</p>
              </motion.div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="Enter your email address"
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Enter your phone number"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="subject">Subject *</label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select a subject</option>
                      <option value="product-inquiry">Product Inquiry</option>
                      <option value="quote-request">Quote Request</option>
                      <option value="painting-service">Painting Service</option>
                      <option value="color-consultation">Color Consultation</option>
                      <option value="general-inquiry">General Inquiry</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    placeholder="Tell us about your requirements..."
                  ></textarea>
                </div>

                <button type="submit" className="submit-btn">
                  <Send size={16} />
                  Send Message
                </button>
              </form>
            )}
          </motion.div>
        </div>

        {/* Map Section */}
        <section className="map-section section">
          <div className="container">
            <h2 className="section-title">Find Us</h2>
            <div className="map-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.5!2d84.4438!3d27.6833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjfCsDQwJzU5LjkiTiA4NMKwMjYnMzcuNyJF!5e0!3m2!1sen!2snp!4v1234567890"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Juction Hardware Location"
              ></iframe>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="faq-section section">
          <div className="container">
            <h2 className="section-title">Frequently Asked Questions</h2>
            <div className="faq-grid">
              <div className="faq-item">
                <h3>What are your business hours?</h3>
                <p>We are open Monday to Saturday from 9:00 AM to 7:00 PM. We are closed on Sundays.</p>
              </div>
              <div className="faq-item">
                <h3>Do you offer free delivery?</h3>
                <p>Yes, we offer free delivery within Chitwan district for orders above ₹5000.</p>
              </div>
              <div className="faq-item">
                <h3>Can you help with color selection?</h3>
                <p>Absolutely! We provide professional color consultation services to help you choose the perfect colors for your space.</p>
              </div>
              <div className="faq-item">
                <h3>Do you provide painting services?</h3>
                <p>Yes, we offer complete painting services including interior, exterior, and texture painting with professional teams.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact; 