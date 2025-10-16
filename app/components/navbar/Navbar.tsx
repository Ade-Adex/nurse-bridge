'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { Menu, Burger } from '@mantine/core'
import logo from '@/public/images/logo.png'
import Button from '@/app/components/ui/Button'
import { navLinks } from '@/app/components/navbar/navLinks'
import '@mantine/core/styles.css'

const Navbar = () => {
  const pathname = usePathname()
  const router = useRouter()
  const [activeSection, setActiveSection] = useState<string>('home')

  // Smooth scroll handler
  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (href.startsWith('#')) {
      e.preventDefault()
      const sectionId = href.substring(1)

      if (pathname !== '/') {
        // If on another page, navigate to home first with hash
        router.push('/' + href)
        return
      }

      const target = document.getElementById(sectionId)
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  // Detect which section is in view
  useEffect(() => {
    if (pathname !== '/') return // Only run observer on homepage

    const sectionIds = navLinks
      .filter((link) => link.href.startsWith('#'))
      .map((link) => link.href.substring(1))

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      {
        rootMargin: '-50% 0px -50% 0px',
        threshold: 0,
      }
    )

    sectionIds.forEach((id) => {
      const section = document.getElementById(id)
      if (section) observer.observe(section)
    })

    return () => observer.disconnect()
  }, [pathname])

  return (
    <nav className="fixed top-0 left-0 w-full z-40 flex items-center justify-between px-8 md:px-20 py-4 bg-white shadow-sm">
      {/* Logo */}
      <Link href="/" className="flex items-center space-x-2">
        <Image src={logo} alt="Nurse Bridge Logo" width={50} height={50} />
        <span className="font-bold text-lg text-secondary">NurseBridge NG</span>
      </Link>

      {/* Desktop NavLinks */}
      <div className="hidden lg:flex items-center space-x-6">
        {navLinks.map((link) => {
          const isActive =
            pathname === link.href ||
            (link.href.startsWith('#') &&
              activeSection === link.href.substring(1))

          return (
            <Link
              key={link.name}
              href={pathname === '/' ? link.href : '/' + link.href}
              onClick={(e) => handleScroll(e, link.href)}
              className={`relative font-bold text-lg px-3 py-1 transition ${
                isActive ? 'text-primary' : 'text-secondary hover:text-primary'
              }`}
            >
              {link.name}
              {isActive && (
                <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-primary rounded-bl-full rounded-br-full" />
              )}
            </Link>
          )
        })}

        {/* Join Button */}
        {/* <Button href="/join" gradient="blueToDark" size="md">
          Join us
        </Button> */}
        <a
          href="https://wa.me/2348131952085"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block text-white rounded-md shadow-lg hover:scale-105 transition-transform duration-300 font-medium bg-gradient-to-r from-[#0A59A8] to-[#042749] px-3 py-1 text-sm md:px-5 md:py-2 md:text-base"
        >
          Join us
        </a>
      </div>

      {/* Mobile Menu */}
      <div className="lg:hidden">
        <Menu shadow="md" width={200} position="bottom-end">
          <Menu.Target>
            <Burger opened={false} aria-label="Toggle navigation" />
          </Menu.Target>

          <Menu.Dropdown>
            {navLinks.map((link) => (
              <Menu.Item
                key={link.name}
                component={Link}
                href={pathname === '/' ? link.href : '/' + link.href}
                onClick={(e) => handleScroll(e, link.href)}
              >
                <span
                  className={`font-medium ${
                    activeSection === link.href.substring(1)
                      ? 'text-primary'
                      : 'text-secondary hover:text-primary'
                  }`}
                >
                  {link.name}
                </span>
              </Menu.Item>
            ))}
            <Menu.Divider />
            <Menu.Item>
              {/* <Button
                href="/join"
                gradient="blueToDark"
                size="sm"
                className="w-full"
              >
                Join us
              </Button> */}
              <a
                href="https://wa.me/2348131952085"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-white rounded-md shadow-lg hover:scale-105 transition-transform duration-300 font-medium bg-gradient-to-r from-[#0A59A8] to-[#042749] px-3 py-1 text-sm md:px-5 md:py-2 md:text-base"
              >
                Join us
              </a>
            </Menu.Item>
          </Menu.Dropdown>
        </Menu>
      </div>
    </nav>
  )
}

export default Navbar
