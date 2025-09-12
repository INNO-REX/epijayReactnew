# ✅ EPIJAY Website - Deployment Checklist

## 📋 **Pre-Deployment Checklist**

### **Server Requirements**
- [ ] **Node.js 18+** installed
- [ ] **NPM 8+** available
- [ ] **PM2** installed globally
- [ ] **Nginx** installed and configured
- [ ] **SSL Certificate** obtained
- [ ] **Firewall** configured (ports 22, 80, 443)

### **Project Files**
- [ ] **All source code** uploaded to server
- [ ] **Dependencies** installed (`npm install --production`)
- [ ] **Frontend built** (`npm run build`)
- [ ] **Environment variables** configured (`.env`)
- [ ] **File permissions** set correctly

### **Configuration**
- [ ] **SMTP credentials** set in `.env`
- [ ] **Domain name** configured
- [ ] **CORS origins** set correctly
- [ ] **Rate limiting** configured
- [ ] **Security headers** enabled

## 🚀 **Deployment Steps**

### **Step 1: Server Setup**
- [ ] Install Node.js 18+
- [ ] Install PM2 globally
- [ ] Install Nginx
- [ ] Configure firewall

### **Step 2: Project Deployment**
- [ ] Upload project files to `/var/www/epijay`
- [ ] Install dependencies: `npm install --production`
- [ ] Build frontend: `npm run build`
- [ ] Set file permissions

### **Step 3: Environment Configuration**
- [ ] Copy `.env.example` to `.env`
- [ ] Set `NODE_ENV=production`
- [ ] Set `FRONTEND_URL=https://your-domain.com`
- [ ] Configure SMTP settings:
  - [ ] `SMTP_HOST=email.kpbs.co.zm`
  - [ ] `SMTP_PORT=465`
  - [ ] `SMTP_USERNAME=sales@epijay.com`
  - [ ] `SMTP_PASSWORD=@2025JayZ33`
- [ ] Set email addresses:
  - [ ] `FROM_EMAIL=sales@epijay.com`
  - [ ] `REPLY_TO_EMAIL=support@epijay.com`
  - [ ] `NOREPLY_EMAIL=noreply@epijay.com`

### **Step 4: PM2 Configuration**
- [ ] Start API server: `pm2 start server-secure.js --name "epijay-api"`
- [ ] Configure startup: `pm2 startup`
- [ ] Save configuration: `pm2 save`
- [ ] Verify status: `pm2 status`

### **Step 5: Nginx Configuration**
- [ ] Create site configuration: `/etc/nginx/sites-available/epijay`
- [ ] Enable site: `sudo ln -s /etc/nginx/sites-available/epijay /etc/nginx/sites-enabled/`
- [ ] Test configuration: `sudo nginx -t`
- [ ] Reload Nginx: `sudo systemctl reload nginx`

### **Step 6: SSL Certificate**
- [ ] Install Certbot: `sudo apt install certbot python3-certbot-nginx`
- [ ] Get certificate: `sudo certbot --nginx -d your-domain.com`
- [ ] Test renewal: `sudo certbot renew --dry-run`

## 🧪 **Testing Checklist**

### **API Testing**
- [ ] **Health check**: `curl https://your-domain.com/api/health`
- [ ] **Email endpoint**: Test contact form submission
- [ ] **Rate limiting**: Verify 5 requests per 15 minutes limit
- [ ] **CORS**: Verify only your domain can access API

### **Frontend Testing**
- [ ] **Homepage**: Loads correctly
- [ ] **About page**: Content displays properly
- [ ] **Services page**: All services shown
- [ ] **Contact page**: Form loads and functions
- [ ] **Navigation**: All links work
- [ ] **Responsive**: Works on mobile devices

### **Email Testing**
- [ ] **Form submission**: Contact form submits successfully
- [ ] **Email delivery**: Emails reach `sales@epijay.com`
- [ ] **Email content**: All form data included
- [ ] **Reply-to**: Can reply directly to sender
- [ ] **Error handling**: Graceful failure messages

### **Security Testing**
- [ ] **HTTPS**: Site loads with SSL certificate
- [ ] **Security headers**: Present in response
- [ ] **XSS protection**: Malicious scripts blocked
- [ ] **Input validation**: Invalid data rejected
- [ ] **Rate limiting**: Spam protection active

## 📊 **Monitoring Setup**

### **PM2 Monitoring**
- [ ] **Status monitoring**: `pm2 status`
- [ ] **Log monitoring**: `pm2 logs epijay-api`
- [ ] **Resource monitoring**: `pm2 monit`
- [ ] **Auto-restart**: Configured for crashes

### **Nginx Monitoring**
- [ ] **Status check**: `sudo systemctl status nginx`
- [ ] **Access logs**: `sudo tail -f /var/log/nginx/access.log`
- [ ] **Error logs**: `sudo tail -f /var/log/nginx/error.log`
- [ ] **Auto-reload**: Configured for config changes

### **System Monitoring**
- [ ] **Disk space**: Monitor available space
- [ ] **Memory usage**: Monitor RAM usage
- [ ] **CPU usage**: Monitor processor load
- [ ] **Network**: Monitor bandwidth usage

## 🔧 **Maintenance Tasks**

### **Daily**
- [ ] Check PM2 status
- [ ] Monitor error logs
- [ ] Verify email delivery

### **Weekly**
- [ ] Check disk space
- [ ] Review access logs
- [ ] Test contact form
- [ ] Verify SSL certificate

### **Monthly**
- [ ] Update dependencies
- [ ] Review security logs
- [ ] Backup configuration
- [ ] Performance review

## 🚨 **Emergency Procedures**

### **If API Server Down**
1. Check PM2 status: `pm2 status`
2. Restart if needed: `pm2 restart epijay-api`
3. Check logs: `pm2 logs epijay-api`
4. Verify environment: Check `.env` file

### **If Nginx Down**
1. Check status: `sudo systemctl status nginx`
2. Test config: `sudo nginx -t`
3. Restart: `sudo systemctl restart nginx`
4. Check logs: `sudo tail -f /var/log/nginx/error.log`

### **If Emails Not Sending**
1. Check SMTP credentials in `.env`
2. Test SMTP connection
3. Check firewall (port 465)
4. Verify email server status

### **If SSL Issues**
1. Check certificate: `sudo certbot certificates`
2. Renew if needed: `sudo certbot renew`
3. Reload Nginx: `sudo systemctl reload nginx`
4. Test SSL: `openssl s_client -connect your-domain.com:443`

## 📞 **Support Information**

### **Contact Details**
- **Domain**: your-domain.com
- **Email**: sales@epijay.com
- **SMTP Server**: email.kpbs.co.zm
- **API Port**: 3001
- **Web Port**: 443 (HTTPS)

### **Important Files**
- **API Server**: `/var/www/epijay/server-secure.js`
- **Environment**: `/var/www/epijay/.env`
- **Nginx Config**: `/etc/nginx/sites-available/epijay`
- **PM2 Config**: `~/.pm2/ecosystem.config.js`

### **Log Locations**
- **PM2 Logs**: `~/.pm2/logs/`
- **Nginx Logs**: `/var/log/nginx/`
- **System Logs**: `/var/log/syslog`

---

## ✅ **Deployment Complete!**

Once all items are checked off, your EPIJAY website will be:
- ✅ **Securely deployed** with enterprise-level protection
- ✅ **Fully functional** with working contact form
- ✅ **Email enabled** sending to sales@epijay.com
- ✅ **Production ready** with monitoring and maintenance procedures

**🎉 Congratulations! Your website is live and ready for business!**
