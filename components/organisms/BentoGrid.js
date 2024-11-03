'use client'

import {
  Video,
  Music,
  Camera,
  Users,
  Calendar,
  Map,
  Dumbbell,
  PartyPopperIcon,
} from 'lucide-react'
import Link from 'next/link'
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
    <div className='container mx-auto p-4 mt-10'>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-4 max-w-6xl mx-auto'>
        {/* Large feature box */}
        <div
          className='md:col-span-2 row-span-2 rounded-xl p-6 aspect-square md:aspect-auto flex flex-col justify-between text-white transition-transform hover:scale-[1.02]'
          style={{
            backgroundImage: "url('/images/smile-3.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          {' '}
          <div>
            <PartyPopperIcon className='w-8 h-8 mb-4' />
            <h2 className='text-2xl font-bold mb-2'>Upcoming Events</h2>
            <p>Come along to our 2024 Summer Social! Grab your ticket below.</p>
          </div>
          <button className='mt-4 bg-white text-everyRunOrange px-4 py-2 rounded-lg font-medium hover:bg-orange-100 transition-colors cursor-pointer'>
            Buy Tickets
          </button>
        </div>

        {/* Music Integration */}
        <div className='bg-everyRunBlue rounded-xl p-6 aspect-square flex flex-col justify-between hover:bg-everyRunBlue-200 transition-all  hover:scale-[1.02]'>
          <Music className='w-6 h-6 text-blue-600' />
          <div>
            <h3 className='text-lg font-semibold text-blue-900 mt-4'>
              EveryRun Playlist
            </h3>
            <p className='text-blue-700 text-sm mt-1'>
              Curated beats for your perfect run
            </p>
          </div>
        </div>

        <div className='relative overflow-hidden rounded-xl aspect-square flex flex-col justify-between group transition-transform hover:scale-[1.02]'>
          <video
            autoPlay
            loop
            muted
            playsInline
            src='/videos/hero-running.mp4'
            alt='Group Run'
            className='object-cover w-full h-full transition-transform group-hover:scale-105'
          />
          <Link href={'/wednesday'}>
            <div className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-between p-6 cursor-pointer'>
              <Dumbbell className='w-6 h-6 text-white' />
              <div>
                {' '}
                <h3 className='text-lg font-semibold text-white'>
                  Fancy more of a challenge?
                </h3>
                <p className='text-sm text-gray-200'>
                  Join our more intense Wednesday group runs
                </p>
              </div>
            </div>
          </Link>
        </div>

        {/* Achievements */}
        <div className='bg-everyRunBlue hover:bg-everyRunBlue/80 rounded-xl p-6 aspect-square flex flex-col justify-between  transition-all  hover:scale-[1.02]'>
          <Map className='w-6 h-6 text-blue-600' />
          <div>
            <h3 className='text-lg font-semibold text-blue-900 mt-4'>
              Locations
            </h3>
            <p className='text-blue-700 text-sm mt-1'>
              See where we love to run across Melbourne
            </p>
          </div>
        </div>

        {/* Events Calendar */}
        <div className='md:col-span-2 bg-violet-100 rounded-xl p-6 flex flex-col justify-between hover:bg-violet-200 transition-all  hover:scale-[1.02]'>
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
