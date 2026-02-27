# 🎨 Guía de Edición Visual - Landing Builder

El Landing Builder ahora incluye funcionalidades avanzadas de edición visual estilo **Vercel V0**, permitiéndote editar elementos directamente en el preview, subir imágenes, y mantener un historial completo de cambios.

## ✨ Nuevas Funcionalidades

### 1. **Modo de Edición Visual** 👆

Selecciona y edita elementos directamente en el preview de tu landing page.

**Cómo usarlo:**
1. Genera una landing page con tu prompt
2. Click en el botón **"Edit Mode"** en la barra de herramientas
3. El cursor cambiará a una cruz (crosshair)
4. Click en cualquier elemento de la página para seleccionarlo
5. Verás un indicador mostrando el elemento seleccionado

**Características:**
- ✅ Cursor tipo crosshair para selección precisa
- ✅ Indicador visual del elemento seleccionado
- ✅ Información del selector CSS
- ✅ Mensajes guiados en el chat

### 2. **Subida de Imágenes** 📸

Reemplaza imágenes placeholder con tus propias imágenes.

**Cómo usarlo:**
1. Activa el **Edit Mode**
2. Click en una imagen o elemento que quieras cambiar
3. Click en el botón **"Upload Image"** que aparece
4. Selecciona tu imagen desde tu computadora
5. La imagen se aplicará automáticamente

**Formatos soportados:**
- JPG/JPEG
- PNG
- GIF
- WebP
- SVG

**Características:**
- ✅ Conversión automática a base64
- ✅ Aplicación instantánea
- ✅ Funciona en elementos `<img>` y backgrounds
- ✅ Actualización del HTML en tiempo real

### 3. **Historial de Conversación** 📜

Guarda automáticamente todas las generaciones y cambios.

**Cómo usarlo:**
1. Click en el botón **"History"** (icono de reloj)
2. Verás una lista de todas tus generaciones
3. Click en cualquier entrada para cargarla
4. El preview y código se actualizarán

**Características:**
- ✅ Guardado automático en localStorage
- ✅ Persistencia entre sesiones
- ✅ Timestamp de cada generación
- ✅ Preview del prompt usado
- ✅ Contador de entradas en el historial

### 4. **Undo/Redo** ↩️↪️

Navega entre versiones anteriores y posteriores.

**Cómo usarlo:**
- Click en **Undo** (⟲) para volver a la versión anterior
- Click en **Redo** (⟳) para avanzar a la siguiente versión
- Los botones se deshabilitan cuando no hay más historial

**Características:**
- ✅ Navegación rápida entre versiones
- ✅ Indicador visual de posición en historial
- ✅ Atajos de teclado (próximamente)

### 5. **Interfaz Estilo Vercel V0** 🎯

Diseño profesional y moderno inspirado en Vercel V0.

**Elementos de la interfaz:**
- **Toolbar de edición**: Controles de edición visual
- **Panel de historial**: Dropdown con todas las versiones
- **Indicadores visuales**: Feedback claro de acciones
- **Mensajes contextuales**: Guía paso a paso en el chat

## 🎯 Flujo de Trabajo Completo

### Escenario 1: Crear y Personalizar Landing Page

```
1. Escribe tu prompt inicial:
   "Landing page para un café en San José, Costa Rica.
    Estilo moderno, colores café y crema. CTA: Ordena online."

2. Espera la generación (10-30 segundos)

3. Revisa el preview

4. Activa Edit Mode

5. Click en el logo placeholder

6. Sube tu logo real

7. Click en la imagen hero

8. Sube foto de tu café

9. Describe cambios adicionales:
   "Cambia el color del botón CTA a verde oscuro"

10. Genera de nuevo

11. Usa Undo si no te gusta el cambio
```

### Escenario 2: Iterar sobre Diseño

```
1. Genera landing page base

2. Haz cambios con prompts:
   "Agrega una sección de testimonios"

3. Revisa en preview

4. Si no te gusta, usa Undo

5. Prueba otra variación:
   "Agrega galería de fotos en lugar de testimonios"

6. Compara versiones usando History

7. Selecciona la mejor versión
```

### Escenario 3: Personalizar con Imágenes

```
1. Genera landing page

2. Activa Edit Mode

3. Identifica todos los placeholders:
   - Logo
   - Hero image
   - Product images
   - Team photos
   - Testimonial avatars

4. Para cada uno:
   - Click en el elemento
   - Upload Image
   - Selecciona archivo

5. Desactiva Edit Mode

6. Revisa resultado final

7. Click "Open live" para ver en nueva pestaña
```

## 🔧 Características Técnicas

### Almacenamiento Local

