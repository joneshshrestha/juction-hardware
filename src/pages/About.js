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
    { number: "26+", label: "Years Experience" },
    { number: "9000+", label: "Happy Customers" },
    { number: "2500+", label: "Home Transformed" },
    { number: "100%", label: "Quality Guarantee" }
  ];

  const values = [
    {
      icon: <Award size={32} />,
      title: 'Quality First',
      description:
        'We never compromise on quality. Every product and service meets the highest standards.',
    },
    {
      icon: <Users size={32} />,
      title: 'Customer Focus',
      description:
        'Our customers are at the heart of everything we do. Your satisfaction is our priority.',
    },
    {
      icon: <CheckCircle size={32} />,
      title: 'Unbeatable Value',
      description: "We deliver at a price you won't find anywhere else, offering the best value in Chitwan.",
    },
  ];

  const team = [
    {
      name: 'Bhim Kumar Shrestha',
      position: 'Founder',
      experience: '26+ years',
      image: '/images/bhim-kumar-shrestha.jpg',
    },
    {
      name: 'Jonesh Shrestha',
      position: 'Developer',
      experience: '5+ years',
      image: '/images/jonesh-shrestha.jpg',
    },
    {
      name: 'Sabitri Shrestha',
      position: 'Sales Representative',
      experience: '5+ years',
      image: '/images/sabitri-shrestha.jpg',
    },
    {
      name: 'Nabin Shrestha',
      position: 'Sales Associate',
      experience: '2+ years',
      image: '/images/nabin-shrestha.png',
    },
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
              <h1>About Us</h1>
              <h2>Your Trusted Asian Paints Dealer in Chitwan</h2>
              <p>
                For over 15 years, Juction Hardware has been the leading Asian Paints dealer in
                Chitwan, Nepal. We've built our reputation on quality, reliability, best prices and
                exceptional customer service. Our commitment to excellence has made us the preferred
                choice for homeowners, contractors, and businesses throughout the region.
              </p>
            </motion.div>
            <motion.div
              className="hero-image"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <img src="/images/about-1.jpg" alt="Juction Hardware Store" />
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
                Founded in 1998, Juction Hardware started as a small family business with a simple
                mission: to provide the highest quality home improvement products and exceptional
                service to the people of Chitwan. What began as a modest hardware store has grown
                into the region's most trusted Asian Paints dealer.
              </p>
              <p>
                Over the years, we've focused and expanded our services to include professional
                painting consultation, color selection assistance, and complete painting solutions.
                Our team of experienced professionals is dedicated to helping you transform your
                space with the perfect colors and finishes.
              </p>
              <p>
                Today, we're proud to serve thousands of satisfied customers across Chitwan,
                maintaining the same commitment to quality and service that we started with over
                decades ago.
              </p>
            </motion.div>
            <motion.div
              className="story-image"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <img src="/images/about-2.jpg" alt="Our Journey" />
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
                  <div className="value-icon">{value.icon}</div>
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
            <h2 className="section-title">Our Team</h2>
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
                <p>
                  Main Road, Narayangarh, Bharatpur
                  <br />
                  Chitwan, Nepal
                </p>
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
                <p>
                  +977-9845156783
                  <br />
                  +977-9702739906
                  <br />
                  +977-9811311320
                </p>
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
                <p>
                  Tuesday - Sunday
                  <br />
                  8:00 AM - 7:00 PM
                </p>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About; 