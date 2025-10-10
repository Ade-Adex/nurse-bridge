'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import * as Yup from 'yup'
import supportImg from '@/public/images/Gemini_Generated_Image_6bf2l96bf2l96bf2 1.png'

// Define the form data type
interface FormData {
  firstName: string
  lastName: string
  email: string
  message: string
}

// Define status type
interface Status {
  type: 'success' | 'error'
  message: string
}

const ContactSection = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  })
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState<Status | null>(null)

  // ✅ Yup validation schema
  const schema = Yup.object({
    firstName: Yup.string().required('First name is required.'),
    lastName: Yup.string().required('Last name is required.'),
    email: Yup.string()
      .email('Invalid email address.')
      .required('Email is required.'),
    message: Yup.string().required('Message is required.'),
  })

  // Handle input changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  // ✅ Handle form submit
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus(null)

    try {
      // Validate input data with Yup
      await schema.validate(formData, { abortEarly: false })
      setLoading(true)

      // ✅ Send all fields to API
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      const data: { message?: string; error?: string } = await response.json()

      if (response.ok) {
        setStatus({
          type: 'success',
          message:
            data.message ||
            'Message sent successfully! We will get back to you soon.',
        })
        setFormData({ firstName: '', lastName: '', email: '', message: '' })
      } else {
        setStatus({
          type: 'error',
          message:
            data.error || 'Something went wrong. Please try again later.',
        })
      }
    } catch (error: unknown) {
      if (error instanceof Yup.ValidationError) {
        setStatus({
          type: 'error',
          message: error.errors.join(' '),
        })
      } else {
        setStatus({
          type: 'error',
          message: 'An unexpected error occurred. Please try again later.',
        })
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="py-20 px-4 md:px-20">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-secondary">
          Contact <span className="text-primary">Us</span>
        </h2>
        <p className="mt-3 text-secondary font-semibold">
          Need Help? <span className="text-primary">Our Team</span> Is Here for
          You <span className="text-primary">24/7</span>.
        </p>
      </div>

      {/* Content */}
      <div className="grid lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
        {/* Image */}
        <div className="flex justify-center">
          <Image
            src={supportImg}
            alt="Customer Support"
            width={400}
            height={400}
            className="rounded-2xl shadow-md object-cover"
          />
        </div>

        {/* Form */}
        <div className="bg-white rounded-2xl shadow-md md:p-8">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              className="w-full border border-slate-300 rounded-lg p-3 focus:outline-none focus:border-primary"
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              className="w-full border border-slate-300 rounded-lg p-3 focus:outline-none focus:border-primary"
            />
            <input
              type="email"
              name="email"
              placeholder="Enter your email address"
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-slate-300 rounded-lg p-3 focus:outline-none focus:border-primary"
            />
            <textarea
              name="message"
              rows={5}
              placeholder="Write something..."
              value={formData.message}
              onChange={handleChange}
              className="w-full border border-slate-300 rounded-lg p-3 focus:outline-none focus:border-primary"
            ></textarea>

            {status && (
              <p
                className={`text-sm ${
                  status.type === 'success' ? 'text-green-600' : 'text-red-600'
                }`}
              >
                {status.message}
              </p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full py-2 text-white rounded-md shadow-lg hover:scale-105 transition-transform duration-300 font-medium bg-gradient-to-r from-[#0A59A8] to-[#042749] disabled:opacity-50"
            >
              {loading ? 'Sending...' : 'Send'}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
