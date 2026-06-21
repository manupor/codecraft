"use client";

import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const RayoServices: React.FC = () => {
  const { language } = useLanguage();

  const services = [
    {
      id: '01',
      title: 'PRODUCTOS DIGITALES DE ÉLITE',
      titleEn: 'ELITE DIGITAL PRODUCTS',
      description: 'No hacemos "paginitas". Construimos plataformas robustas que soportan tu crecimiento y dominan tu nicho de mercado.',
      descriptionEn: 'We don\'t do "little websites". We build robust platforms that support your growth and dominate your market niche.',
      tags: ['SaaS', 'AI-Powered', 'Scalable']
    },
    {
      id: '02',
      title: 'WEBS CORPORATIVAS DE ALTO IMPACTO',
      titleEn: 'HIGH-IMPACT CORPORATE WEBSITES',
      description: 'Tu sitio web es tu cerrador de ventas 24/7. Lo optimizamos para que cada visita cuente y cada scroll venda.',
      descriptionEn: 'Your website is your 24/7 sales closer. We optimize it so every visit counts and every scroll sells.',
      tags: ['Sales-Focused', 'Fast', 'SEO-Elite']
    },
    {
      id: '03',
      title: 'ECOMMERCE AGRESIVO',
      titleEn: 'AGGRESSIVE ECOMMERCE',
      description: 'Eliminamos la fricción en el checkout. Convertimos carritos abandonados en transacciones completadas con tecnología de punta.',
      descriptionEn: 'We eliminate friction at checkout. We turn abandoned carts into completed transactions with cutting-edge technology.',
      tags: ['Conversion', 'UX-Psychology', 'Secure']
    },
    {
      id: '04',
      title: 'INTELIGENCIA ARTIFICIAL APLICADA',
      titleEn: 'APPLIED ARTIFICIAL INTELLIGENCE',
      description: 'Integramos cerebros digitales en tu flujo de trabajo. Automatizamos lo mundano para que tu equipo se enfoque en lo extraordinario.',
      descriptionEn: 'We integrate digital brains into your workflow. We automate the mundane so your team can focus on the extraordinary.',
      tags: ['Automation', 'LLMs', 'Efficiency']
    }
  ];

  return (
    <section id="services" className="mxd-section" style={{ backgroundColor: '#161616', padding: '100px 0' }}>
      <div className="mxd-container grid-container">
        <div className="mxd-block mxd-grid-item no-margin">
          <div className="content__block">
            <div className="services-stack" style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
              {services.map((service, index) => (
                <div key={service.id} className="stack-item" style={{ 
                  position: 'sticky', 
                  top: `${100 + (index * 20)}px`,
                  backgroundColor: index % 2 === 0 ? '#1a1a1a' : '#10B981',
                  borderRadius: '24px',
                  padding: '60px',
                  border: '1px solid rgba(255,255,255,0.1)',
                  boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
                  color: index % 2 === 0 ? '#FAF7F6' : '#161616'
                }}>
                  <div className="mxd-services-stack__container">
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '40px' }}>
                      <h3 style={{ fontSize: '2.5rem', fontWeight: 'bold', maxWidth: '600px', margin: 0 }}>
                        {language === 'es' ? service.title : service.titleEn}
                      </h3>
                      <span style={{ fontSize: '1.5rem', fontWeight: 'bold', opacity: 0.5 }}>/{service.id}</span>
                    </div>
                    <div style={{ maxWidth: '800px', marginBottom: '40px' }}>
                      <p style={{ fontSize: '1.3rem', lineHeight: '1.6', opacity: 0.9 }}>
                        {language === 'es' ? service.description : service.descriptionEn}
                      </p>
                    </div>
                    <div style={{ display: 'flex', gap: '15px' }}>
                      {service.tags.map(tag => (
                        <span key={tag} style={{ 
                          padding: '8px 20px', 
                          borderRadius: '100px', 
                          border: `1px solid ${index % 2 === 0 ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.2)'}`,
                          fontSize: '0.9rem',
                          fontWeight: 'bold'
                        }}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RayoServices;
