// EPIJAY Email Service using your SMTP server
const API_BASE_URL = process.env.NODE_ENV === 'production' 
  ? 'https://your-domain.com' 
  : 'http://localhost:3001'

export const sendEmail = async (formData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/send-email`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })

    const result = await response.json()

    if (response.ok && result.success) {
      return {
        success: true,
        message: 'Thank you! Your message has been sent successfully. We will get back to you soon.',
        response: result
      }
    } else {
      return {
        success: false,
        message: result.message || 'Failed to send email. Please try again or contact us directly.',
        error: result.error
      }
    }
  } catch (error) {
    console.error('Email sending failed:', error)
    return {
      success: false,
      message: 'Network error. Please check your connection and try again.',
      error: error.message
    }
  }
}

// Alternative: Direct mailto link for fallback
export const createMailtoLink = (formData) => {
  const subject = encodeURIComponent(`[EPIJAY Contact Form] ${formData.subject}`)
  const body = encodeURIComponent(`
Name: ${formData.name}
Email: ${formData.email}
Company: ${formData.company || 'Not provided'}
Phone: ${formData.phone || 'Not provided'}
Subject: ${formData.subject}

Message:
${formData.message}
  `)
  
  return `mailto:sales@epijay.com?subject=${subject}&body=${body}`
}

