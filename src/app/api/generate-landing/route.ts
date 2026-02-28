import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { prompt, images } = body;

  if (!prompt || typeof prompt !== "string") {
    return NextResponse.json(
      { error: "Invalid prompt provided" },
      { status: 400 }
    );
  }

  console.log("Generating landing page for prompt:", prompt.substring(0, 50) + "...");
  if (images && images.length > 0) {
    console.log(`Including ${images.length} reference images for cloning`);
  }
  
  // Try Python AI Agent first (OpenAI/Anthropic/Perplexity/Grok)
  const pythonAgentUrl = process.env.PYTHON_AGENT_URL || "http://127.0.0.1:5000";
  
  try {
    console.log(`Attempting Python AI Agent call to ${pythonAgentUrl}...`);
    
    // Add timeout to prevent hanging
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 300000); // 300 second timeout for image generation
    
    const response = await fetch(`${pythonAgentUrl}/generate`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ 
        prompt,
        images: images || [] // Send images array for vision analysis
      }),
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    if (response.ok) {
      const data = await response.json();
      console.log("✅ Python AI Agent success! Provider:", data.provider);
      
      if (data.success && data.html) {
        const html = data.html as string;
        
        // VALIDATE: Ensure we got actual HTML back, not reasoning text
        if (!html || !html.includes('<html') || html.length < 500) {
          console.error('❌ Invalid HTML received:', html?.substring(0, 200));
          throw new Error('Generated content was invalid');
        }
        
        // Check for reasoning text patterns
        if (html.includes('Given the complexities') || 
            html.includes('I understand') || 
            html.includes('Let me create')) {
          console.error('❌ HTML contains reasoning text');
          throw new Error('Response contains reasoning text instead of pure HTML');
        }
        
        // Create data URL from generated HTML
        const demoUrl = `data:text/html;charset=utf-8,${encodeURIComponent(html)}`;
        
        return NextResponse.json({
          demoUrl,
          files: [
            {
              path: "page.tsx",
              content: data.react_code || html,
            },
            {
              path: "index.html",
              content: html,
            }
          ],
          chatId: `ai-${Date.now()}`,
          provider: data.provider || "ai",
        });
      }
    } else {
      const errorText = await response.text();
      console.error("❌ Python AI Agent HTTP error:", response.status, errorText);
    }
  } catch (error: any) {
    if (error.name === 'AbortError') {
      console.error("❌ Python AI Agent timeout after 120 seconds");
    } else {
      console.error("❌ Python AI Agent exception:", error.message);
    }
    console.log("⚠️  Falling back to enhanced mock generation...");
  }

  // Use enhanced mock data
  console.log("Using enhanced mock data for generation");
  return NextResponse.json({
    demoUrl: generateMockDemoUrl(prompt),
    files: [
      {
        path: "page.tsx",
        content: generateMockCode(prompt),
      },
    ],
    chatId: `mock-${Date.now()}`,
  });
}

function generateMockDemoUrl(prompt: string): string {
  const html = generateMockHTML(prompt);
  return `data:text/html;charset=utf-8,${encodeURIComponent(html)}`;
}

function generateMockCode(prompt: string): string {
  const businessMatch = prompt.match(/(?:for|about)\s+(?:a\s+)?([^,\.]+)/i);
  const businessName = businessMatch ? businessMatch[1].trim() : "Your Business";

  return `export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <section className="container mx-auto px-6 py-20 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          Welcome to <span className="text-green-400">${businessName}</span>
        </h1>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          ${prompt.substring(0, 150)}
        </p>
        <button className="bg-green-500 hover:bg-green-400 text-black font-bold py-4 px-8 rounded-lg text-lg transition">
          Get Started
        </button>
      </section>
    </div>
  );
}`;
}

