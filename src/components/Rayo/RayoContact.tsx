"use client";

import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const RayoContact: React.FC = () => {
  const { language } = useLanguage();
  const [focused, setFocused] = useState<string | null>(null);

  const inputStyle = (name: string): React.CSSProperties => ({
    width: '100%',
    background: 'transparent',
    border: 'none',
    borderBottom: `2px solid ${focused === name ? '#10B981' : 'rgba(255,255,255,0.15)'}`,
    padding: '16px 0',
    color: '#FAF7F6',
    fontSize: '1.1rem',
    outline: 'none',
    transition: 'border-color 0.3s ease',
    boxSizing: 'border-box',
  });

  return (
    <section id="contact" style={{ padding: '120px 0', backgroundColor: '#0d0d0d', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
      <div className="mxd-container">
        <div className="row">
          <div className="col-12 col-md-6" style={{ paddingRight: '60px', marginBottom: '60px' }}>
            <h2 style={{ fontSize: 'clamp(3rem, 7vw, 5.5rem)', fontWeight: '900', color: '#FAF7F6', textTransform: 'uppercase', lineHeight: '0.9', marginBottom: '40px' }}>
              {language === 'es' ? '¿LISTO PARA EL ' : 'READY FOR THE '}
              <span style={{ color: '#10B981' }}>
                {language === 'es' ? 'SIGUIENTE NIVEL?' : 'NEXT LEVEL?'}
              </span>
            </h2>
            <p style={{ fontSize: '1.2rem', color: '#838383', lineHeight: '1.7', maxWidth: '450px', marginBottom: '50px' }}>
              {language === 'es'
                ? 'No buscamos clientes, buscamos socios estratégicos. Si tu proyecto requiere ingeniería de élite, hablemos sin rodeos.'
                : "We don't look for clients, we look for strategic partners. If your project requires elite engineering, let's talk straight."}
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <div>
                <p style={{ color: '#838383', fontSize: '0.85rem', fontWeight: 'bold', margin: '0 0 6px' }}>EMAIL</p>
                <a href="mailto:manu@manuportuguez.com" style={{ color: '#FAF7F6', fontSize: '1.2rem', fontWeight: 'bold', textDecoration: 'none' }}>manu@manuportuguez.com</a>
              </div>
              <div>
                <p style={{ color: '#838383', fontSize: '0.85rem', fontWeight: 'bold', margin: '0 0 6px' }}>UBICACIÓN</p>
                <p style={{ color: '#FAF7F6', fontSize: '1.1rem', margin: 0 }}>San José, Curridabat, Costa Rica 🇨🇷</p>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-6">
            <form style={{ display: 'flex', flexDirection: 'column', gap: '36px' }}>
              <div>
                <label style={{ display: 'block', color: '#838383', fontSize: '0.8rem', fontWeight: 'bold', marginBottom: '8px', letterSpacing: '2px' }}>
                  {language === 'es' ? 'NOMBRE COMPLETO' : 'FULL NAME'}
                </label>
                <input type="text" style={inputStyle('name')} onFocus={() => setFocused('name')} onBlur={() => setFocused(null)} placeholder={language === 'es' ? 'Tu nombre aquí...' : 'Your name here...'} />
              </div>
              <div>
                <label style={{ display: 'block', color: '#838383', fontSize: '0.8rem', fontWeight: 'bold', marginBottom: '8px', letterSpacing: '2px' }}>
                  EMAIL
                </label>
                <input type="email" style={inputStyle('email')} onFocus={() => setFocused('email')} onBlur={() => setFocused(null)} placeholder="email@empresa.com" />
              </div>
              <div>
                <label style={{ display: 'block', color: '#838383', fontSize: '0.8rem', fontWeight: 'bold', marginBottom: '8px', letterSpacing: '2px' }}>
                  {language === 'es' ? 'TU PROYECTO' : 'YOUR PROJECT'}
                </label>
                <textarea rows={4} style={{ ...inputStyle('message'), resize: 'none' }} onFocus={() => setFocused('message')} onBlur={() => setFocused(null)} placeholder={language === 'es' ? 'Cuéntanos tu visión...' : 'Tell us your vision...'} />
              </div>
              <button
                type="submit"
                style={{
                  backgroundColor: '#10B981',
                  color: '#161616',
                  border: 'none',
                  padding: '20px 48px',
                  borderRadius: '100px',
                  fontSize: '1rem',
                  fontWeight: '900',
                  letterSpacing: '2px',
                  cursor: 'pointer',
                  alignSelf: 'flex-start',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#059669'; e.currentTarget.style.transform = 'scale(1.03)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#10B981'; e.currentTarget.style.transform = 'scale(1)'; }}
              >
                {language === 'es' ? 'ENVIAR MENSAJE →' : 'SEND MESSAGE →'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RayoContact;
