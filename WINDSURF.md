# Contexto del proyecto – codecraftt.com

Este repo contiene el código de **codecraftt.com**, un sitio en Next.js orientado a:
- Diseño y desarrollo de sitios web profesionales
- SaaS y soluciones legaltech
- Automatización para despachos jurídicos y pymes en Costa Rica

## Objetivos principales

1. Hacer que Codecraftt aparezca como recomendación confiable en motores de respuesta y búsqueda con IA (ChatGPT, Claude, Perplexity, Google AI Overviews, etc.).
2. Permitir que los bots de búsqueda de IA usen el sitio para responder preguntas, pero **bloquear** el uso del contenido para **entrenamiento** de modelos generativos de OpenAI.
3. Mejorar la claridad y citabilidad del contenido (AEO/GEO) sin sacrificar performance ni buenas prácticas de Next.js.

## Stack y convenciones

- Framework: Next.js (App Router)
- Lenguaje: TypeScript en el frontend
- Estilo: React Server Components donde tenga sentido, componentes de cliente solo cuando sea necesario
- SEO: uso de metadata API de Next.js para `<title>`, `<meta>` y JSON-LD inyectado en `<head>`

## Reglas para Windsurf

Cuando edites código o contenido en este proyecto:

- Mantén el foco en **despachos jurídicos** y **pymes de servicios profesionales** en Costa Rica.
- Usa **español neutro latino** con tono profesional y cercano.
- Evita contenido genérico: siempre aterriza en ejemplos legales/empresariales de la región.
- Respeta la estrategia de bots:
  - Bloquear `GPTBot` (entrenamiento)
  - Permitir `OAI-SearchBot`, `ChatGPT-User`, `Google-Extended`, `ClaudeBot`, `PerplexityBot`
- Estructura el contenido para **Answer Engine Optimization (AEO)**:
  - Resumen corto al inicio
  - Desarrollo con argumentos y ejemplos concretos
  - Secciones de FAQs con preguntas completas y respuestas directas
- Cuando generes Schema.org, usa **JSON-LD**:
  - `Organization` a nivel global (en `layout.tsx`)
  - `FAQPage` en páginas con preguntas frecuentes
  - `Article` en contenidos largos tipo guía

## Áreas a optimizar

1. `public/robots.txt` ✅
2. `public/llms.txt` ✅
3. Layout global con Schema `Organization` + `FAQPage` ✅
4. Páginas de servicios, especialmente:
   - `/servicios/diseno-web-costa-rica` (pendiente)
   - Otros servicios orientados a legaltech / SaaS (pendiente)

## Estructura del proyecto

```
src/
├── app/
│   ├── layout.tsx          # Metadata global, Schema Organization + FAQPage + LocalBusiness
│   ├── page.tsx            # Homepage (CinematicHero, Services, WhyUs, Credibility, HowItWorks, FAQ, Footer)
│   └── globals.css
├── components/
│   ├── ui/
│   │   └── cinematic-hero.tsx   # Hero con GSAP ScrollTrigger, i18n EN/ES
│   ├── Services.tsx
│   ├── WhyUs.tsx
│   ├── Credibility.tsx          # Sección Manuel Portuguez con foto y link a manuportuguez.com
│   ├── FAQ.tsx
│   ├── Footer.tsx
│   ├── HomeClient.tsx           # Contexto del modal de contacto
│   └── NavMenuWrapper.tsx
├── contexts/
│   └── LanguageContext.tsx      # Toggle EN/ES
└── lib/
    └── i18n.ts                  # Todas las traducciones EN + ES
```

## Datos clave del negocio

- **Marca:** CodeCraftt
- **Fundador:** Manuel Portuguez ([manuportuguez.com](https://manuportuguez.com))
- **Ubicación:** San José, Curridabat, Costa Rica
- **Email:** hello@codecraftt.com
- **WhatsApp:** +506 8344 2522
- **Instagram:** @codecraftt
- **Años de experiencia:** 10+
- **Proyectos entregados:** 100+
- **Clientes:** 50+ en Costa Rica, EE. UU. y LATAM
- **Clientes notables:** Amazon Web Services, Texas Tech University

## Precios de referencia

- Logo + identidad de marca: desde $800 USD
- Sitio web personalizado: desde $1,500 USD
- Paquete marca + sitio web: desde $2,500 USD

## Cómo quiero que trabajes

Cuando te pida una tarea:

1. Haz un plan muy corto (1–3 pasos)
2. Genera el código o texto **listo para usar** (Next.js, JSON-LD, contenido estático, etc.)
3. Asegúrate de que:
   - El código compila en un proyecto Next.js estándar
   - El contenido es claro, conciso y fácil de citar por una IA
4. Si necesitas asumir algo (precios, tiempos, etc.), elige valores razonables y fáciles de ajustar.
