"use client";

import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const RayoFooter: React.FC = () => {
  const { language } = useLanguage();

  return (
    <footer style={{ padding: '80px 0 40px', backgroundColor: '#0a0a0a', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
      <div className="mxd-container">
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-end', gap: '40px', marginBottom: '60px' }}>
          <div>
            <h2 style={{ fontSize: '4rem', fontWeight: '900', color: '#10B981', margin: 0, lineHeight: '0.85', letterSpacing: '-0.03em' }}>CODECRAFTT</h2>
            <p style={{ fontSize: '1rem', color: '#838383', margin: '10px 0 0', fontWeight: 'bold', letterSpacing: '3px' }}>TECH ELITE AGENCY</p>
          </div>
          <div style={{ display: 'flex', gap: '40px', alignItems: 'flex-end' }}>
            <nav style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {['#hero', '#services', '#work', '#contact'].map((link) => (
                <a key={link} href={link} style={{ color: '#838383', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 'bold', letterSpacing: '1px', transition: 'color 0.2s' }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = '#10B981'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = '#838383'; }}
                >
                  {link.replace('#', '').toUpperCase()}
                </a>
              ))}
            </nav>
            <div style={{ textAlign: 'right' }}>
              <p style={{ color: '#838383', fontSize: '0.9rem', margin: '0 0 6px' }}>San José, Costa Rica 🇨🇷</p>
              <a href="mailto:manu@manuportuguez.com" style={{ color: '#FAF7F6', fontSize: '0.95rem', textDecoration: 'none', fontWeight: 'bold' }}>manu@manuportuguez.com</a>
            </div>
          </div>
        </div>

        <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '30px', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '20px', color: '#333', fontSize: '0.8rem' }}>
          <p style={{ margin: 0 }}>© {new Date().getFullYear()} CODECRAFTT — BUILT WITH AI. ENGINEERED FOR PERFORMANCE.</p>
          <p style={{ margin: 0 }}>
            {language === 'es' ? 'Creado por ' : 'Created by '}
            <span style={{ color: '#10B981', fontWeight: 'bold' }}>Manuel Portuguez</span>
            {' · Sr. Full Stack Developer'}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default RayoFooter;
