export interface BlogArticle {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  author: {
    name: string;
    role: string;
  };
}

export const blogArticles: BlogArticle[] = [
  {
    id: "1",
    slug: "core-web-vitals-importancia",
    title: "Core Web Vitals: Por qué importan para tu sitio",
    excerpt: "Descubre cómo las métricas de Core Web Vitals de Google impactan directamente en tu SEO y en la experiencia de usuario de tu sitio web.",
    content: `
<p>En el mundo del desarrollo web moderno, el rendimiento ya no es opcional—es una necesidad. Google ha hecho de las <strong>Core Web Vitals</strong> un factor crucial en su algoritmo de búsqueda, y entender estas métricas puede marcar la diferencia entre el éxito y el fracaso de tu presencia digital.</p>

<h2>¿Qué son las Core Web Vitals?</h2>
<p>Las Core Web Vitals son un conjunto de tres métricas específicas que Google utiliza para medir la experiencia de usuario en una página web:</p>

<ul>
  <li><strong>LCP (Largest Contentful Paint):</strong> Mide el tiempo que tarda en cargar el elemento más grande visible en la pantalla. Ideal: menos de 2.5 segundos.</li>
  <li><strong>FID (First Input Delay):</strong> Mide el tiempo de respuesta cuando un usuario interactúa por primera vez con la página. Ideal: menos de 100 milisegundos.</li>
  <li><strong>CLS (Cumulative Layout Shift):</strong> Mide la estabilidad visual de la página—es decir, cuánto se mueven los elementos inesperadamente. Ideal: menos de 0.1.</li>
</ul>

<h2>Impacto en SEO</h2>
<p>Desde 2021, Google incluye estas métricas como factores de ranking. Un sitio con buenos Core Web Vitals tiene ventaja competitiva en los resultados de búsqueda. No es solo técnico—es estratégico.</p>

<h2>Cómo mejorar tus métricas</h2>
<p>Hemos optimizado más de 150 sitios y estos son los cambios que más impacto tienen:</p>

<ul>
  <li>Optimizar imágenes con formatos modernos (WebP, AVIF)</li>
  <li>Implementar lazy loading para contenido no visible</li>
  <li>Minimizar JavaScript no crítico</li>
  <li>Usar CDN para distribución global de assets</li>
  <li>Implementar caching eficiente</li>
</ul>

<h2>Conclusión</h2>
<p>Las Core Web Vitals no son solo números técnicos—representan la experiencia real de tus usuarios. Un sitio rápido y estable genera más conversiones, mejores rankings y clientes más satisfechos.</p>
    `,
    category: "SEO",
    date: "15, Ene - 2026",
    readTime: "5 min",
    image: "assets/images/news/news-17.jpg",
    author: {
      name: "Manu Portuguez",
      role: "CEO & Sr Developer"
    }
  },
  {
    id: "2",
    slug: "crear-marca-memorable",
    title: "Cómo crear una marca memorable desde cero",
    excerpt: "Guía completa para construir una identidad de marca que conecte emocionalmente con tu audiencia y te diferencie de la competencia.",
    content: `
<p>Crear una marca memorable no se trata solo de un logo bonito. Se trata de construir una <strong>identidad completa</strong> que resuene con tu audiencia ideal y comunique tu propuesta de valor única.</p>

<h2>1. Define tu propósito</h2>
<p>Toda marca memorable comienza con un porqué claro. No vendas productos—vende una misión. Las mejores marcas tienen un propósito que va más allá de las transacciones.</p>

<h2>2. Conoce a tu audiencia</h2>
<p>Antes de diseñar cualquier elemento visual, debes entender profundamente a quién sirves:</p>
<ul>
  <li>¿Qué los mantiene despiertos por la noche?</li>
  <li>¿Qué valores priorizan?</li>
  <li>¿Qué lenguaje usan para describir sus problemas?</li>
</ul>

<h2>3. Desarrolla tu arquitectura de marca</h2>
<p>Incluye:</p>
<ul>
  <li><strong>Voice & Tone:</strong> Cómo se comunica tu marca</li>
  <li><strong>Valores:</strong> Principios no negociables</li>
  <li><strong>Personalidad:</strong> Rasgos humanos de tu marca</li>
  <li><strong>Promesa:</strong> Lo que garantizas a tus clientes</li>
</ul>

<h2>4. Diseño visual estratégico</h2>
<p>Tu identidad visual debe:</p>
<ul>
  <li>Ser distintiva (no genérica)</li>
  <li>Escalar correctamente</li>
  <li>Funcionar en todos los contextos (digital y físico)</li>
  <li>Transmitir tu personalidad de marca</li>
</ul>

<h2>5. Consistencia omnicanal</h2>
<p>La marca se construye mediante la repetición consistente. Cada punto de contacto—desde tu website hasta tu firma de email—debe sentirse cohesivo.</p>

<h2>Conclusión</h2>
<p>Una marca memorable no se construye overnight. Requiere estrategia, consistencia y autenticidad. Pero cuando se hace bien, se convierte en tu activo más valioso.</p>
    `,
    category: "Branding",
    date: "08, Ene - 2026",
    readTime: "7 min",
    image: "assets/images/news/news-18.jpg",
    author: {
      name: "Manu Portuguez",
      role: "CEO & Sr Developer"
    }
  },
  {
    id: "3",
    slug: "nextjs-vs-webflow",
    title: "Next.js vs Webflow: Cuál elegir para tu proyecto",
    excerpt: "Análisis comparativo de dos de las plataformas más populares para desarrollo web: descubre cuál se adapta mejor a tus necesidades.",
    content: `
<p>Como equipo con experiencia en ambas plataformas, a menudo nos preguntan: <strong>"¿Debería usar Next.js o Webflow?"</strong> La respuesta depende de tus objetivos, presupuesto y requerimientos técnicos.</p>

<h2>Webflow: El poder del no-code</h2>
<p>Webflow es excelente cuando:</p>
<ul>
  <li>Necesitas lanzar rápido (2-4 semanas)</li>
  <li>El proyecto es marketing-focused</li>
  <li>Quieres control visual sin escribir código</li>
  <li>El cliente necesita editar contenido fácilmente</li>
  <li>El SEO es importante pero no crítico</li>
</ul>

<h2>Next.js: Framework profesional</h2>
<p>Next.js es la elección correcta cuando:</p>
<ul>
  <li>Necesitas rendimiento óptimo (Core Web Vitals 90+)</li>
  <li>El proyecto incluye lógica compleja</li>
  <li>Requieres integraciones API sofisticadas</li>
  <li>Escala es una prioridad</li>
  <li>Necesitas SSR/SSG para SEO avanzado</li>
</ul>

<h2>Comparativa técnica</h2>
<table style="width:100%; border-collapse: collapse; margin: 20px 0;">
  <tr style="background: #f5f5f5;">
    <th style="padding: 10px; text-align: left;">Característica</th>
    <th style="padding: 10px; text-align: center;">Webflow</th>
    <th style="padding: 10px; text-align: center;">Next.js</th>
  </tr>
  <tr>
    <td style="padding: 10px;">Tiempo de desarrollo</td>
    <td style="padding: 10px; text-align: center;">⚡ Rápido</td>
    <td style="padding: 10px; text-align: center;">🐢 Moderado</td>
  </tr>
  <tr style="background: #fafafa;">
    <td style="padding: 10px;">Personalización</td>
    <td style="padding: 10px; text-align: center;">⭐⭐⭐</td>
    <td style="padding: 10px; text-align: center;">⭐⭐⭐⭐⭐</td>
  </tr>
  <tr>
    <td style="padding: 10px;">Rendimiento</td>
    <td style="padding: 10px; text-align: center;">⭐⭐⭐</td>
    <td style="padding: 10px; text-align: center;">⭐⭐⭐⭐⭐</td>
  </tr>
  <tr style="background: #fafafa;">
    <td style="padding: 10px;">Costo mensual</td>
    <td style="padding: 10px; text-align: center;">$$$</td>
    <td style="padding: 10px; text-align: center;">$</td>
  </tr>
</table>

<h2>Nuestra recomendación</h2>
<p>Para startups validando su mercado: <strong>Webflow</strong>. Para empresas establecidas que necesitan escalabilidad: <strong>Next.js</strong>.</p>

<h2>Conclusión</h2>
<p>No hay una respuesta única. Depende de dónde estés en tu journey y a dónde quieras llegar. Lo importante es elegir conscientemente, no por moda.</p>
    `,
    category: "Desarrollo",
    date: "02, Ene - 2026",
    readTime: "6 min",
    image: "assets/images/news/news-19.jpg",
    author: {
      name: "Manu Portuguez",
      role: "CEO & Sr Developer"
    }
  },
  {
    id: "4",
    slug: "elementos-landing-page",
    title: "5 elementos que toda landing page necesita",
    excerpt: "Descubre los componentes esenciales que transforman visitantes en leads y clientes potenciales en tu página de destino.",
    content: `
<p>Hemos diseñado y desarrollado más de 100 landing pages. Las que convierten tienen elementos específicos que guían al visitante hacia la acción deseada. Aquí están los 5 imprescindibles:</p>

<h2>1. Headline que resuena</h2>
<p>Tu headline debe:</p>
<ul>
  <li>Comunicar el beneficio principal en 5 segundos</li>
  <li>Hablar directamente al dolor del cliente</li>
  <li>Ser específico, no genérico</li>
</ul>
<p>Ejemplo débil: "Somos la mejor agencia digital"<br>
Ejemplo fuerte: "Duplicamos tus leads en 90 días o te devolvemos tu dinero"</p>

<h2>2. Social proof estratégico</h2>
<p>Los humanos somos criaturas sociales. Mostrar:</p>
<ul>
  <li>Testimonios específicos con resultados medibles</li>
  <li>Logos de clientes reconocidos</li>
  <li>Números concretos ("+150 empresas")</li>
  <li>Reviews de plataformas externas</li>
</ul>

<h2>3. CTAs claros y múltiples</h2>
<p>No dejes que el visitante piense qué hacer:</p>
<ul>
  <li>Botón principal prominente (contraste de color)</li>
  <li>Texto de acción específico ("Agendar consulta gratuita" > "Click aquí")</li>
  <li>CTAs repetidos a lo largo de la página</li>
  <li>Urgencia legítima cuando aplique</li>
</ul>

<h2>4. Estructura de problem-solution</h2>
<p>La mejor landing page sigue este flujo:</p>
<ol>
  <li>Agitar el problema ("¿Frustrado con...?")</li>
  <li>Presentar la solución única</li>
  <li>Demostrar con proof</li>
  <li>Eliminar objeciones (FAQ, garantías)</li>
  <li>Llamar a la acción</li>
</ol>

<h2>5. Velocidad y mobile-first</h2>
<p>El 53% de visitantes abandona si la página tarda más de 3 segundos. Tu landing debe:</p>
<ul>
  <li>Cargar en menos de 2 segundos</li>
  <li>Funcionar perfectamente en móvil</li>
  <li>Tener formularios simplificados</li>
  <li>Evitar distracciones innecesarias</li>
</ul>

<h2>Bonus: El elemento secreto</h2>
<p>La mejor landing page tiene <strong>claridad</strong>. Cada elemento debe justificar su existencia. Si no contribuye a la conversión, quítalo.</p>

<h2>Conclusión</h2>
<p>Una landing page efectiva no es arte—es ciencia aplicada. Estos 5 elementos son tu checklist para maximizar conversiones.</p>
    `,
    category: "Conversion",
    date: "28, Dic - 2025",
    readTime: "5 min",
    image: "assets/images/news/news-20.jpg",
    author: {
      name: "Manu Portuguez",
      role: "CEO & Sr Developer"
    }
  }
];

export const getArticleBySlug = (slug: string): BlogArticle | undefined => {
  return blogArticles.find(article => article.slug === slug);
};
