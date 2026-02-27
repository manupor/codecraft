# Configuración de Google OAuth

Esta guía te ayudará a configurar Google OAuth para permitir que los usuarios inicien sesión con su cuenta de Google.

## 📋 Paso 1: Crear un Proyecto en Google Cloud Console

1. Ve a [Google Cloud Console](https://console.cloud.google.com/)
2. Click en el selector de proyectos (arriba a la izquierda)
3. Click en "NEW PROJECT"
4. Nombre del proyecto: `CodeCraftt Auth` (o el que prefieras)
5. Click en "CREATE"

## 🔑 Paso 2: Habilitar Google+ API

1. En el menú lateral, ve a **APIs & Services** → **Library**
2. Busca "Google+ API"
3. Click en "Google+ API"
4. Click en "ENABLE"

## 🎫 Paso 3: Crear Credenciales OAuth

1. Ve a **APIs & Services** → **Credentials**
2. Click en "CREATE CREDENTIALS" → "OAuth client ID"
3. Si es tu primera vez, necesitarás configurar la pantalla de consentimiento:
   - Click en "CONFIGURE CONSENT SCREEN"
   - Selecciona "External" (para desarrollo)
   - Click "CREATE"

### Configurar Pantalla de Consentimiento

**OAuth consent screen:**
- App name: `CodeCraftt`
- User support email: `tu-email@gmail.com`
- Developer contact: `tu-email@gmail.com`
- Click "SAVE AND CONTINUE"

**Scopes:**
- Click "ADD OR REMOVE SCOPES"
- Selecciona:
  - `.../auth/userinfo.email`
  - `.../auth/userinfo.profile`
- Click "UPDATE"
- Click "SAVE AND CONTINUE"

**Test users (opcional para desarrollo):**
- Agrega tu email de prueba
- Click "SAVE AND CONTINUE"

### Crear OAuth Client ID

1. Vuelve a **Credentials** → "CREATE CREDENTIALS" → "OAuth client ID"
2. Application type: **Web application**
3. Name: `CodeCraftt Web Client`
4. **Authorized JavaScript origins:**
   ```
   http://localhost:3000
   https://yourdomain.com (para producción)
   ```
5. **Authorized redirect URIs:**
   ```
   http://localhost:3000/api/auth/callback/google
   https://yourdomain.com/api/auth/callback/google (para producción)
   ```
6. Click "CREATE"

## 📝 Paso 4: Copiar las Credenciales

Después de crear el cliente OAuth, verás un modal con:
- **Client ID**: `123456789-abcdefg.apps.googleusercontent.com`
- **Client Secret**: `GOCSPX-abcdefghijklmnop`

**Copia estos valores** - los necesitarás en el siguiente paso.

## ⚙️ Paso 5: Configurar Variables de Entorno

Abre el archivo `.env.local` en tu proyecto y actualiza:

```bash
# Google OAuth Configuration
GOOGLE_CLIENT_ID=TU_CLIENT_ID_AQUI
GOOGLE_CLIENT_SECRET=TU_CLIENT_SECRET_AQUI
```

**Ejemplo:**
```bash
GOOGLE_CLIENT_ID=123456789-abcdefghijklmnop.apps.googleusercontent.com
GOOGLE_CLIENT_SECRET=GOCSPX-abcdefghijklmnopqrstuvwxyz
```

## 🔐 Paso 6: Generar NEXTAUTH_SECRET

Genera un secret aleatorio para NextAuth:

```bash
# En tu terminal:
openssl rand -base64 32
```

Copia el resultado y actualiza en `.env.local`:

```bash
NEXTAUTH_SECRET=el-secret-generado-aqui
```

## 🚀 Paso 7: Reiniciar el Servidor

```bash
# Detener Next.js (Ctrl+C)
# Reiniciar
npm run dev
```

## 🧪 Paso 8: Probar Google OAuth

1. Ve a `http://localhost:3000/login`
2. Click en "Sign in with Google"
3. Selecciona tu cuenta de Google
4. Acepta los permisos
5. Serás redirigido a `/landing-builder`

## ✅ Verificar que Funciona

### En el navegador:
1. Abre las DevTools (F12)
2. Ve a la pestaña "Application" → "Cookies"
3. Deberías ver cookies de NextAuth

### En MongoDB:
```bash
# Conectar a MongoDB
docker exec -it mongodb-devfactory mongosh

# Ver usuarios
use devfactory
db.users.find().pretty()

# Deberías ver tu usuario con authProvider: 'google'
```

## 🔒 Seguridad en Producción

Cuando despliegues a producción:

1. **Actualizar Authorized Origins:**
   ```
   https://tudominio.com
   ```

2. **Actualizar Redirect URIs:**
   ```
   https://tudominio.com/api/auth/callback/google
   ```

3. **Cambiar NEXTAUTH_SECRET:**
   - Genera uno nuevo con `openssl rand -base64 32`
   - Nunca uses el mismo secret en dev y prod

4. **Cambiar Consent Screen a "Internal"** (si es para tu organización)

## 🐛 Troubleshooting

### Error: "redirect_uri_mismatch"
- Verifica que la URI en Google Console coincida exactamente con la de tu app
- Debe incluir el protocolo (`http://` o `https://`)
- No debe tener trailing slash

### Error: "Access blocked: This app's request is invalid"
- Completa la pantalla de consentimiento OAuth
- Agrega tu email como test user

### Error: "NEXTAUTH_SECRET is not defined"
- Asegúrate de tener `NEXTAUTH_SECRET` en `.env.local`
- Reinicia el servidor después de agregar variables

### El botón de Google no hace nada
- Verifica que `next-auth` esté instalado: `npm list next-auth`
- Revisa la consola del navegador para errores
- Verifica que el auth-service esté corriendo en puerto 4000

## 📚 Recursos

- [Google OAuth Documentation](https://developers.google.com/identity/protocols/oauth2)
- [NextAuth.js Documentation](https://next-auth.js.org/)
- [Google Cloud Console](https://console.cloud.google.com/)

## 🆘 Soporte

Si tienes problemas:
1. Revisa los logs del servidor Next.js
2. Revisa los logs del auth-service
3. Verifica que MongoDB esté corriendo
4. Asegúrate de que todas las URLs coincidan exactamente
