# 🍌 Nano Banana - Integración de Generación de Imágenes AI

Nano Banana es el nombre de las capacidades nativas de generación de imágenes de Google Gemini. Ahora está completamente integrado en el Landing Builder para generar imágenes personalizadas automáticamente.

## ✨ ¿Qué es Nano Banana?

**Nano Banana** es la tecnología de generación de imágenes de Google Gemini que permite crear imágenes fotorealistas desde texto. Es similar a DALL-E o Midjourney pero integrado directamente en Gemini.

### Ventajas

- 🎨 **Imágenes personalizadas**: Generadas específicamente para tu negocio
- ⚡ **Rápido**: 5-15 segundos por imagen
- 💰 **Económico**: ~$0.01-0.05 por imagen
- 🎯 **Contextual**: Entiende el tipo de negocio y estilo
- 📐 **Múltiples formatos**: 16:9, 1:1, 9:16, 4:3, 3:4
- 🌟 **Alta calidad**: Hasta 4K con Nano Banana Pro

## 🔧 Configuración

### Paso 1: Obtener API Key de Google Gemini

1. Ve a: **https://aistudio.google.com/app/apikey**
2. Inicia sesión con tu cuenta de Google
3. Click en **"Create API Key"**
4. Selecciona un proyecto o crea uno nuevo
5. Copia la API key (empieza con `AIza...`)

### Paso 2: Agregar la API Key

```bash
cd python-agent
nano .env
```

Agrega la línea:
```bash
GOOGLE_API_KEY=AIzaSy...tu-key-aqui
```

### Paso 3: Instalar Dependencias

```bash
source venv/bin/activate
pip install -r requirements.txt
```

Esto instalará:
- `google-genai==1.0.0` - SDK de Google Gemini
- `Pillow==10.2.0` - Procesamiento de imágenes

### Paso 4: Reiniciar el Servidor

```bash
python server.py
```

Deberías ver:
```
✅ Nano Banana image generation enabled
 * Running on http://127.0.0.1:5000
```

## 🎨 Cómo Funciona

### Generación Automática

Cuando generas una landing page, el sistema:

1. **Extrae información del prompt**:
   - Nombre del negocio
   - Tipo de industria
   - Estilo visual
   - Colores preferidos

2. **Genera múltiples imágenes**:
   - **Hero image** (16:9): Banner principal
   - **3 Feature icons** (1:1): Íconos de características
   - **2 Testimonial avatars** (1:1): Fotos de clientes

3. **Reemplaza placeholders**:
   - Sustituye URLs de Unsplash
   - Reemplaza via.placeholder.com
   - Inyecta imágenes como base64

### Ejemplo de Uso

**Prompt:**
```
Landing page para un café en San José, Costa Rica.
Estilo moderno y acogedor, colores café y crema.
CTA: Ordena online.
```

**Imágenes generadas:**
- Hero: Interior moderno de café con iluminación cálida
- Feature 1: Ícono de taza de café de calidad
- Feature 2: Ícono de entrega rápida
- Feature 3: Ícono de satisfacción del cliente
- Testimonial 1: Cliente feliz sonriendo
- Testimonial 2: Cliente satisfecho con café

## 📊 Tipos de Imágenes Generadas

### 1. Hero Image (Banner Principal)
```python
Prompt: "Create a stunning hero banner image for {business_name}, 
         a {business_type}. Style: {style}, {colors} colors. 
         High quality, professional, eye-catching. 
         Photorealistic, 16:9 aspect ratio."
```

**Características:**
- Aspecto: 16:9 (widescreen)
- Estilo: Fotorealista
- Sin texto ni logos
- Alta calidad

### 2. Feature Icons (Íconos de Características)
```python
Prompt: "Icon-style illustration representing {feature} 
         for {business_type}, {style} style, {colors} colors, 
         simple, clean, 1:1 aspect ratio"
```

