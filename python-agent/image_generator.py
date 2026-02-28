"""
Nano Banana Image Generator
Uses Google Gemini API for AI image generation
"""

import os
import base64
from typing import Optional, Dict, List
from google import genai
from google.genai import types

class ImageGenerator:
    """Generate images using Nano Banana (Gemini Image Generation)"""
    
    def __init__(self):
        self.api_key = os.getenv("GOOGLE_API_KEY") or os.getenv("GEMINI_API_KEY")
        
        if not self.api_key:
            raise ValueError("GOOGLE_API_KEY or GEMINI_API_KEY environment variable is required")
        
        self.client = genai.Client(api_key=self.api_key)
        # Try multiple model names - Gemini image generation models
        self.models_to_try = [
            "gemini-2.0-flash-exp",
            "gemini-2.0-flash",
            "gemini-1.5-flash",
        ]
        self.model = self.models_to_try[0]
    
    def generate_image(self, prompt: str, aspect_ratio: str = "16:9") -> Optional[str]:
        """
        Generate a single image from text prompt
        
        Args:
            prompt: Description of the image to generate
            aspect_ratio: Image aspect ratio (16:9, 1:1, 9:16, 4:3, 3:4)
        
        Returns:
            Base64 encoded image data or None if failed
        """
        for model_name in self.models_to_try:
            try:
                print(f"🎨 Trying model {model_name}: {prompt[:50]}...")
                
                response = self.client.models.generate_content(
                    model=model_name,
                    contents=[f"Generate an image: {prompt}"],
                    config=types.GenerateContentConfig(
                        response_modalities=["image", "text"]
                    )
                )
                
                if not response or not response.candidates:
                    print(f"  ⚠️ No candidates in response from {model_name}")
                    continue
                
                # Extract image from response
                for part in response.candidates[0].content.parts:
                    if part.inline_data is not None:
                        # Get base64 image data
                        image_data = base64.b64encode(part.inline_data.data).decode('utf-8')
                        mime_type = part.inline_data.mime_type
                        
                        print(f"✅ Image generated successfully with {model_name} ({mime_type})")
                        self.model = model_name  # Remember working model
                        return f"data:{mime_type};base64,{image_data}"
                
                # Check if response has text (model might not support image gen)
                for part in response.candidates[0].content.parts:
                    if part.text:
                        print(f"  ⚠️ Model {model_name} returned text instead of image: {part.text[:100]}")
                
                print(f"  ❌ No image data from {model_name}")
                
            except Exception as e:
                print(f"  ❌ Error with {model_name}: {str(e)}")
                continue
        
        print("❌ All models failed to generate image")
        return None
    
    def generate_images_for_landing_page(self, business_info: Dict) -> Dict[str, str]:
        """
        Generate multiple images for a landing page
        
        Args:
            business_info: Dictionary with business details
                - business_name: Name of the business
                - business_type: Type/industry
                - style: Visual style (modern, elegant, minimalist, etc.)
                - colors: Color scheme
        
        Returns:
            Dictionary with image URLs for different sections
        """
        images = {}
        
        business_name = business_info.get('business_name', 'Business')
        business_type = business_info.get('business_type', 'service')
        style = business_info.get('style', 'modern and professional')
        colors = business_info.get('colors', 'vibrant')
        
        # Hero image - main banner
        hero_prompt = f"""
        Create a stunning hero banner image for {business_name}, a {business_type}.
        Style: {style}, {colors} colors.
        High quality, professional, eye-catching.
        No text, no logos, just the visual.
        Photorealistic, 16:9 aspect ratio.
        """
        images['hero'] = self.generate_image(hero_prompt.strip(), "16:9")
        
        # Feature/service images (3 images)
        feature_prompts = [
            f"Icon-style illustration representing quality service for {business_type}, {style} style, {colors} colors, simple, clean, 1:1 aspect ratio",
            f"Icon-style illustration representing innovation for {business_type}, {style} style, {colors} colors, simple, clean, 1:1 aspect ratio",
            f"Icon-style illustration representing customer satisfaction for {business_type}, {style} style, {colors} colors, simple, clean, 1:1 aspect ratio",
        ]
        
        for i, prompt in enumerate(feature_prompts):
            images[f'feature_{i+1}'] = self.generate_image(prompt, "1:1")
        
        # Testimonial avatars (2 images)
        avatar_prompts = [
            f"Professional headshot photo of a happy customer, diverse, friendly smile, {style} photography, neutral background, 1:1 aspect ratio",
            f"Professional headshot photo of a satisfied client, diverse, confident expression, {style} photography, neutral background, 1:1 aspect ratio",
        ]
        
        for i, prompt in enumerate(avatar_prompts):
            images[f'testimonial_{i+1}'] = self.generate_image(prompt, "1:1")
        
        return images
    
    def generate_custom_image(self, description: str, context: str = "", aspect_ratio: str = "16:9") -> Optional[str]:
        """
        Generate a custom image with additional context
        
        Args:
            description: Main image description
            context: Additional context about the business/page
            aspect_ratio: Desired aspect ratio
        
        Returns:
            Base64 encoded image data URL
        """
        full_prompt = f"{description}"
        if context:
            full_prompt += f"\n\nContext: {context}"
        
        full_prompt += "\n\nHigh quality, professional, photorealistic."
        
        return self.generate_image(full_prompt, aspect_ratio)


def test_image_generation():
    """Test the image generator"""
    try:
        generator = ImageGenerator()
        
        # Test single image
        test_prompt = "A modern coffee shop interior, warm lighting, cozy atmosphere, professional photography"
        image_url = generator.generate_image(test_prompt)
        
        if image_url:
            print("✅ Test successful! Image generated.")
            print(f"Image data URL length: {len(image_url)} characters")
        else:
            print("❌ Test failed - no image generated")
            
    except Exception as e:
        print(f"❌ Test error: {str(e)}")


if __name__ == "__main__":
    test_image_generation()
