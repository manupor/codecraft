#!/bin/bash

# Deployment script for The Dev Factory
# Usage: ./deploy.sh [environment]
# Environments: dev, prod

set -e

ENVIRONMENT=${1:-dev}
DOCKER_USERNAME=${DOCKER_USERNAME:-devfactory}

echo "🚀 Deploying to $ENVIRONMENT environment..."

# Colors
GREEN='\033[0;32m'
BLUE='\033[0;34m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Step 1: Build Auth Service Docker Image
echo -e "${BLUE}📦 Building Auth Service Docker image...${NC}"
cd auth-service
docker build -t $DOCKER_USERNAME/auth-service:latest .
docker tag $DOCKER_USERNAME/auth-service:latest $DOCKER_USERNAME/auth-service:$ENVIRONMENT

if [ "$ENVIRONMENT" = "prod" ]; then
    echo -e "${BLUE}📤 Pushing to Docker Hub...${NC}"
    docker push $DOCKER_USERNAME/auth-service:latest
    docker push $DOCKER_USERNAME/auth-service:$ENVIRONMENT
fi

cd ..

# Step 2: Check if secrets exist
echo -e "${BLUE}🔐 Checking Kubernetes secrets...${NC}"
if ! kubectl get secret mongodb-secret &> /dev/null; then
    echo -e "${RED}❌ MongoDB secret not found!${NC}"
    echo "Please create k8s/secrets.yaml from k8s/secrets.yaml.example"
    echo "Then run: kubectl apply -f k8s/secrets.yaml"
    exit 1
fi

if ! kubectl get secret auth-secret &> /dev/null; then
    echo -e "${RED}❌ Auth secret not found!${NC}"
    echo "Please create k8s/secrets.yaml from k8s/secrets.yaml.example"
    echo "Then run: kubectl apply -f k8s/secrets.yaml"
    exit 1
fi

echo -e "${GREEN}✅ Secrets found${NC}"

# Step 3: Deploy MongoDB
echo -e "${BLUE}🗄️  Deploying MongoDB...${NC}"
kubectl apply -f k8s/mongodb-deployment.yaml

# Wait for MongoDB to be ready
echo "Waiting for MongoDB to be ready..."
kubectl wait --for=condition=ready pod -l app=mongodb --timeout=120s

echo -e "${GREEN}✅ MongoDB deployed${NC}"

# Step 4: Deploy Auth Service
echo -e "${BLUE}🔧 Deploying Auth Service...${NC}"
kubectl apply -f k8s/auth-service-deployment.yaml

# Wait for Auth Service to be ready
echo "Waiting for Auth Service to be ready..."
kubectl wait --for=condition=ready pod -l app=auth-service --timeout=120s

echo -e "${GREEN}✅ Auth Service deployed${NC}"

# Step 5: Show status
echo -e "${BLUE}📊 Deployment Status:${NC}"
kubectl get pods
kubectl get services

# Step 6: Setup port forwarding for dev
if [ "$ENVIRONMENT" = "dev" ]; then
    echo -e "${BLUE}🔌 Setting up port forwarding...${NC}"
    echo "Auth Service will be available at http://localhost:4000"
    echo "Run the following command in a separate terminal:"
    echo "  kubectl port-forward svc/auth-service 4000:4000"
fi

echo -e "${GREEN}✅ Deployment complete!${NC}"
echo ""
echo "Next steps:"
echo "1. Test health check: curl http://localhost:4000/health"
echo "2. Update .env.local with: NEXT_PUBLIC_AUTH_SERVICE_URL=http://localhost:4000"
echo "3. Start Next.js: npm run dev"
echo "4. Visit http://localhost:3000/login"
