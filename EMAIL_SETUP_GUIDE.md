# EPIJAY Contact Form Email Setup Guide

## Overview
Your contact form is now configured to send emails to `sales@epijay.com`. Here are the setup options:

## Option 1: EmailJS Setup (Recommended)

### Step 1: Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

### Step 2: Create Email Service
1. In EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Connect your `sales@epijay.com` email account
5. Note down the **Service ID**

### Step 3: Create Email Template
1. Go to "Email Templates"
2. Click "Create New Template"
3. Use this template:

```
Subject: [EPIJAY Contact Form] {{subject}}

From: {{from_name}} <{{from_email}}>
Company: {{company}}
Phone: {{phone}}

Message:
{{message}}

---
This email was sent from the EPIJAY website contact form.
Reply directly to this email to respond to {{from_name}}.
```

4. Note down the **Template ID**

### Step 4: Get Public Key
1. Go to "Account" → "General"
2. Copy your **Public Key**

### Step 5: Update Configuration
Update the file `src/services/emailService.js` with your credentials:

```javascript
const EMAILJS_SERVICE_ID = 'your_service_id_here'
const EMAILJS_TEMPLATE_ID = 'your_template_id_here'
const EMAILJS_PUBLIC_KEY = 'your_public_key_here'
```

## Option 2: Formspree Setup (Alternative)

### Step 1: Create Formspree Account
1. Go to [https://formspree.io/](https://formspree.io/)
2. Sign up for a free account
3. Verify your email

### Step 2: Create Form
1. Click "New Form"
2. Enter form name: "EPIJAY Contact Form"
3. Set endpoint email to: `sales@epijay.com`
4. Note down the **Form ID**

### Step 3: Update Code
Replace the email service with Formspree:

```javascript
// In src/services/emailService.js
export const sendEmail = async (formData) => {
  try {
    const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        company: formData.company,
        phone: formData.phone,
        subject: formData.subject,
        message: formData.message,
        _replyto: formData.email,
        _subject: `[EPIJAY Contact Form] ${formData.subject}`,
      }),
    })

    if (response.ok) {
      return { success: true, message: 'Email sent successfully!' }
    } else {
      throw new Error('Failed to send email')
    }
  } catch (error) {
    return { success: false, message: 'Failed to send email. Please try again.' }
  }
}
```

## Option 3: Netlify Forms (If deploying to Netlify)

### Step 1: Add Netlify Attribute
Add `data-netlify="true"` to your form:

```jsx
<form onSubmit={handleSubmit} className="space-y-6" data-netlify="true">
```

### Step 2: Add Hidden Input
Add this hidden input inside the form:

```jsx
<input type="hidden" name="form-name" value="contact" />
```

### Step 3: Update Form Action
Set the form action to your Netlify site:

```jsx
<form onSubmit={handleSubmit} className="space-y-6" data-netlify="true" action="/">
```

## Current Features

✅ **Contact Form**: Professional form with all necessary fields
✅ **Email Integration**: Ready for EmailJS, Formspree, or Netlify Forms
✅ **Fallback Option**: "Use Email Client" button opens default email client
✅ **Status Messages**: Success/error feedback for users
✅ **Loading States**: Shows loading spinner during submission
✅ **Form Validation**: Required field validation
✅ **Responsive Design**: Works on all devices

## Testing

1. Fill out the contact form
2. Click "Send Message"
3. Check your `sales@epijay.com` inbox
4. If EmailJS is not configured, use "Use Email Client" button as fallback

## Security Notes

- EmailJS is secure and doesn't expose your email credentials
- Formspree handles spam protection automatically
- Netlify Forms include built-in spam filtering
- All options are GDPR compliant

## Support

If you need help setting up any of these options, the contact form will still work with the "Use Email Client" fallback button, which opens the user's default email client with pre-filled information.

