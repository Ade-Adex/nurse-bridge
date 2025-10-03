import React from 'react'
import { Calendar, Stethoscope, Baby, Users, Home } from 'lucide-react'

const services = [
  {
    icon: <Calendar className="w-8 h-8 text-primary" />,
    title: 'Online Booking',
    description:
      'Pick a time that works for you whether it’s an in-person visit or a quick online consultation, booking is just a few clicks away.',
  },
  {
    icon: <Stethoscope className="w-8 h-8 text-primary" />,
    title: 'Nurse',
    description:
      'Professional nursing care at home — from vitals monitoring to wound dressing, post-surgery support, medication management, chronic illness care, and personalized recovery plans.',
  },
  {
    icon: <Baby className="w-8 h-8 text-primary" />,
    title: 'Midwife',
    description:
      'Trusted guidance and support through every stage of pregnancy, delivery, and recovery.',
  },
  {
    icon: <Users className="w-8 h-8 text-primary" />,
    title: 'Caregiver',
    description:
      'Compassionate assistance for daily living — whether elderly care, mobility support, or companionship.',
  },
  {
    icon: <Home className="w-8 h-8 text-primary" />,
    title: 'Domestic Helper',
    description:
      'Reliable help with household tasks like cooking, cleaning, and errands so your loved ones get the attention they deserve.',
  },
]

const ServicesSection = () => {
  return (
    <section className="bg-[var(--bg-section-background)] py-20 px-4 md:px-20">
      {/* Heading */}
      <div className="text-center mx-auto mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-secondary">
          Our <span className="text-primary">Services</span>
        </h2>
        <p className="mt-4 text-secondary text-lg font-semibold">
          From <span className="text-primary ">care</span> to{' '}
          <span className="text-primary">comfort</span>,{' '}
          <span className="text-primary">NurseBridge</span> links you with the{' '}
          <span className="text-primary">support</span> you need, right when you
          need it.
        </p>
      </div>

      {/* Service Cards */}
      <div className="max-w-5xl mx-auto space-y-8">
        {/* First row: custom flex widths */}
        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex-1 bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 p-6 flex flex-col items-center text-center border-2 border-primary/60">
            <div className="bg-[#FFF2D9] p-3 rounded-xl mb-4">
              {services[0].icon}
            </div>
            <h3 className="text-lg font-bold text-slate-900">
              {services[0].title}
            </h3>
            <p className="text-slate-600 text-sm mt-3">
              {services[0].description}
            </p>
          </div>

          <div className="flex-[1.7] bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 p-6 flex flex-col items-center text-center border-2 border-primary/60">
            <div className="bg-[#FFF2D9] p-3 rounded-xl mb-4">
              {services[1].icon}
            </div>
            <h3 className="text-lg font-bold text-slate-900">
              {services[1].title}
            </h3>
            <p className="text-slate-600 text-sm mt-3">
              {services[1].description}
            </p>
          </div>
        </div>

        {/* Second row: 3 equal cards */}
        <div className="grid gap-8 md:grid-cols-3">
          {services.slice(2).map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 p-6 flex flex-col items-center text-center border-2 border-primary/60"
            >
              <div className="bg-[#FFF2D9] p-3 rounded-xl mb-4">
                {service.icon}
              </div>
              <h3 className="text-lg font-bold text-slate-900">
                {service.title}
              </h3>
              <p className="text-slate-600 text-sm mt-3">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesSection
