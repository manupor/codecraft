"use client";

import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const RayoCapabilities: React.FC = () => {
  const { language } = useLanguage();

  const capabilities = [
    {
      title: 'CONSULTORÍA ESTRATÉGICA',
      titleEn: 'STRATEGIC CONSULTANCY',
      desc: 'Analizamos tu modelo de negocio y encontramos los cuellos de botella tecnológicos. No solo programamos, optimizamos tu rentabilidad.',
      descEn: 'We analyze your business model and find technological bottlenecks. We don\'t just code, we optimize your profitability.'
    },
    {
      title: 'UX/UI PSICOLÓGICO',
      titleEn: 'PSYCHOLOGICAL UX/UI',
      desc: 'Diseñamos interfaces que guían al usuario hacia la conversión. Utilizamos psicología aplicada para retener y convertir.',
      descEn: 'We design interfaces that guide the user towards conversion. We use applied psychology to retain and convert.'
    },
    {
      title: 'DEVELOPMENT DE ALTA DISPONIBILIDAD',
      titleEn: 'HIGH AVAILABILITY DEVELOPMENT',
      desc: 'Arquitecturas escalables preparadas para el tráfico masivo. Cero caídas, máxima velocidad, seguridad impenetrable.',
      descEn: 'Scalable architectures prepared for massive traffic. Zero downtime, maximum speed, impenetrable security.'
    }
  ];

  return (
    <section id="capabilities" className="mxd-section" style={{ backgroundColor: '#0f0f0f', padding: '120px 0', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
      <div className="mxd-container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
        <div style={{ marginBottom: '80px' }}>
          <h2 style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', fontWeight: 'bold', color: '#FAF7F6', margin: 0 }}>
            {language === 'es' ? 'NUESTRAS' : 'OUR'}{' '}
            <span style={{ color: '#10B981' }}>
              {language === 'es' ? 'CAPACIDADES' : 'CAPABILITIES'}
            </span>
          </h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>
          {capabilities.map((cap, index) => (
            <div key={index}>
              <div style={{ paddingRight: '20px' }}>
                <h4 style={{ color: '#10B981', fontSize: '1.5rem', marginBottom: '20px', fontWeight: 'bold' }}>
                  {language === 'es' ? cap.title : cap.titleEn}
                </h4>
                <p style={{ color: '#FAF7F6', opacity: 0.7, fontSize: '1.1rem', lineHeight: '1.7' }}>
                  {language === 'es' ? cap.desc : cap.descEn}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RayoCapabilities;
