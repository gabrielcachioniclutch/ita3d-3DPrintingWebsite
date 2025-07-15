# Docker Deployment Guide for TrueNAS Scale

This guide will help you deploy the ITA3D 3D Printing Website on TrueNAS Scale using Docker.

## Prerequisites

1. TrueNAS Scale with Docker/Kubernetes support
2. A Resend account with API key
3. Basic knowledge of TrueNAS Scale applications

## Quick Start

### 1. Environment Setup

1. Copy the environment template:
   ```bash
   cp .env.example .env
   ```

2. Edit the `.env` file with your actual values:
   ```bash
   # Get your API key from https://resend.com/api-keys
   RESEND_API_KEY=re_your_actual_api_key_here
   
   # Email where quotations will be sent
   EMAIL_TO_ADDRESS=your-business-email@example.com
   ```

### 2. Build and Deploy

#### Option A: Using Docker Compose (Recommended)

```bash
# Build and start the container
docker-compose up -d

# Check logs
docker-compose logs -f ita3d-website

# Stop the container
docker-compose down
```

#### Option B: Using Docker Commands

```bash
# Build the image
docker build -t ita3d-website .

# Run the container
docker run -d \
  --name ita3d-website \
  --restart unless-stopped \
  -p 3000:3000 \
  -e RESEND_API_KEY=re_your_actual_api_key_here \
  -e EMAIL_TO_ADDRESS=your-business-email@example.com \
  -e NODE_ENV=production \
  ita3d-website
```

## TrueNAS Scale Deployment

### Method 1: Custom App (Docker Compose)

1. **Access TrueNAS Scale**:
   - Go to `Apps` in the TrueNAS Scale web interface
   - Click on `Launch Docker Image`

2. **Configure Application**:
   - **Application Name**: `ita3d-website`
   - **Image Repository**: Build locally or use your registry
   - **Image Tag**: `latest`

3. **Set Environment Variables**:
   ```
   RESEND_API_KEY=re_your_actual_api_key_here
   EMAIL_TO_ADDRESS=your-business-email@example.com
   NODE_ENV=production
   ```

4. **Configure Networking**:
   - **Port**: `3000` (container) -> `3000` (host)
   - **Protocol**: TCP

5. **Set Resource Limits**:
   - **CPU**: 1-2 cores
   - **Memory**: 512MB - 1GB

### Method 2: Using TrueChart (If Available)

1. Add TrueCharts catalog if not already added
2. Search for custom Next.js applications
3. Follow the chart-specific configuration

## Configuration Options

### Environment Variables

| Variable | Required | Description | Example |
|----------|----------|-------------|---------|
| `RESEND_API_KEY` | Yes | Your Resend API key | `re_abcd1234...` |
| `EMAIL_TO_ADDRESS` | Yes | Email to receive quotations | `business@example.com` |
| `NODE_ENV` | No | Environment mode | `production` |

### Port Configuration

- **Application Port**: 3000
- **Host Port**: 3000 (or any available port)

## Health Monitoring

The container includes a health check that:
- Checks every 30 seconds
- Times out after 10 seconds
- Retries 3 times before marking as unhealthy
- Waits 40 seconds before starting checks

## Reverse Proxy Setup

### Using Traefik (TrueNAS Scale)

The docker-compose file includes Traefik labels. Update:

```yaml
labels:
  - "traefik.http.routers.ita3d.rule=Host(`your-domain.com`)"
```

Replace `your-domain.com` with your actual domain.

### Using Nginx

```nginx
server {
    listen 80;
    server_name your-domain.com;
    
    location / {
        proxy_pass http://localhost:3000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

## Security Considerations

1. **Environment Variables**: Store sensitive values in TrueNAS Scale secrets
2. **Network**: Use internal networks when possible
3. **Updates**: Regularly update the container image
4. **Backups**: Backup your configuration and environment files

## Troubleshooting

### Common Issues

1. **Container won't start**:
   ```bash
   docker logs ita3d-website
   ```

2. **Email not sending**:
   - Verify `RESEND_API_KEY` is correct
   - Check Resend dashboard for errors
   - Ensure sender domain is verified in Resend

3. **File uploads not working**:
   - Check container storage permissions
   - Verify upload size limits

### Useful Commands

```bash
# View container logs
docker logs -f ita3d-website

# Access container shell
docker exec -it ita3d-website sh

# Restart container
docker restart ita3d-website

# Update container
docker-compose pull && docker-compose up -d
```

## Resource Requirements

- **Minimum**:
  - CPU: 0.5 cores
  - Memory: 256MB
  - Storage: 1GB

- **Recommended**:
  - CPU: 1 core
  - Memory: 512MB
  - Storage: 2GB

## Backup and Recovery

### Backup
```bash
# Backup environment configuration
cp .env backup/.env.$(date +%Y%m%d)

# Export container configuration
docker inspect ita3d-website > backup/container-config.json
```

### Recovery
```bash
# Restore from backup
cp backup/.env.YYYYMMDD .env
docker-compose up -d
```

## Support

If you encounter issues:
1. Check the logs: `docker logs ita3d-website`
2. Verify environment variables are set correctly
3. Ensure Resend API key has proper permissions
4. Check TrueNAS Scale networking configuration

## Production Checklist

- [ ] Environment variables configured
- [ ] Resend API key working
- [ ] Email delivery tested
- [ ] Domain/SSL configured
- [ ] Health checks passing
- [ ] Backups configured
- [ ] Monitoring setup
- [ ] Security review completed 