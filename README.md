# 🚀 EPIJAY Website - Static Website Deployment Package

## 📋 **Project Overview**

This is a complete React website for **EPIJAY Limited** - a modern, responsive static website showcasing the company's products and services.

## 🏗️ **Project Structure**

```
epijayReact/
├── src/                          # React frontend source code
│   ├── components/               # Reusable UI components
│   ├── pages/                   # Page components
│   ├── layouts/                 # Layout components
│   ├── utils/                   # Utility functions
│   └── assets/                  # Images and static files
├── public/                      # Static public files
├── package.json                 # Dependencies and scripts
├── tailwind.config.js          # Tailwind CSS configuration
├── postcss.config.js           # PostCSS configuration
├── vite.config.js              # Vite build configuration
├── .gitignore                  # Git ignore rules
└── README.md                   # This file
```

## 🔧 **Technical Requirements**

### **Server Requirements:**
- **Node.js**: Version 18+ (recommended: 20.x)
- **NPM**: Version 8+ (comes with Node.js)
- **Nginx**: Web server (for production)
- **SSL Certificate**: For HTTPS

### **Ports Needed:**
- **Port 80**: HTTP (redirects to HTTPS)
- **Port 443**: HTTPS (main website)

## 📦 **Dependencies**

### **Frontend Dependencies:**
- React 19.1.1
- React Router DOM 6.30.1
- Tailwind CSS 3.4.17
- Alpine.js 3.15.0
- Vite 4.5.0

## 🚀 **Deployment Instructions**

### **Option 1: Static Hosting (Recommended)**

1. **Build the project**:
   ```bash
   npm install
   npm run build
   ```

2. **Upload the `dist/` folder** to your web server

3. **Configure your web server** to serve the static files

### **Option 2: Docker Deployment**

1. **Build Docker image**:
   ```bash
   docker build -t epijay-website .
   ```

2. **Run the container**:
   ```bash
   docker run -d -p 80:80 --name epijay-website epijay-website
   ```

### **Option 3: Traditional Server Deployment**

1. **Install Node.js 18+**:
   ```bash
   # Ubuntu/Debian
   curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
   sudo apt-get install -y nodejs
   
   # CentOS/RHEL
   curl -fsSL https://rpm.nodesource.com/setup_20.x | sudo bash -
   sudo yum install -y nodejs
   ```

2. **Install Nginx**:
   ```bash
   # Ubuntu/Debian
   sudo apt update
   sudo apt install nginx
   
   # CentOS/RHEL
   sudo yum install nginx
   ```

3. **Upload and build the project**:
   ```bash
   # Upload files to /var/www/epijay
   cd /var/www/epijay
   npm install
   npm run build
   ```

4. **Configure Nginx**:
   ```bash
   sudo nano /etc/nginx/sites-available/epijay
   ```

   **Add this configuration**:
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
       
       # Security: Block access to sensitive files
       location ~ /\. {
           deny all;
       }
   }
   ```

5. **Enable the site**:
   ```bash
   sudo ln -s /etc/nginx/sites-available/epijay /etc/nginx/sites-enabled/
   sudo nginx -t
   sudo systemctl reload nginx
   ```

### **SSL Certificate Setup**

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
```

## 📊 **Monitoring & Maintenance**

### **Nginx Monitoring**:
```bash
# Check status
sudo systemctl status nginx

# View logs
sudo tail -f /var/log/nginx/access.log
sudo tail -f /var/log/nginx/error.log
```

## 🧪 **Testing**

### **Test the Website**:
1. Visit `https://your-domain.com`
2. Navigate through all pages
3. Test responsive design on mobile devices
4. Verify all images load correctly

## 🔧 **Troubleshooting**

### **Common Issues**:

1. **Website not loading**:
   - Check Nginx status: `sudo systemctl status nginx`
   - Check logs: `sudo tail -f /var/log/nginx/error.log`
   - Verify file permissions

2. **SSL issues**:
   - Renew certificate: `sudo certbot renew`
   - Check certificate: `sudo certbot certificates`

3. **Images not loading**:
   - Check file paths in `src/assets/`
   - Verify images exist in `dist/assets/`

## 📋 **Deployment Checklist**

- [ ] Node.js 18+ installed
- [ ] Project files uploaded
- [ ] Dependencies installed (`npm install`)
- [ ] Frontend built (`npm run build`)
- [ ] Nginx configured and running
- [ ] SSL certificate installed
- [ ] Firewall configured
- [ ] File permissions set
- [ ] Website tested on all devices
- [ ] All pages and images loading correctly

## 📞 **Support Contacts**

- **Technical Issues**: Contact your system administrator
- **Domain Issues**: Contact your domain registrar

## 🎯 **Post-Deployment**

After successful deployment:

1. **Monitor logs** for any errors
2. **Test website functionality** regularly
3. **Monitor server resources** (CPU, memory, disk)
4. **Set up automated backups**
5. **Schedule SSL certificate renewal**

## 🌟 **Features**

- **Responsive Design**: Works on all devices
- **Modern UI**: Clean, professional design
- **Fast Loading**: Optimized for performance
- **SEO Friendly**: Proper meta tags and structure
- **Contact Information**: Display contact details
- **Product Showcase**: Highlight services and products

---

**🎉 Your EPIJAY website is now ready for production deployment!**