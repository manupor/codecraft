import { NextResponse } from "next/server";

const PYTHON_AGENT_URL = process.env.PYTHON_AGENT_URL || "http://127.0.0.1:5000";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { feedback, current_html, original_prompt } = body;

    if (!feedback) {
      return NextResponse.json(
        { error: "Feedback is required" },
        { status: 400 }
      );
    }
    
    if (!current_html || current_html.length < 100) {
      return NextResponse.json(
        { error: "Invalid current_html provided" },
        { status: 400 }
      );
    }

    console.log("🔄 Iterating landing page with intelligent edits...");

    // Call Python agent's iterate endpoint
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 120000); // 2 minute timeout

    try {
      const response = await fetch(`${PYTHON_AGENT_URL}/iterate`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          feedback,
          current_html,
          original_prompt,
        }),
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error || `Python agent returned ${response.status}`);
      }

      const data = await response.json();

      if (!data.success) {
        throw new Error(data.error || "Failed to iterate landing page");
      }
      
      const html = data.html as string;
      
      // VALIDATE: Ensure iteration produced valid HTML
      if (!html || !html.includes('<html') || html.length < 200) {
        console.error('❌ Iteration produced invalid HTML:', html?.substring(0, 200));
        throw new Error('Iteration produced invalid HTML');
      }
      
      // Check for reasoning text patterns
      if (html.includes('Given the complexities') || 
          html.includes('I understand') || 
          html.includes('Let me create')) {
        console.error('❌ Iteration response contains reasoning text');
        throw new Error('Response contains reasoning text instead of pure HTML');
      }

      console.log("✅ Landing page iteration successful");
      console.log(`📊 Iteration mode: ${data.iteration ? 'Surgical edit' : 'Full regeneration'}`);

      return NextResponse.json({
        success: true,
        html: html,
        react_code: data.react_code,
        provider: data.provider,
        iteration: data.iteration,
      });

    } catch (fetchError: any) {
      clearTimeout(timeoutId);
      
      if (fetchError.name === 'AbortError') {
        throw new Error('Request timeout - iteration took too long');
      }
      throw fetchError;
    }

  } catch (error: any) {
    console.error("❌ Error in iterate-landing API:", error);
    
    return NextResponse.json(
      {
        success: false,
        error: error.message || "Failed to iterate landing page",
      },
      { status: 500 }
    );
  }
}
