export default function VideoBackground() {
  return (
    <div className='absolute inset-0 overflow-hidden  p-[16px] '>
      <video
        autoPlay
        loop
        muted
        playsInline
        className='flex items-center rounded-3xl  w-full h-full object-cover'
      >
        <source src='/videos/hero-running.mp4' type='video/mp4' />
      </video>
      <div className='absolute inset-0 bg-[#f0f0f0] bg-opacity-10'>
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
