export default function VideoBackground() {
  return (
    <div className='absolute inset-0 overflow-hidden'>
      <video
        autoPlay
        loop
        muted
        playsInline
        className='absolute top-0 left-0 w-full h-full object-cover'
      >
        <source src='/videos/hero-running.mp4' type='video/mp4' />
      </video>
      <div className='absolute inset-0 bg-black bg-opacity-50'>
        <div className='absolute bottom-0 right-0 h-28 w-64 border-2 border-white'>
          <p>
            Time in Melbourne:{' '}
            {new Date().toLocaleString('en-AU', {
              timeZone: 'Australia/Melbourne',
              hour12: false,
            })}
          </p>
        </div>
      </div>
    </div>
  )
}
