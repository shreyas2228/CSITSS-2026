import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Award, UserCheck, Shield, BookOpen, Layers, Sparkles } from 'lucide-react';
import { conferenceData } from '../data/conferenceData';
import './Committee.css';

export default function Committee() {
  const { committee, conference, institution } = conferenceData;
  const [activeTab, setActiveTab] = useState('all');

  const categories = [
    { id: 'all', label: 'All Committees' },
    { id: 'patrons', label: 'Patrons & Leadership' },
    { id: 'chairs', label: 'Chairs & Co-Chairs' },
    { id: 'technical', label: 'Technical & Publication' }
  ];

  const allMembers = [
    ...committee.chiefPatrons.map(m => ({ ...m, roleCategory: 'patrons', roleTitle: 'Chief Patron' })),
    ...committee.patrons.map(m => ({ ...m, roleCategory: 'patrons', roleTitle: 'Patron' })),
    ...committee.generalChairs.map(m => ({ ...m, roleCategory: 'chairs', roleTitle: 'General Chair' })),
    ...committee.conferenceChairs.map(m => ({ ...m, roleCategory: 'chairs', roleTitle: 'Conference Chair' })),
    ...committee.technicalChairs.map(m => ({ ...m, roleCategory: 'technical', roleTitle: 'Technical Program Chair' })),
    ...committee.publicationChairs.map(m => ({ ...m, roleCategory: 'technical', roleTitle: 'Publication Chair' })),
    ...committee.financeChairs.map(m => ({ ...m, roleCategory: 'technical', roleTitle: 'Finance & Accounts Chair' }))
  ];

  const filteredMembers = activeTab === 'all'
    ? allMembers
    : allMembers.filter(m => m.roleCategory === activeTab);

  return (
    <section id="committee" className="section section-light committee-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-badge">GOVERNANCE & LEADERSHIP</span>
          <h2 className="section-title">Organizing Committee</h2>
          <p className="section-desc">
            Guided by academic pioneers and engineering researchers from {institution.shortName}, Mysuru and IEEE leadership.
          </p>
        </div>

        {/* Committee Filter Tabs */}
        <div className="committee-tabs">
          {categories.map(cat => (
            <button
              key={cat.id}
              type="button"
              className={`committee-tab-btn ${activeTab === cat.id ? 'active' : ''}`}
              onClick={() => setActiveTab(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Committee Grid */}
        <div className="committee-grid">
          {filteredMembers.map((member, index) => {
            const isChief = member.roleTitle === 'Chief Patron';

            return (
              <motion.div
                key={`${member.name}-${index}`}
                className={`committee-card ${isChief ? 'is-chief-card' : ''}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: (index % 6) * 0.05 }}
              >
                <div className="committee-role-badge">
                  {isChief && <Sparkles size={12} className="inline-icon" />}
                  <span>{member.roleTitle}</span>
                </div>

                <div className="committee-avatar-wrapper">
                  <div className="committee-avatar-initials">
                    {member.name.replace(/(Sri\.|Dr\.|Prof\.)/g, '').trim().split(' ').map(n => n[0]).join('').slice(0, 2)}
                  </div>
                </div>

                <h3 className="committee-member-name">{member.name}</h3>
                <p className="committee-member-designation">{member.designation}</p>
                <p className="committee-member-inst">{member.institution}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Oversight Note */}
        <div className="committee-footer-note">
          <Shield size={18} className="note-icon" />
          <span>
            Technical review and peer evaluations are overseen by the Technical Program Committee comprising 120+ senior reviewers and IEEE Senior Members from India, Singapore, USA, and Europe.
          </span>
        </div>
      </div>
    </section>
  );
}
