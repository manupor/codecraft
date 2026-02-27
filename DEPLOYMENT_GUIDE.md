# Deployment Guide - Authentication System with Kubernetes

Este documento explica cómo desplegar el sistema de autenticación usando Docker y Kubernetes.

## 📋 Requisitos Previos

- Docker instalado
- Kubernetes cluster (minikube, GKE, EKS, o AKS)
- kubectl configurado
- Cuenta de Docker Hub (opcional, para registry)

## 🏗️ Arquitectura

```
┌─────────────────┐
│   Next.js App   │ (Frontend)
│  Port: 3000     │
└────────┬────────┘
         │
         ├──────────────────┐
         │                  │
┌────────▼────────┐  ┌──────▼──────────┐
│  Auth Service   │  │  Python Agent   │
│  Port: 4000     │  │  Port: 5000     │
└────────┬────────┘  └─────────────────┘
         │
┌────────▼────────┐
│    MongoDB      │
│  Port: 27017    │
└─────────────────┘
```

## 🚀 Paso 1: Construir la Imagen Docker del Auth Service

```bash
cd auth-service

# Construir la imagen
docker build -t devfactory/auth-service:latest .

# (Opcional) Subir a Docker Hub
docker tag devfactory/auth-service:latest YOUR_DOCKERHUB_USERNAME/auth-service:latest
docker push YOUR_DOCKERHUB_USERNAME/auth-service:latest
```

## 🔐 Paso 2: Crear Secrets de Kubernetes

```bash
cd ../k8s

# Copiar el ejemplo de secrets
cp secrets.yaml.example secrets.yaml

# Editar secrets.yaml con tus valores reales
# IMPORTANTE: Cambia las contraseñas y el JWT secret
nano secrets.yaml

# Aplicar los secrets
kubectl apply -f secrets.yaml

# Verificar
kubectl get secrets
```

**⚠️ IMPORTANTE:** Nunca subas `secrets.yaml` a Git. Está en `.gitignore`.

## 📦 Paso 3: Desplegar MongoDB

```bash
# Aplicar el deployment de MongoDB
kubectl apply -f mongodb-deployment.yaml

# Verificar que MongoDB está corriendo
kubectl get pods -l app=mongodb
kubectl logs -l app=mongodb
```

## 🔧 Paso 4: Desplegar Auth Service

```bash
# Aplicar el deployment del Auth Service
kubectl apply -f auth-service-deployment.yaml

# Verificar que el servicio está corriendo
kubectl get pods -l app=auth-service
kubectl get svc auth-service

# Ver logs
kubectl logs -l app=auth-service
```

## 🌐 Paso 5: Configurar el Frontend

Actualiza el archivo `.env.local` en el proyecto Next.js:

```bash
# .env.local
NEXT_PUBLIC_AUTH_SERVICE_URL=http://localhost:4000

# Para producción, usa la URL real de tu cluster
# NEXT_PUBLIC_AUTH_SERVICE_URL=https://auth.yourdomain.com
```

## 🔄 Paso 6: Exponer los Servicios

### Opción A: Port Forwarding (Desarrollo)

```bash
# Auth Service
kubectl port-forward svc/auth-service 4000:4000

# MongoDB (si necesitas acceso directo)
kubectl port-forward svc/mongo 27017:27017
```

### Opción B: Ingress (Producción)

Crea un archivo `ingress.yaml`:

```yaml
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: devfactory-ingress
  annotations:
    nginx.ingress.kubernetes.io/rewrite-target: /
spec:
  rules:
  - host: auth.yourdomain.com
    http:
      paths:
      - path: /
        pathType: Prefix
        backend:
          service:
            name: auth-service
            port:
              number: 4000
```

Aplica el ingress:

```bash
kubectl apply -f ingress.yaml
```

## 🧪 Paso 7: Probar el Sistema

### Test de Health Check

```bash
curl http://localhost:4000/health
```

Respuesta esperada:
```json
{"status":"healthy","service":"auth-service"}
```

### Test de Signup

```bash
curl -X POST http://localhost:4000/api/auth/signup \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "password": "password123"
  }'
```

### Test de Login

```bash
curl -X POST http://localhost:4000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "test@example.com",
    "password": "password123"
  }'
```

## 📊 Monitoreo

### Ver todos los recursos

```bash
kubectl get all
```

### Ver logs en tiempo real

```bash
# Auth Service
kubectl logs -f -l app=auth-service

# MongoDB
kubectl logs -f -l app=mongodb
```

### Ver métricas de recursos

```bash
kubectl top pods
kubectl top nodes
```

## 🔄 Actualizar el Servicio

```bash
# Reconstruir la imagen
cd auth-service
docker build -t devfactory/auth-service:v2 .
docker push YOUR_DOCKERHUB_USERNAME/auth-service:v2

# Actualizar el deployment
kubectl set image deployment/auth-service auth-service=YOUR_DOCKERHUB_USERNAME/auth-service:v2

# O aplicar cambios en el YAML
kubectl apply -f k8s/auth-service-deployment.yaml

# Ver el rollout
kubectl rollout status deployment/auth-service
```

## 🗑️ Limpiar Recursos

```bash
# Eliminar todos los recursos
kubectl delete -f k8s/auth-service-deployment.yaml
kubectl delete -f k8s/mongodb-deployment.yaml
kubectl delete -f k8s/secrets.yaml

# Verificar
kubectl get all
```

## 🐛 Troubleshooting

### Pod no inicia

```bash
kubectl describe pod <pod-name>
kubectl logs <pod-name>
```

### Problemas de conexión a MongoDB

```bash
# Verificar que MongoDB está corriendo
kubectl get pods -l app=mongodb

# Verificar el servicio
kubectl get svc mongo

# Probar conexión desde el auth-service pod
kubectl exec -it <auth-service-pod-name> -- sh
# Dentro del pod:
nc -zv mongo 27017
```

### Secrets no funcionan

```bash
# Verificar que los secrets existen
kubectl get secrets

# Ver el contenido (base64 encoded)
kubectl get secret auth-secret -o yaml

# Decodificar un valor
kubectl get secret auth-secret -o jsonpath='{.data.jwt-secret}' | base64 -d
```

## 🔒 Seguridad en Producción

1. **Cambiar todos los secrets** en `secrets.yaml`
2. **Usar HTTPS** con certificados SSL/TLS
3. **Habilitar Network Policies** para limitar tráfico
4. **Configurar Resource Limits** apropiados
5. **Habilitar RBAC** (Role-Based Access Control)
6. **Usar un registry privado** para las imágenes Docker
7. **Implementar rate limiting** en el Ingress
8. **Configurar backups** de MongoDB
9. **Monitoreo y alertas** con Prometheus/Grafana

## 📚 Recursos Adicionales

- [Kubernetes Documentation](https://kubernetes.io/docs/)
- [Docker Documentation](https://docs.docker.com/)
- [MongoDB on Kubernetes](https://www.mongodb.com/kubernetes)
- [JWT Best Practices](https://jwt.io/introduction)

## 🆘 Soporte

Para problemas o preguntas, revisa los logs y la documentación oficial de Kubernetes.
