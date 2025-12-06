# Docker Image Save/Load Guide

This guide explains how to save and load Docker images for the EPIJAY React application.

## Quick Reference

### Save Image
```bash
# Save uncompressed
docker image save -o epijay-react-latest.tar epijay-react:latest

# Save compressed (recommended)
docker image save epijay-react:latest | gzip > epijay-react-latest.tar.gz
```

### Load Image
```bash
# Load uncompressed
docker image load -i epijay-react-latest.tar

# Load compressed
gunzip -c epijay-react-latest.tar.gz | docker image load
```

## Using Helper Scripts

### Save Image Script
```bash
./scripts/save-docker-image.sh [image-name] [output-file]
```

**Examples:**
```bash
# Save with defaults (epijay-react:latest -> epijay-react-latest.tar)
./scripts/save-docker-image.sh

# Save custom image
./scripts/save-docker-image.sh my-app:v1.0 my-app-v1.0.tar
```

### Load Image Script
```bash
./scripts/load-docker-image.sh [tar-file]
```

**Examples:**
```bash
# Load default file
./scripts/load-docker-image.sh

# Load specific file
./scripts/load-docker-image.sh epijay-react-latest.tar.gz
```

## Complete Workflow

### 1. Build the Image
```bash
docker build -t epijay-react:latest .
```

### 2. Save the Image
```bash
# Option A: Using script (creates both compressed and uncompressed)
./scripts/save-docker-image.sh

# Option B: Manual save
docker image save epijay-react:latest | gzip > epijay-react-latest.tar.gz
```

### 3. Transfer the Image File
Transfer the `.tar` or `.tar.gz` file to another machine using:
- SCP: `scp epijay-react-latest.tar.gz user@server:/path/`
- FTP/SFTP
- USB drive
- Cloud storage

### 4. Load the Image on Target Machine
```bash
# Option A: Using script
./scripts/load-docker-image.sh epijay-react-latest.tar.gz

# Option B: Manual load
gunzip -c epijay-react-latest.tar.gz | docker image load
```

### 5. Run the Container
```bash
docker run -d -p 80:80 --name epijay-react epijay-react:latest
```

## File Sizes

- **Uncompressed**: ~54 MB
- **Compressed**: ~18-20 MB (typically 60-70% reduction)

## Verification

### Check if image exists
```bash
docker image ls | grep epijay-react
```

### Inspect image details
```bash
docker image inspect epijay-react:latest
```

### Test the image
```bash
docker run --rm -p 8080:80 epijay-react:latest
# Visit http://localhost:8080
```

## Advanced Options

### Save Multiple Images
```bash
docker image save -o all-images.tar epijay-react:latest nginx:alpine
```

### Save Specific Platform
```bash
docker image save --platform linux/amd64 -o epijay-react-amd64.tar epijay-react:latest
```

### Save with Custom Compression Level
```bash
docker image save epijay-react:latest | gzip -9 > epijay-react-latest.tar.gz
```

## Troubleshooting

### Image not found
```bash
# List all images
docker image ls

# Build the image first
docker build -t epijay-react:latest .
```

### Permission denied
```bash
# Make scripts executable
chmod +x scripts/*.sh

# Or use sudo (if needed)
sudo docker image save ...
```

### Out of disk space
```bash
# Check disk usage
df -h

# Clean up unused images
docker image prune -a
```

## References

- [Docker Image Save Documentation](https://docs.docker.com/reference/cli/docker/image/save/)
- [Docker Image Load Documentation](https://docs.docker.com/reference/cli/docker/image/load/)
