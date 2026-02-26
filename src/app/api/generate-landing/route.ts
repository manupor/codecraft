import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { prompt } = body;

  if (!prompt || typeof prompt !== "string") {
    return NextResponse.json(
      { error: "Invalid prompt provided" },
      { status: 400 }
    );
  }

  const apiKey = process.env.V0_API_KEY;

  // For now, use mock data by default since V0 API integration needs proper setup
  // TODO: Once V0 API is properly configured and tested, remove this block
  console.log("Generating landing page for prompt:", prompt.substring(0, 50) + "...");
  
  // Try V0 API if key is configured
  if (apiKey && apiKey !== "your_v0_api_key_here") {
    try {
      console.log("Attempting V0 API call...");
      
      const response = await fetch("https://api.v0.dev/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          model: "v0-1",
          messages: [
            {
              role: "user",
              content: `Create a complete, high-converting landing page for: ${prompt}. 
              
Requirements:
- Responsive, mobile-first design
- Modern aesthetic matching the requested color scheme
- Hero section with compelling headline and clear CTA
- Benefits/Features section
- Social proof/testimonials
- Contact form or lead capture
- Professional footer
- Use Tailwind CSS for styling
- Fully functional and ready to deploy

Make it conversion-optimized and visually appealing.`,
            },
          ],
        }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("V0 API success:", data);
        
        const demoUrl = data.url || data.demo || "";
        const files = data.code?.files || data.files || [];

        return NextResponse.json({
          demoUrl,
          files,
          chatId: data.id || `v0-${Date.now()}`,
        });
      } else {
        const errorText = await response.text();
        console.error("V0 API error:", response.status, errorText);
        // Fall through to mock data
      }
    } catch (error) {
      console.error("V0 API exception:", error);
      // Fall through to mock data
    }
  }

  // Use mock data (either no API key or API failed)
  console.log("Using mock data for generation");
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

// Mock functions for development
function generateMockDemoUrl(prompt: string): string {
  // Return a data URL with embedded HTML for demo purposes
  const html = generateMockHTML(prompt);
  return `data:text/html;charset=utf-8,${encodeURIComponent(html)}`;
}

function generateMockCode(prompt: string): string {
  const businessMatch = prompt.match(/(?:for|about)\s+(?:a\s+)?([^,\.]+)/i);
  const businessName = businessMatch ? businessMatch[1].trim() : "Your Business";

  return `export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Hero Section */}
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

      {/* Features */}
      <section className="container mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-center mb-12">Why Choose Us</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Feature {i}</h3>
              <p className="text-gray-400">Amazing feature description here</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-6 py-20 text-center">
        <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
        <button className="bg-green-500 hover:bg-green-400 text-black font-bold py-4 px-8 rounded-lg text-lg transition">
          Contact Us Now
        </button>
      </section>
    </div>
  );
}`;
}

