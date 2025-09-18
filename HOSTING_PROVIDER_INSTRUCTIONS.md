# 🏢 EPIJAY Website - Hosting Provider Instructions

## 📋 **Project Summary**

**Client**: EPIJAY Limited  
**Project**: Corporate Website  
**Website**: Company information and contact details

## 🎯 **What You're Deploying**

This is a **React-based corporate website** for EPIJAY Limited, a Zambian procurement and supply chain company. The website includes:

- **Homepage**: Company overview with service highlights
- **About Page**: Company story, vision, mission, and values
- **Services Page**: Detailed service offerings
- **Contact Page**: Contact information and office locations

## 🔧 **Technical Specifications**

### **Architecture**
- **Frontend**: React 19.1.1 with Vite build system
- **Backend**: Node.js Express API server (minimal)
- **Styling**: Tailwind CSS with custom animations
- **Security**: CORS protection

### **Server Requirements**
- **Node.js**: Version 18+ (recommended: 20.x)
- **Memory**: Minimum 512MB RAM
- **Storage**: Minimum 1GB disk space
- **Ports**: 3001 (API), 80 (HTTP), 443 (HTTPS)

### **Dependencies**
```json
{
  "dependencies": {
    "express": "^5.1.0",
    "cors": "^2.8.5",
    "helmet": "^7.1.0",
    "dotenv": "^17.2.2"
  }
}
```

## 🚀 **Deployment Process**

### **Step 1: Server Preparation**
```bash
# Install Node.js 20.x
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs

# Install PM2 globally
sudo npm install -g pm2

# Install Nginx
sudo apt update && sudo apt install nginx
```

### **Step 2: Project Setup**
```bash
# Navigate to project directory
cd /var/www/epijay

# Install dependencies
npm install --production

# Build frontend
npm run build
```

### **Step 3: Environment Configuration**
Create `.env` file with these values:
```env
NODE_ENV=production
PORT=3001
FRONTEND_URL=https://your-domain.com
```

### **Step 4: Start Services**
```bash
# Start API server with PM2
pm2 start server-secure.js --name "epijay-api"

# Configure PM2 to start on boot
pm2 startup
pm2 save
```

### **Step 5: Nginx Configuration**
Create `/etc/nginx/sites-available/epijay`:
```nginx
server {
    listen 80;
    server_name your-domain.com www.your-domain.com;
    return 301 https://$server_name$request_uri;
}

server {
    listen 443 ssl http2;
    server_name your-domain.com www.your-domain.com;
    
    ssl_certificate /path/to/certificate.crt;
    ssl_certificate_key /path/to/private.key;
    
    # Frontend
    location / {
        root /var/www/epijay/dist;
        try_files $uri $uri/ /index.html;
    }
    
    # API
    location /api/ {
        proxy_pass http://localhost:3001;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

## 🔒 **Security Features**

### **Implemented Security Measures**
- ✅ **CORS Protection**: Only your domain can access API
- ✅ **Security Headers**: Comprehensive protection
- ✅ **Environment Variables**: Configuration secured

### **Firewall Configuration**
```bash
sudo ufw allow 22    # SSH
sudo ufw allow 80    # HTTP
sudo ufw allow 443   # HTTPS
sudo ufw enable
```

## 🧪 **Testing Procedures**

### **API Testing**
```bash
# Health check
curl https://your-domain.com/api/health
```

### **Website Testing**
1. Visit `https://your-domain.com`
2. Test all navigation links
3. Verify contact information is displayed
4. Test responsive design on mobile

## 📊 **Monitoring & Maintenance**

### **PM2 Commands**
```bash
pm2 status              # Check server status
pm2 logs epijay-api     # View logs
pm2 restart epijay-api  # Restart if needed
pm2 monit              # Monitor resources
```

### **Nginx Commands**
```bash
sudo systemctl status nginx    # Check status
sudo nginx -t                  # Test configuration
sudo systemctl reload nginx    # Reload config
```

### **Log Locations**
- **PM2 Logs**: `~/.pm2/logs/`
- **Nginx Access**: `/var/log/nginx/access.log`
- **Nginx Error**: `/var/log/nginx/error.log`

## 🚨 **Troubleshooting**

### **Common Issues**

1. **API Server Not Starting**
   - Check Node.js version: `node --version`
   - Check PM2 status: `pm2 status`
   - Check logs: `pm2 logs epijay-api`

2. **Website Not Loading**
   - Check Nginx status: `sudo systemctl status nginx`
   - Test configuration: `sudo nginx -t`
   - Check SSL certificate

## 📋 **Deployment Checklist**

### **Pre-Deployment**
- [ ] Node.js 18+ installed
- [ ] PM2 installed globally
- [ ] Nginx installed and configured
- [ ] SSL certificate obtained
- [ ] Firewall configured

### **Deployment**
- [ ] Project files uploaded
- [ ] Dependencies installed
- [ ] Frontend built
- [ ] Environment variables set
- [ ] PM2 configured
- [ ] Nginx configured
- [ ] SSL certificate installed

### **Post-Deployment**
- [ ] Website loads correctly
- [ ] All pages display correctly
- [ ] Contact information is visible
- [ ] SSL certificate working
- [ ] Monitoring set up

## 📞 **Support Information**

### **Client Details**
- **Company**: EPIJAY Limited
- **Contact**: sales@epijay.com
- **Location**: Zambia
- **Industry**: Procurement & Supply Chain

### **Important Files**
- **API Server**: `server-secure.js`
- **Environment**: `.env`
- **Nginx Config**: `/etc/nginx/sites-available/epijay`
- **PM2 Config**: `~/.pm2/ecosystem.config.js`

## 🎯 **Success Criteria**

The deployment is successful when:
- ✅ Website loads at `https://your-domain.com`
- ✅ All pages display correctly
- ✅ Contact information is displayed
- ✅ SSL certificate is valid
- ✅ No console errors
- ✅ Mobile responsive design works

---

## 🎉 **Ready for Deployment!**

This package contains everything needed to deploy the EPIJAY website securely and professionally. Follow the instructions step-by-step, and you'll have a fully functional corporate website.

**Good luck with the deployment!** 🚀