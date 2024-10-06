import AboutSection from '@/components/organisms/AboutUsSection'
import HeroSection from '@/components/organisms/HeroSection'
import LocationsSection from '@/components/organisms/LocationSection'
import PaceSection from '@/components/organisms/PaceSection'
import BentoGrid from '@/components/organisms/BentoGrid'

export default function Home() {
  return (
    <main className='bg-[#f0f0f0]'>
      <HeroSection />
      <AboutSection />
      <PaceSection />
      <BentoGrid />
      <LocationsSection />
    </main>
  )
}
