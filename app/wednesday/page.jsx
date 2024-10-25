import FAQ from '@/components/organisms/FAQSection'
import WednesdayHeroSection from './components/organisms/WednesdayHeroSection'

export default function WednesdaySectionHome() {
  return (
    <main className='bg-[#f0f0f0]'>
      <WednesdayHeroSection />
      <FAQ />
    </main>
  )
}
