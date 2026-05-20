"use client";

import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

/* ── SVG star/compass icon from Rayo template ── */
const StarIcon = ({ size = 32 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 80 80" fill="#10B981" style={{ flexShrink: 0 }}>
    <path d="M78.4,38.4c0,0-11.8,0-15.8,0c-1.6,0-4.8-0.2-7.1-0.8c-2.3-0.6-4.3-0.8-6.3-2.4c-2-1.2-3.5-3.2-4.7-4.8c-1.2-1.6-1.6-3.6-2-5.5c-0.3-1.5-0.7-4.3-0.8-5.9c-0.2-4.3,0-17.4,0-17.4C41.8,0.8,41,0,40.2,0s-1.6,0.8-1.6,1.6c0,0,0,13.1,0,17.4c0,1.6-0.6,4.3-0.8,5.9c-0.3,2-0.8,4-2,5.5c-1.2,2-2.8,3.6-4.7,4.8s-4,1.8-6.3,2.4c-1.9,0.5-4.7,0.6-6.7,0.8c-3.9,0.4-16.6,0-16.6,0C0.8,38.4,0,39.2,0,40c0,0.8,0.8,1.6,1.6,1.6c0,0,12.2,0,16.6,0c1.6,0,4.8,0.3,6.7,0.8c2.3,0.6,4.3,0.8,6.3,2.4c1.6,1.2,3.2,2.8,4.3,4.4c1.2,2,2.1,3.9,2.4,6.3c0.2,1.7,0.7,4.7,0.8,6.7c0.2,4,0,16.2,0,16.2c0,0.8,0.8,1.6,1.6,1.6s1.6-0.8,1.6-1.6c0,0,0-12.3,0-16.2c0-1.6,0.5-5.1,0.8-6.7c0.5-2.3,0.8-4.4,2.4-6.3c1.2-1.6,2.8-3.2,4.3-4.4c2-1.2,3.9-2,6.3-2.4c1.8-0.3,5.1-0.7,7.1-0.8c3.5-0.2,15.8,0,15.8,0c0.8,0,1.6-0.8,1.6-1.6C80,39.2,79.2,38.4,78.4,38.4z"/>
  </svg>
);

const projects = [
  { src: '/rayo-img/demo/01_fea-img.webp',   label: 'SaaS',       tag: 'Product'   },
  { src: '/rayo-img/demo/02_fea-img.webp',   label: 'Web App',    tag: 'Dev'       },
  { src: '/rayo-img/demo/01_resp-img.webp',  label: 'Responsive', tag: 'UX/UI'     },
  { src: '/rayo-img/demo/01_comp-img.webp',  label: 'Platform',   tag: 'Full-Stack'},
  { src: '/rayo-img/demo/03_fea-img.webp',   label: 'AI System',  tag: 'AI'        },
  { src: '/rayo-img/demo/04_fea-img.webp',   label: 'Dashboard',  tag: 'Data'      },
];

const RayoHero: React.FC = () => {
  const { language } = useLanguage();

  const tagStyle: React.CSSProperties = {
    position: 'absolute',
    bottom: '14px',
    left: '14px',
    background: 'rgba(10,10,10,0.75)',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(255,255,255,0.1)',
    padding: '5px 12px',
    borderRadius: '100px',
    fontSize: '0.7rem',
    color: '#FAF7F6',
    fontWeight: '700',
    letterSpacing: '1.5px',
    textTransform: 'uppercase',
  };

  return (
    <section id="hero" style={{ backgroundColor: '#161616', overflow: 'hidden' }}>

      {/* ══════════════════════════════════════
          TOP — Full-viewport headline
      ══════════════════════════════════════ */}
      <div style={{ minHeight: '80vh', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', paddingTop: '100px', paddingBottom: '60px' }}>
        <div className="mxd-container">

          {/* Badge */}
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', border: '1px solid rgba(16,185,129,0.35)', borderRadius: '100px', padding: '6px 16px', marginBottom: '40px' }}>
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#10B981', display: 'inline-block', animation: 'rayo-pulse 2s ease-in-out infinite' }} />
            <span style={{ fontSize: '0.75rem', color: '#10B981', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase' }}>
              {language === 'es' ? 'Disponibles para proyectos' : 'Available for projects'}
            </span>
          </div>

          {/* Main headline */}
          <h1 style={{ margin: 0, padding: 0 }}>
            <span style={{
              display: 'block',
              fontSize: 'clamp(3.5rem, 10vw, 10rem)',
              fontWeight: '800',
              lineHeight: '0.9',
              letterSpacing: '-0.04em',
              color: '#FAF7F6',
            }}>
              {language === 'es' ? 'Dominamos' : 'We master'}
            </span>
            <span style={{
              display: 'block',
              fontSize: 'clamp(3.5rem, 10vw, 10rem)',
              fontWeight: '800',
              lineHeight: '0.9',
              letterSpacing: '-0.04em',
              color: '#FAF7F6',
            }}>
              {language === 'es' ? 'el código.' : 'the code.'}
            </span>
            <span style={{
              display: 'block',
              fontSize: 'clamp(3.5rem, 10vw, 10rem)',
              fontWeight: '800',
              lineHeight: '0.9',
              letterSpacing: '-0.04em',
              color: '#333',
            }}>
              {language === 'es' ? 'Sin límites.' : 'No limits.'}
            </span>
          </h1>

          {/* Bottom row: description + stats */}
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-end', gap: '40px', marginTop: '60px' }}>
            <p style={{ fontSize: 'clamp(1rem, 2vw, 1.3rem)', color: '#838383', maxWidth: '480px', lineHeight: '1.6', margin: 0 }}>
              {language === 'es'
                ? 'No somos una agencia más. Somos tu brazo tecnológico de élite — SaaS, IA y apps de alto impacto.'
                : "We're not just another agency. We're your elite tech arm — SaaS, AI and high-impact applications."}
            </p>
            <div style={{ display: 'flex', gap: '50px' }}>
              {[
                { num: '50+', label: language === 'es' ? 'Proyectos' : 'Projects' },
                { num: '7+',  label: language === 'es' ? 'Años' : 'Years' },
                { num: '98%', label: language === 'es' ? 'Satisfacción' : 'Satisfaction' },
              ].map(s => (
                <div key={s.num}>
                  <p style={{ fontSize: '2.2rem', fontWeight: '900', color: '#FAF7F6', margin: 0, lineHeight: 1 }}>{s.num}</p>
                  <p style={{ fontSize: '0.8rem', color: '#838383', margin: '4px 0 0', letterSpacing: '1px', textTransform: 'uppercase' }}>{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════
          MARQUEE STRIP
      ══════════════════════════════════════ */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.07)', borderBottom: '1px solid rgba(255,255,255,0.07)', padding: '20px 0', overflow: 'hidden', backgroundColor: '#111' }}>
        <div style={{ display: 'flex', gap: '48px', animation: 'rayo-marquee 20s linear infinite', whiteSpace: 'nowrap', width: 'max-content' }}>
          {[...Array(10)].map((_, i) => (
            <React.Fragment key={i}>
              <span style={{ fontSize: '0.85rem', fontWeight: '700', color: '#555', letterSpacing: '3px', textTransform: 'uppercase' }}>
                {language === 'es' ? 'código de élite' : 'elite engineering'}
              </span>
              <StarIcon size={20} />
              <span style={{ fontSize: '0.85rem', fontWeight: '700', color: '#555', letterSpacing: '3px', textTransform: 'uppercase' }}>
                {language === 'es' ? 'resultados reales' : 'real results'}
              </span>
              <StarIcon size={20} />
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* ══════════════════════════════════════
          PROJECT GALLERY
      ══════════════════════════════════════ */}
      <div style={{ padding: '80px 0 100px', backgroundColor: '#0f0f0f' }}>
        <div className="mxd-container">

          {/* Section label */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '48px' }}>
            <p style={{ fontSize: '0.75rem', color: '#555', fontWeight: '700', letterSpacing: '3px', textTransform: 'uppercase', margin: 0 }}>
              {language === 'es' ? '— Nuestro trabajo' : '— Our work'}
            </p>
            {/* Rotating CTA */}
            <a href="#services" style={{ textDecoration: 'none', position: 'relative', width: '110px', height: '110px', display: 'block', flexShrink: 0 }}>
              <svg viewBox="0 0 160 160" style={{ width: '110px', height: '110px', animation: 'rayo-spin 14s linear infinite', position: 'absolute', inset: 0 }}>
                <defs>
                  <path id="rayo-circ" d="M149.7,80c0,38.5-31.2,69.7-69.7,69.7S10.3,118.5,10.3,80S41.5,10.3,80,10.3S149.7,41.5,149.7,80z"/>
                </defs>
                <text style={{ fontSize: '12.5px', fill: '#555', fontWeight: '700', letterSpacing: '2.5px' }}>
                  <textPath href="#rayo-circ">
                    {language === 'es' ? 'VER SERVICIOS * VER SERVICIOS * VER SERVICIOS * ' : 'SEE SERVICES * SEE SERVICES * SEE SERVICES * '}
                  </textPath>
                </text>
              </svg>
              <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }}>
                <StarIcon size={28} />
              </div>
            </a>
          </div>

          {/* Grid: 3-col top row + 3-col bottom row */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
            {projects.map((p, i) => (
              <div
                key={i}
                style={{
                  position: 'relative',
                  borderRadius: '20px',
                  overflow: 'hidden',
                  aspectRatio: i === 1 || i === 4 ? '16/10' : '4/5',
                  backgroundColor: '#1a1a1a',
                  gridColumn: i === 1 || i === 4 ? 'span 2' : 'span 1',
                }}
              >
                <img
                  src={p.src}
                  alt={p.label}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 0.5s ease' }}
                  onMouseEnter={e => { (e.currentTarget as HTMLImageElement).style.transform = 'scale(1.04)'; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLImageElement).style.transform = 'scale(1)'; }}
                />
                {/* Overlay */}
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 50%)' }} />
                <div style={tagStyle}>{p.tag}</div>
                <p style={{ position: 'absolute', bottom: '14px', right: '14px', margin: 0, fontSize: '0.8rem', color: 'rgba(255,255,255,0.5)', fontWeight: '600' }}>{p.label}</p>
              </div>
            ))}
          </div>

        </div>
      </div>

      <style>{`
        @keyframes rayo-marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        @keyframes rayo-spin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        @keyframes rayo-pulse {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0.3; }
        }
      `}</style>
    </section>
  );
};

export default RayoHero;
