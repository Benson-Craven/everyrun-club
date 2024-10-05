import AboutSection from '@/components/organisms/AboutUsSection'
import HeroSection from '@/components/organisms/HeroSection'
import LocationsSection from '@/components/organisms/LocationSection'
import PaceSection from '@/components/organisms/PaceSection'

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <PaceSection />
      <LocationsSection />
    </main>
  )
}
