"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

interface Project {
  name: string;
  url: string;
  logo: string;
  description: string;
  descriptionEs: string;
}

const projects: Project[] = [
  {
    name: "Ruby Wager",
    url: "https://rubywager.com",
    logo: "/logos/Ruby-Wager-Logo.png",
    description: "Online gaming platform",
    descriptionEs: "Plataforma de juegos en línea"
  },
  {
    name: "HiHub Global",
    url: "https://hihubglobal.com",
    logo: "/logos/logo-hihub-white.png",
    description: "Global connectivity solutions",
    descriptionEs: "Soluciones de conectividad global"
  },
  {
    name: "Olavivo",
    url: "https://olavivo.com",
    logo: "/logos/OLAVIVO.png",
    description: "Digital lifestyle platform",
    descriptionEs: "Plataforma de estilo de vida digital"
  },
  {
    name: "Riviera CR",
    url: "https://rivieracr.net",
    logo: "/logos/logo-riviera.png",
    description: "Real estate solutions",
    descriptionEs: "Soluciones inmobiliarias"
  },
  {
    name: "Reserva",
    url: "https://reserva.com",
    logo: "/logos/Logo-Reserva-08_GOLD-e1718579433972-768x779.png",
    description: "Booking platform",
    descriptionEs: "Plataforma de reservas"
  }
];

export default function OurWork() {
  const { language } = useLanguage();

  return (
    <section id="work" className="py-20 bg-gradient-to-b from-black to-zinc-950">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            {language === 'es' ? 'Nuestros Clientes' : 'Our Clients'}
          </h2>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
            {language === 'es' ? 'Confianza de empresas alrededor del mundo' : 'Trusted by companies around the world'}
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <motion.a
              key={project.name}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-8 hover:border-[#10B981]/30 hover:bg-white/10 transition-all duration-300 aspect-square flex flex-col items-center justify-center">
                <div className="relative w-full h-full flex items-center justify-center mb-3">
                  <img
                    src={project.logo}
                    alt={project.name}
                    className="max-w-full max-h-full object-contain transition-all duration-300"
                  />
                </div>
                <h3 className="text-sm md:text-base font-semibold text-white text-center mt-auto">
                  {project.name}
                </h3>
                <p className="text-xs text-zinc-500 text-center mt-1">
                  {language === 'es' ? project.descriptionEs : project.description}
                </p>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/50 rounded-2xl">
                  <div className="bg-[#10B981] text-black px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2">
                    <ExternalLink size={16} />
                    {language === 'es' ? 'Visitar Sitio' : 'Visit Site'}
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
