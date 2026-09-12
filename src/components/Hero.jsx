import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, ArrowRight, FileText, ChevronDown, Atom, Award, Cpu, Shield, Globe, Zap, Radio } from 'lucide-react';
import { conferenceData } from '../data/conferenceData';
import Hero3DCanvas from './common/Hero3DCanvas';
import Tilt3D from './common/Tilt3D';
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
      {/* Background Tech Circuit Grid & Dynamic 3D Glow Orbs */}
      <div className="hero-bg-grid"></div>
      <div className="hero-glow-orb orb-1"></div>
      <div className="hero-glow-orb orb-2"></div>
      <div className="hero-3d-grid-plane"></div>

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
              <span className="text-electric-cyan text-glow-3d">Sustainable Technology</span>
            </h1>
            <div className="hero-acronym-badge">
              <span className="acronym-title">{conference.acronym}</span>
              <span className="acronym-divider">|</span>
              <span className="acronym-theme">{conference.theme}</span>
            </div>
          </motion.div>

          {/* Step 3: 3D Tilt Metadata Cards (Date, Venue) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hero-meta-grid"
          >
            <Tilt3D maxTilt={14} scale={1.04} className="hero-meta-tilt">
              <div className="hero-meta-card">
                <div className="meta-icon-circle">
                  <Calendar size={18} className="meta-icon" />
                </div>
                <div className="meta-card-text">
                  <span className="meta-card-label">CONFERENCE DATES</span>
                  <span className="meta-card-val">{conference.dates}</span>
                </div>
              </div>
            </Tilt3D>

            <Tilt3D maxTilt={14} scale={1.04} className="hero-meta-tilt">
              <div className="hero-meta-card">
                <div className="meta-icon-circle">
                  <MapPin size={18} className="meta-icon" />
                </div>
                <div className="meta-card-text">
                  <span className="meta-card-label">HOST INSTITUTION</span>
                  <span className="meta-card-val">NIE Campus, Mysuru, India</span>
                </div>
              </div>
            </Tilt3D>
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
              className="btn btn-accent hero-btn-cta btn-3d-depth"
            >
              <span>Register Now</span>
              <ArrowRight size={16} />
            </a>

            <a
              href="#publication"
              onClick={(e) => { e.preventDefault(); scrollTo('publication'); }}
              className="btn btn-outline-white hero-btn-cta btn-3d-depth"
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

        {/* Right: 3D Interactive Constellation Graphic & Floating Holographic Badges */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="hero-visual-wrapper"
        >
          <div className="tech-graphic-container-3d">
            {/* Interactive 3D Canvas Constellation Sphere */}
            <Hero3DCanvas />

            {/* Central 3D Core Node */}
            <div className="core-node-3d">
              <div className="core-glow-pulse"></div>
              <Atom size={32} className="core-icon-3d" />
              <span className="core-caption-3d">IEEE • NIE</span>
              <span className="core-sub-3d">ICNCST 2026</span>
            </div>

            {/* 3D Floating Depth Satellite Badges */}
            <div className="satellite-3d-node node-3d-ai">
              <div className="satellite-icon-wrap icon-ai">
                <Cpu size={15} />
              </div>
              <div className="satellite-content">
                <span className="satellite-title">AI & Robotics</span>
                <span className="satellite-status">Track 01</span>
              </div>
            </div>

            <div className="satellite-3d-node node-3d-cyber">
              <div className="satellite-icon-wrap icon-cyber">
                <Shield size={15} />
              </div>
              <div className="satellite-content">
                <span className="satellite-title">Cyber Defense</span>
                <span className="satellite-status">Track 03</span>
              </div>
            </div>

            <div className="satellite-3d-node node-3d-iot">
              <div className="satellite-icon-wrap icon-iot">
                <Radio size={15} />
              </div>
              <div className="satellite-content">
                <span className="satellite-title">Edge & IoT</span>
                <span className="satellite-status">Track 04</span>
              </div>
            </div>

            <div className="satellite-3d-node node-3d-green">
              <div className="satellite-icon-wrap icon-green">
                <Zap size={15} />
              </div>
              <div className="satellite-content">
                <span className="satellite-title">Clean Energy</span>
                <span className="satellite-status">Track 05</span>
              </div>
            </div>

            <div className="satellite-3d-node node-3d-network">
              <div className="satellite-icon-wrap icon-network">
                <Globe size={15} />
              </div>
              <div className="satellite-content">
                <span className="satellite-title">6G Telecom</span>
                <span className="satellite-status">Track 06</span>
              </div>
            </div>
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
