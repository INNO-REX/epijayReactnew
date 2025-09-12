# 🚀 EPIJAY Website - Hosting Provider Deployment Package

## 📋 **Project Overview**

This is a complete React website for **EPIJAY Limited** with integrated contact form that sends emails to `sales@epijay.com` using your SMTP server.

## 🏗️ **Project Structure**

```
epijayReact/
├── src/                          # React frontend source code
│   ├── components/               # Reusable UI components
│   ├── pages/                   # Page components
│   ├── layouts/                 # Layout components
│   ├── services/                # Email service integration
│   ├── utils/                   # Utility functions
│   └── assets/                  # Images and static files
├── public/                      # Static public files
├── server-secure.js            # Secure backend API server
├── package.json                 # Dependencies and scripts
├── tailwind.config.js          # Tailwind CSS configuration
├── postcss.config.js           # PostCSS configuration
├── vite.config.js              # Vite build configuration
├── .env.example                # Environment variables template
├── .gitignore                  # Git ignore rules
└── README.md                   # This file
```

## 🔧 **Technical Requirements**

### **Server Requirements:**
- **Node.js**: Version 18+ (recommended: 20.x)
- **NPM**: Version 8+ (comes with Node.js)
- **PM2**: Process manager (will be installed)
- **Nginx**: Web server (for production)
- **SSL Certificate**: For HTTPS

### **Ports Needed:**
- **Port 3001**: Backend API server
- **Port 80**: HTTP (redirects to HTTPS)
- **Port 443**: HTTPS (main website)
- **Port 465**: SMTP (outbound email)

## 📦 **Dependencies**

### **Frontend Dependencies:**
- React 19.1.1
- React Router DOM 6.30.1
- Tailwind CSS 3.4.17
- Alpine.js 3.15.0
- Vite 4.5.0

### **Backend Dependencies:**
- Express 5.1.0
- Nodemailer 7.0.6
- CORS 2.8.5
- Helmet (security)
- Express Rate Limit
- Express Validator

## 🚀 **Deployment Instructions**

### **Step 1: Server Setup**

1. **Install Node.js 18+**:
   ```bash
   # Ubuntu/Debian
   curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
   sudo apt-get install -y nodejs
   
   # CentOS/RHEL
   curl -fsSL https://rpm.nodesource.com/setup_20.x | sudo bash -
   sudo yum install -y nodejs
   ```

2. **Install PM2 globally**:
   ```bash
   sudo npm install -g pm2
   ```

3. **Install Nginx**:
   ```bash
   # Ubuntu/Debian
   sudo apt update
   sudo apt install nginx
   
   # CentOS/RHEL
   sudo yum install nginx
   ```

### **Step 2: Upload and Install**

1. **Upload the project files** to your server (e.g., `/var/www/epijay`)

2. **Install dependencies**:
   ```bash
   cd /var/www/epijay
   npm install --production
   ```

3. **Build the frontend**:
   ```bash
   npm run build
   ```

### **Step 3: Environment Configuration**

1. **Create environment file**:
   ```bash
   cp .env.example .env
   ```

2. **Edit the .env file** with your SMTP credentials:
   ```bash
   nano .env
   ```

   **Required values:**
   ```env
   NODE_ENV=production
   PORT=3001
   FRONTEND_URL=https://your-domain.com
   
   SMTP_HOST=email.kpbs.co.zm
   SMTP_PORT=465
   SMTP_USERNAME=sales@epijay.com
   SMTP_PASSWORD=@2025JayZ33
   
   FROM_EMAIL=sales@epijay.com
   REPLY_TO_EMAIL=support@epijay.com
   NOREPLY_EMAIL=noreply@epijay.com
   ```

### **Step 4: PM2 Configuration**

1. **Start the API server**:
   ```bash
   pm2 start server-secure.js --name "epijay-api"
   ```

2. **Configure PM2 to start on boot**:
   ```bash
   pm2 startup
   pm2 save
   ```

3. **Monitor the server**:
   ```bash
   pm2 status
   pm2 logs epijay-api
   ```

### **Step 5: Nginx Configuration**

1. **Create Nginx configuration**:
   ```bash
   sudo nano /etc/nginx/sites-available/epijay
   ```

