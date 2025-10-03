'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import logo from '@/public/images/logo.png'
import Button from '@/app/components/ui/Button'

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'About us', href: '/about' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact us', href: '/contact' },
]

const Navbar = () => {
  const pathname = usePathname()

  return (
    <nav className="fixed top-0 left-0 w-full z-40 flex items-center justify-between px-8 md:px-20 py-4 bg-white shadow-sm">
      {/* Logo */}
      <Link href="/" className="flex items-center space-x-2">
        <Image src={logo} alt="Nurse Bridge Logo" width={50} height={50} />
        <span className="font-bold text-lg text-secondary">Nurse Bridge</span>
      </Link>

      {/* NavLinks */}
      <div className="hidden md:flex items-center space-x-6">
        {navLinks.map((link) => {
          const isActive = pathname === link.href
          return (
            <Link
              key={link.name}
              href={link.href}
              className={`relative font-bold text-lg px-3 py-1 transition ${
                isActive ? 'text-primary' : 'text-secondary hover:text-primary'
              }`}
            >
              {link.name}
              {isActive && (
                <span
                  className="
                    absolute left-0 -bottom-1 w-full h-[2px] 
                    bg-primary 
                    rounded-bl-full rounded-br-full 
                    "
                />
              )}
            </Link>
          )
        })}

        {/* Join Button */}
        <Button href="/join" gradient="blueToDark" size="md">
          Join us
        </Button>
      </div>
    </nav>
  )
}

export default Navbar
