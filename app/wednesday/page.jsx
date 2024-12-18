import FAQ from '@/components/organisms/FAQSection'
import WednesdayHeroSection from './components/organisms/WednesdayHeroSection'
import WednesdayAboutSection from './components/organisms/WednesdayAboutSection'
import WednesdayInfoSection from './components/organisms/WednesdayInfoSection'

export default function WednesdaySectionHome() {
  return (
    <main className='bg-[#f0f0f0]'>
      <WednesdayHeroSection />
      <WednesdayInfoSection />
      <WednesdayAboutSection />
      <FAQ />
    </main>
  )
}
