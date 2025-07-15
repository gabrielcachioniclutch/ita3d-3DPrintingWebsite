#!/bin/bash

# ITA3D Website Docker Deployment Script
# This script helps you deploy the 3D printing website quickly

set -e

echo "🚀 ITA3D Website Docker Deployment Script"
echo "==========================================="

# Check if Docker is installed
if ! command -v docker &> /dev/null; then
    echo "❌ Docker is not installed. Please install Docker first."
    exit 1
fi

# Check if Docker Compose is available
if ! command -v docker-compose &> /dev/null && ! docker compose version &> /dev/null; then
    echo "❌ Docker Compose is not available. Please install Docker Compose."
    exit 1
fi

# Create .env file if it doesn't exist
if [ ! -f .env ]; then
    echo "📝 Creating environment file..."
    cp .env.example .env
    echo "✅ Created .env file from template"
    echo ""
    echo "⚠️  IMPORTANT: Please edit the .env file with your actual values:"
    echo "   - RESEND_API_KEY: Get from https://resend.com/api-keys"
    echo "   - EMAIL_TO_ADDRESS: Your business email address"
    echo ""
    read -p "Press Enter to continue after updating .env file..."
else
    echo "✅ Found existing .env file"
fi

# Validate environment variables
echo "🔍 Validating environment variables..."
source .env

if [ -z "$RESEND_API_KEY" ] || [ "$RESEND_API_KEY" = "re_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx" ]; then
    echo "❌ RESEND_API_KEY is not set or using example value"
    echo "   Please update your .env file with a valid Resend API key"
    exit 1
fi

if [ -z "$EMAIL_TO_ADDRESS" ] || [ "$EMAIL_TO_ADDRESS" = "your-email@example.com" ]; then
    echo "❌ EMAIL_TO_ADDRESS is not set or using example value"
    echo "   Please update your .env file with your business email"
    exit 1
fi

echo "✅ Environment variables validated"

# Build and deploy
echo ""
echo "🔨 Building and deploying the application..."

# Stop existing container if running
if docker ps -q -f name=ita3d-website | grep -q .; then
    echo "🛑 Stopping existing container..."
    docker-compose down
fi

# Build and start
echo "🚀 Building and starting the container..."
docker-compose up -d --build

# Wait for container to be ready
echo "⏳ Waiting for application to start..."
sleep 10

# Check if container is running
if docker ps -q -f name=ita3d-website | grep -q .; then
    echo "✅ Container is running successfully!"
    echo ""
    echo "🌐 Your website is now available at:"
    echo "   http://localhost:3000"
    echo ""
    echo "📋 Useful commands:"
    echo "   View logs:     docker-compose logs -f ita3d-website"
    echo "   Stop app:      docker-compose down"
    echo "   Restart app:   docker-compose restart"
    echo "   Update app:    ./deploy.sh"
    echo ""
    echo "📖 For TrueNAS Scale deployment, see DOCKER_DEPLOYMENT.md"
else
    echo "❌ Failed to start container. Checking logs..."
    docker-compose logs ita3d-website
    exit 1
fi

# Health check
echo "🏥 Performing health check..."
sleep 5

if curl -f -s http://localhost:3000 > /dev/null; then
    echo "✅ Health check passed - Website is responding"
else
    echo "⚠️  Health check failed - Website may still be starting"
    echo "   Check logs with: docker-compose logs -f ita3d-website"
fi

echo ""
echo "🎉 Deployment completed successfully!"
echo "   Access your website at http://localhost:3000" 