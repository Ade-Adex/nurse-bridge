import React from 'react'
import { UserPlus, ClipboardList, HeartPulse, ArrowDown } from 'lucide-react'

const steps = [
  {
    id: 1,
    icon: <UserPlus className="w-6 h-6 text-white" />,
    title: 'Create Your Profile',
    description: 'Sign up and securely add your medical history.',
  },
  {
    id: 2,
    icon: <ClipboardList className="w-6 h-6 text-white" />,
    title: 'Choose Your Service',
    description:
      'Select the healthcare option you need — nurse, midwife, caregiver, or helper.',
  },
  {
    id: 3,
    icon: <HeartPulse className="w-6 h-6 text-white" />,
    title: 'Get Care Instantly',
    description: 'We connect you with the appropriate care provider.',
  },
]

const HowItWorkSection = () => {
  return (
    <section className="py-20 px-4 md:px-20">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-secondary">
          How <span className="text-primary">NurseBridge</span> Works
        </h2>
        <p className="mt-3 text-lg text-secondary font-semibold">
          Your <span className="text-primary">health</span> in just{' '}
          <span className="text-primary">three (3)</span> simple steps:
        </p>
      </div>

      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Left Steps */}
        <div className="flex-1 flex flex-col items-start relative">
          {steps.map((step, index) => (
            <div key={step.id} className="flex items-start gap-4 relative">
              {/* Circle with index */}
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center font-bold text-white">
                  {index + 1}
                </div>

                {/* Connector line & arrow (except last step) */}
                {index < steps.length - 1 && (
                  <div className="flex flex-col items-center">
                    <div className="w-px h-12 border-l-2 border-dashed border-secondary"></div>
                    <ArrowDown className="w-4 h-4 text-secondary" />
                  </div>
                )}
              </div>

              {/* Text content */}
              <div className="ml-2">
                <h3 className="text-lg font-bold text-slate-900">
                  {step.title}
                </h3>
                <p className="text-secondary text-sm mt-1">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Right Placeholder Card */}
        <div className="flex-1 bg-[#042749] rounded-2xl h-64 md:h-96 shadow-lg"></div>
      </div>
    </section>
  )
}

export default HowItWorkSection
