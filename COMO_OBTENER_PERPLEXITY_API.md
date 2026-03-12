# 🔍 Cómo Obtener API Key de Perplexity

Perplexity es una excelente opción para generar landing pages porque tiene **acceso a búsqueda web en tiempo real** y es más económico que OpenAI.

## 📋 Pasos para Obtener tu API Key

### 1. Crear Cuenta en Perplexity

1. Ve a: **https://www.perplexity.ai/**
2. Click en **"Sign Up"** (esquina superior derecha)
3. Regístrate con:
   - Email
   - Google
   - Apple

### 2. Acceder a la Configuración de API

1. Una vez dentro, ve a: **https://www.perplexity.ai/settings/api**
2. O navega manualmente:
   - Click en tu foto de perfil (esquina superior derecha)
   - Click en **"Settings"**
   - Click en **"API"** en el menú lateral

### 3. Generar API Key

1. En la página de API, verás un botón **"Generate API Key"**
2. Click en el botón
3. Aparecerá tu API key (empieza con `pplx-...`)
4. **¡IMPORTANTE!** Copia la key inmediatamente - solo se muestra una vez

### 4. Agregar Método de Pago (Opcional)

Perplexity ofrece:
- **Free tier**: Algunas requests gratis para probar
- **Pay as you go**: Solo pagas lo que usas

Para producción, necesitarás agregar un método de pago:
1. Ve a **"Billing"** en settings
2. Agrega tarjeta de crédito/débito
3. No hay cargo mínimo - solo pagas por uso

## 💰 Costos de Perplexity

| Modelo | Costo por 1M tokens | Costo por Landing Page |
|--------|---------------------|------------------------|
| Llama 3.1 Sonar Small | $0.20 | ~$0.01 |
| Llama 3.1 Sonar Large | $1.00 | ~$0.02-0.03 |
| Llama 3.1 Sonar Huge | $5.00 | ~$0.05-0.08 |

**Recomendado**: Llama 3.1 Sonar Large (balance perfecto)

## 🔧 Configurar en el Proyecto

Una vez que tengas tu API key:

### Paso 1: Editar `.env`
```bash
cd python-agent
nano .env
```

### Paso 2: Agregar la Key
```bash
# Perplexity (Real-time web search + generation)
PERPLEXITY_API_KEY=pplx-tu-key-aqui
```

### Paso 3: Reiniciar el Servidor Python
```bash
# Detener el servidor actual (Ctrl+C)
# Luego iniciar de nuevo:
source venv/bin/activate
python server.py
```

### Paso 4: Verificar
```bash
curl http://localhost:5000/providers
```

Deberías ver:
```json
{
  "available": ["perplexity", "openai"],
  "current": "perplexity"
}
```

## ✅ Ventajas de Perplexity

1. **Búsqueda Web en Tiempo Real**
   - Puede buscar información actualizada
   - Ideal para negocios locales
   - Tendencias de mercado actuales

2. **Más Económico**
   - ~50-70% más barato que OpenAI
   - Perfecto para volumen alto

3. **Rápido**
   - Respuestas en 5-15 segundos
   - Más rápido que GPT-4

4. **Contexto Actualizado**
   - Información hasta la fecha actual
   - No limitado a datos de entrenamiento

## 🎯 Cuándo Usar Perplexity

**Mejor para:**
- ✅ Negocios locales (restaurantes, salones, gimnasios)
- ✅ Landing pages que necesitan info actualizada
- ✅ Generación en volumen (muchas páginas)
- ✅ Presupuesto limitado

**Menos ideal para:**
- ❌ Proyectos que requieren máxima calidad (usa OpenAI)
- ❌ Contenido muy técnico o especializado

## 🔄 Cambiar entre Proveedores

El sistema automáticamente usa el proveedor con mayor prioridad:

**Prioridad**: Grok > Perplexity > OpenAI > Claude

Si tienes múltiples API keys, el sistema elegirá automáticamente.

Para forzar un proveedor específico (próximamente):
```bash
curl -X POST http://localhost:5000/generate \
  -H "Content-Type: application/json" \
  -d '{"prompt": "...", "provider": "perplexity"}'
```

## 🆘 Problemas Comunes

### "API key inválida"
- Verifica que copiaste la key completa
- Debe empezar con `pplx-`
- No debe tener espacios al inicio/final

### "Rate limit exceeded"
- Estás en el free tier
- Agrega método de pago en settings

### "No se ve el cambio de proveedor"
- Reinicia el servidor Python
- Verifica con `curl http://localhost:5000/providers`

## 📚 Recursos

- **Documentación**: https://docs.perplexity.ai/
- **Pricing**: https://www.perplexity.ai/settings/billing
- **API Reference**: https://docs.perplexity.ai/reference/post_chat_completions
- **Status**: https://status.perplexity.ai/

## 💡 Tips

1. **Empieza con Free Tier**: Prueba primero sin pagar
2. **Compara Resultados**: Genera la misma página con OpenAI y Perplexity
3. **Monitorea Costos**: Revisa usage en settings regularmente
4. **Usa para Desarrollo**: Más barato para testing

## 🚀 Siguiente Paso

Una vez configurado, prueba generando una landing page:

```
Landing page para un restaurante de comida italiana en San José, Costa Rica.
Estilo elegante, colores rojo y blanco. CTA: Reserva tu mesa.
```

Perplexity buscará información sobre restaurantes italianos y generará una página más contextualizada.
