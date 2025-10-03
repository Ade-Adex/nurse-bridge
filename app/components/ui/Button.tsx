import React from 'react'
import Link from 'next/link'

interface ButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string // required now
  gradient?: 'blueToDark' | 'darkToBlue'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  children: React.ReactNode
}

const Button: React.FC<ButtonProps> = ({
  href,
  children,
  gradient = 'blueToDark',
  size = 'md',
  className = '',
  ...props
}) => {
  const baseStyles =
    'inline-block text-white rounded-md shadow-lg hover:scale-105 transition-transform duration-300 font-medium'

  const gradients = {
    blueToDark: 'bg-gradient-to-r from-[#0A59A8] to-[#042749]',
    darkToBlue: 'bg-gradient-to-r from-[#042749] to-[#0A59A8]',
  }

  const sizes = {
    sm: 'px-3 py-1 text-sm',
    md: 'px-5 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  }

  const classNames = `${baseStyles} ${gradients[gradient]} ${sizes[size]} ${className}`

  return (
    <Link href={href} className={classNames} {...props}>
      {children}
    </Link>
  )
}

export default Button
