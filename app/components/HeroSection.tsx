import React from 'react'
import Image from 'next/image'
import nurse from '@/public/images/nurse.png'
import line from '@/public/images/Vector5.png'
import vector from '@/public/images/Vector.png'
import Connect from '@/app/components/Connect'
import { ChevronRight } from 'lucide-react'


const HeroSection = () => {
  return (
    <section className="flex flex-col pt-25">
      <main className="relative flex flex-col md:flex-row items-center justify-between overflow-hidden pb-20 px-4 md:px-20">
      {/* Left Content */}
        <div className="flex-1 space-y-6 relative z-10">
          <h1 className="text-3xl md:text-6xl font-bold text-slate-900 leading-snug">
            Discover Top Care <br />
            Professional Experts Easily <br />
            with{' '}
            <span className="text-primary relative inline-block">
              NurseBridge
              <Image
                src={line}
                alt="underline"
                className="absolute -bottom-2 left-0 w-full -z-10"
              />
            </span>
          </h1>
          <p className="text-base md:text-xl font-medium text-secondary">
            Connect with verified{' '}
            <span className="text-primary">care professionals</span> anywhere,
            anytime.
          </p>

          {/* Stats */}
          <div className="flex space-x-8 pt-4 max-w-[500px]">
            <div>
              <h3 className="text-base md:text-xl font-bold text-primary">
                24/7
              </h3>
              <p className="text-secondary text-sm">Online Support</p>
            </div>
            <div>
              <h3 className="text-base md:text-xl font-bold text-primary">
                100+
              </h3>
              <p className="text-secondary text-sm">
                Health Care Professionals
              </p>
            </div>
            <div>
              <h3 className="text-base md:text-xl font-bold text-primary">
                100k+
              </h3>
              <p className="text-secondary text-sm">Active Patients</p>
            </div>
          </div>

          {/* CTA Button */}
          <button className="text-white py-2 px-6 rounded-md shadow-lg hover:scale-105 transition-transform duration-300 font-bold bg-gradient-to-r from-[#042749] to-[#0A59A8] flex items-center gap-x-2">
            BOOK CARE SERVICES <ChevronRight strokeWidth={4} className="w-4 h-4" />
          </button>
        </div>

        {/* Right Image */}
        <div className="relative mt-10 md:mt-0 flex-shrink-0 z-10">
          <Image
            src={nurse}
            alt="Nurse"
            width={330}
            height={350}
            className="rounded-xl object-contain"
          />

          {/* Left Floating Badge */}
          <div className="absolute bottom-16 font-bold md:-left-30 bg-[#F6F7FF] px-4 py-1 rounded-lg shadow-md flex items-center space-x-2 border-2 border-primary">
            <span className="text-sm text-tertiary">
              ⭐ Easy Appointment Booking
            </span>
          </div>
        </div>

        {/* Right Floating Badge */}
        <div className="absolute bottom-10 max-w-[300px] font-bold right-0 md:right-10 z-20 bg-[#F6F7FF] px-4 pt-3 rounded-lg shadow-md flex flex-col items-center space-x-2 border-2 border-primary">
          <Image
            src={vector}
            alt="Nurse"
            className="object-contain object-left w-full h-8 absolute -top-5 left-5"
          />
          <span className="text-sm text-tertiary">
            Lorem ipsum dolor sit amet, ligula ego. consectetuer adipiscing elit
            doloras.
          </span>
        </div>
      </main>

      <div className="w-full relative pt-20 pb-10">
        
        {/* Connect Section */}
        <Connect />
      </div>
    </section>
  )
}

export default HeroSection
