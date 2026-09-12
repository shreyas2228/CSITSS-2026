import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import QuickActions from './components/QuickActions';
import Countdown from './components/Countdown';
import About from './components/About';
import NIESection from './components/NIESection';
import Stats from './components/Stats';
import Speakers from './components/Speakers';
import Tracks from './components/Tracks';
import Publication from './components/Publication';
import Timeline from './components/Timeline';
import Awards from './components/Awards';
import Registration from './components/Registration';
import Committee from './components/Committee';
import Venue from './components/Venue';
import Gallery from './components/Gallery';
import Sponsors from './components/Sponsors';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

export default function App() {
  return (
    <div className="app-root">
      {/* 1. Sticky Dark Navbar */}
      <Navbar />

      <main className="app-main-content">
        {/* 2. Hero Section (Dark Navy) */}
        <Hero />

        {/* 3. Quick Action Cards (Light) */}
        <QuickActions />

        {/* 4. Live Countdown Band (Dark Band) */}
        <Countdown />

        {/* 5. About Conference (White) */}
        <About />

        {/* 6. About NIE Mysuru (Light Gray) */}
        <NIESection />

        {/* 7. Key Statistics (Dark Navy) */}
        <Stats />

        {/* 8. Distinguished Speakers (White) */}
        <Speakers />

        {/* 9. Technical Tracks & Subtopics (Light Gray) */}
        <Tracks />

        {/* 10. Publication & IEEE Xplore (Dark Navy) */}
        <Publication />

        {/* 11. Important Dates & Timeline (White) */}
        <Timeline />

        {/* 12. Research Awards & Recognition (Light Gray) */}
        <Awards />

        {/* 13. Registration Fees & Policy (White) */}
        <Registration />

        {/* 14. Organizing Committee & Governance (Light Gray) */}
        <Committee />

        {/* 15. Venue & Travel Guide to Mysuru (White) */}
        <Venue />

        {/* 16. Photo Gallery & Archives (Dark Navy) */}
        <Gallery />

        {/* 17. Sponsors & Academic Partners (Light Gray) */}
        <Sponsors />

        {/* 18. Frequently Asked Questions (White) */}
        <FAQ />

        {/* 19. Contact Desk & Inquiry Form (Dark Navy) */}
        <Contact />
      </main>

      {/* 20. Footer (Dark Navy) */}
      <Footer />
    </div>
  );
}