2. **Add this configuration**:
   ```nginx
   server {
       listen 80;
       server_name your-domain.com www.your-domain.com;
       
       # Redirect HTTP to HTTPS
       return 301 https://$server_name$request_uri;
   }
   
   server {
       listen 443 ssl http2;
       server_name your-domain.com www.your-domain.com;
       
       # SSL Configuration (replace with your certificate paths)
       ssl_certificate /path/to/your/certificate.crt;
       ssl_certificate_key /path/to/your/private.key;
       
       # Security headers
       add_header X-Frame-Options "SAMEORIGIN" always;
       add_header X-XSS-Protection "1; mode=block" always;
       add_header X-Content-Type-Options "nosniff" always;
       add_header Referrer-Policy "no-referrer-when-downgrade" always;
       add_header Content-Security-Policy "default-src 'self' http: https: data: blob: 'unsafe-inline'" always;
       
       # Frontend (React App)
       location / {
           root /var/www/epijay/dist;
           try_files $uri $uri/ /index.html;
           
           # Cache static assets
           location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg)$ {
               expires 1y;
               add_header Cache-Control "public, immutable";
           }
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
           
           # Timeout settings
           proxy_connect_timeout 60s;
           proxy_send_timeout 60s;
           proxy_read_timeout 60s;
       }
       
       # Security: Block access to sensitive files
       location ~ /\. {
           deny all;
       }
       
       location ~ \.(env|log)$ {
           deny all;
       }
   }
   ```

3. **Enable the site**:
   ```bash
   sudo ln -s /etc/nginx/sites-available/epijay /etc/nginx/sites-enabled/
   sudo nginx -t
   sudo systemctl reload nginx
   ```

### **Step 6: SSL Certificate**

1. **Install Certbot**:
   ```bash
   sudo apt install certbot python3-certbot-nginx
   ```

2. **Get SSL certificate**:
   ```bash
   sudo certbot --nginx -d your-domain.com -d www.your-domain.com
   ```

3. **Test auto-renewal**:
   ```bash
   sudo certbot renew --dry-run
   ```

## 🔒 **Security Configuration**

### **Firewall Setup**:
```bash
# Allow necessary ports
sudo ufw allow 22    # SSH
sudo ufw allow 80    # HTTP
sudo ufw allow 443   # HTTPS
sudo ufw enable
```

### **File Permissions**:
```bash
# Set proper permissions
sudo chown -R www-data:www-data /var/www/epijay
sudo chmod -R 755 /var/www/epijay
sudo chmod 600 /var/www/epijay/.env
```

## 📊 **Monitoring & Maintenance**

### **PM2 Monitoring**:
```bash
# View logs
pm2 logs epijay-api

# Monitor resources
pm2 monit

# Restart if needed
pm2 restart epijay-api
```

### **Nginx Monitoring**:
```bash
# Check status
sudo systemctl status nginx

# View logs
sudo tail -f /var/log/nginx/access.log
sudo tail -f /var/log/nginx/error.log
```

## 🧪 **Testing**

### **Test the API**:
```bash
curl -X POST https://your-domain.com/api/send-email \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "subject": "Test Subject",
    "message": "This is a test message"
  }'
```

### **Test the Website**:
1. Visit `https://your-domain.com`
2. Navigate to Contact page
3. Fill out and submit the contact form
4. Check `sales@epijay.com` for the email

## 🔧 **Troubleshooting**

### **Common Issues**:

1. **API not responding**:
   - Check PM2 status: `pm2 status`
   - Check logs: `pm2 logs epijay-api`
   - Restart: `pm2 restart epijay-api`

2. **Nginx errors**:
   - Test config: `sudo nginx -t`
   - Check logs: `sudo tail -f /var/log/nginx/error.log`

3. **Email not sending**:
   - Check SMTP credentials in `.env`
   - Test SMTP connection
   - Check firewall allows port 465

4. **SSL issues**:
   - Renew certificate: `sudo certbot renew`
   - Check certificate: `sudo certbot certificates`

## 📋 **Deployment Checklist**

- [ ] Node.js 18+ installed
- [ ] Project files uploaded
- [ ] Dependencies installed (`npm install --production`)
- [ ] Frontend built (`npm run build`)
- [ ] Environment variables configured (`.env`)
- [ ] PM2 configured and running
- [ ] Nginx configured and running
- [ ] SSL certificate installed
- [ ] Firewall configured
- [ ] File permissions set
- [ ] Contact form tested
- [ ] Email delivery verified
- [ ] Monitoring set up

## 📞 **Support Contacts**

- **Technical Issues**: Contact your system administrator
- **Email Problems**: Check SMTP server logs
- **Domain Issues**: Contact your domain registrar

## 🎯 **Post-Deployment**

After successful deployment:

1. **Monitor logs** for any errors
2. **Test contact form** regularly
3. **Check email delivery** to sales@epijay.com
4. **Monitor server resources** (CPU, memory, disk)
5. **Set up automated backups**
6. **Schedule SSL certificate renewal**

---

**🎉 Your EPIJAY website is now ready for production deployment!**