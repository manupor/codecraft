import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { prompt } = await req.json();

    if (!prompt || typeof prompt !== "string") {
      return NextResponse.json(
        { error: "Invalid prompt provided" },
        { status: 400 }
      );
    }

    const apiKey = process.env.V0_API_KEY;

    if (!apiKey || apiKey === "your_v0_api_key_here") {
      console.warn("V0_API_KEY not configured. Using mock data.");
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

    // Call V0 Platform API directly
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
            content: `Create a complete, high-converting landing page for the following business: ${prompt}. 
            
Requirements:
- Responsive, mobile-first design
- Modern, clean aesthetic with dark mode support
- Hero section with compelling headline and clear CTA
- Benefits/Features section highlighting key value propositions
- Social proof section with testimonials
- Contact form or lead capture
- Professional footer with links
- Spanish and English bilingual content if the business location suggests it
- Use Tailwind CSS for styling
- Fully functional and ready to deploy
- Include proper meta tags and SEO optimization

Make it conversion-optimized and visually appealing.`,
          },
        ],
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("V0 API error:", response.status, errorText);
      throw new Error(`V0 API error: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();

    // Extract demo URL and files from V0 response
    const demoUrl = data.url || data.demo || "";
    const files = data.code?.files || data.files || [];

    return NextResponse.json({
      demoUrl,
      files,
      chatId: data.id || `v0-${Date.now()}`,
    });
  } catch (error) {
    console.error("Error in generate-landing API:", error);
    
    // Fallback to mock data if V0 API fails
    try {
      const { prompt } = await req.json();
      return NextResponse.json({
        demoUrl: generateMockDemoUrl(prompt),
        files: [
          {
            path: "page.tsx",
            content: generateMockCode(prompt),
          },
        ],
        chatId: `fallback-${Date.now()}`,
        warning: "Using fallback mock data due to API error",
      });
    } catch {
      return NextResponse.json(
        { error: "Failed to generate landing page" },
        { status: 500 }
      );
    }
  }
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
  const businessMatch = prompt.match(/(?:for|about)\s+(?:a\s+)?([^,\.]+)/i);
  const businessName = businessMatch ? businessMatch[1].trim() : "Your Business";

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${businessName}</title>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gradient-to-b from-gray-900 to-black text-white">
  <section class="container mx-auto px-6 py-20 text-center">
    <h1 class="text-5xl md:text-7xl font-bold mb-6">
      Welcome to <span class="text-green-400">${businessName}</span>
    </h1>
    <p class="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
      ${prompt.substring(0, 150)}
    </p>
    <button class="bg-green-500 hover:bg-green-400 text-black font-bold py-4 px-8 rounded-lg text-lg transition">
      Get Started
    </button>
  </section>

  <section class="container mx-auto px-6 py-20">
    <h2 class="text-4xl font-bold text-center mb-12">Why Choose Us</h2>
    <div class="grid md:grid-cols-3 gap-8">
      <div class="bg-gray-800 p-6 rounded-lg">
        <h3 class="text-xl font-semibold mb-3">Quality Service</h3>
        <p class="text-gray-400">We deliver exceptional quality in everything we do</p>
      </div>
      <div class="bg-gray-800 p-6 rounded-lg">
        <h3 class="text-xl font-semibold mb-3">Fast & Reliable</h3>
        <p class="text-gray-400">Quick turnaround without compromising quality</p>
      </div>
      <div class="bg-gray-800 p-6 rounded-lg">
        <h3 class="text-xl font-semibold mb-3">Great Value</h3>
        <p class="text-gray-400">Competitive pricing with outstanding results</p>
      </div>
    </div>
  </section>

  <section class="container mx-auto px-6 py-20 text-center">
    <h2 class="text-4xl font-bold mb-6">Ready to Get Started?</h2>
    <button class="bg-green-500 hover:bg-green-400 text-black font-bold py-4 px-8 rounded-lg text-lg transition">
      Contact Us Now
    </button>
  </section>
</body>
</html>`;
}
