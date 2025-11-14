import React from 'react'
import Image from 'next/image'
import nurseImg from '@/public/images/fixed-height sec-.png'
import midwifeImg from '@/public/images/fixed-height sec- (1).png'
import caregiverImg from '@/public/images/fixed-height sec- (2).png'
import domesticImg from '@/public/images/fixed-height sec- (3).png'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'

const roles = [
  { title: 'Nurse', image: nurseImg },
  { title: 'Mid Wife', image: midwifeImg },
  { title: 'Care Giver', image: caregiverImg },
  { title: 'Domestic Help', image: domesticImg },
]

const JoinTeamSection = () => {
  return (
    <section className="py-20 px-4 md:px-20 bg-[var(--bg-section-background)]">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-secondary">
          Join the <span className="text-primary">Team</span>
        </h2>
        <p className="mt-3 text-lg text-secondary font-semibold">
          Are you a{' '}
          <span className="text-primary">Nurse, Midwife, Caregiver</span> or a{' '}
          <span className="text-primary">Domestic Help?</span>
          <br />
          <span className="">
            Be part of a growing network that values compassion,
            professionalism, and integrity.
          </span>
          <br />
          <span>
            Get connected to trusted families and clients who need your service
            today!
          </span>
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {roles.map((role, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 p flex flex-col items-center text-center"
          >
            <Image
              src={role.image}
              alt={role.title}
              className="object-cover mb-4 w-full"
            />
            <h3 className="text-lg font-semibold text-slate-900 mb-2">
              {role.title}
            </h3>

            {/* Social Icons */}
            <div className="flex space-x-4 text-primary pb-6">
              <FaFacebook className="w-6 h-6 cursor-pointer hover:text-blue-600" />
              <FaInstagram className="w-6 h-6 cursor-pointer hover:text-pink-500" />
              <FaTwitter className="w-6 h-6 cursor-pointer hover:text-sky-500" />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default JoinTeamSection
