import { NextResponse } from 'next/server'
import { Resend } from 'resend'

// Check if API key exists
if (!process.env.RESEND_API_KEY) {
  console.error('RESEND_API_KEY is not defined in environment variables')
}

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    // Validate API key
    if (!process.env.RESEND_API_KEY) {
      throw new Error('Resend API key is not configured')
    }

    const { from_name, reply_to, message } = await request.json()

    // Validate required fields
    if (!from_name || !reply_to || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    const data = await resend.emails.send({
      from: 'Portfolio Contact Form <onboarding@resend.dev>',
      to: 'harshmaniya03@gmail.com',
      subject: `New Contact Form Message from ${from_name}`,
      reply_to: reply_to,
      text: `Name: ${from_name}\nEmail: ${reply_to}\n\nMessage:\n${message}`,
    })

    return NextResponse.json(data)
  } catch (error) {
    console.error('Email send error:', error)
    return NextResponse.json(
      { 
        error: 'Failed to send email',
        details: process.env.NODE_ENV === 'development' ? error : undefined
      }, 
      { status: 500 }
    )
  }
} 