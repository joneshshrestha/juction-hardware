import React from 'react';
import { motion } from 'framer-motion';
import { 
  Award, 
  Users, 
  MapPin, 
  Phone, 
  Mail, 
  Clock,
  Star,
  CheckCircle
} from 'lucide-react';
import './About.css';

const About = () => {
  const stats = [
    { number: "15+", label: "Years Experience" },
    { number: "1000+", label: "Happy Customers" },
    { number: "50+", label: "Team Members" },
    { number: "100%", label: "Quality Guarantee" }
  ];

  const values = [
    {
      icon: <Award size={32} />,
      title: "Quality First",
      description: "We never compromise on quality. Every product and service meets the highest standards."
    },
    {
      icon: <Users size={32} />,
      title: "Customer Focus",
      description: "Our customers are at the heart of everything we do. Your satisfaction is our priority."
    },
    {
      icon: <CheckCircle size={32} />,
      title: "Reliability",
      description: "Trusted by thousands of customers in Chitwan for consistent, reliable service."
    }
  ];

  const team = [
    {
      name: "Ram Bahadur Thapa",
      position: "Founder & CEO",
      experience: "20+ years",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face"
    },
    {
      name: "Sita Devi Shrestha",
      position: "Operations Manager",
      experience: "15+ years",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face"
    },
    {
      name: "Hari Prasad Tamang",
      position: "Technical Head",
      experience: "12+ years",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face"
    }
  ];

  return (
    <div className="about-page">
      <div className="container">
        {/* Hero Section */}
        <section className="about-hero">
          <div className="hero-content">
            <motion.div
              className="hero-text"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1>About Juction Hardware</h1>
              <h2>Your Trusted Asian Paints Partner in Chitwan</h2>
              <p>
                For over 15 years, Juction Hardware has been the leading Asian Paints dealer 
                in Chitwan, Nepal. We've built our reputation on quality, reliability, and 
                exceptional customer service. Our commitment to excellence has made us the 
                preferred choice for homeowners, contractors, and businesses throughout the region.
              </p>
            </motion.div>
            <motion.div
              className="hero-image"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=600&h=400&fit=crop" 
                alt="Juction Hardware Store"
              />
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="stats-section section">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="stat-item"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Story Section */}
        <section className="story-section section">
          <div className="story-content">
            <motion.div
              className="story-text"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2>Our Story</h2>
              <p>
                Founded in 2008, Juction Hardware started as a small family business with a 
                simple mission: to provide the highest quality Asian Paints products and 
                exceptional service to the people of Chitwan. What began as a modest store 
                has grown into the region's most trusted Asian Paints dealer.
              </p>
              <p>
                Over the years, we've expanded our services to include professional painting 
                consultation, color selection assistance, and complete painting solutions. 
                Our team of experienced professionals is dedicated to helping you transform 
                your space with the perfect colors and finishes.
              </p>
              <p>
                Today, we're proud to serve thousands of satisfied customers across Chitwan, 
                maintaining the same commitment to quality and service that we started with 
                over a decade ago.
              </p>
            </motion.div>
            <motion.div
              className="story-image"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=400&fit=crop" 
                alt="Our Journey"
              />
            </motion.div>
          </div>
        </section>

        {/* Values Section */}
        <section className="values-section section">
          <div className="container">
            <h2 className="section-title">Our Values</h2>
            <div className="values-grid">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  className="value-card card"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="value-icon">
                    {value.icon}
                  </div>
                  <h3>{value.title}</h3>
                  <p>{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="team-section section">
          <div className="container">
            <h2 className="section-title">Our Leadership Team</h2>
            <div className="team-grid">
              {team.map((member, index) => (
                <motion.div
                  key={index}
                  className="team-card card"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="member-image">
                    <img src={member.image} alt={member.name} />
                  </div>
                  <div className="member-info">
                    <h3>{member.name}</h3>
                    <p className="position">{member.position}</p>
                    <p className="experience">{member.experience} experience</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Info */}
        <section className="contact-info section">
          <div className="container">
            <div className="contact-grid">
              <motion.div
                className="contact-card"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="contact-icon">
                  <MapPin size={24} />
                </div>
                <h3>Visit Us</h3>
                <p>Main Street, Bharatpur<br />Chitwan, Nepal</p>
              </motion.div>

              <motion.div
                className="contact-card"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <div className="contact-icon">
                  <Phone size={24} />
                </div>
                <h3>Call Us</h3>
                <p>+977-56-123456<br />+977-985-123456</p>
              </motion.div>

              <motion.div
                className="contact-card"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="contact-icon">
                  <Clock size={24} />
                </div>
                <h3>Business Hours</h3>
                <p>Monday - Saturday<br />9:00 AM - 7:00 PM</p>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About; 