"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { Quote } from 'lucide-react';

const RayoTestimonials: React.FC = () => {
  const { language } = useLanguage();

  const testimonials = [
    {
      quote: "Fue un placer trabajar con Manuel para implementar nuestras aplicaciones integradas de Sora. Su nivel de ingenio para crear soluciones de automatización inteligente es de otro nivel. Realmente entiende cómo unir el diseño con la funcionalidad técnica compleja.",
      quoteEn: "It was a pleasure working with Manuel to implement our integrated Sora applications. His level of ingenuity in creating intelligent automation solutions is on another level. He truly understands how to bridge design with complex technical functionality.",
      author: "Priscila Chaverri",
      role: "Global Manager @ Amazon",
      avatar: "https://dummyimage.com/100x100/10B981/161616&text=PC"
    },
    {
      quote: "Manuel no solo es un desarrollador Full Stack excepcional, sino un arquitecto de soluciones. Su capacidad para manejar proyectos de IA y frontend simultáneamente es impresionante. Es el socio tecnológico que cualquier startup de alto nivel necesita.",
      quoteEn: "Manuel is not just an exceptional Full Stack developer — he is a solutions architect. His ability to handle AI and frontend projects simultaneously is impressive. He is the technology partner that any high-level startup needs.",
      author: "Kattia C.",
      role: "Senior Manager @ Amazon",
      avatar: "https://dummyimage.com/100x100/10B981/161616&text=KC"
    },
    {
      quote: "Trabajar con Manuel en proyectos de automatización de procesos fue una experiencia reveladora. Su enfoque agresivo hacia la eficiencia y el código limpio transformó nuestra forma de operar. Es un experto que no teme a los desafíos técnicos más grandes.",
      quoteEn: "Working with Manuel on process automation projects was a revealing experience. His aggressive approach to efficiency and clean code transformed the way we operate. He is an expert who does not shy away from the biggest technical challenges.",
      author: "Andrés B.",
      role: "Operations Lead @ Amazon",
      avatar: "https://dummyimage.com/100x100/10B981/161616&text=AB"
    },
    {
      quote: "La atención al detalle y la visión estratégica de Manuel son impecables. Logró traducir nuestras necesidades de negocio en una plataforma robusta y escalable. Su dominio de React y Node.js es de los mejores que he visto.",
      quoteEn: "Manuel's attention to detail and strategic vision are impeccable. He managed to translate our business needs into a robust and scalable platform. His command of React and Node.js is among the best I have ever seen.",
      author: "Lucía M.",
      role: "Product Owner @ Amazon",
      avatar: "https://dummyimage.com/100x100/10B981/161616&text=LM"
    }
  ];

  return (
    <section id="testimonials" className="mxd-section" style={{ padding: '120px 0', backgroundColor: '#0f0f0f', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
      <div className="mxd-container">
        <div style={{ marginBottom: '80px' }}>
          <h2 style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', fontWeight: '900', color: '#FAF7F6', textTransform: 'uppercase', lineHeight: '1' }}>
            {language === 'es' ? 'LO QUE DICEN NUESTROS' : 'WHAT OUR'} <br />
            <span style={{ color: '#10B981' }}>
              {language === 'es' ? 'ALIADOS ESTRATÉGICOS' : 'STRATEGIC ALLIES SAY'}
            </span>
          </h2>
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
          gap: '40px' 
        }}>
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              style={{
                backgroundColor: '#161616',
                borderRadius: '32px',
                padding: '50px',
                border: '1px solid rgba(255,255,255,0.05)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'relative'
              }}
            >
              <Quote size={40} style={{ color: '#10B981', marginBottom: '30px', opacity: 0.5 }} />
              
              <p style={{ fontSize: '1.1rem', lineHeight: '1.7', color: '#FAF7F6', marginBottom: '40px', fontStyle: 'italic' }}>
                "{language === 'es' ? t.quote : t.quoteEn}"
              </p>

              <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                <img src={t.avatar} alt={t.author} style={{ width: '60px', height: '60px', borderRadius: '50%', objectFit: 'cover' }} />
                <div>
                  <h4 style={{ color: '#FAF7F6', fontWeight: '900', margin: 0 }}>{t.author}</h4>
                  <p style={{ color: '#10B981', fontSize: '0.9rem', margin: 0 }}>{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RayoTestimonials;
