import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export const dynamic = "force-dynamic";

export async function POST(request: NextRequest) {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error("RESEND_API_KEY is not configured");
      return NextResponse.json(
        { error: "Email service not configured" },
        { status: 500 }
      );
    }
    const resend = new Resend(apiKey);

    const body = await request.json();
    const { name, email, phone, company, projectType, message } = body;

    // Validate required fields
    if (!name || !email || !projectType || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    await resend.emails.send({
      from: "CodeCraftt <hello@codecraftt.com>",
      to: "hello@codecraftt.com",
      replyTo: email,
      subject: `New Project Inquiry: ${projectType} — ${name}`,
      text: `
New Quote Request from CodeCraftt Website

Name: ${name}
Email: ${email}
Phone: ${phone || "Not provided"}
Company: ${company || "Not provided"}
Project Type: ${projectType}

Project Details:
${message}

---
Sent from CodeCraftt Contact Form
      `.trim(),
    });

    return NextResponse.json(
      { 
        success: true, 
        message: "Quote request received. We'll contact you within 24 hours." 
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing contact form:", error);
    return NextResponse.json(
      { error: "Failed to process request" },
      { status: 500 }
    );
  }
}
