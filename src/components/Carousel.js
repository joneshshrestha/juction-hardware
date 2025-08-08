import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './Carousel.css';

const Carousel = ({ items, autoPlay = true, interval = 5000, showDots = true, showArrows = true }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideRef = useRef(null);
  const timerRef = useRef(null);
  const cleanupRef = useRef([]);

  const clearAll = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
    cleanupRef.current.forEach((fn) => fn && fn());
    cleanupRef.current = [];
  };

  useEffect(() => {
    if (!autoPlay) return;

    clearAll();

    const root = slideRef.current;
    const videoEl = root?.querySelector('video');

    if (videoEl) {
      // Configure for autoplay and ensure it can end
      videoEl.muted = true;
      videoEl.playsInline = true;
      videoEl.loop = false;

      // If the video is already playing from a previous mount, restart
      try {
        if (!videoEl.paused) videoEl.pause();
        videoEl.currentTime = 0;
        videoEl.play().catch(() => {});
      } catch (_) {}

      const advance = () => setCurrentIndex((prev) => (prev + 1) % items.length);
      const onEnded = () => advance();
      const onLoaded = () => {
        // Use the actual duration as a robust fallback (duration + small buffer)
        const durMs = isFinite(videoEl.duration) && videoEl.duration > 0 ? (videoEl.duration * 1000) + 300 : 20000;
        if (timerRef.current) clearTimeout(timerRef.current);
        timerRef.current = setTimeout(advance, durMs);
      };

      videoEl.addEventListener('ended', onEnded);
      videoEl.addEventListener('loadedmetadata', onLoaded);

      cleanupRef.current.push(() => videoEl.removeEventListener('ended', onEnded));
      cleanupRef.current.push(() => videoEl.removeEventListener('loadedmetadata', onLoaded));

      // If metadata never loads (rare), still advance after a generous timeout
      timerRef.current = setTimeout(advance, 20000);

      return () => clearAll();
    }

    // Image/regular content slide: fall back to interval
    timerRef.current = setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % items.length);
    }, interval);

    return () => clearAll();
  }, [autoPlay, interval, items.length, currentIndex]);

  const goToSlide = (index) => setCurrentIndex(index);
  const goToPrevious = () => setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
  const goToNext = () => setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);

  return (
    <div className="carousel-container">
      <div className="carousel-wrapper">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            ref={slideRef}
            className="carousel-slide"
            initial={{ opacity: 0, filter: 'blur(12px)' }}
            animate={{ opacity: 1, filter: 'blur(0px)' }}
            exit={{ opacity: 0, filter: 'blur(12px)' }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
          >
            {items[currentIndex]}
          </motion.div>
        </AnimatePresence>
      </div>

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