# Landing Page Generator - Python AI Agent

This Python agent uses OpenAI GPT-4 or Anthropic Claude to generate professional landing pages based on natural language prompts, similar to Vercel V0.

## Features

- 🤖 AI-powered landing page generation
- 🎨 Follows exact prompt instructions (colors, business type, CTA, etc.)
- 🔄 Supports iterations and feedback (like V0)
- 📱 Generates responsive, mobile-first designs
- ⚡ Returns both HTML and React/Next.js code
- 🎯 Conversion-optimized templates

## Setup

1. Install dependencies:
```bash
cd python-agent
pip install -r requirements.txt
```

2. Create `.env` file:
```bash
cp .env.example .env
```

3. Add your API key to `.env`:
```
OPENAI_API_KEY=sk-...
# OR
ANTHROPIC_API_KEY=sk-ant-...
```

4. Run the server:
```bash
python server.py
```

The server will start on `http://localhost:5000`

## API Endpoints

### POST /generate
Generate a new landing page from a prompt.

**Request:**
```json
{
  "prompt": "Landing page for a hair salon in Heredia, Costa Rica. Elegant style, dark rose colors, CTA: Book appointment online."
}
```

**Response:**
```json
{
  "success": true,
  "html": "<!DOCTYPE html>...",
  "react_code": "export default function...",
  "provider": "openai"
}
```

### POST /iterate
Iterate on an existing design with feedback.

**Request:**
```json
{
  "original_prompt": "Landing page for a hair salon...",
  "feedback": "Make the hero section bigger and add more testimonials"
}
```

### GET /health
Check server status.

## Usage with Next.js

The Next.js API route at `/api/generate-landing` will automatically call this Python agent when available.

## Testing

Run the generator directly:
```bash
python landing_generator.py
```

This will generate a test landing page and save it to `generated_landing.html`.

## Production Deployment

For production, use gunicorn:
```bash
gunicorn -w 4 -b 0.0.0.0:5000 server:app
```

Or deploy to:
- Railway
- Render
- Heroku
- AWS Lambda (with Mangum adapter)
