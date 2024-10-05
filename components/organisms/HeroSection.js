import Button from '../atoms/Button'
import Heading from '../atoms/Typography'
import VideoBackground from '../molecules/VideoBackground'

export default function HeroSection() {
  return (
    <section className='relative h-screen'>
      <VideoBackground />
      <div className='relative h-full flex flex-col justify-center items-center text-white px-4'>
        <Heading level={1}>EveryRun Club Melbourne</Heading>
        <p className='text-xl md:text-2xl mb-8 text-center max-w-2xl'>
          Not just a run club - we're a community.
        </p>
        <div className='flex flex-col sm:flex-row gap-4'>
          <Button>Join Now</Button>
          <Button variant='secondary'>View Events</Button>
        </div>
      </div>
    </section>
  )
}
