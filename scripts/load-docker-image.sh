#!/bin/bash

# Script to load Docker image from tar file
# Usage: ./scripts/load-docker-image.sh [tar-file]

TAR_FILE="${1:-epijay-react-latest.tar}"

if [ ! -f "$TAR_FILE" ]; then
    echo "❌ Error: File '$TAR_FILE' not found!"
    exit 1
fi

echo "🐳 Loading Docker image from: $TAR_FILE"

# Check if file is compressed
if [[ "$TAR_FILE" == *.gz ]]; then
    echo "📦 Detected compressed file, decompressing and loading..."
    gunzip -c "$TAR_FILE" | docker image load
else
    echo "📦 Loading uncompressed image..."
    docker image load -i "$TAR_FILE"
fi

if [ $? -eq 0 ]; then
    echo "✅ Image loaded successfully!"
    echo ""
    echo "📋 To run the container, use:"
    echo "   docker run -d -p 80:80 epijay-react:latest"
else
    echo "❌ Error loading image"
    exit 1
fi
