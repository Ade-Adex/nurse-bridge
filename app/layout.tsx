import type { Metadata } from 'next'
import { inter, montserrat } from '@/app/fonts/fonts'
import './globals.css'
import Footer from '@/app/components/footer/Footer'
import Navbar from '@/app/components/navbar/Navbar'

// Mantine provider
import { MantineProvider } from '@mantine/core'

export const metadata: Metadata = {
  title: 'Nurse Bridge',
  description: 'Discover Top Care Professional Experts Easily',
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${montserrat.variable} antialiased`}>
        <MantineProvider theme={{ fontFamily: 'Inter, sans-serif' }}>
          <Navbar />
          {children}
          <Footer />
        </MantineProvider>
      </body>
    </html>
  )
}
