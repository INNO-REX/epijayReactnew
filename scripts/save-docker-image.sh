#!/bin/bash

# Script to save Docker image to tar file
# Usage: ./scripts/save-docker-image.sh [image-name] [output-file]

IMAGE_NAME="${1:-epijay-react:latest}"
OUTPUT_FILE="${2:-epijay-react-latest.tar}"
COMPRESSED_FILE="${OUTPUT_FILE}.gz"

echo "🐳 Saving Docker image: $IMAGE_NAME"
echo "📦 Output file: $OUTPUT_FILE"

# Check if image exists
if ! docker image inspect "$IMAGE_NAME" > /dev/null 2>&1; then
    echo "❌ Error: Image '$IMAGE_NAME' not found!"
    echo "💡 Build the image first with: docker build -t $IMAGE_NAME ."
    exit 1
fi

# Save uncompressed version
echo "📥 Saving uncompressed image..."
docker image save -o "$OUTPUT_FILE" "$IMAGE_NAME"

if [ $? -eq 0 ]; then
    FILE_SIZE=$(du -h "$OUTPUT_FILE" | cut -f1)
    echo "✅ Image saved successfully: $OUTPUT_FILE ($FILE_SIZE)"
else
    echo "❌ Error saving image"
    exit 1
fi

# Create compressed version
echo "🗜️  Creating compressed version..."
docker image save "$IMAGE_NAME" | gzip > "$COMPRESSED_FILE"

if [ $? -eq 0 ]; then
    COMPRESSED_SIZE=$(du -h "$COMPRESSED_FILE" | cut -f1)
    echo "✅ Compressed image saved: $COMPRESSED_FILE ($COMPRESSED_SIZE)"
    
    # Calculate compression ratio
    ORIGINAL_SIZE=$(stat -f%z "$OUTPUT_FILE" 2>/dev/null || stat -c%s "$OUTPUT_FILE" 2>/dev/null)
    COMPRESSED_SIZE_BYTES=$(stat -f%z "$COMPRESSED_FILE" 2>/dev/null || stat -c%s "$COMPRESSED_FILE" 2>/dev/null)
    RATIO=$(echo "scale=1; (1 - $COMPRESSED_SIZE_BYTES / $ORIGINAL_SIZE) * 100" | bc)
    echo "📊 Compression ratio: ${RATIO}% reduction"
else
    echo "⚠️  Warning: Could not create compressed version"
fi

echo ""
echo "📋 To load the image later, use:"
echo "   docker image load -i $OUTPUT_FILE"
echo "   or"
echo "   gunzip -c $COMPRESSED_FILE | docker image load"
