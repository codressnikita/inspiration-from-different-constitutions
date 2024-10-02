"use client";

import { useEffect, useState } from 'react';
import Overlay from './Overlay';

const Hero = () => {
  const [overlayOpacity, setOverlayOpacity] = useState(0); // Start with 0 opacity

  const handleScroll = () => {
    const scrollY = window.scrollY; // Get the current scroll position
    const newOpacity = Math.min(scrollY / window.innerHeight, 1); // Calculate new opacity
    setOverlayOpacity(newOpacity); // Update overlay opacity
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll); // Listen for scroll events

    return () => {
      window.removeEventListener('scroll', handleScroll); // Clean up event listener
    };
  }, []);

  return (
    <section className="hero-section fixed inset-0 h-screen overflow-hidden">
      <video
        className="w-full h-full object-cover"
        src="/videos/video_main.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      <Overlay 
        animateIn={true} 
        animateOut={false} 
        animationDuration={1}
        mainOpacity= {overlayOpacity + 0.2} // Set the overlay opacity based on scroll
      />
    </section>
  );
};

export default Hero;
