import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, ArrowRight, FileText, ChevronDown, Sparkles, Award } from 'lucide-react';
import { conferenceData } from '../data/conferenceData';
import './Hero.css';

export default function Hero() {
  const { institution, conference } = conferenceData;

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const navOffset = 80;
      const elPosition = el.getBoundingClientRect().top;
      const offsetPosition = elPosition + window.pageYOffset - navOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero-section section-dark">
      {/* Background Tech Circuit Grid & Glow Elements */}
      <div className="hero-bg-grid"></div>
      <div className="hero-glow-orb orb-1"></div>
      <div className="hero-glow-orb orb-2"></div>

      <div className="container hero-container">
        {/* Left: Academic & Conference Identity */}
        <div className="hero-content">
          {/* Step 1: IEEE Label & Institution */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="hero-badge-row"
          >
            <span className="hero-ieee-tag">IEEE TECHNICAL CO-SPONSORED</span>
            <span className="hero-inst-pill">{institution.name}, Mysuru</span>
          </motion.div>

          {/* Step 2: Conference Title Hierarchy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="hero-titles-block"
          >
            <p className="hero-super-title">INTERNATIONAL CONFERENCE ON</p>
            <h1 className="hero-heading hero-main-heading">
              Next-Generation Computing & <br />
              <span className="text-electric-cyan">Sustainable Technology</span>
            </h1>
            <div className="hero-acronym-badge">
              <span className="acronym-title">{conference.acronym}</span>
              <span className="acronym-divider">|</span>
              <span className="acronym-theme">{conference.theme}</span>
            </div>
          </motion.div>

          {/* Step 3: Metadata (Date, Venue) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hero-meta-grid"
          >
            <div className="hero-meta-card">
              <div className="meta-icon-circle">
                <Calendar size={18} className="meta-icon" />
              </div>
              <div className="meta-card-text">
                <span className="meta-card-label">CONFERENCE DATES</span>
                <span className="meta-card-val">{conference.dates}</span>
              </div>
            </div>

            <div className="hero-meta-card">
              <div className="meta-icon-circle">
                <MapPin size={18} className="meta-icon" />
              </div>
              <div className="meta-card-text">
                <span className="meta-card-label">HOST INSTITUTION</span>
                <span className="meta-card-val">NIE Campus, Mysuru, India</span>
              </div>
            </div>
          </motion.div>

          {/* Step 4: CTAs & Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="hero-actions-row"
          >
            <a
              href="#registration"
              onClick={(e) => { e.preventDefault(); scrollTo('registration'); }}
              className="btn btn-accent hero-btn-cta"
            >
              <span>Register Now</span>
              <ArrowRight size={16} />
            </a>

            <a
              href="#publication"
              onClick={(e) => { e.preventDefault(); scrollTo('publication'); }}
              className="btn btn-outline-white hero-btn-cta"
            >
              <FileText size={16} />
              <span>Submit Paper</span>
            </a>

            <a
              href="#timeline"
              onClick={(e) => { e.preventDefault(); scrollTo('timeline'); }}
              className="btn-text-link"
            >
              <span>View Important Dates</span>
              <ArrowRight size={14} />
            </a>
          </motion.div>

          {/* Notice Banner */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="hero-ieee-xplore-note"
          >
            <Award size={16} className="text-electric-cyan shrink-0" />
            <p className="note-text">
              All peer-reviewed, accepted, and presented papers will be submitted for possible inclusion in <strong>IEEE Xplore</strong>.
            </p>
          </motion.div>
        </div>

        {/* Right: Abstract Technology Visual Graphic */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="hero-visual-wrapper"
        >
          <div className="tech-graphic-container">
            {/* Concentric Research Orbit Rings */}
            <div className="orbit-ring ring-outer"></div>
            <div className="orbit-ring ring-mid"></div>
            <div className="orbit-ring ring-inner"></div>

            {/* Central Hexagon Core */}
            <div className="core-node">
              <Sparkles size={28} className="core-icon" />
              <span className="core-caption">IEEE • NIE</span>
            </div>

            {/* Orbiting Satellite Tech Nodes */}
            <div className="satellite-node node-ai">
              <div className="node-dot"></div>
              <span className="node-label">AI & Robotics</span>
            </div>

            <div className="satellite-node node-cyber">
              <div className="node-dot"></div>
              <span className="node-label">Cyber Defense</span>
            </div>

            <div className="satellite-node node-iot">
              <div className="node-dot"></div>
              <span className="node-label">Edge & IoT</span>
            </div>

            <div className="satellite-node node-green">
              <div className="node-dot"></div>
              <span className="node-label">Clean Energy</span>
            </div>

            <div className="satellite-node node-quantum">
              <div className="node-dot"></div>
              <span className="node-label">Next-Gen Networks</span>
            </div>

            {/* Geometric SVG Constellation Lines */}
            <svg className="constellation-svg" viewBox="0 0 440 440" fill="none" xmlns="http://www.w3.org/2000/svg">
              <line x1="220" y1="220" x2="80" y2="100" stroke="rgba(0, 180, 216, 0.4)" strokeDasharray="4 4" />
              <line x1="220" y1="220" x2="360" y2="110" stroke="rgba(0, 180, 216, 0.4)" strokeDasharray="4 4" />
              <line x1="220" y1="220" x2="380" y2="310" stroke="rgba(0, 180, 216, 0.4)" strokeDasharray="4 4" />
              <line x1="220" y1="220" x2="80" y2="330" stroke="rgba(0, 180, 216, 0.4)" strokeDasharray="4 4" />
              <line x1="220" y1="220" x2="220" y2="50" stroke="rgba(0, 180, 216, 0.4)" strokeDasharray="4 4" />
              <polygon points="220,130 310,180 310,260 220,310 130,260 130,180" stroke="rgba(0, 98, 155, 0.5)" strokeWidth="1.5" />
            </svg>
          </div>
        </motion.div>
      </div>

      {/* Small Scroll Down Indicator */}
      <div className="hero-scroll-indicator" onClick={() => scrollTo('quick-actions')}>
        <span className="scroll-caption">EXPLORE CONFERENCE</span>
        <ChevronDown size={18} className="scroll-chevron" />
      </div>
    </section>
  );
}
