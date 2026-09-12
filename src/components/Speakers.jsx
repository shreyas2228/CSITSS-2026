import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Award, Building, BookOpen, Sparkles, ExternalLink } from 'lucide-react';
import { conferenceData } from '../data/conferenceData';
import './Speakers.css';

export default function Speakers() {
  const { speakers } = conferenceData;
  const [selectedSpeaker, setSelectedSpeaker] = useState(null);

  return (
    <section id="speakers" className="section section-light speakers-section">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">KEYNOTE SPEAKERS</span>
          <h2 className="section-title">Distinguished Academic & Industry Speakers</h2>
          <p className="section-desc">
            Visionary researchers, IEEE Fellows, and industry directors delivering keynote perspectives on next-generation computing frontiers.
          </p>
        </div>

        {/* Speakers Grid */}
        <div className="speakers-grid">
          {speakers.map((speaker, idx) => (
            <motion.div
              key={speaker.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              onClick={() => setSelectedSpeaker(speaker)}
              className="speaker-card card"
            >
              <div className="speaker-image-box">
                <img
                  src={speaker.image}
                  alt={speaker.name}
                  className="speaker-thumb"
                  loading="lazy"
                />
                <span className="speaker-role-pill">{speaker.role}</span>
              </div>

              <div className="speaker-info">
                <h3 className="speaker-full-name">{speaker.name}</h3>
                <p className="speaker-post">{speaker.designation}</p>
                <div className="speaker-inst-row">
                  <Building size={14} className="inst-icon" />
                  <span>{speaker.institution}</span>
                </div>
                <div className="speaker-area-tag">
                  <span>{speaker.researchArea}</span>
                </div>
                <button className="speaker-view-btn">
                  <span>View Keynote Abstract</span>
                  <ExternalLink size={13} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Speaker Biography & Keynote Modal */}
      <AnimatePresence>
        {selectedSpeaker && (
          <div className="modal-backdrop" onClick={() => setSelectedSpeaker(null)}>
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.25 }}
              className="modal-box speaker-modal"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="modal-close-btn"
                onClick={() => setSelectedSpeaker(null)}
                aria-label="Close Modal"
              >
                <X size={20} />
              </button>

              <div className="speaker-modal-grid">
                <div className="modal-photo-col">
                  <img
                    src={selectedSpeaker.image}
                    alt={selectedSpeaker.name}
                    className="modal-speaker-img"
                  />
                  <div className="modal-speaker-badge">
                    <Sparkles size={14} />
                    <span>{selectedSpeaker.role}</span>
                  </div>
                </div>

                <div className="modal-content-col">
                  <h3 className="modal-speaker-name">{selectedSpeaker.name}</h3>
                  <p className="modal-speaker-desig">{selectedSpeaker.designation}</p>
                  <p className="modal-speaker-inst">{selectedSpeaker.institution}</p>

                  <div className="modal-keynote-banner">
                    <span className="keynote-tag">KEYNOTE TALK</span>
                    <h4 className="keynote-talk-title">{selectedSpeaker.keynoteTitle}</h4>
                  </div>

                  <div className="modal-bio-block">
                    <h5 className="modal-subheading">Biography</h5>
                    <p className="modal-bio-text">{selectedSpeaker.bio}</p>
                  </div>

                  <div className="modal-research-block">
                    <h5 className="modal-subheading">Primary Research Domain</h5>
                    <span className="domain-chip">{selectedSpeaker.researchArea}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
