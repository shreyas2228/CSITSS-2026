import React from 'react';
import { motion } from 'framer-motion';
import { FileUp, UserCheck, Calendar, Download, Mail, ArrowUpRight } from 'lucide-react';
import { conferenceData } from '../data/conferenceData';
import './QuickActions.css';

const iconMap = {
  FileUp: FileUp,
  UserCheck: UserCheck,
  Calendar: Calendar,
  Download: Download,
  Mail: Mail
};

export default function QuickActions() {
  const { quickActions } = conferenceData;

  const handleActionClick = (e, link) => {
    if (link.startsWith('#')) {
      e.preventDefault();
      const targetId = link.replace('#', '');
      const el = document.getElementById(targetId);
      if (el) {
        const navOffset = 80;
        const elPosition = el.getBoundingClientRect().top;
        const offsetPosition = elPosition + window.pageYOffset - navOffset;
        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      }
    }
  };

  return (
    <section id="quick-actions" className="quick-actions-section section-light">
      <div className="container">
        <div className="quick-actions-grid">
          {quickActions.map((item, idx) => {
            const IconComponent = iconMap[item.icon] || FileUp;
            return (
              <motion.a
                key={item.id || idx}
                href={item.link}
                onClick={(e) => handleActionClick(e, item.link)}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="action-card"
              >
                <div className="action-card-top">
                  <div className="action-icon-box">
                    <IconComponent size={22} />
                  </div>
                  <div className="action-arrow-circle">
                    <ArrowUpRight size={15} />
                  </div>
                </div>
                <div className="action-card-content">
                  <h3 className="action-card-title">{item.title}</h3>
                  <p className="action-card-desc">{item.desc}</p>
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
