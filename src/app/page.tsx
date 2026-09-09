import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import TrustStrip from '@/components/TrustStrip'
import Services from '@/components/Services'
import FeaturedAC from '@/components/FeaturedAC'
import About from '@/components/About'
import WhyChooseUs from '@/components/WhyChooseUs'
import HowItWorks from '@/components/HowItWorks'
import BookingForm from '@/components/BookingForm'
import FAQ from '@/components/FAQ'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import MobileCTA from '@/components/MobileCTA'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <TrustStrip />
      <Services />
      <FeaturedAC />
      <About />
      <WhyChooseUs />
      <HowItWorks />
      <BookingForm />
      <FAQ />
      <Contact />
      <Footer />
      <MobileCTA />
    </main>
  )
}