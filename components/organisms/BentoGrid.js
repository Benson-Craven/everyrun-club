'use client'

import { Video, Music, Camera, Users, Trophy, Calendar } from 'lucide-react'
import { useSpring, animated } from 'react-spring'

function Number({ n }) {
  const { number } = useSpring({
    from: { number: 0 },
    number: n,
    delay: 200,
    config: { mass: 1, tension: 20, friction: 10 },
  })
  return <animated.div>{number.to((n) => n.toFixed(0))}</animated.div>
}

export default function BentoGrid() {
  return (
    <div className='container mx-auto p-4 '>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-4 max-w-6xl mx-auto'>
        {/* Large feature box */}
        <div className='md:col-span-2 row-span-2 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-xl p-6 aspect-square md:aspect-auto flex flex-col justify-between text-white transition-transform hover:scale-[1.02]'>
          <div>
            <Video className='w-8 h-8 mb-4' />
            <h2 className='text-2xl font-bold mb-2'>Featured Content</h2>
            <p className='text-purple-100'>
              Discover our latest running events and training sessions captured
              in high quality.
            </p>
          </div>
          <button className='mt-4 bg-white text-purple-600 px-4 py-2 rounded-lg font-medium hover:bg-purple-100 transition-colors'>
            Watch Now
          </button>
        </div>

        {/* Music Integration */}
        <div className='bg-rose-100 rounded-xl p-6 aspect-square flex flex-col justify-between hover:bg-rose-200 transition-all'>
          <Music className='w-6 h-6 text-rose-600' />
          <div>
            <h3 className='text-lg font-semibold text-rose-900 mt-4'>
              EveryRun Playlist
            </h3>
            <p className='text-rose-700 text-sm mt-1'>
              Curated beats for your perfect run
            </p>
          </div>
        </div>

        <div className='relative overflow-hidden rounded-xl aspect-square group'>
          <video
            autoPlay
            loop
            muted
            playsInline
            src='/videos/hero-running.mp4'
            alt='Group Run'
            className='object-cover w-full h-full transition-transform group-hover:scale-105'
          />
          <div className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-6'>
            <h3 className='text-lg font-semibold text-white'>
              Wednesday Warriors
            </h3>
            <p className='text-sm text-gray-200'>
              Join our weekday morning runs
            </p>
          </div>
        </div>

        {/* Photo Gallery */}
        <div className='bg-amber-100 rounded-xl p-6 aspect-square flex flex-col justify-between hover:bg-amber-200 transition-all'>
          <Camera className='w-6 h-6 text-amber-600' />
          <div>
            <h3 className='text-lg font-semibold text-amber-900 mt-4'>
              Photo Gallery
            </h3>
            <p className='text-amber-700 text-sm mt-1'>
              Memories from our community runs
            </p>
          </div>
        </div>

        {/* Community Stats */}
        <div className='md:col-span-2 bg-emerald-100 rounded-xl p-6 flex flex-col justify-between hover:bg-emerald-200 transition-all'>
          <Users className='w-6 h-6 text-emerald-600' />
          <div>
            <h3 className='text-lg font-semibold text-emerald-900 mt-4'>
              Community Stats
            </h3>
            <div className='grid grid-cols-2 gap-4 mt-2'>
              <div>
                {/* <p className='text-2xl font-bold text-emerald-700'> */}
                <h1 className='text-2xl font-bold text-emerald-700 flex'>
                  <Number n={1000} />+
                </h1>

                <p className='text-sm text-emerald-600'>Active Runners</p>
              </div>
              <div>
                <p className='text-2xl font-bold text-emerald-700'>50km</p>
                <p className='text-sm text-emerald-600'>Weekly Average</p>
              </div>
            </div>
          </div>
        </div>

        {/* Achievements */}
        <div className='bg-everyRunBlue rounded-xl p-6 aspect-square flex flex-col justify-between  transition-all'>
          <Trophy className='w-6 h-6 text-blue-600' />
          <div>
            <h3 className='text-lg font-semibold text-blue-900 mt-4'>
              Achievements
            </h3>
            <p className='text-blue-700 text-sm mt-1'>
              Unlock badges and rewards
            </p>
          </div>
        </div>

        {/* Events Calendar */}
        <div className='md:col-span-2 bg-violet-100 rounded-xl p-6 flex flex-col justify-between hover:bg-violet-200 transition-all'>
          <Calendar className='w-6 h-6 text-violet-600' />
          <div>
            <h3 className='text-lg font-semibold text-violet-900 mt-4'>
              Upcoming Events
            </h3>
            <div className='grid grid-cols-2 gap-4 mt-2'>
              <div className='bg-white bg-opacity-50 rounded-lg p-2'>
                <p className='font-semibold text-violet-800'>Saturday Run</p>
                <p className='text-sm text-violet-600'>Albert Park, 7am</p>
              </div>
              <div className='bg-white bg-opacity-50 rounded-lg p-2'>
                <p className='font-semibold text-violet-800'>Tuesday Track</p>
                <p className='text-sm text-violet-600'>Olympic Park, 6pm</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
