# AI Providers Comparison

El sistema ahora soporta **4 proveedores de IA** diferentes para generar landing pages. Cada uno tiene sus ventajas:

## 🤖 Proveedores Disponibles

### 1. **Grok (xAI)** ⚡ [RECOMENDADO]
- **Modelo**: `grok-beta`
- **Ventajas**:
  - ⚡ Muy rápido (5-10 segundos)
  - 🎨 Extremadamente creativo
  - 💰 Más económico (~$0.01-0.02 por página)
  - 🆕 Modelo más reciente de Elon Musk/xAI
- **Mejor para**: Diseños creativos, startups, landing pages modernas
- **API Key**: https://console.x.ai/
- **Costo**: ~$0.01-0.02 USD por landing page

### 2. **Perplexity** 🔍
- **Modelo**: `llama-3.1-sonar-large-128k-online`
- **Ventajas**:
  - 🌐 Acceso a búsqueda web en tiempo real
  - 📊 Información actualizada
  - 💡 Excelente para contexto específico de industrias
  - 💰 Económico (~$0.01-0.03 por página)
- **Mejor para**: Landing pages que necesitan datos actualizados, tendencias de mercado
- **API Key**: https://www.perplexity.ai/settings/api
- **Costo**: ~$0.01-0.03 USD por landing page

### 3. **OpenAI GPT-4** 🏆
- **Modelo**: `gpt-4-turbo-preview`
- **Ventajas**:
  - 🎯 Mejor calidad general
  - 📝 Excelente copy y contenido
  - 🔧 Muy confiable
  - 📚 Gran conocimiento general
- **Mejor para**: Proyectos profesionales, clientes exigentes
- **API Key**: https://platform.openai.com/api-keys
- **Costo**: ~$0.03-0.06 USD por landing page

### 4. **Anthropic Claude** 🧠
- **Modelo**: `claude-3-5-sonnet-20241022`
- **Ventajas**:
  - 🎓 Excelente para tareas complejas
  - 📖 Muy bueno con instrucciones detalladas
  - 🔒 Enfoque en seguridad
  - 💬 Conversacional y natural
- **Mejor para**: Landing pages con mucho contenido, casos complejos
- **API Key**: https://console.anthropic.com/
- **Costo**: ~$0.02-0.04 USD por landing page

## 🎯 Recomendaciones por Caso de Uso

### Para Startups y Proyectos Creativos
**→ Usa Grok**
- Más rápido
- Más económico
- Diseños modernos y atrevidos

### Para Negocios Locales (Restaurantes, Salones, etc.)
**→ Usa Perplexity**
- Puede buscar información local
- Tendencias actuales de la industria
- Económico para volumen

### Para Clientes Corporativos
**→ Usa OpenAI GPT-4**
- Máxima calidad
- Copy profesional
- Confiabilidad probada

### Para Proyectos Complejos
**→ Usa Claude**
- Mejor con instrucciones largas
- Excelente razonamiento
- Contenido detallado

## 📊 Comparación Rápida

| Proveedor | Velocidad | Costo | Calidad | Creatividad | Búsqueda Web |
|-----------|-----------|-------|---------|-------------|--------------|
| **Grok** | ⚡⚡⚡⚡⚡ | 💰 | ⭐⭐⭐⭐ | 🎨🎨🎨🎨🎨 | ❌ |
| **Perplexity** | ⚡⚡⚡⚡ | 💰💰 | ⭐⭐⭐⭐ | 🎨🎨🎨 | ✅ |
| **OpenAI** | ⚡⚡⚡ | 💰💰💰 | ⭐⭐⭐⭐⭐ | 🎨🎨🎨🎨 | ❌ |
| **Claude** | ⚡⚡⚡ | 💰💰 | ⭐⭐⭐⭐⭐ | 🎨🎨🎨 | ❌ |

## 🔧 Configuración

### Opción 1: Un Solo Proveedor
Agrega solo una API key en `.env`:
```bash
GROK_API_KEY=xai-tu-key-aqui
```

### Opción 2: Múltiples Proveedores (Recomendado)
Agrega varias API keys y el sistema elegirá automáticamente:
```bash
GROK_API_KEY=xai-tu-key-aqui
PERPLEXITY_API_KEY=pplx-tu-key-aqui
OPENAI_API_KEY=sk-proj-tu-key-aqui
```

**Prioridad automática**: Grok > Perplexity > OpenAI > Claude

### Opción 3: Selección Manual
Próximamente: podrás elegir el proveedor desde la UI.

## 💡 Tips

1. **Para desarrollo**: Usa Grok (más rápido y económico)
2. **Para producción**: Usa OpenAI (máxima calidad)
3. **Para volumen**: Usa Perplexity o Grok (más económicos)
4. **Para A/B testing**: Prueba varios y compara resultados

## 🚀 Cómo Obtener API Keys

### Grok (xAI)
1. Ve a https://console.x.ai/
2. Crea cuenta con X/Twitter
3. Ve a API Keys
4. Crea nueva key
5. Copia y pega en `.env`

### Perplexity
1. Ve a https://www.perplexity.ai/settings/api
2. Crea cuenta
3. Genera API key
4. Copia y pega en `.env`

### OpenAI
1. Ve a https://platform.openai.com/api-keys
2. Crea cuenta
3. Agrega método de pago
4. Crea API key
5. Copia y pega en `.env`

### Anthropic
1. Ve a https://console.anthropic.com/
2. Crea cuenta
3. Agrega método de pago
4. Genera API key
5. Copia y pega en `.env`

## 📈 Próximas Funcionalidades

- [ ] Selector de proveedor en la UI
- [ ] Comparación lado a lado de resultados
- [ ] Métricas de calidad por proveedor
- [ ] Cache de resultados
- [ ] Fallback automático si un proveedor falla
