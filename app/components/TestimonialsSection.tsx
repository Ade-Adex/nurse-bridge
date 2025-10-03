import React from 'react'
import Image1 from '@/public/images/Nursebridge  1.png'
import Image from 'next/image'

const testimonials = [
  {
    quote:
      'NurseBridge has been serving us for over a year, and I couldn’t be more satisfied. The caregivers they provide are courteous, compassionate, and deliver excellent service.',
    name: 'Mr Niyi Micheal',
    picture: Image1,
  },
  {
    quote:
      'NurseBridge has been providing excellent nursing services to my family. Their response is swift and excellent.',
    name: 'Mrs Esther',
    picture: Image1,
  },
]

const TestimonialsSection = () => {
  return (
    <section className="py-20 px-4 md:px-20">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
          Why Patients <span className="text-primary">Choose Us</span> Again and
          Again
        </h2>
        <p className="mt-3 text-secondary font-semibold">
          Don’t take our word for it. Let our{' '}
          <span className="text-primary">patients</span> do the talking
        </p>
      </div>

      {/* Testimonials */}
      <div className="grid gap-8 md:grid-cols-2 max-w-5xl mx-auto">
        {testimonials.map((t, index) => (
          <div
            key={index}
            className="flex items-center border-2 border-primary/40 rounded-xl p-6 bg-white shadow-md hover:shadow-lg transition-shadow"
          >
            <Image
              src={t.picture}
              alt={t.name}
              className="w-16 h-16 rounded-full object-cover mr-4"
            />

            <div>
              <p className="text-tertiary italic">“{t.quote}”</p>
              <p className="font-bold text-secondary">- {t.name}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default TestimonialsSection
