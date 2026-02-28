import os
import json
import re
from openai import OpenAI
from anthropic import Anthropic
from dotenv import load_dotenv
import requests
from image_generator import ImageGenerator

# Load environment variables from .env file
load_dotenv()

def extract_clean_html(raw_response: str) -> str:
    """
    Extrae SOLO el HTML limpio de la respuesta del modelo.
    Elimina cualquier texto de razonamiento, markdown, explicaciones.
    """
    # 1. Intenta extraer bloque ```html ... ```
    html_block = re.search(r'```html\s*([\s\S]*?)\s*```', raw_response, re.IGNORECASE)
    if html_block:
        return html_block.group(1).strip()
    
    # 2. Intenta extraer desde <!DOCTYPE html> o <html>
    html_tag = re.search(r'(<!DOCTYPE html[\s\S]*?</html>)', raw_response, re.IGNORECASE)
    if html_tag:
        return html_tag.group(1).strip()
    
    # 3. Extrae desde primer <html> al último </html>
    start = raw_response.lower().find('<html')
    end = raw_response.lower().rfind('</html>') + 7
    if start != -1 and end > start:
        return raw_response[start:end].strip()
    
    # 4. Si todo falla, busca el primer < y extrae desde ahí
    first_tag = raw_response.find('<')
    if first_tag != -1:
        return raw_response[first_tag:].strip()
    
    raise ValueError("No se pudo extraer HTML limpio de la respuesta del modelo")

