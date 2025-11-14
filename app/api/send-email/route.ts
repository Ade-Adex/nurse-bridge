import { NextResponse } from 'next/server'
import { Resend } from 'resend'
import { generateEmailTemplate } from '@/app/lib/emailTemplate'

const apiKey = process.env.RESEND_API_KEY as string
const resend = new Resend(apiKey)

export async function POST(req: Request) {
  try {
    // ✅ Accept all form fields
    const {
      firstName,
      lastName,
      email,
      message,
    }: {
      firstName: string
      lastName: string
      email: string
      message: string
    } = await req.json()

    const companyName = process.env.COMPANY_NAME || 'Nurse Bridge'

    // ✅ Validate incoming data server-side
    if (!firstName || !lastName || !email || !message) {
      return NextResponse.json(
        {
          error:
            'All fields (first name, last name, email, message) are required.',
        },
        { status: 400 }
      )
    }

    // ✅ Generate email HTML template
    const fullMessage = `${firstName} ${lastName} says: ${message}`
    const emailTemplate = generateEmailTemplate(email, fullMessage, companyName)

    // ✅ Send email through Resend
    const response = await resend.emails.send({
      from: process.env.RESEND_SENDER || 'onboarding@resend.dev',
      to: process.env.RESEND_RECIPIENT || '', 
      subject: `New Contact Message from ${firstName} ${lastName}`,
      html: emailTemplate,
    })

    if ('error' in response && response.error) {
      console.error('Resend send error:', response.error)
      return NextResponse.json(
        { error: response.error.message || 'Failed to send email.' },
        { status: 500 }
      )
    }

    return NextResponse.json({
      message:
        'Thank you for contacting Nurse Bridge! We have received your message and will get back to you shortly.',
    })
  } catch (error) {
    console.error('Send email error:', error)
    const errMsg =
      error instanceof Error ? error.message : 'An unexpected error occurred.'
    return NextResponse.json({ error: errMsg }, { status: 500 })
  }
}

// Optional guard for GET requests
export function GET() {
  return NextResponse.json({ error: 'Method not allowed' }, { status: 405 })
}
