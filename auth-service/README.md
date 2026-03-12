# Authentication Service

Servicio de autenticación para The Dev Factory usando Node.js, Express, MongoDB y JWT.

## 🚀 Características

- ✅ Registro de usuarios (signup)
- ✅ Inicio de sesión (login)
- ✅ Autenticación con JWT
- ✅ Validación de datos
- ✅ Encriptación de contraseñas con bcrypt
- ✅ Health check endpoint
- ✅ Dockerizado y listo para Kubernetes

## 📋 Requisitos

- Node.js 18+
- MongoDB 7.0+
- Docker (opcional)

## 🛠️ Instalación Local

```bash
# Instalar dependencias
npm install

# Copiar variables de entorno
cp .env.example .env

# Editar .env con tus valores
nano .env

# Iniciar MongoDB (si no está corriendo)
docker run -d -p 27017:27017 --name mongodb mongo:7.0

# Iniciar el servicio
npm start

# O en modo desarrollo con hot reload
npm run dev
```

## 🔌 API Endpoints

### Health Check
```bash
GET /health
```

### Signup (Registro)
```bash
POST /api/auth/signup
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123"
}
```

**Respuesta exitosa (201):**
```json
{
  "success": true,
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": "507f1f77bcf86cd799439011",
    "email": "john@example.com",
    "name": "John Doe",
    "plan": "free"
  }
}
```

### Login (Inicio de sesión)
```bash
POST /api/auth/login
Content-Type: application/json

{
  "email": "john@example.com",
  "password": "password123"
}
```

**Respuesta exitosa (200):**
```json
{
  "success": true,
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": "507f1f77bcf86cd799439011",
    "email": "john@example.com",
    "name": "John Doe",
    "plan": "free",
    "lastLogin": "2024-02-27T10:00:00.000Z"
  }
}
```

### Verify Token
```bash
GET /api/auth/verify
Authorization: Bearer <token>
```

**Respuesta exitosa (200):**
```json
{
  "success": true,
  "user": {
    "id": "507f1f77bcf86cd799439011",
    "email": "john@example.com",
    "name": "John Doe",
    "plan": "free"
  }
}
```

## 🐳 Docker

### Construir imagen
```bash
docker build -t auth-service .
```

### Ejecutar contenedor
```bash
docker run -d \
  -p 4000:4000 \
  -e MONGODB_URI=mongodb://host.docker.internal:27017/devfactory \
  -e JWT_SECRET=your-secret-key \
  --name auth-service \
  auth-service
```

## ☸️ Kubernetes

Ver [DEPLOYMENT_GUIDE.md](../DEPLOYMENT_GUIDE.md) para instrucciones completas de deployment.

```bash
# Quick start
kubectl apply -f ../k8s/secrets.yaml
kubectl apply -f ../k8s/mongodb-deployment.yaml
kubectl apply -f ../k8s/auth-service-deployment.yaml

# Port forward
kubectl port-forward svc/auth-service 4000:4000
```

## 🔒 Seguridad

- Las contraseñas se hashean con bcrypt (10 rounds)
- Los tokens JWT expiran en 7 días
- Validación de entrada con express-validator
- CORS habilitado para orígenes específicos
- Variables sensibles en variables de entorno

## 🧪 Testing

```bash
# Health check
curl http://localhost:4000/health

# Signup
curl -X POST http://localhost:4000/api/auth/signup \
  -H "Content-Type: application/json" \
  -d '{"name":"Test User","email":"test@example.com","password":"test123"}'

# Login
curl -X POST http://localhost:4000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com","password":"test123"}'

# Verify (reemplaza TOKEN con el token recibido)
curl http://localhost:4000/api/auth/verify \
  -H "Authorization: Bearer TOKEN"
```

## 📊 Modelo de Usuario

```javascript
{
  email: String,        // Único, requerido
  password: String,     // Hasheado, requerido
  name: String,         // Requerido
  plan: String,         // 'free', 'pro', 'enterprise'
  createdAt: Date,      // Auto-generado
  lastLogin: Date       // Actualizado en cada login
}
```

## 🔧 Variables de Entorno

| Variable | Descripción | Default |
|----------|-------------|---------|
| `PORT` | Puerto del servidor | `4000` |
| `MONGODB_URI` | URI de conexión a MongoDB | `mongodb://mongo:27017/devfactory` |
| `JWT_SECRET` | Secret para firmar JWT | `your-secret-key-change-in-production` |
| `NODE_ENV` | Entorno de ejecución | `production` |

## 📝 Estructura del Proyecto

```
auth-service/
├── src/
│   ├── index.js          # Entry point
│   ├── models/
│   │   └── User.js       # Modelo de usuario
│   └── routes/
│       └── auth.js       # Rutas de autenticación
├── Dockerfile            # Configuración Docker
├── package.json          # Dependencias
├── .env.example          # Ejemplo de variables de entorno
└── README.md            # Este archivo
```

## 🐛 Troubleshooting

### Error: Cannot connect to MongoDB
- Verifica que MongoDB esté corriendo
- Revisa la URI de conexión en `.env`
- Si usas Docker, usa `host.docker.internal` en lugar de `localhost`

### Error: JWT secret not configured
- Asegúrate de tener `JWT_SECRET` en tu `.env`
- En producción, usa un secret fuerte y aleatorio

### Error: Port already in use
- Cambia el puerto en `.env`
- O mata el proceso usando el puerto: `lsof -ti:4000 | xargs kill -9`

## 📚 Dependencias Principales

- **express**: Framework web
- **mongoose**: ODM para MongoDB
- **bcryptjs**: Encriptación de contraseñas
- **jsonwebtoken**: Generación y verificación de JWT
- **express-validator**: Validación de datos
- **cors**: Manejo de CORS

## 🤝 Contribuir

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto es parte de The Dev Factory.
