import React from 'react'
import Image from 'next/image'
import supportImg from '@/public/images/Gemini_Generated_Image_6bf2l96bf2l96bf2 1.png' 

const ContactSection = () => {
  return (
    <section className="py-20 px-4 md:px-20">
      {/* Heading */}
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
        {/* Left: Image */}
        <div className="flex justify-center">
          <Image
            src={supportImg}
            alt="Customer Support"
            width={400}
            height={400}
            className="rounded-2xl shadow-md object-cover"
          />
        </div>

        {/* Right: Form */}
        <div className="bg-white rounded-2xl shadow-md md:p-8">
          <form className="space-y-6">
            <input
              type="text"
              placeholder="First Name"
              className="w-full border border-slate-300 rounded-lg p-3 focus:outline-none focus:border-primary"
            />
            <input
              type="text"
              placeholder="Second Name"
              className="w-full border border-slate-300 rounded-lg p-3 focus:outline-none focus:border-primary"
            />
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full border border-slate-300 rounded-lg p-3 focus:outline-none focus:border-primary"
            />
            <textarea
              rows={5}
              placeholder="Write something..."
              className="w-full border border-slate-300 rounded-lg p-3 focus:outline-none focus:border-primary"
            ></textarea>
            <button
              type="submit"
              className="w-full py-2 text-white rounded-md shadow-lg hover:scale-105 transition-transform duration-300 font-medium bg-gradient-to-r from-[#0A59A8] to-[#042749]"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
