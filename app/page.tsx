import HeroSection from '@/app/components/HeroSection'
import Image from 'next/image'
import BgAttachment from '@/public/images/Vector1.png'
import ServicesSection from '@/app/components/ServicesSection'
import HowItWorkSection from '@/app/components/HowItWorkSection'
import JoinTeamSection from '@/app/components/JoinTeamSection'
import TestimonialsSection from '@/app/components/TestimonialsSection'
import ContactSection from '@/app/components/ContactSection'


export default function Home() {
  return (
    <main className="min-h-screen relative">
      <Image
        src={BgAttachment}
        alt="Background shape"
        className="absolute top-40 left-0 w-full -z-10"
        priority
      />
      {/* <Navbar /> */}
      <HeroSection />
      <ServicesSection />
      <HowItWorkSection />
      <JoinTeamSection />
      <TestimonialsSection />
      <ContactSection />
    </main>
  )
}
