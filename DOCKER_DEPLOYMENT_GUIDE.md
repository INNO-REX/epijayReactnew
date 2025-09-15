# Docker Deployment Guide for EPIJAY Website

## 🐳 Docker Setup Complete!

Your EPIJAY website is now fully containerized and ready for deployment anywhere!

## 📁 Files Created

### **Docker Configuration Files:**
- ✅ `Dockerfile` - React frontend with Nginx
- ✅ `Dockerfile.backend` - Node.js backend server
- ✅ `docker-compose.yml` - Full stack orchestration
- ✅ `.dockerignore` - Excludes unnecessary files
- ✅ `nginx.conf` - Production-ready Nginx configuration

## 🚀 Quick Start Commands

### **1. Build and Run Everything:**
```bash
# Build and start all services
docker-compose up --build

# Run in background
docker-compose up -d --build
```

### **2. Individual Services:**
```bash
# Frontend only
docker build -t epijay-frontend .
docker run -p 80:80 epijay-frontend

# Backend only
docker build -f Dockerfile.backend -t epijay-backend .
docker run -p 3001:3001 --env-file .env epijay-backend
```

### **3. Management Commands:**
```bash
# View logs
docker-compose logs -f

# Stop services
docker-compose down

# Rebuild after changes
docker-compose up --build --force-recreate
```

## 🏗️ Architecture Overview

### **Frontend Container:**
- ✅ **Base**: Node.js 18 Alpine (lightweight)
- ✅ **Build**: React app with Vite
- ✅ **Runtime**: Nginx Alpine (production-ready)
- ✅ **Port**: 80 (HTTP)
- ✅ **Features**: Gzip compression, security headers, static caching

### **Backend Container:**
- ✅ **Base**: Node.js 18 Alpine
- ✅ **Runtime**: Node.js with secure server
- ✅ **Port**: 3001 (API)
- ✅ **Security**: Non-root user, health checks
- ✅ **Features**: SMTP email, rate limiting, validation

### **Network:**
- ✅ **Internal**: Services communicate via Docker network
- ✅ **Proxy**: Nginx forwards `/api/*` to backend
- ✅ **Isolation**: Secure container isolation

## 🔧 Environment Setup

### **Required Environment Variables:**
```bash
# Copy your existing .env file
cp .env .env.production

# Ensure these are set:
SMTP_HOST=your-smtp-host
SMTP_PORT=465
SMTP_USER=your-email
SMTP_PASS=your-password
NODE_ENV=production
```

## 🌐 Production Deployment

### **Option 1: Docker Compose (Recommended)**
```bash
# On your server
git clone <your-repo>
cd epijayReact
cp .env.example .env
# Edit .env with your SMTP credentials
docker-compose up -d --build
```

### **Option 2: Individual Containers**
```bash
# Build images
docker build -t epijay-frontend .
docker build -f Dockerfile.backend -t epijay-backend .

# Run with external network
docker network create epijay-network
docker run -d --name epijay-backend --network epijay-network --env-file .env epijay-backend
docker run -d --name epijay-frontend --network epijay-network -p 80:80 epijay-frontend
```

## 🔒 Security Features

### **Container Security:**
- ✅ **Non-root user** in backend container
- ✅ **Minimal base images** (Alpine Linux)
- ✅ **Health checks** for monitoring
- ✅ **Resource limits** (configurable)

### **Network Security:**
- ✅ **Internal networking** between containers
- ✅ **Security headers** in Nginx
- ✅ **Rate limiting** in backend
- ✅ **Input validation** and sanitization

## 📊 Monitoring & Logs

### **View Logs:**
```bash
# All services
docker-compose logs -f

# Specific service
docker-compose logs -f frontend
docker-compose logs -f backend

# Container logs
docker logs epijay-frontend
docker logs epijay-backend
```

### **Health Checks:**
```bash
# Check if services are running
docker-compose ps

# Test frontend
curl http://localhost

# Test backend API
curl http://localhost/api/health
```

## 🚀 Deployment Options

### **1. VPS/Cloud Server:**
- Upload Docker files
- Run `docker-compose up -d`
- Configure domain/DNS

### **2. Docker Hosting:**
- **DigitalOcean App Platform**
- **AWS ECS/Fargate**
- **Google Cloud Run**
- **Azure Container Instances**

### **3. Traditional Hosting:**
- Build images locally
- Export as tar files
- Import on server

## 🔄 Updates & Maintenance

### **Update Application:**
```bash
# Pull latest changes
git pull

# Rebuild and restart
docker-compose up -d --build
```

### **Update Dependencies:**
```bash
# Update package.json
npm update

# Rebuild containers
docker-compose up -d --build
```

## 📈 Scaling Options

### **Horizontal Scaling:**
```yaml
# In docker-compose.yml
services:
  backend:
    deploy:
      replicas: 3
  frontend:
    deploy:
      replicas: 2
```

### **Load Balancing:**
- Use Docker Swarm
- Add load balancer (HAProxy, Traefik)
- Configure multiple backend replicas

## 🛠️ Troubleshooting

### **Common Issues:**

**1. Port Already in Use:**
```bash
# Check what's using port 80
sudo netstat -tulpn | grep :80
# Kill process or change port in docker-compose.yml
```

**2. Environment Variables Not Loading:**
```bash
# Check .env file exists
ls -la .env
# Verify format (no spaces around =)
cat .env
```

**3. Build Failures:**
```bash
# Clean Docker cache
docker system prune -a
# Rebuild from scratch
docker-compose build --no-cache
```

**4. SMTP Connection Issues:**
```bash
# Test from container
docker exec -it epijay-backend sh
# Check network connectivity
ping smtp.your-provider.com
```

## 📋 Production Checklist

### **Before Going Live:**
- ✅ **Environment variables** configured
- ✅ **SMTP credentials** tested
- ✅ **Domain/DNS** configured
- ✅ **SSL certificate** installed (if needed)
- ✅ **Backup strategy** in place
- ✅ **Monitoring** set up
- ✅ **Log rotation** configured

### **Security Checklist:**
- ✅ **Firewall** configured
- ✅ **Regular updates** scheduled
- ✅ **Backup encryption** enabled
- ✅ **Access logs** monitored
- ✅ **Rate limiting** active

## 🎯 Benefits of Docker Deployment

### **Advantages:**
- ✅ **Consistent environment** across dev/staging/production
- ✅ **Easy scaling** and load balancing
- ✅ **Simple updates** with zero downtime
- ✅ **Resource isolation** and security
- ✅ **Portable** - runs anywhere Docker runs
- ✅ **Version control** for infrastructure
- ✅ **Rollback capability** for quick recovery

## 📞 Support

Your EPIJAY website is now fully containerized and production-ready! 

**Next Steps:**
1. Test locally: `docker-compose up --build`
2. Configure your `.env` file with SMTP credentials
3. Deploy to your hosting provider
4. Configure domain and DNS

**The Docker setup provides enterprise-grade deployment with minimal configuration!** 🚀
