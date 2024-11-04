'use client'
import { useRef } from 'react'
import { motion, useScroll, useTransform, useInView } from 'framer-motion'
import { Dumbbell, Heart } from 'lucide-react'
import Heading from '../atoms/Typography'
import { useSpring, animated } from 'react-spring'
import Image from 'next/image'

function Number({ n }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const { number } = useSpring({
    from: { number: 0 },
    number: isInView ? n : 0,
    delay: 200,
    config: { mass: 1, tension: 20, friction: 10 },
  })

  return (
    <animated.p ref={ref} style={{ display: 'inline' }}>
      {number.to((n) => n.toFixed(0))}
    </animated.p>
  )
}

export default function AboutSection() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  })

  // First section animations
  const headerScale = useTransform(scrollYProgress, [0, 0.3], [1, 0.95])
  const headerOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0])

  // Second section animations
  const nextSectionY = useTransform(scrollYProgress, [0.1, 0.3], ['100%', '0%'])
  const nextSectionOpacity = useTransform(scrollYProgress, [0.15, 0.3], [0, 1])

  return (
    <div ref={containerRef} className='relative h-[200vh]'>
      {/* First Section */}
      <motion.div
        className='max-w-4xl mx-auto px-4 py-12 flex flex-col gap-6 sticky h-screen top-0 z-10 items-center justify-center text-center'
        style={{
          scale: headerScale,
          opacity: headerOpacity,
        }}
      >
        <Heading level={1} colour='#000000'>
          We&apos;re not{' '}
          <span className='text-everyRunOrange'>just a run club.</span>
        </Heading>

        <div className='relative mx-auto flex items-center aspect-video h-36 w-64 mb-6'>
          <div className='w-full h-full rounded-3xl overflow-hidden bg-gray-100 relative'>
            <video
              className='w-full h-full object-cover'
              loop
              muted
              playsInline
              autoPlay
              src='/videos/hero-running.mp4'
            />
            <div className='absolute top-2 right-2 bg-black bg-opacity-50 rounded-full p-3'>
              <Dumbbell className='w-6 h-6 text-white' strokeWidth={1.5} />
            </div>
          </div>
        </div>

        <motion.p
          className='text-lg md:text-xl text-gray-600 max-w-2xl text-center mx-auto'
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Our running community is more than just a group of runners. With{' '}
          <span className='text-black font-medium'>EveryRun Melbourne,</span>{' '}
          we&apos;re a hub for everyone.
        </motion.p>
      </motion.div>

      {/* Second Section */}
      <motion.div
        className='max-w-md sm:max-w-xl md:max-w-3xl lg:max-w-4xl container mx-auto px-4 py-12 flex flex-col gap-8 sticky h-[90vh] sm:h-screen top-0 z-20 items-center justify-center bg-gradient-to-br from-white to-gray-50 shadow-lg rounded-3xl border border-gray-200 '
        style={{
          y: nextSectionY,
          opacity: nextSectionOpacity,
        }}
      >
        <Heading
          level={1}
          colour='#333333'
          className='text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-center'
        >
          Join Our <span className='text-everyRunOrange'>Community</span>
        </Heading>

        <p className='text-base sm:text-lg md:text-xl text-gray-600 max-w-lg sm:max-w-xl md:max-w-2xl text-center mx-auto'>
          Connect with{' '}
          <span className='text-everyRunOrange font-medium '>
            <Number n={11000} />
          </span>{' '}
          members in your area and join our weekly runs.
        </p>

        <div className='relative mx-auto flex items-center aspect-video h-40 md:h-64 w-full sm:w-80 md:w-3/4 mb-6'>
          <div className='relative w-full h-full rounded-3xl overflow-hidden bg-gray-100'>
            <Image
              src='/images/smile-2.jpg'
              alt='Upcoming Events'
              fill
              sizes='(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 50vw'
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

        <button className='bg-everyRunOrange text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full text-base sm:text-lg font-semibold hover:bg-everyRunOrange/80 shadow-md transition-all transform hover:-translate-y-1'>
          Join Now
        </button>
      </motion.div>
    </div>
  )
}
