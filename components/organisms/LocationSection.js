import LocationCard from '../molecules/LocationCard'
import Heading from '../atoms/Typography'

export default function LocationsSection() {
  const locations = [
    {
      name: 'The Tan Track',
      image: '/images/logos/full-logo.png',
      distance: '3.8km',
      difficulty: 'Moderate',
      time: 'Tue/Thu 6am',
    },
    {
      name: 'Albert Park Lake',
      image: '/images/logos/full-logo.png',
      distance: '5km',
      difficulty: 'Easy',
      time: 'Sat 7am',
    },
    {
      name: 'Botanical Gardens',
      image: '/images/logos/full-logo.png',
      distance: '4.2km',
      difficulty: 'Easy-Moderate',
      time: 'Wed 5:30pm',
    },
  ]

  return (
    <section className='py-20 bg-gray-50'>
      <div className='container mx-auto px-4'>
        <Heading level={2} className='text-center mb-12'>
          Our Running Spots
        </Heading>
        <div className='grid md:grid-cols-3 gap-8'>
          {locations.map((location) => (
            <LocationCard key={location.name} {...location} />
          ))}
        </div>
      </div>
    </section>
  )
}
