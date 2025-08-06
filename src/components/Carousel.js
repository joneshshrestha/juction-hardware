import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './Carousel.css';

const Carousel = ({ items, autoPlay = true, interval = 5000, showDots = true, showArrows = true }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!autoPlay) return;

    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, interval);

    return () => clearInterval(timer);
  }, [autoPlay, interval, items.length]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  return (
    <div className="carousel-container">
      <div className="carousel-wrapper">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            className="carousel-slide"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
          >
            {items[currentIndex]}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Unified Navigation Bar */}
      {(showDots || showArrows) && (
        <div className="carousel-navigation">
          <div className="navigation-container">
            {showArrows && (
              <button className="nav-arrow nav-arrow-left" onClick={goToPrevious}>
                <ChevronLeft size={16} />
              </button>
            )}
            
            {showDots && (
              <div className="nav-dots">
                {items.map((_, index) => (
                  <button
                    key={index}
                    className={`nav-dot ${index === currentIndex ? 'active' : ''}`}
                    onClick={() => goToSlide(index)}
                  />
                ))}
              </div>
            )}

            {showArrows && (
              <button className="nav-arrow nav-arrow-right" onClick={goToNext}>
                <ChevronRight size={16} />
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Carousel; 