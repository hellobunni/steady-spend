import { Resend } from 'resend'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    // Check for API key
    const apiKey = process.env.RESEND_API
    if (!apiKey) {
      console.error('RESEND_API environment variable is not set')
      return NextResponse.json(
        { error: 'Email service is not configured. Please contact support.' },
        { status: 500 }
      )
    }

    const resend = new Resend(apiKey)
    const body = await request.json()
    const { name, email, message } = body

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    // Email configuration:
    // - 'to': Your email where contact form submissions are received
    // - 'from': Must be from verified domain (steadyspend.com)
    // - 'replyTo': User's email so you can reply directly to them
    const recipientEmail = process.env.CONTACT_EMAIL
    const fromEmail = process.env.FROM_EMAIL

    if (!recipientEmail) {
      console.error('CONTACT_EMAIL environment variable is not set')
      return NextResponse.json(
        { error: 'Email service is not configured. Please contact support.' },
        { status: 500 }
      )
    }

    if (!fromEmail) {
      console.error('FROM_EMAIL environment variable is not set')
      return NextResponse.json(
        { error: 'Email service is not configured. Please contact support.' },
        { status: 500 }
      )
    }

    // Send email using ReSend
    const { data, error } = await resend.emails.send({
      from: `SteadySpend <${fromEmail}>`,
      to: [recipientEmail], // This is where YOU receive the contact form submissions
      replyTo: email,
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <div style="font-family: system-ui, -apple-system, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #059669; margin-bottom: 20px;">New Contact Form Submission</h2>
          
          <div style="background: #f9fafb; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
            <p style="margin: 0 0 10px 0;"><strong>Name:</strong> ${name}</p>
            <p style="margin: 0 0 10px 0;"><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p style="margin: 0;"><strong>Message:</strong></p>
            <p style="margin: 10px 0 0 0; white-space: pre-wrap;">${message}</p>
          </div>
          
          <p style="color: #6b7280; font-size: 14px; margin-top: 20px;">
            You can reply directly to this email to respond to ${name}.
          </p>
        </div>
      `,
      text: `
New Contact Form Submission

Name: ${name}
Email: ${email}

Message:
${message}

---
You can reply directly to this email to respond to ${name}.
      `,
    })

    if (error) {
      console.error('ReSend error:', error)
      return NextResponse.json(
        { error: error.message || 'Failed to send email. Please try again later.' },
        { status: 500 }
      )
    }

    return NextResponse.json(
      { success: true, messageId: data?.id },
      { status: 200 }
    )
  } catch (error) {
    console.error('Contact form error:', error)
    const errorMessage = error instanceof Error ? error.message : 'Internal server error'
    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    )
  }
}
