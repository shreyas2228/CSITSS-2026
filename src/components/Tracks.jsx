import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  BrainCircuit, 
  BarChart3, 
  ShieldCheck, 
  Cpu, 
  Leaf, 
  RadioTower, 
  ArrowRight, 
  X, 
  CheckCircle 
} from 'lucide-react';
import { conferenceData } from '../data/conferenceData';
import './Tracks.css';

const trackIcons = [
  BrainCircuit,
  BarChart3,
  ShieldCheck,
  Cpu,
  Leaf,
  RadioTower
];

export default function Tracks() {
  const { tracks } = conferenceData;
  const [activeTrack, setActiveTrack] = useState(null);

  return (
    <section id="tracks" className="section section-subtle tracks-section">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">RESEARCH DOMAINS</span>
          <h2 className="section-title">Conference Technical Tracks</h2>
          <p className="section-desc">
            Authors are invited to submit original, high-quality technical papers addressing state-of-the-art research across six core thematic areas.
          </p>
        </div>

        {/* Tracks Grid */}
        <div className="tracks-grid">
          {tracks.map((track, idx) => {
            const IconComp = trackIcons[idx % trackIcons.length];
            return (
              <motion.div
                key={track.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                onClick={() => setActiveTrack(track)}
                className="track-card card"
              >
                <div className="track-card-top">
                  <span className="track-index">TRACK {track.number}</span>
                  <div className="track-icon-wrap">
                    <IconComp size={22} />
                  </div>
                </div>

                <h3 className="track-card-title">{track.title}</h3>
                <p className="track-card-desc">{track.description}</p>

                <div className="track-card-footer">
                  <span className="subtopics-count">{track.topics.length} Research Subtopics</span>
                  <div className="track-arrow-btn">
                    <ArrowRight size={15} />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Subtopics Modal */}
      <AnimatePresence>
        {activeTrack && (
          <div className="modal-backdrop" onClick={() => setActiveTrack(null)}>
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.25 }}
              className="modal-box track-modal"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="modal-close-btn"
                onClick={() => setActiveTrack(null)}
                aria-label="Close Track Details"
              >
                <X size={20} />
              </button>

              <div className="track-modal-header">
                <span className="track-modal-tag">TRACK {activeTrack.number}</span>
                <h3 className="track-modal-title">{activeTrack.title}</h3>
                <p className="track-modal-desc">{activeTrack.description}</p>
              </div>

              <div className="track-subtopics-list">
                <h4 className="subtopics-heading">Scope & Representative Topics:</h4>
                <div className="subtopics-grid">
                  {activeTrack.topics.map((topic, i) => (
                    <div key={i} className="subtopic-item">
                      <CheckCircle size={16} className="subtopic-check" />
                      <span>{topic}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="track-modal-action">
                <a
                  href="#publication"
                  onClick={() => setActiveTrack(null)}
                  className="btn btn-primary"
                >
                  View Submission Guidelines & Format
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
