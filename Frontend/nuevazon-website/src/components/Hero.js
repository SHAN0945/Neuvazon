import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Star } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-bg"></div>
      <div className="container">
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Transform Your Digital Presence with 
            <span className="gradient-text"> Nuevazon</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Professional freelancing services including marketing, social media management, 
            website development, video editing, and photo editing. Let's bring your vision to life.
          </motion.p>

          <motion.div 
            className="hero-buttons"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <button className="btn-primary">
              Get Started <ArrowRight size={20} />
            </button>
            <button className="btn-secondary">View Portfolio</button>
          </motion.div>

          <motion.div 
            className="hero-stats"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <div className="stat">
              <h3>50+</h3>
              <p>Projects Completed</p>
            </div>
            <div className="stat">
              <h3>5.0</h3>
              <div className="rating">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="#FFD700" color="#FFD700" />
                ))}
              </div>
            </div>
            <div className="stat">
              <h3>24/7</h3>
              <p>Support</p>
            </div>
          </motion.div>
        </motion.div>

        <motion.div 
          className="hero-image"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <div className="floating-card card-1">
            <h4>Marketing</h4>
          </div>
          <div className="floating-card card-2">
            <h4>Web Dev</h4>
          </div>
          <div className="floating-card card-3">
            <h4>Design</h4>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
