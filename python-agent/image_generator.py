"""
AI Image Generator for Landing Pages
Uses DALL-E 3 via OpenAI API for original image generation
"""

import os
import logging
from typing import Optional, Dict
from openai import OpenAI

logger = logging.getLogger(__name__)

# DALL-E size mappings based on aspect ratio
DALLE_SIZES = {
    "16:9": "1792x1024",
    "4:3": "1024x1024",
    "1:1": "1024x1024",
    "9:16": "1024x1792",
    "3:4": "1024x1024",
}


class ImageGenerator:
    """Generate original images using DALL-E 3 via OpenAI"""
    
    def __init__(self):
        self.api_key = os.getenv("OPENAI_API_KEY")
        
        if not self.api_key:
            raise ValueError("OPENAI_API_KEY environment variable is required for image generation")
        
        self.client = OpenAI(api_key=self.api_key)
        self.model = "dall-e-3"
        logger.info("✅ ImageGenerator initialized with DALL-E 3")
    
    def generate_image(self, prompt: str, aspect_ratio: str = "16:9") -> Optional[str]:
        """
        Generate a single image from text prompt using DALL-E 3
        
        Args:
            prompt: Description of the image to generate
            aspect_ratio: Image aspect ratio (16:9, 1:1, etc.)
        
        Returns:
            URL of the generated image or None if failed
        """
        size = DALLE_SIZES.get(aspect_ratio, "1024x1024")
        
        try:
            logger.info(f"🎨 DALL-E 3 generating: {prompt[:60]}... (size: {size})")
            
            response = self.client.images.generate(
                model=self.model,
                prompt=prompt,
                size=size,
                quality="standard",
                n=1,
            )
            
            url = response.data[0].url
            logger.info(f"✅ Image generated successfully")
            return url
            
        except Exception as e:
            logger.error(f"❌ DALL-E 3 error: {str(e)}")
            return None
    
    def generate_images_for_landing(self, business_name: str, business_type: str, style: str = "modern") -> Dict[str, Optional[str]]:
        """
        Generate a set of images for a landing page
        
        Returns dict with keys: hero, feature_1, feature_2, feature_3
        """
        images = {}
        
        # Hero image
        hero_prompt = (
            f"Professional hero banner photo for {business_name}, a {business_type}. "
            f"{style} style. High quality, cinematic lighting, no text or logos. "
            f"Photorealistic, editorial quality."
        )
        images['hero'] = self.generate_image(hero_prompt, "16:9")
        
        # Feature images (2 to keep costs down)
        feature_prompts = [
            f"Professional photo representing quality and excellence for a {business_type} business. {style} style, clean composition, no text.",
            f"Professional photo representing innovation and service for a {business_type} business. {style} style, clean composition, no text.",
        ]
        
        for i, prompt in enumerate(feature_prompts):
            images[f'feature_{i+1}'] = self.generate_image(prompt, "4:3")
        
        return images


def test_image_generation():
    """Test the image generator"""
    try:
        gen = ImageGenerator()
        url = gen.generate_image("A modern coffee shop interior, warm lighting, cozy atmosphere")
        if url:
            print(f"✅ Test successful! URL: {url[:100]}...")
        else:
            print("❌ Test failed - no image generated")
    except Exception as e:
        print(f"❌ Test error: {str(e)}")


if __name__ == "__main__":
    test_image_generation()
