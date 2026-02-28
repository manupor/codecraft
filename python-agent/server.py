from flask import Flask, request, jsonify
from flask_cors import CORS
from landing_generator import LandingPageGenerator, extract_clean_html
import os
from dotenv import load_dotenv
import logging
import traceback

load_dotenv()

app = Flask(__name__)
CORS(app, origins=["http://localhost:3000", "https://codecraftt.com"])

# Configure logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

# Initialize generator
generator = LandingPageGenerator()

@app.route('/health', methods=['GET'])
def health():
    return jsonify({
        "status": "healthy", 
        "current_provider": generator.provider,
        "available_providers": generator.available_providers,
        "image_generation_enabled": generator.enable_image_generation,
        "image_generator_available": generator.image_generator is not None,
        "openai_api_key_set": bool(os.getenv('OPENAI_API_KEY'))
    })

@app.route('/test-image', methods=['GET'])
def test_image():
    """Test if DALL-E 3 image generation works"""
    try:
        if not generator.image_generator:
            return jsonify({"error": "image_generator is None", "enable_image_generation": generator.enable_image_generation}), 500
        
        result = generator.image_generator.generate_image("A simple red circle on white background", "1:1")
        if result:
            return jsonify({"success": True, "image_url_length": len(result), "url_preview": result[:120]})
        else:
            return jsonify({"success": False, "error": "generate_image returned None"}), 500
    except Exception as e:
        return jsonify({"success": False, "error": str(e)}), 500

@app.route('/providers', methods=['GET'])
def list_providers():
    """List all available AI providers"""
    return jsonify({
        "current": generator.provider,
        "available": generator.available_providers,
        "info": {
            "openai": "GPT-4 Turbo - Best overall quality",
            "anthropic": "Claude 3.5 Sonnet - Great for complex tasks",
            "perplexity": "Llama 3.1 Sonar - Real-time web search",
            "grok": "Grok Beta - Fast and creative"
        }
    })

@app.route('/generate', methods=['POST'])
def generate():
    data = request.json
    prompt = data.get('prompt', '').strip()
    preferred_provider = data.get('provider', None)
    enable_images = data.get('enable_images', True)  # Enabled by default for production
    
    if not prompt or len(prompt) < 5:
        return jsonify({'error': 'Prompt is too short'}), 400
    
    logger.info(f"Generating landing for prompt: {prompt[:100]}...")
    logger.info(f"Image generation enabled: {enable_images}")
    logger.info(f"Global generator image_generator: {generator.image_generator is not None}")
    
    try:
        # Generate landing page with DALL-E 3 original images if enabled
        if enable_images and generator.image_generator is not None:
            try:
                logger.info("Generating landing page with DALL-E 3 original images...")
                result = generator.generate_landing_page_with_images(prompt)
                logger.info(f"✅ Generated with {result.get('images_generated', 0)} DALL-E images")
            except Exception as img_err:
                logger.warning(f"⚠️ DALL-E image generation failed: {str(img_err)}, falling back...")
                result = generator.generate_landing_page(prompt)
        else:
            logger.info("Generating landing page with Unsplash images (no DALL-E)...")
            result = generator.generate_landing_page(prompt)
        
        if result.get("success"):
            html = result.get('html', '')
            
            # Double-check HTML is clean
            if html and not html.strip().startswith('<!DOCTYPE') and not html.strip().startswith('<html'):
                logger.warning("HTML did not start with DOCTYPE, attempting extraction...")
                html = extract_clean_html(html)
                result['html'] = html
            
            logger.info(f"✅ Generated {len(html)} chars of HTML")
        else:
            logger.error(f"Generation failed: {result.get('error', 'Unknown error')}")
        
        return jsonify(result)
            
    except Exception as e:
        logger.error(f"Generation error: {traceback.format_exc()}")
        return jsonify({
            "success": False,
            "error": str(e)
        }), 500

@app.route('/iterate', methods=['POST'])
def iterate():
    """Handle iterations like V0 - user can provide feedback"""
    try:
        data = request.get_json()
        original_prompt = data.get('original_prompt', '').strip()
        feedback = data.get('feedback', '').strip()
        current_html = data.get('current_html', '')  # Current HTML for surgical edits
        preferred_provider = data.get('provider', None)
        
        if not feedback:
            return jsonify({"error": "Feedback is required"}), 400
        
        if not current_html or len(current_html) < 100:
            return jsonify({"error": "Invalid current_html provided"}), 400
        
        logger.info(f"Iterating: {feedback[:100]}...")
        
        # Create generator instance
        iteration_generator = LandingPageGenerator(
            preferred_provider=preferred_provider,
            enable_image_generation=False  # Disable images for iterations
        )
        
        # Use intelligent iteration if we have current HTML
        result = iteration_generator.generate_with_iterations(
            prompt=original_prompt,
            feedback=feedback,
            current_html=current_html
        )
        
        if result["success"]:
            html = result.get('html', '')
            
            # Validate HTML
            if not html or len(html) < 200:
                logger.error("Iteration produced invalid HTML")
                return jsonify({"error": "Iteration produced invalid HTML"}), 500
            
            # Double-check HTML is clean
            if not html.strip().startswith('<!DOCTYPE') and not html.strip().startswith('<html'):
                logger.warning("Iteration HTML did not start with DOCTYPE, attempting extraction...")
                html = extract_clean_html(html)
            
            logger.info(f"Iteration successful: {len(html)} chars of HTML")
            
            return jsonify({
                "success": True,
                "html": html,
                "react_code": result["react_code"],
                "provider": result["provider"],
                "iteration": result.get("iteration", False)
            })
        else:
            logger.error(f"Iteration failed: {result.get('error', 'Unknown error')}")
            return jsonify({
                "success": False,
                "error": result["error"]
            }), 500
            
    except Exception as e:
        logger.error(f"Iteration error: {traceback.format_exc()}")
        return jsonify({
            "success": False,
            "error": str(e)
        }), 500

if __name__ == '__main__':
    port = int(os.getenv('PORT', 5000))
    app.run(host='0.0.0.0', port=port, debug=True)
