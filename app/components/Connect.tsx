// import React from 'react'
// import Button from '@/app/components/ui/Button'
// import { Mail, Phone } from 'lucide-react'
// import BgImage from '@/public/images/Rectangle 1.png'

// const Connect = () => {
//   return (
//     <div className="max-w-[1000px] mx-auto mt-5 md:mt-20 bg-white rounded-2xl shadow-lg p-8">
//       <h4 className="font-semibold text-xl">
//         Schedule care, connect with trusted professionals, and manage your
//         health from home.
//       </h4>

//       <div className="w-full items-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6 gap-8 md:gap-20">
//         {/* Email Field */}
//         <div className="flex flex-col space-y-2">
//           <label className="flex items-center space-x-2 text-tertiary font-medium">
//             <Mail className="w-5 h-5 text-primary" />
//             <span>Email Address</span>
//           </label>
//           <input
//             type="email"
//             placeholder="Enter your email"
//             className="w-full text-sm border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
//           />
//         </div>

//         {/* Contact Number Field */}
//         <div className="flex flex-col space-y-2">
//           <label className="flex items-center space-x-2 text-tertiary font-medium">
//             <Phone className="w-5 h-5 text-primary" />
//             <span>Contact Number</span>
//           </label>
//           <input
//             type="tel"
//             placeholder="Enter your phone number"
//             className="w-full text-sm border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
//           />
//         </div>

//         {/* Button */}
//         <div className="flex mt-auto">
//           <Button
//             href="/join"
//             gradient="blueToDark"
//             size="md"
//             className="w-full text-center"
//           >
//             Book Now
//           </Button>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Connect

import React from 'react'
import Button from '@/app/components/ui/Button'
import { Mail, Phone } from 'lucide-react'
import Image from 'next/image'
import BgImage from '@/public/images/Rectangle 1.png'

const Connect = () => {
  return (
    <div className="relative max-w-[1100px] mx-auto">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10 ">
        <Image
          src={BgImage}
          alt="Background"
          className="object-contain rounded-2xl "
          priority
        />
      </div>

      {/* Foreground Card */}
      <div className="relative bg-white/95 backdrop-blur-sm rounded-2xl shadow-lg p-8">
        <h4 className="font-semibold text-xl text-secondary text-center">
          Schedule care, connect with trusted professionals, and manage your
          health from home.
        </h4>

        <div className="w-full items-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6 gap-8 md:gap-20">
          {/* Email Field */}
          <div className="flex flex-col space-y-2">
            <label className="flex items-center space-x-2 text-tertiary font-medium">
              <Mail className="w-5 h-5 text-primary" />
              <span>Email Address</span>
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full text-sm border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          {/* Contact Number Field */}
          <div className="flex flex-col space-y-2">
            <label className="flex items-center space-x-2 text-tertiary font-medium">
              <Phone className="w-5 h-5 text-primary" />
              <span>Contact Number</span>
            </label>
            <input
              type="tel"
              placeholder="Enter your phone number"
              className="w-full text-sm border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          {/* Button */}
          <div className="flex mt-auto">
            {/* <Button
              href="/join"
              gradient="blueToDark"
              size="md"
              className="w-full text-center"
            >
              Book Now
            </Button> */}

            <a
              href="https://wa.me/2348131952085"
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full justify-center text-white rounded-md shadow-lg hover:scale-105 transition-transform duration-300 font-medium bg-gradient-to-r from-[#0A59A8] to-[#042749] px-3 py-1 text-sm md:px-5 md:py-2 md:text-base"
            >
              Book Now
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Connect
