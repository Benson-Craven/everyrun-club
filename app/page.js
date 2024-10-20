import AboutSection from '@/components/organisms/AboutUsSection'
import HeroSection from '@/components/organisms/HeroSection'
import LocationsSection from '@/components/organisms/LocationSection'
import PaceSection from '@/components/organisms/PaceSection'
import BentoGrid from '@/components/organisms/BentoGrid'
import FAQ from '@/components/organisms/FAQSection'
import NewLocation from '@/components/organisms/NewLocation'

export default function Home() {
  return (
    <main className='bg-[#f0f0f0]'>
      <HeroSection />
      <AboutSection />
      {/* <PaceSection /> */}
      <BentoGrid />
      <NewLocation />
      <LocationsSection />
      <FAQ />
    </main>
  )
}
