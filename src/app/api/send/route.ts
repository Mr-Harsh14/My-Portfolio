import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const { from_name, reply_to, message } = await request.json()

    const data = await resend.emails.send({
      from: 'Portfolio Contact Form <onboarding@resend.dev>',
      to: 'harshmaniya03@gmail.com',
      subject: `New Contact Form Message from ${from_name}`,
      replyTo: reply_to,
      text: `Name: ${from_name}\nEmail: ${reply_to}\n\nMessage:\n${message}`,
    })

    return NextResponse.json(data)
  } catch (error) {
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 })
  }
} 