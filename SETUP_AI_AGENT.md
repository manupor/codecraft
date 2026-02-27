# 🤖 Setup AI Landing Page Generator

Este sistema funciona exactamente como **Vercel V0**, usando IA (OpenAI GPT-4 o Anthropic Claude) para generar landing pages profesionales basadas en prompts en lenguaje natural.

## 🎯 Características

- ✅ Generación con IA real (OpenAI o Anthropic)
- ✅ Sigue instrucciones exactas del prompt (colores, negocio, ubicación, CTA)
- ✅ Genera código HTML + React/Next.js
- ✅ Diseños responsive y conversion-optimized
- ✅ Fallback a templates mejorados si la IA no está disponible

## 📋 Requisitos Previos

1. **Python 3.8+** instalado
2. **API Key** de OpenAI o Anthropic:
   - OpenAI: https://platform.openai.com/api-keys
   - Anthropic: https://console.anthropic.com/

## 🚀 Instalación Rápida

### Paso 1: Configurar el Agente Python

```bash
cd python-agent

# Crear archivo .env
cp .env.example .env
```

### Paso 2: Agregar tu API Key

Edita `python-agent/.env` y agrega UNA de estas opciones:

```bash
# Opción 1: OpenAI (recomendado)
OPENAI_API_KEY=sk-proj-...

# Opción 2: Anthropic Claude
ANTHROPIC_API_KEY=sk-ant-...
```

### Paso 3: Iniciar el Agente

```bash
# Dar permisos al script
chmod +x start.sh

# Iniciar el agente
./start.sh
```

El agente estará corriendo en `http://localhost:5000`

### Paso 4: Iniciar Next.js (en otra terminal)

```bash
# Volver a la raíz del proyecto
cd ..

# Iniciar Next.js
npm run dev
```

## ✅ Verificar que Funciona

1. Abre `http://localhost:3000/landing-builder`
2. Haz clic en "Pay with PayPal →" (simulado)
3. Escribe un prompt como:
   ```
   Landing page for a hair salon in Heredia, Costa Rica. 
   Elegant style, dark rose colors, CTA: Book appointment online.
   ```
4. Presiona Enter

**Si todo está bien:**
- Verás "Attempting Python AI Agent call..." en la consola de Next.js
- Verás "Python AI Agent success!" 
- La landing page se generará con IA real siguiendo tu prompt exacto

**Si el agente Python no está disponible:**
- Automáticamente usará el template mejorado como fallback
- Aún así generará una página profesional

## 🔧 Comandos Útiles

### Verificar salud del agente:
```bash
curl http://localhost:5000/health
```

### Probar generación directamente:
```bash
cd python-agent
python landing_generator.py
```

### Ver logs del agente:
El servidor Flask mostrará logs en tiempo real de cada generación.

## 🌐 Deployment en Producción

### Opción 1: Railway (Recomendado)

1. Crear cuenta en https://railway.app
2. Crear nuevo proyecto desde GitHub
3. Agregar variables de entorno:
   - `OPENAI_API_KEY` o `ANTHROPIC_API_KEY`
4. Railway detectará automáticamente `requirements.txt`
5. Copiar la URL del deployment
6. Actualizar `.env.local` en Next.js:
   ```
   PYTHON_AGENT_URL=https://tu-app.railway.app
   ```

### Opción 2: Render

1. Crear cuenta en https://render.com
2. New → Web Service
3. Conectar repositorio
4. Root Directory: `python-agent`
5. Build Command: `pip install -r requirements.txt`
6. Start Command: `gunicorn -w 4 -b 0.0.0.0:$PORT server:app`
7. Agregar variables de entorno

### Opción 3: Heroku

```bash
cd python-agent
heroku create tu-app-name
heroku config:set OPENAI_API_KEY=sk-...
git push heroku main
```

## 🧪 Testing

### Test básico:
```bash
cd python-agent
python landing_generator.py
```

Esto generará `generated_landing.html` que puedes abrir en el navegador.

### Test con curl:
```bash
curl -X POST http://localhost:5000/generate \
  -H "Content-Type: application/json" \
  -d '{"prompt": "Landing page for a coffee shop in San José, Costa Rica"}'
```

## 💡 Ejemplos de Prompts

### Restaurante:
```
Landing page for El Sabor Tico restaurant in Alajuela, Costa Rica. 
Traditional Costa Rican food. Warm orange and brown colors. 
CTA: Reserve your table now.
```

### Salón de Belleza:
```
Landing page for Bella Vita salon in Heredia. Premium hair and beauty services.
Elegant rose gold and white colors. CTA: Book appointment online.
```

### Gimnasio:
```
Landing page for FitZone gym in San José. Modern fitness center with personal training.
Energetic red and black colors. CTA: Start your free trial.
```

### Abogado:
```
Landing page for legal services in Cartago, Costa Rica. Family law specialist.
Professional navy blue colors. CTA: Free consultation.
```

## 🐛 Troubleshooting

### Error: "No API key found"
- Verifica que `.env` existe en `python-agent/`
- Verifica que agregaste `OPENAI_API_KEY` o `ANTHROPIC_API_KEY`
- Reinicia el servidor Python

### Error: "Connection refused"
- Verifica que el agente Python está corriendo en puerto 5000
- Verifica `PYTHON_AGENT_URL` en `.env.local`

### La generación es lenta
- Normal: OpenAI GPT-4 tarda 10-30 segundos
- Claude es generalmente más rápido (5-15 segundos)

### Costos de API
- OpenAI GPT-4: ~$0.03-0.06 por landing page
- Anthropic Claude: ~$0.02-0.04 por landing page
- Usa el fallback mock para desarrollo sin costos

## 📊 Monitoreo

Ver requests en tiempo real:
```bash
# En la terminal del agente Python verás:
Generating landing page for prompt: Landing page for a hair salon...
✅ Generation successful!
Provider: openai
HTML length: 8543 characters
```

## 🔐 Seguridad

- **NUNCA** commitees archivos `.env` con API keys
- Usa variables de entorno en producción
- Considera rate limiting en producción
- El agente Python NO guarda prompts ni resultados

## 📈 Próximos Pasos

Una vez funcionando:
1. Probar diferentes tipos de negocios
2. Iterar con feedback (feature próxima)
3. Guardar landing pages generadas
4. Integrar PayPal real para pagos
5. Deploy a producción

## 🆘 Soporte

Si tienes problemas:
1. Revisa los logs del agente Python
2. Revisa los logs de Next.js
3. Verifica que ambos servidores están corriendo
4. Prueba el endpoint `/health` del agente
