"use client";

import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const clients = [
  { name: "Ruby Wager", url: "https://rubywager.com", logo: "/logos/Ruby-Wager-Logo.png" },
  { name: "HiHub Global", url: "https://hihubglobal.com", logo: "/logos/logo-hihub-white.png" },
  { name: "Olavivo", url: "https://olavivo.com", logo: "/logos/OLAVIVO.png" },
  { name: "Riviera CR", url: "https://rivieracr.net", logo: "/logos/logo-riviera.png" },
  { name: "Reserva", url: "https://reserva.com", logo: "/logos/Logo-Reserva-08_GOLD-e1718579433972-768x779.png" },
];

const RayoClients: React.FC = () => {
  const { language } = useLanguage();

  return (
    <section id="clients" style={{ padding: '100px 0', backgroundColor: '#161616', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
      <div className="mxd-container">
        <div style={{ marginBottom: '60px' }}>
          <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', fontWeight: '900', color: '#FAF7F6', textTransform: 'uppercase', lineHeight: '1' }}>
            {language === 'es' ? 'EMPRESAS QUE ' : 'COMPANIES THAT '}
            <span style={{ color: '#10B981' }}>{language === 'es' ? 'CONFÍAN EN NOSOTROS' : 'TRUST US'}</span>
          </h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '2px' }}>
          {clients.map((client) => (
            <a
              key={client.name}
              href={client.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '50px 30px',
                border: '1px solid rgba(255,255,255,0.06)',
                textDecoration: 'none',
                transition: 'all 0.3s ease',
                backgroundColor: 'rgba(255,255,255,0.02)',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'rgba(16,185,129,0.06)'; e.currentTarget.style.borderColor = 'rgba(16,185,129,0.3)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.02)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'; }}
            >
              <img
                src={client.logo}
                alt={client.name}
                style={{ maxWidth: '140px', maxHeight: '60px', objectFit: 'contain', filter: 'brightness(0) invert(1)', opacity: 0.7 }}
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RayoClients;