**Características:**
- Aspecto: 1:1 (cuadrado)
- Estilo: Ilustración minimalista
- 3 íconos diferentes
- Colores coordinados

### 3. Testimonial Avatars (Fotos de Clientes)
```python
Prompt: "Professional headshot photo of a happy customer, 
         diverse, friendly smile, {style} photography, 
         neutral background, 1:1 aspect ratio"
```

**Características:**
- Aspecto: 1:1 (cuadrado)
- Estilo: Fotografía profesional
- Diversidad representada
- Expresiones positivas

## 🎯 Personalización Avanzada

### Deshabilitar Generación de Imágenes

Si prefieres usar placeholders:

```bash
curl -X POST http://localhost:5000/generate \
  -H "Content-Type: application/json" \
  -d '{
    "prompt": "Landing page para...",
    "enable_images": false
  }'
```

### Generar Imagen Individual

Usa el módulo `image_generator.py`:

```python
from image_generator import ImageGenerator

generator = ImageGenerator()

# Generar una imagen
image_url = generator.generate_image(
    prompt="Modern coffee shop interior, warm lighting",
    aspect_ratio="16:9"
)

print(f"Image generated: {image_url[:50]}...")
```

### Generar Imágenes para Negocio Específico

```python
business_info = {
    'business_name': 'Café Luna',
    'business_type': 'coffee shop',
    'style': 'modern and cozy',
    'colors': 'brown, cream, warm tones'
}

images = generator.generate_images_for_landing_page(business_info)

# images contiene:
# - hero: Banner principal
# - feature_1, feature_2, feature_3: Íconos
# - testimonial_1, testimonial_2: Avatares
```

## 💰 Costos

### Nano Banana (gemini-3.1-flash-image-preview)

| Resolución | Costo por Imagen | Landing Page Completa |
|------------|------------------|----------------------|
| 1K (1024px) | ~$0.01 | ~$0.06 (6 imágenes) |
| 2K (2048px) | ~$0.03 | ~$0.18 |
| 4K (4096px) | ~$0.05 | ~$0.30 |

### Comparación con Otros Servicios

| Servicio | Costo por Imagen | Calidad |
|----------|------------------|---------|
| Nano Banana | $0.01-0.05 | Alta |
| DALL-E 3 | $0.04-0.08 | Muy Alta |
| Midjourney | $10/mes (ilimitado) | Excelente |
| Stable Diffusion | Gratis (self-hosted) | Variable |

**Recomendación**: Nano Banana ofrece el mejor balance calidad/precio para landing pages.

## 🔍 Aspectos Técnicos

### Formato de Salida

Las imágenes se generan como **data URLs** en formato base64:

```
data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAA...
```

**Ventajas:**
- ✅ No requiere hosting externo
- ✅ Funciona inmediatamente
- ✅ No hay enlaces rotos

**Desventajas:**
- ❌ Aumenta tamaño del HTML
- ❌ No cacheable por navegador
- ❌ No recomendado para producción

### Para Producción

Convierte las imágenes base64 a archivos:

```python
import base64

# Extraer data URL
data_url = "data:image/png;base64,iVBORw0KG..."
image_data = data_url.split(',')[1]

# Decodificar y guardar
with open('hero.png', 'wb') as f:
    f.write(base64.b64decode(image_data))
```

Luego sube a un CDN (Cloudinary, AWS S3, etc.)

## 🚀 Mejores Prácticas

### 1. Prompts Descriptivos

**✅ Bueno:**
```
Landing page para un spa de lujo en Miami.
Estilo zen y minimalista, colores blanco y verde menta.
Ambiente relajante y profesional.
```

**❌ Malo:**
```
Página para spa
```

### 2. Especifica Estilo Visual

Palabras clave efectivas:
- **Fotografía**: photorealistic, professional photography, high-quality
- **Ilustración**: flat design, minimalist, icon-style
- **Arte**: artistic, creative, abstract
- **Mood**: warm, cold, energetic, calm, luxury, casual

