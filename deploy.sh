#!/bin/bash

echo "🚀 Deploying to GitHub Pages..."

# Build the project
echo "📦 Building project..."
npm run build

# Check if build was successful
if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
    echo ""
    echo "📋 Next steps:"
    echo "1. Push your changes to GitHub:"
    echo "   git add ."
    echo "   git commit -m 'Deploy to GitHub Pages'"
    echo "   git push origin main"
    echo ""
    echo "2. Go to your GitHub repository settings:"
    echo "   https://github.com/[your-username]/recover-smart-followup/settings/pages"
    echo ""
    echo "3. Set source to 'GitHub Actions'"
    echo ""
    echo "4. Your site will be available at:"
    echo "   https://[your-username].github.io/recover-smart-followup/"
else
    echo "❌ Build failed!"
    exit 1
fi 