#!/usr/bin/env bash
set -euo pipefail

APP_NAME="portfolio"
PORT=8080

echo "Building Next.js project..."
npm run build 

echo "Cleaning up old PM2 process if it exists..."
# pm2 delete automatically stops the process before deleting it. 
# "|| true" prevents the script from failing if the process doesn't exist yet.
pm2 delete "$APP_NAME" 2>/dev/null || true

echo "Starting $APP_NAME dynamically on port $PORT..."
PORT=$PORT pm2 start npm --name "$APP_NAME" -- run start

echo "Saving PM2 configuration to persist across server reboots..."
pm2 save

echo "Deployment finished. Run 'pm2 logs $APP_NAME' to view status."
