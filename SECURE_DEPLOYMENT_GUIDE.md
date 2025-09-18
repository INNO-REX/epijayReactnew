# 🔒 EPIJAY Website - Secure Deployment Guide

## 🚨 **Security Measures Implemented**

### **1. Rate Limiting**
- ✅ **5 requests per 15 minutes** per IP address
- ✅ **Prevents spam attacks** and brute force attempts
- ✅ **Configurable limits** via environment variables

### **2. Input Validation & Sanitization**
- ✅ **All form fields validated** with express-validator
- ✅ **XSS protection** - malicious scripts blocked
- ✅ **Length limits** - prevents buffer overflow attacks
- ✅ **Character restrictions** - only safe characters allowed

### **3. CORS Protection**
- ✅ **Restricted origins** - only your domain can send emails
- ✅ **Development/Production** environment support
- ✅ **Credentials protection** - secure cookie handling

### **4. Security Headers**
- ✅ **Helmet.js** - comprehensive security headers
- ✅ **Content Security Policy** - prevents code injection
- ✅ **XSS Protection** - browser-level protection

### **5. Environment Security**
- ✅ **Credentials in environment variables** - not in code
- ✅ **Separate dev/prod configurations**
- ✅ **Example file** - `.env.example` for reference

## 🚀 **Secure Deployment Options**

### **Option 1: VPS/Cloud Server (Recommended)**

#### **Server Requirements:**
- **Node.js 18+**
- **PM2** (process manager)
- **Nginx** (reverse proxy)
- **SSL Certificate** (Let's Encrypt)

#### **Deployment Steps:**

1. **Upload your code** to server
2. **Install dependencies**:
   ```bash
   npm install --production
   ```

3. **Set up environment variables**:
   ```bash
   cp .env.example .env
   # Edit .env with your production values
   ```

4. **Build frontend**:
   ```bash
   npm run build
   ```

5. **Set up PM2**:
   ```bash
   npm install -g pm2
   pm2 start server-secure.js --name "epijay-api"
   pm2 startup
   pm2 save
   ```

6. **Configure Nginx**:
   ```nginx
   server {
       listen 80;
       server_name your-domain.com;
       
       # Redirect HTTP to HTTPS
       return 301 https://$server_name$request_uri;
   }
   
   server {
       listen 443 ssl;
       server_name your-domain.com;
       
       # SSL Configuration
       ssl_certificate /path/to/certificate.crt;
       ssl_certificate_key /path/to/private.key;
       
       # Frontend (React)
       location / {
           root /path/to/your/build;
           try_files $uri $uri/ /index.html;
       }
       
       # Backend API
       location /api/ {
           proxy_pass http://localhost:3001;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_set_header X-Real-IP $remote_addr;
           proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
           proxy_set_header X-Forwarded-Proto $scheme;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```

### **Option 2: Heroku (Easy Deployment)**

1. **Create Heroku app**:
   ```bash
   heroku create epijay-website
   ```

2. **Set environment variables**:
   ```bash
   heroku config:set NODE_ENV=production
   heroku config:set FRONTEND_URL=https://epijay-website.herokuapp.com
   heroku config:set SMTP_HOST=email.kpbs.co.zm
   heroku config:set SMTP_PORT=465
   heroku config:set SMTP_USERNAME=sales@epijay.com
   heroku config:set SMTP_PASSWORD=@2025JayZ33
   heroku config:set FROM_EMAIL=sales@epijay.com
   ```

3. **Deploy**:
   ```bash
   git push heroku main
   ```

### **Option 3: Netlify + Serverless Functions**

1. **Deploy frontend to Netlify**
2. **Create serverless function** for email API
3. **Set environment variables** in Netlify dashboard

## 🔐 **Additional Security Measures**

### **1. Firewall Configuration**
```bash
# Allow only necessary ports
ufw allow 22    # SSH
ufw allow 80    # HTTP
ufw allow 443   # HTTPS
ufw enable
```

### **2. SSL Certificate**
```bash
# Using Let's Encrypt
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d your-domain.com
```

### **3. Database Security** (if needed)
- Use **environment variables** for database credentials
- Enable **SSL connections**
- Implement **connection pooling**

### **4. Monitoring & Logging**
```bash
# Install monitoring tools
npm install -g pm2-logrotate
pm2 install pm2-logrotate
```

## 🛡️ **Security Checklist**

### **Before Deployment:**
- [ ] **Environment variables** set correctly
- [ ] **SMTP credentials** secured
- [ ] **Rate limiting** configured
- [ ] **CORS origins** restricted
- [ ] **SSL certificate** installed
- [ ] **Firewall** configured
- [ ] **Process manager** (PM2) set up
- [ ] **Logging** enabled

### **After Deployment:**
- [ ] **Test contact form** functionality
- [ ] **Verify email delivery** to sales@epijay.com
- [ ] **Check rate limiting** works
- [ ] **Monitor server logs**
- [ ] **Test SSL certificate**
- [ ] **Verify security headers**

## 🚨 **Security Monitoring**

### **Log Monitoring:**
```bash
# Monitor PM2 logs
pm2 logs epijay-api

# Monitor Nginx logs
tail -f /var/log/nginx/access.log
tail -f /var/log/nginx/error.log
```

### **Security Alerts:**
- **Rate limit exceeded** - potential attack
- **Suspicious content** - XSS attempt
- **CORS violations** - unauthorized access
- **SMTP failures** - email server issues

## 🔧 **Troubleshooting Security Issues**

### **Common Issues:**

1. **Rate limiting too strict**:
   - Adjust `RATE_LIMIT_MAX_REQUESTS` in `.env`

2. **CORS errors**:
   - Add your domain to `FRONTEND_URL` in `.env`

3. **SMTP authentication failed**:
   - Verify credentials in `.env`
   - Check firewall allows port 465

4. **SSL certificate issues**:
   - Renew certificate: `sudo certbot renew`

## 📊 **Performance & Security**

### **Optimizations:**
- **CDN** for static assets
- **Gzip compression** enabled
- **Caching headers** set
- **Database connection pooling**

### **Security Updates:**
- **Regular dependency updates**
- **Security patches** applied
- **Log monitoring** active
- **Backup strategy** implemented

## 🎯 **Production Checklist**

- [ ] **Domain configured** and SSL enabled
- [ ] **Environment variables** set securely
- [ ] **Rate limiting** active and tested
- [ ] **Email functionality** working
- [ ] **Security headers** present
- [ ] **Monitoring** set up
- [ ] **Backup strategy** implemented
- [ ] **Documentation** updated

Your website is now **production-ready** with enterprise-level security! 🚀🔒
