import sharp from 'sharp'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const assetsDir = path.join(__dirname, '../src/assets')
const outputDir = assetsDir // Overwrite originals, or use a subdirectory if preferred

// Image optimization settings
const configs = {
  // Hero/Large images - max width 1920px
  large: {
    width: 1920,
    quality: 85,
    format: 'jpeg'
  },
  // Medium images - max width 1200px
  medium: {
    width: 1200,
    quality: 85,
    format: 'jpeg'
  },
  // Small images (logos, icons) - max width 400px
  small: {
    width: 400,
    quality: 90,
    format: 'png'
  }
}

// Determine which config to use based on filename
function getConfig(filename) {
  const lowerName = filename.toLowerCase()
  
  // Large images (hero, carousel)
  if (lowerName.includes('homepage') || 
      lowerName.includes('firefighter') ||
      lowerName.includes('safety & protective') ||
      lowerName.includes('industrial & engineering') ||
      lowerName.includes('electrical & energy') ||
      lowerName.includes('chemical & environmental')) {
    return configs.large
  }
  
  // Small images (logos)
  if (lowerName.includes('logo') || lowerName.includes('icon')) {
    return configs.small
  }
  
  // Default to medium
  return configs.medium
}

async function optimizeImage(inputPath, outputPath, config) {
  try {
    const originalSize = fs.statSync(inputPath).size
    const tempPath = outputPath + '.tmp'
    
    const image = sharp(inputPath)
    const metadata = await image.metadata()
    
    // Only resize if image is larger than target width
    const targetWidth = Math.min(config.width, metadata.width)
    
    let pipeline = image
      .resize(targetWidth, null, {
        withoutEnlargement: true,
        fit: 'inside'
      })
    
    if (config.format === 'jpeg') {
      pipeline = pipeline.jpeg({ 
        quality: config.quality,
        progressive: true,
        mozjpeg: true
      })
    } else if (config.format === 'png') {
      pipeline = pipeline.png({ 
        quality: config.quality,
        compressionLevel: 9
      })
    }
    
    // Write to temp file first
    await pipeline.toFile(tempPath)
    
    // Replace original with optimized version
    fs.renameSync(tempPath, outputPath)
    
    const optimizedSize = fs.statSync(outputPath).size
    const savings = ((1 - optimizedSize / originalSize) * 100).toFixed(1)
    
    console.log(`✓ ${path.basename(inputPath)}: ${(originalSize / 1024 / 1024).toFixed(2)}MB → ${(optimizedSize / 1024 / 1024).toFixed(2)}MB (${savings}% reduction)`)
    
    return { originalSize, optimizedSize, savings }
  } catch (error) {
    console.error(`✗ Error optimizing ${inputPath}:`, error.message)
    // Clean up temp file if it exists
    const tempPath = outputPath + '.tmp'
    if (fs.existsSync(tempPath)) {
      fs.unlinkSync(tempPath)
    }
    return null
  }
}

async function optimizeAllImages() {
  console.log('🖼️  Starting image optimization...\n')
  
  const files = fs.readdirSync(assetsDir)
  const imageFiles = files.filter(file => 
    /\.(jpg|jpeg|png)$/i.test(file)
  )
  
  if (imageFiles.length === 0) {
    console.log('No images found to optimize.')
    return
  }
  
  let totalOriginalSize = 0
  let totalOptimizedSize = 0
  
  for (const file of imageFiles) {
    const inputPath = path.join(assetsDir, file)
    const config = getConfig(file)
    const outputPath = path.join(outputDir, file)
    
    const result = await optimizeImage(inputPath, outputPath, config)
    if (result) {
      totalOriginalSize += result.originalSize
      totalOptimizedSize += result.optimizedSize
    }
  }
  
  console.log('\n' + '='.repeat(50))
  console.log(`Total: ${(totalOriginalSize / 1024 / 1024).toFixed(2)}MB → ${(totalOptimizedSize / 1024 / 1024).toFixed(2)}MB`)
  console.log(`Overall reduction: ${((1 - totalOptimizedSize / totalOriginalSize) * 100).toFixed(1)}%`)
  console.log('✅ Image optimization complete!')
}

optimizeAllImages().catch(console.error)
