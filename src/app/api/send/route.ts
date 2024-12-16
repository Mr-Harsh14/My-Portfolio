import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

// Check if API key exists
if (!process.env.RESEND_API_KEY) {
  console.error('RESEND_API_KEY is not defined in environment variables')
}

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    // Validate API key
    if (!process.env.RESEND_API_KEY) {
      throw new Error('Resend API key is not configured')
    }

    const { from_name, reply_to, message } = await request.json()

    // Validate required fields
    if (!from_name || !reply_to || !message) {
      return NextResponse.json(
        { error: 'Missing required fields', fields: { from_name, reply_to, message } },
        { status: 400 }
      )
    }

    // Log the configuration (will help with debugging)
    console.log('Attempting to send email with config:', {
      to: 'hmaniya00@gmail.com',
      from: 'Portfolio Contact Form <onboarding@resend.dev>',
      subject: `Message from ${from_name}`,
      replyTo: reply_to
    })

    const data = await resend.emails.send({
      from: 'Portfolio Contact Form <onboarding@resend.dev>',
      to: 'hmaniya00@gmail.com',
      subject: `Message from ${from_name}`,
      replyTo: reply_to,
      text: `Name: ${from_name}\nEmail: ${reply_to}\n\nMessage:\n${message}`,
    })

    // Log successful response
    console.log('Email sent successfully:', data)

    return NextResponse.json(data)
  } catch (error) {
    // Enhanced error logging
    console.error('Email send error details:', {
      error: error instanceof Error ? error.message : 'Unknown error',
      stack: error instanceof Error ? error.stack : undefined,
      apiKey: process.env.RESEND_API_KEY ? 'Present' : 'Missing',
      environment: process.env.NODE_ENV
    })

    return NextResponse.json(
      { 
        error: 'Failed to send email',
        details: error instanceof Error ? error.message : 'Unknown error',
        env: process.env.NODE_ENV
      }, 
      { status: 500 }
    )
  }
} 