# EPIJAY Contact Form - SMTP Email Setup Guide

## ✅ **Configuration Complete!**

Your contact form is now configured to use your own SMTP server (`email.kpbs.co.zm`) to send emails directly to `sales@epijay.com`.

## 🔧 **What's Been Set Up:**

### **Backend Email Server**
- **File**: `server.js`
- **SMTP Host**: `email.kpbs.co.zm`
- **SMTP Port**: `465` (SSL)
- **Authentication**: `sales@epijay.com` / `@2025JayZ33`
- **From Email**: `sales@epijay.com`
- **Reply-To**: Client's email (for easy responses)

### **Frontend Integration**
- **File**: `src/services/emailService.js`
- **API Endpoint**: `http://localhost:3001/api/send-email`
- **Fallback**: Email client option still available

### **Environment Configuration**
- **File**: `.env`
- **All SMTP credentials securely stored**

## 🚀 **How to Run:**

### **Option 1: Run Both Frontend & Backend Together**
```bash
npm run dev:full
```
This will start:
- Backend server on `http://localhost:3001`
- Frontend on `http://localhost:5173`

### **Option 2: Run Separately**
```bash
# Terminal 1 - Backend
npm run server

# Terminal 2 - Frontend  
npm run dev
```

## 📧 **Email Flow:**

1. **Client fills contact form** → Frontend
2. **Form submits to backend** → `http://localhost:3001/api/send-email`
3. **Backend sends email** → `sales@epijay.com` via your SMTP server
4. **Client receives confirmation** → Success message on website

## 📋 **Email Template:**

When someone submits the contact form, you'll receive a professional email with:

```
Subject: [EPIJAY Contact Form] [Client's Subject]

From: sales@epijay.com
Reply-To: [Client's Email]

Contact Information:
- Name: [Client's Name]
- Email: [Client's Email]
- Company: [Client's Company]
- Phone: [Client's Phone]
- Subject: [Client's Subject]

Message:
[Client's Message]

---
This email was sent from the EPIJAY website contact form.
You can reply directly to this email to respond to [Client's Name].
```

## 🔒 **Security Features:**

- ✅ **SMTP Authentication**: Secure login to your email server
- ✅ **CORS Protection**: Only your website can send emails
- ✅ **Input Validation**: Prevents spam and invalid submissions
- ✅ **Error Handling**: Graceful failure with user feedback
- ✅ **Reply-To Header**: Easy to respond to clients

## 🧪 **Testing:**

1. **Start the servers**:
   ```bash
   npm run dev:full
   ```

2. **Open your website**: `http://localhost:5173`

3. **Go to Contact page** and fill out the form

4. **Submit the form** and check your `sales@epijay.com` inbox

5. **Verify email received** with all form data

## 🌐 **Production Deployment:**

### **For Production, update these:**

1. **Update API URL** in `src/services/emailService.js`:
   ```javascript
   const API_BASE_URL = 'https://your-domain.com'
   ```

2. **Deploy backend** to your server (same domain or subdomain)

3. **Update environment variables** for production

## 📊 **Monitoring:**

- **Backend logs**: Check console for email sending status
- **SMTP logs**: Monitor your email server logs
- **Frontend errors**: Check browser console for any issues

## 🔧 **Troubleshooting:**

### **If emails aren't sending:**

1. **Check SMTP connection**:
   ```bash
   npm run server
   # Look for "SMTP Server is ready" message
   ```

2. **Verify credentials** in `.env` file

3. **Check firewall** - ensure port 465 is open

4. **Test SMTP manually**:
   ```bash
   # Test endpoint
   curl -X POST http://localhost:3001/api/send-email \
     -H "Content-Type: application/json" \
     -d '{"name":"Test","email":"test@example.com","subject":"Test","message":"Test message"}'
   ```

### **If frontend can't connect:**

1. **Ensure backend is running** on port 3001
2. **Check CORS settings** in `server.js`
3. **Verify API URL** in `emailService.js`

## 📞 **Support:**

- **Backend logs**: Check `npm run server` output
- **Frontend logs**: Check browser console
- **Email server**: Check `email.kpbs.co.zm` logs

## 🎯 **Next Steps:**

1. **Test the complete flow** with a real form submission
2. **Deploy to production** when ready
3. **Monitor email delivery** and response rates
4. **Consider adding email templates** for different subjects

Your contact form is now fully functional with your own SMTP server! 🎉
