import Image from 'next/image'

export default function LocationCard({
  name,
  image,
  distance,
  difficulty,
  time,
}) {
  return (
    <div className='group relative overflow-hidden rounded-lg w-full h-64'>
      <div className='relative w-full h-full'>
        <Image
          src={image}
          alt={name}
          fill
          sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
          className='object-cover transition-transform group-hover:scale-105'
          priority={false}
        />
      </div>
      <div className='absolute inset-0 bg-gradient-to-t from-black to-transparent' />
      <div className='absolute bottom-0 left-0 p-6 text-white'>
        <h3 className='text-xl font-semibold mb-2'>{name}</h3>
        <div className='flex gap-4 text-sm'>
          <span>{distance}</span>
          <span>{difficulty}</span>
          <span>{time}</span>
        </div>
      </div>
    </div>
  )
}
