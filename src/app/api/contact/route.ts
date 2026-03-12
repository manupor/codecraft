import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, company, projectType, message } = body;

    // Validate required fields
    if (!name || !email || !projectType || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Create email content
    const emailContent = `
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
    `.trim();

    // In production, you would integrate with an email service like:
    // - SendGrid
    // - Resend
    // - AWS SES
    // - Nodemailer with SMTP
    
    // For now, we'll log it and return success
    // You'll need to set up actual email sending
    console.log("Quote Request Received:");
    console.log(emailContent);

    // Example with fetch to a serverless email service:
    // const emailResponse = await fetch('https://api.resend.com/emails', {
    //   method: 'POST',
    //   headers: {
    //     'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({
    //     from: 'CodeCraftt <noreply@codecraftt.com>',
    //     to: 'manu@manuportuguez.com',
    //     subject: `New Quote Request from ${name}`,
    //     text: emailContent,
    //   }),
    // });

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
