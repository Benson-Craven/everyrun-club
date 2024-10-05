export default function LocationCard({
  name,
  image,
  distance,
  difficulty,
  time,
}) {
  return (
    <div className='group relative overflow-hidden rounded-lg'>
      <img
        src={image}
        alt={name}
        className='w-full h-64 object-cover transition-transform group-hover:scale-105'
      />
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