function generateMockHTML(prompt: string): string {
  // Extract business type/name
  const businessMatch = prompt.match(/(?:landing page (?:for|of|about))\s+(?:a\s+)?([^,\.]+)/i);
  const businessName = businessMatch ? businessMatch[1].trim() : "Your Business";
  
  // Extract color preferences
  let primaryColor = "blue";
  let accentColor = "sky";
  let gradientFrom = "blue-900";
  let gradientTo = "blue-950";
  
  if (prompt.toLowerCase().includes("blue")) {
    primaryColor = "blue";
    accentColor = "sky";
    gradientFrom = "blue-900";
    gradientTo = "blue-950";
  } else if (prompt.toLowerCase().includes("green")) {
    primaryColor = "green";
    accentColor = "emerald";
    gradientFrom = "green-900";
    gradientTo = "green-950";
  } else if (prompt.toLowerCase().includes("red")) {
    primaryColor = "red";
    accentColor = "rose";
    gradientFrom = "red-900";
    gradientTo = "red-950";
  } else if (prompt.toLowerCase().includes("purple")) {
    primaryColor = "purple";
    accentColor = "violet";
    gradientFrom = "purple-900";
    gradientTo = "purple-950";
  }

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${businessName} - Professional Landing Page</title>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gradient-to-b from-${gradientFrom} to-${gradientTo} text-white">
  <!-- Hero Section -->
  <section class="container mx-auto px-6 py-20 text-center">
    <h1 class="text-5xl md:text-7xl font-bold mb-6 leading-tight">
      Transform Your Business with <br/>
      <span class="text-${accentColor}-400">${businessName}</span>
    </h1>
    <p class="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
      ${prompt.length > 100 ? prompt.substring(0, 150) + '...' : 'Discover innovative solutions tailored to your needs. We deliver excellence in every project.'}
    </p>
    <div class="flex gap-4 justify-center flex-wrap">
      <button class="bg-${accentColor}-500 hover:bg-${accentColor}-400 text-white font-bold py-4 px-8 rounded-lg text-lg transition shadow-lg">
        Get Started Now
      </button>
      <button class="border-2 border-${accentColor}-400 hover:bg-${accentColor}-400/10 text-white font-bold py-4 px-8 rounded-lg text-lg transition">
        Learn More
      </button>
    </div>
  </section>

  <!-- Features Section -->
  <section class="container mx-auto px-6 py-20">
    <h2 class="text-4xl font-bold text-center mb-12">Why Choose Us</h2>
    <div class="grid md:grid-cols-3 gap-8">
      <div class="bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-${accentColor}-500/20 hover:border-${accentColor}-500/50 transition">
        <div class="w-12 h-12 bg-${accentColor}-500/20 rounded-lg flex items-center justify-center mb-4">
          <svg class="w-6 h-6 text-${accentColor}-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
          </svg>
        </div>
        <h3 class="text-xl font-semibold mb-3">Premium Quality</h3>
        <p class="text-gray-400">We deliver exceptional quality in everything we do, ensuring your complete satisfaction.</p>
      </div>
      <div class="bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-${accentColor}-500/20 hover:border-${accentColor}-500/50 transition">
        <div class="w-12 h-12 bg-${accentColor}-500/20 rounded-lg flex items-center justify-center mb-4">
          <svg class="w-6 h-6 text-${accentColor}-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
          </svg>
        </div>
        <h3 class="text-xl font-semibold mb-3">Lightning Fast</h3>
        <p class="text-gray-400">Quick turnaround times without compromising on quality or attention to detail.</p>
      </div>
      <div class="bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-${accentColor}-500/20 hover:border-${accentColor}-500/50 transition">
        <div class="w-12 h-12 bg-${accentColor}-500/20 rounded-lg flex items-center justify-center mb-4">
          <svg class="w-6 h-6 text-${accentColor}-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
        </div>
        <h3 class="text-xl font-semibold mb-3">Best Value</h3>
        <p class="text-gray-400">Competitive pricing that delivers outstanding value for your investment.</p>
      </div>
    </div>
  </section>

  <!-- Testimonials Section -->
  <section class="container mx-auto px-6 py-20">
    <h2 class="text-4xl font-bold text-center mb-12">What Our Clients Say</h2>
    <div class="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
      <div class="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-${accentColor}-500/20">
        <div class="flex gap-1 mb-4">
          ${Array(5).fill('<span class="text-yellow-400">★</span>').join('')}
        </div>
        <p class="text-gray-300 mb-4">"Absolutely fantastic service! Exceeded all expectations and delivered exactly what we needed."</p>
        <p class="font-semibold text-${accentColor}-400">Sarah Johnson</p>
        <p class="text-sm text-gray-400">CEO, Tech Innovations</p>
      </div>
      <div class="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-${accentColor}-500/20">
        <div class="flex gap-1 mb-4">
          ${Array(5).fill('<span class="text-yellow-400">★</span>').join('')}
        </div>
        <p class="text-gray-300 mb-4">"Professional, reliable, and a pleasure to work with. Highly recommend to anyone!"</p>
        <p class="font-semibold text-${accentColor}-400">Michael Chen</p>
        <p class="text-sm text-gray-400">Marketing Director</p>
      </div>
    </div>
  </section>

  <!-- CTA Section -->
  <section class="container mx-auto px-6 py-20 text-center">
    <div class="max-w-3xl mx-auto bg-gradient-to-r from-${accentColor}-600 to-${primaryColor}-600 p-12 rounded-2xl">
      <h2 class="text-4xl font-bold mb-6">Ready to Get Started?</h2>
      <p class="text-xl mb-8 text-${accentColor}-100">Join hundreds of satisfied customers who trust us with their success.</p>
      <form class="flex gap-4 max-w-md mx-auto">
        <input type="email" placeholder="Enter your email" class="flex-1 px-6 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white" />
        <button class="bg-white hover:bg-gray-100 text-${primaryColor}-600 font-bold px-8 py-3 rounded-lg transition">
          Start Now
        </button>
      </form>
    </div>
  </section>

  <!-- Footer -->
  <footer class="border-t border-white/10 py-12">
    <div class="container mx-auto px-6 text-center">
      <p class="text-gray-400 mb-4">© ${new Date().getFullYear()} ${businessName}. All rights reserved.</p>
      <div class="flex gap-6 justify-center text-sm text-gray-500">
        <a href="#" class="hover:text-${accentColor}-400 transition">Privacy Policy</a>
        <a href="#" class="hover:text-${accentColor}-400 transition">Terms of Service</a>
        <a href="#" class="hover:text-${accentColor}-400 transition">Contact</a>
      </div>
    </div>
  </footer>
</body>
</html>`;
}
