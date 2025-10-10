'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft } from 'lucide-react'
import vector from '@/public/images/Vector.png'
// import nurse from '@/public/images/nurse.png'

const NotFound = () => {
  return (
    <section className="flex flex-col mt-20 items-center justify-center min-h-screen text-center bg-gradient-to-b from-[#F6F7FF] to-white px-6 relative overflow-hidden">
      {/* Background Accent */}
      <Image
        src={vector}
        alt="Background Vector"
        className="absolute top-10 right-10 opacity-10 w-40 md:w-60"
      />

      {/* Illustration */}
      {/* <div className="relative mb-8">
        <Image
          src={nurse}
          alt="Nurse Illustration"
          className="w-64 md:w-80 object-contain drop-shadow-lg"
          priority
        />
        <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-44 h-2 bg-primary/20 blur-md rounded-full"></div>
      </div> */}

      {/* Heading */}
      <h1 className="text-4xl md:text-6xl font-extrabold text-primary mb-4">
        404 - Page Not Found
      </h1>

      {/* Message */}
      <p className="text-secondary text-lg max-w-md mb-8">
        Oops! The page you’re looking for doesn’t exist or has been moved. Let’s
        get you back to safety.
      </p>

      {/* CTA */}
      <Link
        href="/"
        className="inline-flex items-center gap-2 bg-gradient-to-r from-[#042749] to-[#0A59A8] text-white px-6 py-3 rounded-md font-semibold shadow-md hover:scale-105 transition-transform"
      >
        <ArrowLeft className="w-5 h-5" />
        Back to Home
      </Link>
    </section>
  )
}

export default NotFound
