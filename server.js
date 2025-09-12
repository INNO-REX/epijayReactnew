const express = require('express')
const nodemailer = require('nodemailer')
const cors = require('cors')
require('dotenv').config()

const app = express()
const PORT = process.env.PORT || 3001

// Middleware
app.use(cors())
app.use(express.json())

// SMTP Configuration
const smtpConfig = {
  host: 'email.kpbs.co.zm',
  port: 465,
  secure: true, // true for 465, false for other ports
  auth: {
    user: 'sales@epijay.com',
    pass: '@2025JayZ33'
  }
}

// Create transporter
const transporter = nodemailer.createTransporter(smtpConfig)

// Verify connection configuration
transporter.verify(function(error, success) {
  if (error) {
    console.log('SMTP Error:', error)
  } else {
    console.log('SMTP Server is ready to take our messages')
  }
})

// Email endpoint
app.post('/api/send-email', async (req, res) => {
  try {
    const { name, email, company, phone, subject, message } = req.body

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return res.status(400).json({
        success: false,
        message: 'Missing required fields'
      })
    }

    // Email content
    const mailOptions = {
      from: 'sales@epijay.com',
      replyTo: email, // This allows you to reply directly to the sender
      to: 'sales@epijay.com',
      subject: `[EPIJAY Contact Form] ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1f2937; border-bottom: 2px solid #3b82f6; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #374151; margin-top: 0;">Contact Information</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p><strong>Company:</strong> ${company || 'Not provided'}</p>
            <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
            <p><strong>Subject:</strong> ${subject}</p>
          </div>
          
          <div style="background-color: #ffffff; padding: 20px; border: 1px solid #e5e7eb; border-radius: 8px;">
            <h3 style="color: #374151; margin-top: 0;">Message</h3>
            <p style="white-space: pre-wrap; line-height: 1.6;">${message}</p>
          </div>
          
          <div style="margin-top: 20px; padding: 15px; background-color: #eff6ff; border-radius: 8px; border-left: 4px solid #3b82f6;">
            <p style="margin: 0; color: #1e40af; font-size: 14px;">
              <strong>Note:</strong> This email was sent from the EPIJAY website contact form. 
              You can reply directly to this email to respond to ${name}.
            </p>
          </div>
        </div>
      `,
      text: `
New Contact Form Submission

Contact Information:
- Name: ${name}
- Email: ${email}
- Company: ${company || 'Not provided'}
- Phone: ${phone || 'Not provided'}
- Subject: ${subject}

Message:
${message}

---
This email was sent from the EPIJAY website contact form.
You can reply directly to this email to respond to ${name}.
      `
    }

    // Send email
    const info = await transporter.sendMail(mailOptions)
    
    console.log('Email sent successfully:', info.messageId)
    
    res.json({
      success: true,
      message: 'Email sent successfully!',
      messageId: info.messageId
    })

  } catch (error) {
    console.error('Email sending failed:', error)
    res.status(500).json({
      success: false,
      message: 'Failed to send email. Please try again.',
      error: error.message
    })
  }
})

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'EPIJAY Email API is running' })
})

// Start server
app.listen(PORT, () => {
  console.log(`EPIJAY Email API server running on port ${PORT}`)
})
