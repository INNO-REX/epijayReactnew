import express from 'express'
import cors from 'cors'

const app = express()
const PORT = process.env.PORT || 3001

// Middleware
app.use(cors())
app.use(express.json())

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'EPIJAY API is running' })
})

// Start server
app.listen(PORT, () => {
  console.log(`EPIJAY API server running on port ${PORT}`)
})