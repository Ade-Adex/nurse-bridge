'use client'

import React from 'react'
import Image from 'next/image'
import { usePathname, useRouter } from 'next/navigation'
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from 'react-icons/fa'
import { Phone, MapPin, Mail, Send } from 'lucide-react'
import logo from '@/public/images/footer-logo.png'

const Footer = () => {
  const pathname = usePathname()
  const router = useRouter()

  // Handle smooth scroll or redirect
  const handleNavigate = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault()

    if (href.startsWith('#')) {
      if (pathname === '/') {
        // Already on homepage — smooth scroll
        const target = document.querySelector(href)
        if (target) target.scrollIntoView({ behavior: 'smooth' })
      } else {
        // Redirect to homepage, then scroll after load
        router.push('/' + href)
      }
    } else {
      router.push(href)
    }
  }

  return (
    <footer className="bg-[var(--bg-footer-background)] text-white py-14 px-6 md:px-20">
      <div className="w-full mx-auto grid grid-cols-1 md:grid-cols-5 gap-10">
        {/* Left: Logo & Buttons */}
        <div className="space-y-6">
          <div className="flex flex-col items-center">
            <Image src={logo} alt="NurseBridge Logo" width={70} height={50} />
            <span className="font-bold text-base text-white uppercase">
              NurseBridge
            </span>
          </div>

          <div className="space-y-4">
            <button className="flex items-center justify-center space-x-1 border border-white py-3 px-4 rounded-lg hover:bg-white hover:text-primary transition text-sm w-full">
              <Send className="w-5 h-5" />
              <span>Book Care Services</span>
            </button>
            <a
              href="https://wa.me/2348131952085"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-1 border border-white py-3 px-4 rounded-lg hover:bg-white hover:text-primary transition text-sm w-full"
            >
              <FaWhatsapp className="w-5 h-5" />
              <span>Connect on Whatsapp</span>
            </a>
          </div>
        </div>

        {/* Company Info */}
        <div>
          <h3 className="font-bold mb-4">Company Info</h3>
          <ul className="space-y-4 text-sm">
            <li>
              <a href="#about" onClick={(e) => handleNavigate(e, '#about')}>
                About Us
              </a>
            </li>
            <li>
              <a href="#join" onClick={(e) => handleNavigate(e, '#join')}>
                Careers
              </a>
            </li>
            <li>
              <a href="/blog" onClick={(e) => handleNavigate(e, '/blog')}>
                Blog
              </a>
            </li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h3 className="font-bold mb-4">Legal</h3>
          <ul className="space-y-4 text-sm">
            <li>
              <a href="#">Terms & Conditions</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="font-bold mb-4">Resources</h3>
          <ul className="space-y-4 text-sm">
            <li>
              <a href="#">iOS & Android</a>
            </li>
            <li>
              <a href="#">Watch a Demo</a>
            </li>
          </ul>
        </div>

        {/* Get In Touch */}
        <div className="flex flex-col">
          <h3 className="font-bold mb-4">Get In Touch</h3>
          <ul className="flex flex-col gap-y-3 text-sm">
            <li className="flex items-center gap-x-2">
              <Phone size={20} />
              <span>+234-8131952085</span>
            </li>
            <li className="flex items-center gap-x-2">
              <MapPin size={20} />
              <span>Alagbaka, Akure South. Ondo State</span>
            </li>
            <li className="flex items-center gap-x-2">
              <Mail size={24} />
              <span>Support@nursebridgeng.com</span>
            </li>
          </ul>

          {/* Socials */}
          <div className="flex justify-end space-x-4 mt-6">
            <FaFacebook className="w-5 h-5 cursor-pointer hover:text-blue-500" />
            <FaInstagram className="w-5 h-5 cursor-pointer hover:text-pink-500" />
            <FaTwitter className="w-5 h-5 cursor-pointer hover:text-sky-400" />
          </div>
        </div>
      </div>

      {/* Bottom Note */}
      <div className="text-center text-xs text-gray-300 mt-12 hidden">
        Made With Love By Figmaland All Right Reserved
      </div>
    </footer>
  )
}

export default Footer