### 3. Colores Consistentes

Menciona colores en el prompt para coherencia visual:
```
"Colores azul marino y dorado para transmitir confianza y lujo"
```

### 4. Contexto del Negocio

Incluye detalles del negocio para imágenes más relevantes:
```
"Restaurante italiano familiar en el centro de la ciudad,
 ambiente acogedor, cocina tradicional"
```

## 🆘 Solución de Problemas

### Error: "GOOGLE_API_KEY not found"

**Solución:**
1. Verifica que `.env` existe en `python-agent/`
2. Confirma que la línea `GOOGLE_API_KEY=...` está presente
3. Reinicia el servidor Python

### Error: "Image generation failed"

**Causas comunes:**
- API key inválida o expirada
- Límite de cuota excedido
- Prompt demasiado largo o inapropiado

**Solución:**
1. Verifica tu API key en Google AI Studio
2. Revisa el uso de cuota
3. Simplifica el prompt

### Imágenes no se muestran

**Problema:** Las imágenes generadas no aparecen en el preview

**Solución:**
1. Verifica que `enable_images=true` en la request
2. Revisa la consola del servidor para errores
3. Confirma que las imágenes se generaron (logs)

### Generación muy lenta

**Problema:** Tarda más de 60 segundos

**Causas:**
- Generando múltiples imágenes en alta resolución
- Conexión lenta a la API de Google
- Servidor sobrecargado

**Solución:**
1. Reduce el número de imágenes
2. Usa resolución más baja (1K en lugar de 4K)
3. Considera deshabilitar imágenes para testing

## 📚 Recursos Adicionales

### Documentación Oficial

- **Google Gemini API**: https://ai.google.dev/gemini-api/docs/image-generation
- **Nano Banana Guide**: https://ai.google.dev/gemini-api/docs/image-generation
- **API Reference**: https://ai.google.dev/api/python/google/generativeai

### Tutoriales

- **Getting Started**: https://ai.google.dev/gemini-api/docs/get-started
- **Image Generation Best Practices**: https://ai.google.dev/gemini-api/docs/prompting-strategies
- **Pricing**: https://ai.google.dev/pricing

### Comunidad

- **Google AI Forum**: https://discuss.ai.google.dev/
- **GitHub Issues**: Reporta bugs en el repo del proyecto
- **Discord**: (próximamente)

## 🎓 Ejemplos de Prompts

### Restaurante
```
Landing page para un restaurante de sushi en Tokyo.
Estilo japonés minimalista, colores negro, rojo y blanco.
Ambiente elegante y auténtico. CTA: Reserva tu mesa.
```

### Gimnasio
```
Landing page para un gimnasio CrossFit en Los Angeles.
Estilo energético y motivacional, colores naranja y negro.
Ambiente intenso y profesional. CTA: Prueba gratis.
```

### Salón de Belleza
```
Landing page para un salón de belleza boutique en París.
Estilo elegante y femenino, colores rosa dorado y blanco.
Ambiente lujoso y sofisticado. CTA: Agenda tu cita.
```

### Agencia Digital
```
Landing page para una agencia de marketing digital en NYC.
Estilo moderno y tech, colores azul eléctrico y púrpura.
Ambiente innovador y profesional. CTA: Solicita propuesta.
```

## 🔮 Próximas Funcionalidades

- [ ] **Edición de imágenes**: Modificar imágenes generadas con prompts
- [ ] **Variaciones**: Generar múltiples opciones para elegir
- [ ] **Upscaling**: Aumentar resolución a 4K
- [ ] **Estilos predefinidos**: Templates de estilos visuales
- [ ] **Batch generation**: Generar múltiples landing pages
- [ ] **CDN integration**: Upload automático a Cloudinary

---

**¿Preguntas?** Contacta: support@codecraftt.com

**Última actualización**: Febrero 2026
