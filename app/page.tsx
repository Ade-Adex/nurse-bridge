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

      {/* 🌟 Anticipate Section */}
      <section
        id="anticipate"
        className="py-20 px-6 md:px-12 bg-[var(--bg-section-background)] text-center"
      >
        <div className="max-w-3xl mx-auto space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold">
            Anticipate the <span className="text-primary">NurseBridge App</span>
          </h2>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed">
            Your trusted link to verified{' '}
            <span className="font-semibold text-primary">nurses</span>,
            <span className="font-semibold"> caregivers</span>, and{' '}
            <span className="font-semibold text-primary">helpers</span>. We’re
            building a seamless bridge between compassionate professionals and
            the people who need them most.
          </p>
          <p className="text-gray-500 italic text-sm md:text-base">
            Coming soon — stay tuned for updates!
          </p>
        </div>
      </section>

      <section id="contact">
        <ContactSection />
      </section>
    </main>
  )
}
