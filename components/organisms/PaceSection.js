import PaceCard from '../molecules/PaceCard'
import Heading from '../atoms/Typography'

export default function PaceSection() {
  const paces = [
    {
      title: 'Social Runners',
      pace: '7:00-8:00 /km',
      description:
        'Perfect for beginners and those who enjoy a conversational pace.',
      icon: '/images/icons/pace-beginner.svg',
    },
    {
      title: 'Steady Runners',
      pace: '5:30-6:30 /km',
      description: 'For those looking to improve their endurance and speed.',
      icon: '/images/icons/pace-intermediate.svg',
    },
    {
      title: 'Speed Demons',
      pace: '4:00-5:00 /km',
      description: 'Challenging pace for experienced runners.',
      icon: '/images/icons/pace-advanced.svg',
    },
  ]

  return (
    <section className='py-20'>
      <div className='container mx-auto px-4'>
        <Heading level={2} className='text-center mb-12'>
          Find Your Pace
        </Heading>
        <div className='grid md:grid-cols-3 gap-8'>
          {paces.map((pace) => (
            <PaceCard key={pace.title} {...pace} />
          ))}
        </div>
      </div>
    </section>
  )
}
