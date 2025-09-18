import express from 'express'
import cors from 'cors'
import rateLimit from 'express-rate-limit'
import helmet from 'helmet'
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

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    message: 'EPIJAY API is running',
    timestamp: new Date().toISOString()
  })
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
  console.log(`🚀 EPIJAY API server running on port ${PORT}`)
  console.log(`🔒 Security features enabled:`)
  console.log(`   - CORS protection: Restricted to allowed origins`)
  console.log(`   - Helmet security headers: Enabled`)
})