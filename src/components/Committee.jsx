import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, Shield, Search, Sparkles, Building2, Globe, Users, CheckCircle2, X } from 'lucide-react';
import { conferenceData } from '../data/conferenceData';
import './Committee.css';

export default function Committee() {
  const { committee, conference, institution } = conferenceData;
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Assemble all members into unified roster with categorization
  const allMembers = useMemo(() => {
    const list = [];

    // 1. Chief Patrons
    (committee.chiefPatrons || []).forEach(m => {
      list.push({ ...m, category: 'leadership', roleTitle: 'Chief Patron', isPremier: true });
    });

    // 2. Patrons
    (committee.patrons || []).forEach(m => {
      list.push({ ...m, category: 'leadership', roleTitle: 'Patron', isPremier: true });
    });

    // 3. General Chair
    (committee.generalChairs || []).forEach(m => {
      list.push({ ...m, category: 'leadership', roleTitle: m.roleTitle || 'General Chair', isPremier: true });
    });

    // 4. Conference Chairs
    (committee.chairs || []).forEach(m => {
      list.push({ ...m, category: 'leadership', roleTitle: m.roleTitle || 'Conference Chair', isPremier: false });
    });

    // 5. Advisory Committee
    (committee.advisoryCommittee || []).forEach(m => {
      list.push({ ...m, category: 'advisory', roleTitle: 'Advisory Committee', isPremier: false });
    });

    // 6. Oversight Committee
    (committee.oversightCommittee || []).forEach(m => {
      list.push({ ...m, category: 'oversight', roleTitle: 'Oversight Committee', isPremier: false });
    });

    // 7. Technical Program Committee
    (committee.technicalProgramCommittee || []).forEach(m => {
      list.push({ ...m, category: 'technical', roleTitle: 'Technical Program Committee', isPremier: false });
    });

    // 8. Track Chairs
    (committee.trackChairs || []).forEach(m => {
      list.push({ ...m, category: 'technical', roleTitle: 'Track Chair', isPremier: false });
    });

    // 9. Publication Committee
    (committee.publicationCommittee || []).forEach(m => {
      list.push({ ...m, category: 'operations', roleTitle: 'Publication Committee', isPremier: false });
    });

    // 10. Registration Committee
    (committee.registrationCommittee || []).forEach(m => {
      list.push({ ...m, category: 'operations', roleTitle: 'Registration Committee', isPremier: false });
    });

    // 11. Foreign Delegates & Keynotes
    (committee.foreignDelegatesKeynotes || []).forEach(m => {
      list.push({ ...m, category: 'operations', roleTitle: 'Foreign Delegates & Keynotes', isPremier: false });
    });

    // 12. Website Committee
    (committee.websiteCommittee || []).forEach(m => {
      list.push({ ...m, category: 'operations', roleTitle: 'Website Committee', isPremier: false });
    });

    // 13. Logistics Committee
    (committee.logisticsCommittee || []).forEach(m => {
      list.push({ ...m, category: 'operations', roleTitle: 'Logistics Committee', isPremier: false });
    });

    return list;
  }, [committee]);

  const categories = [
    { id: 'all', label: 'All Committees', count: allMembers.length },
    { id: 'leadership', label: 'Patrons & Chairs', count: allMembers.filter(m => m.category === 'leadership').length },
    { id: 'advisory', label: 'Advisory Committee', count: allMembers.filter(m => m.category === 'advisory').length },
    { id: 'oversight', label: 'Oversight Committee', count: allMembers.filter(m => m.category === 'oversight').length },
    { id: 'technical', label: 'Technical & Tracks', count: allMembers.filter(m => m.category === 'technical').length },
    { id: 'operations', label: 'Organizing & Support', count: allMembers.filter(m => m.category === 'operations').length }
  ];

  const filteredMembers = useMemo(() => {
    return allMembers.filter(member => {
      const matchesCategory = activeTab === 'all' || member.category === activeTab;
      const q = searchQuery.trim().toLowerCase();
      if (!q) return matchesCategory;

      const matchesSearch =
        member.name.toLowerCase().includes(q) ||
        (member.designation && member.designation.toLowerCase().includes(q)) ||
        (member.institution && member.institution.toLowerCase().includes(q)) ||
        (member.roleTitle && member.roleTitle.toLowerCase().includes(q));

      return matchesCategory && matchesSearch;
    });
  }, [allMembers, activeTab, searchQuery]);

  const getInitials = (name) => {
    return name
      .replace(/(Dr\.|Prof\.|Sri\.|Mr\.|Mrs\.|Ms\.)/g, '')
      .trim()
      .split(' ')
      .filter(Boolean)
      .map(part => part[0])
      .join('')
      .slice(0, 2)
      .toUpperCase() || 'IE';
  };

  return (
    <section id="committee" className="section section-light committee-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-badge">GOVERNANCE & LEADERSHIP</span>
          <h2 className="section-title">Conference Organizing Committee</h2>
          <p className="section-desc">
            Guided by distinguished academic pioneers, IEEE fellows, and researchers from {institution.shortName}, Mysuru and world-renowned global institutions.
          </p>
        </div>

        {/* Search & Filter Toolbar */}
        <div className="committee-toolbar">
          <div className="committee-search-box">
            <Search size={18} className="search-icon" />
            <input
              type="text"
              className="committee-search-input"
              placeholder="Search members by name, department, or institution (e.g., IIT Bombay, Purdue, ECE, Dean)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            {searchQuery && (
              <button
                type="button"
                className="search-clear-btn"
                onClick={() => setSearchQuery('')}
                aria-label="Clear Search"
              >
                <X size={15} />
              </button>
            )}
          </div>
        </div>

        {/* Committee Category Tabs */}
        <div className="committee-tabs" role="tablist">
          {categories.map(cat => (
            <button
              key={cat.id}
              type="button"
              role="tab"
              aria-selected={activeTab === cat.id}
              className={`committee-tab-btn ${activeTab === cat.id ? 'active' : ''}`}
              onClick={() => setActiveTab(cat.id)}
            >
              <span>{cat.label}</span>
              <span className="tab-count-pill">{cat.count}</span>
            </button>
          ))}
        </div>

        {/* Active Filter Status */}
        {searchQuery && (
          <div className="committee-filter-info">
            <span>Showing {filteredMembers.length} result{filteredMembers.length === 1 ? '' : 's'} matching "{searchQuery}"</span>
            <button type="button" onClick={() => setSearchQuery('')} className="reset-filter-btn">
              Reset search
            </button>
          </div>
        )}

        {/* Committee Member Cards Grid */}
        {filteredMembers.length === 0 ? (
          <div className="committee-no-results">
            <Users size={36} className="no-results-icon" />
            <p className="no-results-title">No committee members found</p>
            <p className="no-results-desc">Try searching for a different name, department, or university affiliation.</p>
          </div>
        ) : (
          <div className="committee-grid">
            <AnimatePresence mode="popLayout">
              {filteredMembers.map((member, index) => {
                const isChief = member.roleTitle === 'Chief Patron';
                const isGeneralChair = member.roleTitle === 'General Chair';
                const isPatron = member.roleTitle === 'Patron';

                return (
                  <motion.div
                    key={`${member.name}-${member.roleTitle}-${index}`}
                    layout
                    className={`committee-card ${member.isPremier ? 'is-premier-card' : ''} ${isChief ? 'is-chief-card' : ''} ${isGeneralChair ? 'is-general-chair-card' : ''}`}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="committee-role-badge">
                      {(isChief || isGeneralChair || isPatron) && (
                        <Sparkles size={12} className="inline-icon" />
                      )}
                      <span>{member.roleTitle}</span>
                    </div>

                    <div className="committee-avatar-wrapper">
                      <div className={`committee-avatar-initials ${member.isPremier ? 'premier-avatar' : ''}`}>
                        {getInitials(member.name)}
                      </div>
                    </div>

                    <h3 className="committee-member-name">{member.name}</h3>
                    <p className="committee-member-designation">{member.designation}</p>
                    
                    {member.institution && (
                      <div className="committee-member-inst-box">
                        <Building2 size={13} className="inst-icon" />
                        <span className="committee-member-inst">{member.institution}</span>
                      </div>
                    )}
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        )}

        {/* Oversight & Global Quality Assurance Note */}
        <div className="committee-footer-note">
          <Shield size={20} className="note-icon" />
          <span>
            The <strong>{conference.acronym}</strong> technical program and peer evaluations adhere to strict IEEE publication standards, overseen by senior IEEE Fellows and academic leaders from India, USA, Europe, and Asia.
          </span>
        </div>
      </div>
    </section>
  );
}