function generateMockHTML(prompt: string): string {
  const lowerPrompt = prompt.toLowerCase();
  
  // Extract business name
  let businessName = "Your Business";
  const namePatterns = [
    /(?:for|about|called)\s+(?:a\s+)?([^,\.]+?)(?:\s+in|\s+located|\s+based|,|\.|\s+that|\s+which)/i,
    /(?:landing page for|website for)\s+([^,\.]+)/i,
  ];
  
  for (const pattern of namePatterns) {
    const match = prompt.match(pattern);
    if (match && match[1]) {
      businessName = match[1].trim();
      break;
    }
  }
  
  // Extract location
  let location = "";
  const locationMatch = prompt.match(/(?:in|located in|based in|from)\s+([^,\.]+(?:,\s*[^,\.]+)?)/i);
  if (locationMatch) {
    location = locationMatch[1].trim();
  }
  
  // Extract CTA
  let ctaText = "Get Started";
  const ctaMatch = prompt.match(/CTA[:\s]+['"]([^'"]+)['"]/i);
  if (ctaMatch) {
    ctaText = ctaMatch[1].trim();
  }
  
  // Detect business type
  let headline = `Transform Your Experience with ${businessName}`;
  let subheadline = "Discover innovative solutions tailored to your needs.";
  
  if (lowerPrompt.includes("restaurant") || lowerPrompt.includes("café") || lowerPrompt.includes("cafe")) {
    headline = `Experience Authentic Cuisine at ${businessName}`;
    subheadline = location ? `Serving delicious food in ${location}` : "Where every meal is a celebration";
    ctaText = ctaText === "Get Started" ? "Reserve a Table" : ctaText;
  } else if (lowerPrompt.includes("salon") || lowerPrompt.includes("spa") || lowerPrompt.includes("beauty")) {
    headline = `Look & Feel Your Best at ${businessName}`;
    subheadline = location ? `Premium beauty services in ${location}` : "Expert care for your beauty needs";
    ctaText = ctaText === "Get Started" ? "Book Appointment" : ctaText;
  } else if (lowerPrompt.includes("gym") || lowerPrompt.includes("fitness")) {
    headline = `Transform Your Body at ${businessName}`;
    subheadline = location ? `Your fitness journey starts in ${location}` : "Achieve your fitness goals";
    ctaText = ctaText === "Get Started" ? "Start Free Trial" : ctaText;
  } else if (lowerPrompt.includes("lawyer") || lowerPrompt.includes("legal")) {
    headline = `Expert Legal Services - ${businessName}`;
    subheadline = location ? `Trusted legal representation in ${location}` : "Protecting your rights";
    ctaText = ctaText === "Get Started" ? "Free Consultation" : ctaText;
  } else if (lowerPrompt.includes("dentist") || lowerPrompt.includes("dental") || lowerPrompt.includes("clinic")) {
    headline = `Quality Healthcare at ${businessName}`;
    subheadline = location ? `Caring for your health in ${location}` : "Compassionate care";
    ctaText = ctaText === "Get Started" ? "Schedule Appointment" : ctaText;
  }
  
  // Extract colors
  let primaryColor = "#3B82F6";
  let accentColor = "#60A5FA";
  let darkBg = "#1E3A8A";
  
  if (lowerPrompt.includes("green") || lowerPrompt.includes("emerald")) {
    primaryColor = "#10B981";
    accentColor = "#34D399";
    darkBg = "#065F46";
  } else if (lowerPrompt.includes("rose") || lowerPrompt.includes("pink")) {
    primaryColor = "#F43F5E";
    accentColor = "#FB7185";
    darkBg = "#9F1239";
  } else if (lowerPrompt.includes("purple") || lowerPrompt.includes("violet")) {
    primaryColor = "#8B5CF6";
    accentColor = "#A78BFA";
    darkBg = "#5B21B6";
  } else if (lowerPrompt.includes("orange") || lowerPrompt.includes("amber")) {
    primaryColor = "#F59E0B";
    accentColor = "#FBBF24";
    darkBg = "#92400E";
  } else if (lowerPrompt.includes("teal") || lowerPrompt.includes("cyan")) {
    primaryColor = "#14B8A6";
    accentColor = "#2DD4BF";
    darkBg = "#115E59";
  }

  const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${businessName}${location ? ` - ${location}` : ''}</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <style>
    .gradient-bg { background: linear-gradient(135deg, ${darkBg} 0%, #000000 100%); }
    .btn-primary { background-color: ${primaryColor}; transition: all 0.3s ease; }
    .btn-primary:hover { background-color: ${accentColor}; transform: translateY(-2px); box-shadow: 0 10px 25px rgba(0,0,0,0.3); }
    .card { backdrop-filter: blur(10px); background: rgba(255, 255, 255, 0.05); border: 1px solid rgba(255, 255, 255, 0.1); transition: all 0.3s ease; }
    .card:hover { border-color: ${primaryColor}; background: rgba(255, 255, 255, 0.08); }
  </style>
</head>
<body class="gradient-bg text-white">
  <section class="container mx-auto px-6 py-20 text-center">
    <h1 class="text-5xl md:text-7xl font-bold mb-6 leading-tight">${headline}</h1>
    <p class="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">${subheadline}</p>
    <div class="flex gap-4 justify-center flex-wrap">
      <button class="btn-primary text-white font-bold py-4 px-8 rounded-lg text-lg">${ctaText}</button>
      <button class="border-2 text-white font-bold py-4 px-8 rounded-lg text-lg hover:bg-white/10 transition" style="border-color: ${primaryColor}">Learn More</button>
    </div>
  </section>

  <section class="container mx-auto px-6 py-20">
    <h2 class="text-4xl font-bold text-center mb-12">Why Choose Us</h2>
    <div class="grid md:grid-cols-3 gap-8">
      <div class="card p-8 rounded-xl">
        <div class="w-12 h-12 rounded-lg flex items-center justify-center mb-4" style="background-color: ${primaryColor}20">
          <svg class="w-6 h-6" style="color: ${primaryColor}" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
        </div>
        <h3 class="text-xl font-semibold mb-3">Premium Quality</h3>
        <p class="text-gray-400">We deliver exceptional quality in everything we do, ensuring your complete satisfaction.</p>
      </div>
      <div class="card p-8 rounded-xl">
        <div class="w-12 h-12 rounded-lg flex items-center justify-center mb-4" style="background-color: ${primaryColor}20">
          <svg class="w-6 h-6" style="color: ${primaryColor}" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
        </div>
        <h3 class="text-xl font-semibold mb-3">Lightning Fast</h3>
        <p class="text-gray-400">Quick turnaround times without compromising on quality or attention to detail.</p>
      </div>
      <div class="card p-8 rounded-xl">
        <div class="w-12 h-12 rounded-lg flex items-center justify-center mb-4" style="background-color: ${primaryColor}20">
          <svg class="w-6 h-6" style="color: ${primaryColor}" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
        </div>
        <h3 class="text-xl font-semibold mb-3">Best Value</h3>
        <p class="text-gray-400">Competitive pricing that delivers outstanding value for your investment.</p>
      </div>
    </div>
  </section>

  <section class="container mx-auto px-6 py-20">
    <h2 class="text-4xl font-bold text-center mb-12">What Our Clients Say</h2>
    <div class="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
      <div class="card p-6 rounded-xl">
        <div class="flex gap-1 mb-4">
          <span class="text-yellow-400">★</span><span class="text-yellow-400">★</span><span class="text-yellow-400">★</span><span class="text-yellow-400">★</span><span class="text-yellow-400">★</span>
        </div>
        <p class="text-gray-300 mb-4">"Absolutely fantastic service! Exceeded all expectations and delivered exactly what we needed."</p>
        <p class="font-semibold" style="color: ${primaryColor}">Sarah Johnson</p>
        <p class="text-sm text-gray-400">CEO, Tech Innovations</p>
      </div>
      <div class="card p-6 rounded-xl">
        <div class="flex gap-1 mb-4">
          <span class="text-yellow-400">★</span><span class="text-yellow-400">★</span><span class="text-yellow-400">★</span><span class="text-yellow-400">★</span><span class="text-yellow-400">★</span>
        </div>
        <p class="text-gray-300 mb-4">"Professional, reliable, and a pleasure to work with. Highly recommend to anyone!"</p>
        <p class="font-semibold" style="color: ${primaryColor}">Michael Chen</p>
        <p class="text-sm text-gray-400">Marketing Director</p>
      </div>
    </div>
  </section>

  <section class="container mx-auto px-6 py-20 text-center">
    <div class="max-w-3xl mx-auto p-12 rounded-2xl" style="background: linear-gradient(135deg, ${primaryColor} 0%, ${accentColor} 100%)">
      <h2 class="text-4xl font-bold mb-6">Ready to Get Started?</h2>
      <p class="text-xl mb-8">Join hundreds of satisfied customers who trust us with their success.</p>
      <form class="flex gap-4 max-w-md mx-auto">
        <input type="email" placeholder="Enter your email" class="flex-1 px-6 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white" />
        <button class="bg-white hover:bg-gray-100 text-gray-900 font-bold px-8 py-3 rounded-lg transition">Start Now</button>
      </form>
    </div>
  </section>

  <footer class="border-t border-white/10 py-12">
    <div class="container mx-auto px-6 text-center">
      <p class="text-gray-400 mb-4">© ${new Date().getFullYear()} ${businessName}. All rights reserved.</p>
      <div class="flex gap-6 justify-center text-sm text-gray-500">
        <a href="#" class="transition" style="hover: color: ${primaryColor}">Privacy Policy</a>
        <a href="#" class="transition" style="hover: color: ${primaryColor}">Terms of Service</a>
        <a href="#" class="transition" style="hover: color: ${primaryColor}">Contact</a>
      </div>
    </div>
  </footer>
</body>
</html>`;

  return htmlContent;
}