class LandingPageGenerator:
    def __init__(self, preferred_provider=None, enable_image_generation=True):
        self.openai_key = os.getenv("OPENAI_API_KEY")
        self.anthropic_key = os.getenv("ANTHROPIC_API_KEY")
        self.perplexity_key = os.getenv("PERPLEXITY_API_KEY")
        self.grok_key = os.getenv("GROK_API_KEY")
        
        # Initialize image generator if enabled
        self.image_generator = None
        self.enable_image_generation = enable_image_generation
        if enable_image_generation:
            try:
                self.image_generator = ImageGenerator()
                print("✅ DALL-E 3 image generation enabled")
            except Exception as e:
                print(f"⚠️  Image generation disabled: {str(e)}")
                self.enable_image_generation = False
        
        # Determine which provider to use
        available_providers = []
        if self.openai_key:
            available_providers.append("openai")
        if self.anthropic_key:
            available_providers.append("anthropic")
        if self.perplexity_key:
            available_providers.append("perplexity")
        if self.grok_key:
            available_providers.append("grok")
        
        if not available_providers:
            raise ValueError("No API key found. Set at least one: OPENAI_API_KEY, ANTHROPIC_API_KEY, PERPLEXITY_API_KEY, or GROK_API_KEY")
        
        # Use preferred provider if available, otherwise use first available
        if preferred_provider and preferred_provider in available_providers:
            self.provider = preferred_provider
        else:
            # Priority order: grok > perplexity > openai > anthropic
            if "grok" in available_providers:
                self.provider = "grok"
            elif "perplexity" in available_providers:
                self.provider = "perplexity"
            elif "openai" in available_providers:
                self.provider = "openai"
            else:
                self.provider = "anthropic"
        
        # Initialize the appropriate client
        if self.provider == "openai":
            self.client = OpenAI(api_key=self.openai_key)
        elif self.provider == "anthropic":
            self.client = Anthropic(api_key=self.anthropic_key)
        elif self.provider == "perplexity":
            # Perplexity uses OpenAI-compatible API
            self.client = OpenAI(
                api_key=self.perplexity_key,
                base_url="https://api.perplexity.ai"
            )
        elif self.provider == "grok":
            # Grok uses OpenAI-compatible API
            self.client = OpenAI(
                api_key=self.grok_key,
                base_url="https://api.x.ai/v1"
            )
        
        self.available_providers = available_providers
    
    def generate_landing_page(self, prompt: str) -> dict:
        """Generate a complete landing page based on user prompt"""
        
        system_prompt = """CRITICAL INSTRUCTION: Your response must contain ONLY valid HTML code.
- Start your response with <!DOCTYPE html>
- End your response with </html>
- NO explanations before or after the HTML
- NO markdown code blocks (no ```html)
- NO reasoning text like "Given the complexities..."
- NO comments outside the HTML
- Just raw, clean, valid HTML from the very first character

MANDATORY: ALL CSS MUST BE EMBEDDED IN A <style> TAG IN THE <head> SECTION.
- DO NOT use external stylesheets
- DO NOT use CDN links for CSS (except Tailwind CDN is allowed)
- ALL custom styles MUST be in <style></style> tags
- The <style> tag MUST contain at least 300 lines of CSS
- If you don't include extensive CSS in <style> tags, your response will be REJECTED

You are an ELITE WEB DESIGNER who creates $50,000 landing pages for Fortune 500 companies.

Your designs are VISUALLY STUNNING, with:
- Complex, layered gradients and depth
- Sophisticated animations and micro-interactions
- Professional typography with perfect hierarchy
- Advanced CSS techniques (glassmorphism, neumorphism, parallax)
- Pixel-perfect spacing and alignment
- Award-winning color palettes

MANDATORY QUALITY STANDARDS:
- Your CSS must be EXTENSIVE (minimum 300+ lines of custom styles)
- Every section must have unique, eye-catching design
- Use advanced CSS properties: backdrop-filter, clip-path, mix-blend-mode, filter
- Implement smooth, professional animations throughout
- Create depth with layered shadows and gradients
- Design must look like it cost $50,000 to create

CRITICAL REQUIREMENTS:

1. **PURE HTML/CSS/JAVASCRIPT ONLY**
   - NO frameworks (no React, Vue, etc.)
   - NO build tools required
   - Use vanilla JavaScript for interactions
   - Use CSS Grid and Flexbox for layouts
   - Include Tailwind CSS via CDN for rapid styling

2. **DESIGN THINKING**
   - Think like a senior designer, not just a coder
   - Create visual hierarchy with typography scale
   - Use whitespace strategically
   - Apply color psychology based on business type
   - Design for emotion and conversion
   - Add micro-interactions and smooth animations

3. **STRUCTURE** (in order):
   - Hero section: Compelling headline, subheadline, primary CTA, hero image/illustration
   - Social proof bar: Trust indicators, stats, or logos
   - Features/Benefits: 3-4 key value propositions with icons
   - How it works: 3-step process (if applicable)
   - Testimonials: 2-3 real-looking testimonials with photos
   - Final CTA: Email capture form or booking section
   - Footer: Links, contact, social media

4. **VISUAL DESIGN**
   - Use STUNNING modern gradients (linear-gradient, radial-gradient)
   - Add dramatic box-shadows and text-shadows for depth
   - Implement smooth animations (fade-in, slide-up, scale on scroll)
   - Use REAL high-quality images from Unsplash with specific search terms
   - Create beautiful SVG icons inline or use Unicode symbols
   - Apply consistent spacing (8px grid system)
   - Add glassmorphism effects (backdrop-filter: blur)
   - Use CSS Grid and Flexbox for perfect layouts
   - Implement smooth transitions on all interactive elements
   - Add parallax effects on hero sections

5. **COPY & CONTENT**
   - Write compelling, benefit-focused headlines
   - Use power words and emotional triggers
   - Keep paragraphs short (2-3 lines max)
   - Include specific numbers and results
   - Create urgency without being pushy
   - Match tone to business type (professional, friendly, bold, etc.)

6. **TECHNICAL EXCELLENCE**
   - Semantic HTML5 elements
   - Mobile-first responsive design
   - Fast loading (optimize images, inline critical CSS)
   - SEO meta tags (title, description, OG tags)
   - Accessibility (ARIA labels, alt text, keyboard navigation)
   - Cross-browser compatibility

7. **EXTRACT FROM PROMPT**
   - Business name and industry
   - Target audience
   - Location (city, country)
   - Brand colors (or choose based on psychology)
   - Specific CTA text
   - Unique selling propositions
   - Any special requirements

8. **COLOR PSYCHOLOGY**
   - Blue: Trust, professionalism (finance, healthcare)
   - Green: Growth, health (wellness, eco-friendly)
   - Orange: Energy, enthusiasm (food, fitness)
   - Purple: Luxury, creativity (beauty, premium services)
   - Red: Urgency, passion (sales, restaurants)
   - Black/Gold: Premium, exclusive (luxury brands)

9. **REAL IMAGES FROM UNSPLASH** (MANDATORY - Your HTML will be REJECTED without real images!)
   
   YOU MUST INCLUDE AT LEAST 5 REAL IMAGES IN EVERY LANDING PAGE using Unsplash:
   
   USE THIS EXACT URL FORMAT: https://images.unsplash.com/photo-XXXXX?w=WIDTH&h=HEIGHT&fit=crop
   
   REAL UNSPLASH PHOTO IDs YOU MUST USE (pick the ones that best match the business):
   
   HERO/BANNER images:
   - https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&h=600&fit=crop (modern office)
   - https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1200&h=600&fit=crop (tech workspace)
   - https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1200&h=600&fit=crop (business team)
   - https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1200&h=600&fit=crop (coffee shop)
   - https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&h=600&fit=crop (retail store)
   - https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&h=600&fit=crop (restaurant)
   - https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=1200&h=600&fit=crop (luxury brand)
   - https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1200&h=600&fit=crop (fitness/gym)
   
   FEATURE/SERVICE images:
   - https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&h=400&fit=crop (teamwork)
   - https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop (analytics)
   - https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=400&fit=crop (developer)
   - https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop (collaboration)
   - https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&h=400&fit=crop (meeting)
   - https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop (customer service)
   - https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop (coding)
   - https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=600&h=400&fit=crop (mobile app)
   
   TESTIMONIAL/PEOPLE images:
   - https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop (man portrait)
   - https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop (woman portrait)
   - https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop (man professional)
   - https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop (woman smile)
   - https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop (man casual)
   - https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop (woman professional)
   
   CRITICAL: NEVER use placeholder.com, via.placeholder.com, placehold.co, or [image] text
   CRITICAL: NEVER use broken or made-up URLs
   CRITICAL: ONLY use the exact Unsplash URLs listed above
   CRITICAL: Every landing page MUST have at least 1 hero image, 2 feature images, and 2 testimonial photos

9. **ANIMATIONS** (use CSS and vanilla JS)
   - Fade-in on scroll for sections
   - Smooth scroll to anchors
   - Hover effects on buttons and cards
   - Parallax effects (subtle)
   - Loading animations for forms

10. **CONVERSION OPTIMIZATION**
    - Above-the-fold CTA (visible without scrolling)
    - Multiple CTAs throughout page
    - Social proof near CTAs
    - Reduce friction in forms (minimal fields)
    - Use contrasting colors for CTAs
    - Add trust badges and guarantees

11. **MANDATORY CSS REQUIREMENTS** (CRITICAL - Your design will be REJECTED if these are missing!)

YOU MUST INCLUDE ALL OF THESE IN YOUR <style> TAG:

A. **CSS Variables** (minimum 10 variables):
```css
:root {
  --primary: #your-color;
  --secondary: #your-color;
  --accent: #your-color;
  --gradient-1: linear-gradient(135deg, color1 0%, color2 100%);
  --gradient-2: linear-gradient(to right, color1, color2, color3);
  --shadow-sm: 0 2px 8px rgba(0,0,0,0.1);
  --shadow-md: 0 8px 24px rgba(0,0,0,0.15);
  --shadow-lg: 0 20px 60px rgba(0,0,0,0.3);
  --blur-glass: blur(10px);
  --transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
```

B. **Multiple Animations** (minimum 5 different @keyframes):
```css
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(50px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes slideInLeft {
  from { opacity: 0; transform: translateX(-50px); }
  to { opacity: 1; transform: translateX(0); }
}

@keyframes scaleIn {
  from { opacity: 0; transform: scale(0.9); }
  to { opacity: 1; transform: scale(1); }
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-20px); }
}

@keyframes shimmer {
  0% { background-position: -1000px 0; }
  100% { background-position: 1000px 0; }
}
```

C. **Hero Section** (MUST be visually stunning):
```css
.hero {
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

.hero::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%);
  animation: float 6s ease-in-out infinite;
}

.hero-content {
  position: relative;
  z-index: 2;
  text-align: center;
  animation: fadeInUp 1s ease-out;
}

.hero h1 {
  font-size: clamp(2.5rem, 8vw, 5rem);
  font-weight: 900;
  line-height: 1.1;
  margin-bottom: 1.5rem;
  background: linear-gradient(to right, #fff, #f0f0f0);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 4px 20px rgba(0,0,0,0.3);
}
```

D. **Cards with Glassmorphism** (REQUIRED):
```css
.card {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 20px;
  padding: 2rem;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  animation: fadeInUp 0.8s ease-out;
}

.card:hover {
  transform: translateY(-10px) scale(1.02);
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  border-color: rgba(255, 255, 255, 0.4);
}
```

E. **Buttons with Advanced Effects** (REQUIRED):
```css
.btn-primary {
  position: relative;
  padding: 1rem 2.5rem;
  font-size: 1.125rem;
  font-weight: 700;
  color: white;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border: none;
  border-radius: 50px;
  cursor: pointer;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(102, 126, 234, 0.4);
  transition: all 0.3s ease;
}

.btn-primary::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
  transition: left 0.5s;
}

.btn-primary:hover::before {
  left: 100%;
}

.btn-primary:hover {
  transform: translateY(-3px);
  box-shadow: 0 15px 40px rgba(102, 126, 234, 0.6);
}
```

F. **Responsive Design** (MANDATORY):
```css
@media (max-width: 768px) {
  .hero h1 { font-size: 2.5rem; }
  .card { padding: 1.5rem; }
  .grid { grid-template-columns: 1fr; }
}

@media (max-width: 480px) {
  .hero { min-height: 80vh; }
  .btn-primary { padding: 0.875rem 2rem; font-size: 1rem; }
}
```

12. **JAVASCRIPT ANIMATIONS** (REQUIRED - Add scroll animations):
```javascript
// Intersection Observer for scroll animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

document.querySelectorAll('.card, .feature, .testimonial').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(30px)';
  el.style.transition = 'all 0.6s ease-out';
  observer.observe(el);
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});
```

OUTPUT FORMAT:
Return ONLY complete, valid HTML code. No markdown, no explanations, no code blocks.

CRITICAL QUALITY CHECKLIST (Your output MUST have ALL of these):
✓ Minimum 300 lines of custom CSS in <style> tag
✓ At least 5 different @keyframes animations
✓ CSS variables for colors and effects
✓ Glassmorphism effects with backdrop-filter
✓ Multiple layered gradients
✓ Advanced box-shadows (minimum 3 different levels)
✓ Smooth transitions on ALL interactive elements
✓ JavaScript for scroll animations
✓ Responsive design with media queries
✓ Professional typography with clamp() for fluid sizing
✓ Hero section with gradient background and animations
✓ Cards with hover effects and transforms
✓ Buttons with shimmer/shine effects
✓ Real Unsplash images (no placeholders)

The final design MUST look like it was created by an elite agency and cost $50,000.
If the design looks simple or basic, it will be REJECTED.
Every section must be unique and visually impressive."""

        user_message = f"""Create an ELITE, VISUALLY STUNNING landing page for: {prompt}

CRITICAL REQUIREMENTS:
- Make it look like a $50,000 professional design
- ALL CSS MUST BE EMBEDDED IN <style> TAGS IN THE <head> SECTION
- Minimum 300 lines of custom CSS inside <style></style> tags
- Use complex gradients, glassmorphism, and advanced CSS
- Include smooth animations and micro-interactions
- Every section must be unique and eye-catching
- Professional, modern, and conversion-optimized
- DO NOT use external CSS files or links (except Tailwind CDN)

MANDATORY REAL IMAGES FROM UNSPLASH (Your HTML will be REJECTED without these):
- Hero section: MUST include a full-width image from Unsplash (pick the most relevant one for the business)
- Features section: MUST include at least 2-3 different Unsplash images
- Testimonials: MUST include profile photos from Unsplash people images
- NEVER use placeholder.com, placehold.co, or text like [image] or [photo]
- ONLY use real Unsplash URLs from the list provided in the system prompt
- Each image MUST use a DIFFERENT Unsplash photo ID

STRUCTURE REQUIRED:
<!DOCTYPE html>
<html>
<head>
  <style>
    /* YOUR 300+ LINES OF CUSTOM CSS HERE */
  </style>
</head>
<body>
  <!-- Hero with REAL Unsplash image -->
  <img src="https://images.unsplash.com/photo-XXXXX?w=1200&h=600&fit=crop" alt="Hero">
  
  <!-- Features with REAL Unsplash images -->
  <img src="https://images.unsplash.com/photo-XXXXX?w=600&h=400&fit=crop" alt="Feature">
  
  <!-- Testimonials with REAL Unsplash portrait photos -->
  <img src="https://images.unsplash.com/photo-XXXXX?w=150&h=150&fit=crop" alt="Person">
</body>
</html>

Generate the complete HTML with extensive embedded CSS, JavaScript, and REAL Unsplash images."""

        try:
            if self.provider == "openai":
                response = self.client.chat.completions.create(
                    model="gpt-4-turbo-preview",
                    messages=[
                        {"role": "system", "content": system_prompt},
                        {"role": "user", "content": user_message}
                    ],
                    temperature=0.7,
                    max_tokens=4096
                )
                html_content = response.choices[0].message.content
                
            elif self.provider == "perplexity":
                # Perplexity's best model for code generation
                response = self.client.chat.completions.create(
                    model="llama-3.1-sonar-large-128k-online",
                    messages=[
                        {"role": "system", "content": system_prompt},
                        {"role": "user", "content": user_message}
                    ],
                    temperature=0.7,
                    max_tokens=16000
                )
                html_content = response.choices[0].message.content
                
            elif self.provider == "grok":
                # Grok's latest model
                response = self.client.chat.completions.create(
                    model="grok-beta",
                    messages=[
                        {"role": "system", "content": system_prompt},
                        {"role": "user", "content": user_message}
                    ],
                    temperature=0.7,
                    max_tokens=16000
                )
                html_content = response.choices[0].message.content
                
            else:  # anthropic
                response = self.client.messages.create(
                    model="claude-3-5-sonnet-20241022",
                    max_tokens=8000,
                    system=system_prompt,
                    messages=[
                        {"role": "user", "content": user_message}
                    ],
                    temperature=0.7
                )
                html_content = response.content[0].text
            
            # Clean up the response (remove reasoning text, markdown, etc.)
            html_content = extract_clean_html(html_content)
            
            # Generate React/Next.js code version
            react_code = self._convert_to_react(html_content, prompt)
            
            return {
                "success": True,
                "html": html_content,
                "react_code": react_code,
                "provider": self.provider
            }
            
        except Exception as e:
            return {
                "success": False,
                "error": str(e)
            }
    
    def _clean_html(self, content: str) -> str:
        """Remove markdown code blocks if present"""
        content = content.strip()
        
        # Remove markdown code blocks
        if content.startswith("```html"):
            content = content[7:]
        elif content.startswith("```"):
            content = content[3:]
        
        if content.endswith("```"):
            content = content[:-3]
        
        return content.strip()
    
    def _convert_to_react(self, html: str, prompt: str) -> str:
        """Convert HTML to React/Next.js component"""
        
        # Extract business name for component
        business_name = "LandingPage"
        if "for" in prompt.lower():
            parts = prompt.lower().split("for")
            if len(parts) > 1:
                name_part = parts[1].split(",")[0].split(".")[0].strip()
                business_name = "".join([word.capitalize() for word in name_part.split()[:3]])
        
        # Basic conversion (this is simplified - in production you'd use a proper parser)
        react_code = f"""'use client';

export default function {business_name}() {{
  return (
    <>
      {html.replace('<html', '<div').replace('</html>', '</div>').replace('<body', '<div').replace('</body>', '</div>').replace('<head>', '').replace('</head>', '')}
    </>
  );
}}"""
        
        return react_code
    
    def extract_business_info(self, prompt: str) -> dict:
        """Extract business information from the prompt for image generation"""
        import re
        
        info = {
            'business_name': 'Business',
            'business_type': 'service',
            'style': 'modern and professional',
            'colors': 'vibrant'
        }
        
        # Extract business name (usually first mentioned)
        words = prompt.split()
        if 'for' in prompt.lower():
            for_index = prompt.lower().find('for')
            after_for = prompt[for_index+4:for_index+100]
            name_match = re.search(r'(?:a |an |the )?([A-Z][a-z]+(?:\s+[A-Z][a-z]+)*)', after_for)
            if name_match:
                info['business_name'] = name_match.group(1)
        
        # Extract business type
        types = ['restaurant', 'cafe', 'coffee shop', 'salon', 'spa', 'gym', 'fitness', 
                'hotel', 'store', 'shop', 'agency', 'studio', 'clinic', 'bar', 'bakery']
        for btype in types:
            if btype in prompt.lower():
                info['business_type'] = btype
                break
        
        # Extract style
        styles = ['elegant', 'modern', 'minimalist', 'luxury', 'rustic', 'vintage', 
                 'professional', 'creative', 'bold', 'clean']
        for style in styles:
            if style in prompt.lower():
                info['style'] = style
                break
        
        # Extract colors
        colors = ['blue', 'green', 'red', 'purple', 'orange', 'pink', 'black', 'white',
                 'gold', 'silver', 'rose', 'teal', 'navy']
        found_colors = [c for c in colors if c in prompt.lower()]
        if found_colors:
            info['colors'] = ', '.join(found_colors)
        
        return info
    
    def generate_landing_page_with_images(self, prompt: str) -> dict:
        """Generate landing page with original AI-generated images using DALL-E 3"""
        
        if not self.enable_image_generation or not self.image_generator:
            print("⚠️  Image generation not available, using standard generation")
            return self.generate_landing_page(prompt)
        
        print("🎨 Generating landing page with DALL-E 3 images...")
        
        # Step 1: Generate the HTML first (with Unsplash placeholders)
        result = self.generate_landing_page(prompt)
        
        if not result['success']:
            return result
        
        html = result['html']
        
        # Step 2: Extract business info for image context
        business_info = self.extract_business_info(prompt)
        print(f"📋 Business info: {business_info}")
        
        # Step 3: Find all <img> tags and replace their src with DALL-E generated images
        try:
            print("🖼️  Generating original images with DALL-E 3...")
            img_pattern = re.compile(r'<img\s+[^>]*src=["\']([^"\']+)["\'][^>]*>', re.IGNORECASE)
            img_matches = list(img_pattern.finditer(html))
            
            print(f"📸 Found {len(img_matches)} <img> tags in HTML")
            
            if len(img_matches) == 0:
                print("⚠️  No <img> tags found, returning HTML as-is")
                return result
            
            business_name = business_info.get('business_name', 'Business')
            business_type = business_info.get('business_type', 'service')
            style = business_info.get('style', 'modern and professional')
            
            images_generated = 0
            # Limit to 3 DALL-E images (hero + 2 features) to control costs (~$0.12 total)
            max_images = min(len(img_matches), 3)
            
            for i, match in enumerate(img_matches[:max_images]):
                original_src = match.group(1)
                alt_text = ""
                alt_match = re.search(r'alt=["\']([^"\']*)["\']', match.group(0), re.IGNORECASE)
                if alt_match:
                    alt_text = alt_match.group(1)
                
                # Determine image type based on position and alt text
                if i == 0:
                    img_prompt = f"Professional hero banner photograph for {business_name}, a {business_type}. {style} style. High quality, cinematic lighting, editorial quality, photorealistic. No text, no logos, no watermarks."
                    aspect = "16:9"
                else:
                    context = alt_text if alt_text and alt_text.lower() not in ['feature', 'image', 'photo'] else 'quality service'
                    img_prompt = f"Professional photograph for a {business_type} business representing {context}. {style} style, clean composition, high quality, photorealistic. No text, no logos, no watermarks."
                    aspect = "4:3"
                
                print(f"  🎨 Generating image {i+1}/{max_images}: {img_prompt[:70]}...")
                
                try:
                    image_url = self.image_generator.generate_image(img_prompt, aspect)
                    if image_url:
                        html = html.replace(original_src, image_url, 1)
                        images_generated += 1
                        print(f"  ✅ Image {i+1} generated successfully")
                    else:
                        print(f"  ⚠️  Image {i+1} failed, keeping Unsplash fallback")
                except Exception as img_err:
                    print(f"  ❌ Image {i+1} error: {str(img_err)}")
                    continue
            
            print(f"✅ Generated {images_generated}/{max_images} original DALL-E images")
            
            result['html'] = html
            result['images_generated'] = images_generated
            
        except Exception as e:
            print(f"❌ DALL-E image generation failed: {str(e)}")
            print("⚠️  Returning HTML with Unsplash fallback images")
        
        return result
    
    def iterate_page(self, current_html: str, user_request: str) -> dict:
        """
        Intelligently modify only the requested parts of the page
        Instead of regenerating everything, make surgical edits
        """
        
        iteration_prompt = f"""CRITICAL INSTRUCTION: Your response must contain ONLY valid HTML code.
- Start your response with <!DOCTYPE html>
- End your response with </html>
- NO explanations before or after the HTML
- NO markdown code blocks (no ```html)
- NO reasoning text
- Just raw, clean, valid HTML from the very first character

You are a SENIOR WEB DESIGNER making SURGICAL EDITS to an existing landing page.

CRITICAL RULES:
1. Return ONLY valid HTML — no explanations, no markdown
2. Make ONLY the specific change requested — nothing else
3. Preserve ALL existing CSS, JavaScript, structure
4. Preserve ALL existing classes, IDs, animations
5. If adding a new section, insert it in a logical position
6. Do NOT change colors unless explicitly asked
7. Do NOT change fonts unless explicitly asked
8. Do NOT change layout unless explicitly asked

CURRENT HTML:
{current_html}

REQUESTED CHANGE:
{user_request}

Return the complete HTML with ONLY this change applied."""

        try:
            if self.provider == "openai":
                response = self.client.chat.completions.create(
                    model="gpt-4-turbo-preview",
                    messages=[
                        {"role": "system", "content": "You are a senior web designer making precise, surgical edits to existing pages."},
                        {"role": "user", "content": iteration_prompt}
                    ],
                    temperature=0.3,  # Lower temperature for more precise edits
                    max_tokens=4096  # GPT-4 max completion tokens
                )
                html = response.choices[0].message.content.strip()
                
            elif self.provider == "anthropic":
                response = self.client.messages.create(
                    model="claude-3-5-sonnet-20241022",
                    max_tokens=16000,
                    temperature=0.3,
                    messages=[
                        {"role": "user", "content": iteration_prompt}
                    ]
                )
                html = response.content[0].text.strip()
                
            elif self.provider == "perplexity":
                response = self.client.chat.completions.create(
                    model="llama-3.1-sonar-large-128k-online",
                    messages=[
                        {"role": "system", "content": "You are a senior web designer making precise edits."},
                        {"role": "user", "content": iteration_prompt}
                    ],
                    temperature=0.3,
                    max_tokens=8000  # Perplexity safe limit
                )
                html = response.choices[0].message.content.strip()
                
            elif self.provider == "grok":
                response = self.client.chat.completions.create(
                    model="grok-beta",
                    messages=[
                        {"role": "system", "content": "You are a senior web designer making precise edits."},
                        {"role": "user", "content": iteration_prompt}
                    ],
                    temperature=0.3,
                    max_tokens=8000  # Grok safe limit
                )
                html = response.choices[0].message.content.strip()
            
            # Clean up the HTML (remove reasoning text, markdown, etc.)
            html = extract_clean_html(html)
            
            # Extract business name for React conversion
            title_match = re.search(r'<title>(.*?)</title>', html)
            business_name = title_match.group(1) if title_match else "LandingPage"
            business_name = re.sub(r'[^a-zA-Z0-9]', '', business_name)
            
            return {
                "success": True,
                "html": html,
                "react_code": self._convert_to_react(html, business_name),
                "provider": self.provider,
                "iteration": True
            }
            
        except Exception as e:
            return {
                "success": False,
                "error": str(e),
                "provider": self.provider
            }
    
    def generate_with_iterations(self, prompt: str, feedback: str = None, current_html: str = None) -> dict:
        """Generate with optional feedback for iterations (like V0)"""
        
        # If we have current HTML and feedback, use intelligent iteration
        if current_html and feedback:
            return self.iterate_page(current_html, feedback)
        
        # Otherwise, generate from scratch
        if feedback:
            enhanced_prompt = f"{prompt}\n\nUser feedback: {feedback}\n\nPlease update the landing page based on this feedback."
        else:
            enhanced_prompt = prompt
        
        return self.generate_landing_page_with_images(enhanced_prompt)


if __name__ == "__main__":
    # Test the generator
    generator = LandingPageGenerator()
    
    test_prompt = "Landing page for a hair salon in Heredia, Costa Rica. Elegant style, dark rose colors, CTA: Book appointment online."
    
    result = generator.generate_landing_page(test_prompt)
    
    if result["success"]:
        print("✅ Generation successful!")
        print(f"Provider: {result['provider']}")
        print(f"HTML length: {len(result['html'])} characters")
        print(f"React code length: {len(result['react_code'])} characters")
        
        # Save to file for testing
        with open("generated_landing.html", "w") as f:
            f.write(result["html"])
        print("Saved to generated_landing.html")
    else:
        print(f"❌ Error: {result['error']}")