El historial se guarda en `localStorage` del navegador:

```javascript
// Estructura del historial
{
  id: "entry-1234567890",
  prompt: "Landing page para...",
  html: "<!DOCTYPE html>...",
  timestamp: 1234567890
}
```

**Límites:**
- localStorage: ~5-10MB (depende del navegador)
- Aproximadamente 50-100 landing pages
- Se puede limpiar manualmente desde DevTools

### Selección de Elementos

El sistema genera selectores CSS únicos:

```javascript
// Prioridad de selectores:
1. #id (si existe)
2. tag.class (si tiene clase)
3. tag (como fallback)
```

### Procesamiento de Imágenes

```javascript
// Conversión a base64
FileReader.readAsDataURL(file)

// Aplicación:
- <img>: Cambia src
- Otros: Agrega background-image
```

## 💡 Tips y Mejores Prácticas

### Para Mejores Resultados

1. **Prompts Específicos**
   ```
   ✅ Bueno: "Landing page para salón de belleza en Heredia, 
              estilo elegante, colores rosa dorado, 
              CTA: Reserva tu cita"
   
   ❌ Malo: "Haz una página bonita"
   ```

2. **Iteraciones Incrementales**
   - Haz un cambio a la vez
   - Revisa cada cambio antes del siguiente
   - Usa Undo si algo no funciona

3. **Organización de Imágenes**
   - Prepara tus imágenes antes
   - Optimiza tamaño (< 1MB cada una)
   - Usa nombres descriptivos

4. **Uso del Historial**
   - Revisa versiones anteriores
   - Compara diferentes enfoques
   - Guarda las mejores versiones

### Limitaciones Conocidas

1. **Imágenes Base64**
   - Aumentan el tamaño del HTML
   - No recomendado para producción
   - Mejor para prototipos

2. **Edición de Texto**
   - Actualmente solo por prompts
   - Edición directa próximamente

3. **Estilos CSS**
   - Cambios inline solamente
   - No modifica CSS global

## 🚀 Próximas Funcionalidades

### En Desarrollo

- [ ] **Edición de texto inline**: Click para editar texto directamente
- [ ] **Color picker**: Cambiar colores visualmente
- [ ] **Drag & drop**: Reordenar secciones
- [ ] **Componentes reutilizables**: Biblioteca de secciones
- [ ] **Export mejorado**: Descargar con imágenes optimizadas
- [ ] **Colaboración**: Compartir y editar con equipo
- [ ] **Templates**: Plantillas pre-diseñadas
- [ ] **Responsive preview**: Vista mobile/tablet/desktop

### Sugerencias de Usuarios

¿Tienes ideas para mejorar el editor visual? 
Compártelas en: feedback@codecraftt.com

## 🆘 Solución de Problemas

### El Edit Mode no funciona

**Problema**: Click en elementos no los selecciona

**Solución**:
1. Verifica que Edit Mode esté activado (botón verde)
2. Asegúrate de hacer click dentro del iframe
3. Refresca la página (Cmd/Ctrl + R)

### Las imágenes no se cargan

**Problema**: Upload Image no funciona

**Solución**:
1. Verifica el tamaño del archivo (< 5MB)
2. Usa formatos soportados (JPG, PNG, GIF, WebP)
3. Revisa la consola del navegador (F12)

### El historial está vacío

**Problema**: No se guardan las generaciones

**Solución**:
1. Verifica que localStorage esté habilitado
2. No uses modo incógnito
3. Limpia caché si está lleno

### Undo/Redo deshabilitados

**Problema**: Botones en gris

**Solución**:
- Undo: Solo funciona si hay versiones anteriores
- Redo: Solo funciona si has usado Undo antes
- Genera al menos 2 versiones para probar

## 📊 Comparación con Vercel V0

| Funcionalidad | CodeCraftt Builder | Vercel V0 |
|---------------|-------------------|-----------|
| Edición Visual | ✅ | ✅ |
| Subida de Imágenes | ✅ | ❌ |
| Historial Local | ✅ | ✅ (cloud) |
| Undo/Redo | ✅ | ✅ |
| HTML/CSS/JS Puro | ✅ | ❌ (React) |
| Multi-provider AI | ✅ | ❌ |
| Precio | $50 one-time | $20/mes |
| Hosting Incluido | ✅ | ✅ |

## 🎓 Recursos Adicionales

- **Video Tutorial**: (próximamente)
- **Ejemplos**: Ver `examples/` folder
- **API Docs**: `SETUP_AI_AGENT.md`
- **Deployment**: `README.md`

---

**¿Preguntas?** Contacta: support@codecraftt.com

**Última actualización**: Febrero 2026
