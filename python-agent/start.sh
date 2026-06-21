#!/bin/bash

echo "🚀 Starting Landing Page Generator - Python AI Agent"
echo ""

# Check if .env exists
if [ ! -f .env ]; then
    echo "⚠️  No .env file found. Creating from .env.example..."
    cp .env.example .env
    echo "✅ Created .env file"
    echo ""
    echo "⚠️  IMPORTANT: Please add your API key to .env file:"
    echo "   - OPENAI_API_KEY=sk-..."
    echo "   - OR ANTHROPIC_API_KEY=sk-ant-..."
    echo ""
    read -p "Press Enter after you've added your API key..."
fi

# Check if virtual environment exists
if [ ! -d "venv" ]; then
    echo "📦 Creating virtual environment..."
    python3 -m venv venv
    echo "✅ Virtual environment created"
fi

# Activate virtual environment
echo "🔧 Activating virtual environment..."
source venv/bin/activate

# Install dependencies
echo "📥 Installing dependencies..."
pip install -r requirements.txt

echo ""
echo "✅ Setup complete!"
echo ""
echo "🌐 Starting server on http://localhost:5000"
echo ""

# Start the server
python server.py
