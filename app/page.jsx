import AboutSection from '@/components/organisms/AboutUsSection'
import HeroSection from '@/components/organisms/HeroSection'
import BentoGrid from '@/components/organisms/BentoGrid'
import FAQ from '@/components/organisms/FAQSection'
import NewLocation from '@/components/organisms/LocationSection'
import WednesdaySection from '@/components/organisms/WednesdaySection'

export default function Home() {
  return (
    <main className='bg-[#f0f0f0]'>
      <HeroSection />
      <AboutSection />
      <BentoGrid />
      <NewLocation />
      <WednesdaySection />
      <FAQ />
    </main>
  )
}