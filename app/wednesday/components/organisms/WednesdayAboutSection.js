'use client'

import Heading from '@/components/atoms/Typography'
import { useScroll, useTransform, motion } from 'framer-motion'
import React, { useRef } from 'react'
import { Dumbbell, Heart } from 'lucide-react'
import { MessageCircle, Clock } from 'lucide-react'
import {
  Video,
  Music,
  Camera,
  Users,
  Calendar,
  MapPinHouse,
  Map,
  PartyPopperIcon,
} from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function ExpandingSection() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const containerRef = useRef(null)
  const { scrollYProgress: scrollHeaderProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  })

  const headerScale = useTransform(scrollHeaderProgress, [0.2, 0.5], [1, 0.6])
  const headerOpacity = useTransform(scrollHeaderProgress, [0.1, 0.36], [1, 0])

  // Scale to full screen just as it enters the viewport top
  const scale = useTransform(scrollYProgress, [0, 0.45, 1], [0.8, 1.15, 0.87])

  return (
    <div ref={ref} className='relative h-fit py-20'>
      <motion.div
        style={{ scale }}
        className='absolute inset-0 bg-black rounded-3xl h-full w-full z-0'
      />

      <div
        ref={containerRef}
        className='relative z-10 flex flex-col items-center justify-center'
      >
        <motion.div
          className='text-white mb-8 sticky top-0 text-center h-[110vh] items-center justify-center container mx-auto flex flex-col'
          style={{ scale: headerScale, opacity: headerOpacity }}
        >
          <Heading level={1} colour={'#ffffff'}>
            And so much <span className='text-everyRunBlue'>more</span>.
          </Heading>
          <div className='relative mx-auto flex items-center aspect-video h-40 md:h-64 sm:w-80 md:w-3/4 mb-6'>
            <div className='w-full h-full rounded-3xl overflow-hidden bg-gray-100 relative'>
              <Image
                src='/images/smile-1.jpg'
                alt='Upcoming Events'
                fill
                sizes='(max-width: 768px) 80vw, (max-width: 1200px) 75vw, 50vw'
                className='object-cover'
                loading='lazy'
              />
              <div className='absolute top-2 right-2 bg-black bg-opacity-50 rounded-full p-2 sm:p-3'>
                <Heart
                  className='w-5 h-5 sm:w-6 sm:h-6 text-white'
                  strokeWidth={1.5}
                />
              </div>
            </div>
          </div>
          <p className='text-lg text-gray-300 text-center mb-16 max-w-md'>
            Wednesdays offer a wide range of activities and experiences.
          </p>
        </motion.div>

        <motion.div className='container mx-auto p-4 z-50 mb-[20vh]'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto'>
            <div className='md:col-span-2 bg-[#111111] rounded-3xl p-8 relative min-h-[400px]'>
              <span className='text-everyRunOrange text-sm mb-4 block'>
                Higher Intensity
              </span>
              <div className='text-white text-3xl font-bold mb-4 max-w-md'>
                <Heading level={2}>
                  Mid-week session to improve your fitness goals
                </Heading>
              </div>
              <div className='absolute right-4 top-1/2 -translate-y-1/2 w-1/3 h-4/5'>
                <div className='relative w-full h-full'>
                  <Image
                    src='/images/running-behind.jpg'
                    alt='Phone mockup'
                    fill
                    sizes='(max-width: 768px) 33vw, 25vw'
                    className='object-cover rounded-3xl'
                    loading='lazy'
                  />
                </div>
              </div>
              <motion.button
                className='absolute bg-[#0066FF] text-white p-4 rounded-full hover:bg-blue-600 transition-colors'
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                +
              </motion.button>
            </div>

            <div className='bg-[#111111] rounded-3xl p-6 relative'>
              <MessageCircle className='w-6 h-6 text-[#0066FF] mb-4' />
              <h3 className='text-white text-xl font-semibold mb-2'>
                Send Us a Message
              </h3>
              <p className='text-gray-400 text-sm mb-6'>
                Send us a message and we'll get back to you about any questions
                you may have.
              </p>
              <div className='bg-[#1A1A1A] rounded-xl p-4'>
                <div className='flex items-center space-x-3 mb-4'>
                  <div className='relative w-8 h-8 rounded-full bg-gray-700'>
                    <Image
                      src='/images/smile-2.jpg'
                      alt='View 1'
                      fill
                      sizes='32px'
                      className='rounded-full object-cover'
                      loading='lazy'
                    />
                  </div>
                  <p className='text-white text-sm'>
                    What's the go ahead tonight?
                  </p>
                </div>
                <div className='ml-11 bg-[#222222] rounded-lg p-3'>
                  <p className='text-gray-300 text-sm'>
                    Come meet us at the Oval tonight if you're up for it!
                  </p>
                </div>
              </div>
            </div>

            <div className='bg-[#111111] rounded-3xl p-6 relative'>
              <MapPinHouse className='w-6 h-6 text-[#0066FF] mb-4' />
              <h3 className='text-white text-xl font-semibold mb-2'>
                Olympic Oval Stadium
              </h3>
              <p className='text-gray-400 text-sm mb-6'>
                Track who's viewed your stories with detailed read receipts
              </p>
              <div className='grid grid-cols-3 gap-2 mb-4'>
                <div className='relative aspect-square'>
                  <Image
                    src='/images/smile-1.jpg'
                    alt='View 1'
                    fill
                    sizes='(max-width: 768px) 33vw, 25vw'
                    className='rounded-lg object-cover'
                    loading='lazy'
                  />
                </div>
                <div className='relative aspect-square'>
                  <Image
                    src='/images/smile-2.jpg'
                    alt='View 2'
                    fill
                    sizes='(max-width: 768px) 33vw, 25vw'
                    className='rounded-lg object-cover'
                    loading='lazy'
                  />
                </div>
                <div className='relative aspect-square'>
                  <Image
                    src='/images/smile-3.jpg'
                    alt='View 3'
                    fill
                    sizes='(max-width: 768px) 33vw, 25vw'
                    className='rounded-lg object-cover'
                    loading='lazy'
                  />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
