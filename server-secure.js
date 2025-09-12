import express from 'express'
import nodemailer from 'nodemailer'
import cors from 'cors'
import rateLimit from 'express-rate-limit'
import helmet from 'helmet'
import { body, validationResult } from 'express-validator'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 3001

// Security Middleware
app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      styleSrc: ["'self'", "'unsafe-inline'"],
      scriptSrc: ["'self'"],
      imgSrc: ["'self'", "data:", "https:"],
    },
  },
}))

// Rate limiting - prevent spam attacks
const emailLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // limit each IP to 5 requests per windowMs
  message: {
    success: false,
    message: 'Too many email requests from this IP, please try again later.'
  },
  standardHeaders: true,
  legacyHeaders: false,
})

// CORS configuration - restrict to your domain only
const corsOptions = {
  origin: function (origin, callback) {
    // Allow requests with no origin (mobile apps, curl, etc.)
    if (!origin) return callback(null, true)
    
    // In production, only allow your domain
    const allowedOrigins = [
      'http://localhost:5173', // Development
      'http://localhost:3000', // Alternative dev port
      process.env.FRONTEND_URL, // Production frontend URL
    ].filter(Boolean)
    
    if (allowedOrigins.includes(origin)) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  },
  credentials: true
}

app.use(cors(corsOptions))
app.use(express.json({ limit: '10mb' })) // Limit request size

// Input validation rules
const emailValidation = [
  body('name')
    .trim()
    .isLength({ min: 2, max: 100 })
    .withMessage('Name must be between 2 and 100 characters')
    .matches(/^[a-zA-Z\s]+$/)
    .withMessage('Name can only contain letters and spaces'),
  
  body('email')
    .isEmail()
    .normalizeEmail()
    .withMessage('Please provide a valid email address'),
  
  body('company')
    .optional()
    .trim()
    .isLength({ max: 200 })
    .withMessage('Company name must be less than 200 characters'),
  
  body('phone')
    .optional()
    .trim()
    .isLength({ max: 20 })
    .matches(/^[\+]?[0-9\s\-\(\)]+$/)
    .withMessage('Please provide a valid phone number'),
  
  body('subject')
    .trim()
    .isLength({ min: 5, max: 200 })
    .withMessage('Subject must be between 5 and 200 characters'),
  
  body('message')
    .trim()
    .isLength({ min: 10, max: 2000 })
    .withMessage('Message must be between 10 and 2000 characters')
    .escape() // Prevent XSS attacks
]

// SMTP Configuration - using environment variables
const smtpConfig = {
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT),
  secure: true,
  auth: {
    user: process.env.SMTP_USERNAME,
    pass: process.env.SMTP_PASSWORD
  },
  // Additional security options
  tls: {
    rejectUnauthorized: true
  }
}

// Create transporter
const transporter = nodemailer.createTransport(smtpConfig)

// Verify connection configuration
transporter.verify(function(error, success) {
  if (error) {
    console.log('SMTP Error:', error)
  } else {
    console.log('✅ SMTP Server is ready to take our messages')
  }
})

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    message: 'EPIJAY Email API is running',
    timestamp: new Date().toISOString()
  })
})

// Email endpoint with security measures
app.post('/api/send-email', emailLimiter, emailValidation, async (req, res) => {
  try {
    // Check for validation errors
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        message: 'Validation failed',
        errors: errors.array()
      })
    }

    const { name, email, company, phone, subject, message } = req.body

    // Additional security checks
    const suspiciousPatterns = [
      /<script/i,
      /javascript:/i,
      /on\w+\s*=/i,
      /eval\(/i,
      /expression\(/i
    ]

    const allText = `${name} ${email} ${company} ${phone} ${subject} ${message}`
    const hasSuspiciousContent = suspiciousPatterns.some(pattern => pattern.test(allText))

    if (hasSuspiciousContent) {
      console.log('🚨 Suspicious content detected from IP:', req.ip)
      return res.status(400).json({
        success: false,
        message: 'Invalid content detected'
      })
    }

    // Log the request for monitoring
    console.log(`📧 Email request from ${req.ip} - ${name} (${email})`)

    // Email content with security measures
    const mailOptions = {
      from: process.env.FROM_EMAIL,
      replyTo: email,
      to: process.env.FROM_EMAIL,
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
            <p><strong>IP Address:</strong> ${req.ip}</p>
            <p><strong>Timestamp:</strong> ${new Date().toISOString()}</p>
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
- IP Address: ${req.ip}
- Timestamp: ${new Date().toISOString()}

Message:
${message}

---
This email was sent from the EPIJAY website contact form.
You can reply directly to this email to respond to ${name}.
      `
    }

    // Send email
    const info = await transporter.sendMail(mailOptions)
    
    console.log('✅ Email sent successfully:', info.messageId)
    
    res.json({
      success: true,
      message: 'Thank you! Your message has been sent successfully. We will get back to you soon.',
      messageId: info.messageId
    })

  } catch (error) {
    console.error('❌ Email sending failed:', error)
    res.status(500).json({
      success: false,
      message: 'Failed to send email. Please try again later.',
      error: process.env.NODE_ENV === 'development' ? error.message : 'Internal server error'
    })
  }
})

// Error handling middleware
app.use((error, req, res, next) => {
  console.error('🚨 Server Error:', error)
  res.status(500).json({
    success: false,
    message: 'Internal server error'
  })
})

// Start server
app.listen(PORT, () => {
  console.log(`🚀 EPIJAY Email API server running on port ${PORT}`)
  console.log(`🔒 Security features enabled:`)
  console.log(`   - Rate limiting: 5 requests per 15 minutes per IP`)
  console.log(`   - CORS protection: Restricted to allowed origins`)
  console.log(`   - Input validation: All fields validated`)
  console.log(`   - XSS protection: Content sanitized`)
  console.log(`   - Helmet security headers: Enabled`)
})
