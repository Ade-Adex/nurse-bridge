// app/page.tsx (or wherever your Home component is)
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
    <main className="min-h-screen relative scroll-smooth">
      <Image
        src={BgAttachment}
        alt="Background shape"
        className="absolute top-40 left-0 w-full -z-10"
        priority
      />

      <section id="home">
        <HeroSection />
      </section>

      <section id="services">
        <ServicesSection />
      </section>

      <section id="about">
        <HowItWorkSection />
      </section>

      <section id="join">
        <JoinTeamSection />
      </section>

      <section id="testimonials">
        <TestimonialsSection />
      </section>

      <section id="contact">
        <ContactSection />
      </section>
    </main>
  )
}
