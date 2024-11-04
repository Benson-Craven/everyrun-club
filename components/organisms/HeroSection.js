'use client'
import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Button from '../atoms/Button'
import Heading from '../atoms/Typography'

const VideoBackground = () => {
  const videoRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: videoRef,
    offset: ['start start', 'end start'],
  })
  const scale = useTransform(scrollYProgress, [0.2, 1], [1, 0.85])

  return (
    <div
      className='absolute inset-0 overflow-hidden p-[13px] z-0'
      ref={videoRef}
    >
      <motion.div style={{ scale }} className='w-full h-full'>
        <video
          autoPlay
          loop
          muted
          playsInline
          className='flex items-center rounded-3xl w-full h-full object-cover brightness-75'
        >
          <source src='/videos/hero-running.mp4' type='video/mp4' />
        </video>
      </motion.div>
    </div>
  )
}

const HeroSection = () => {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  })

  // Opacity and position transformations for each message
  const opacity1 = useTransform(scrollYProgress, [0, 0.2, 0.3], [1, 1, 0])
  const y1 = useTransform(
    scrollYProgress,
    [0, 0.2, 0.4],
    ['0%', '-20%', '-50%']
  )

  const opacity2 = useTransform(scrollYProgress, [0.3, 0.45, 0.6], [0, 1, 0])
  const y2 = useTransform(
    scrollYProgress,
    [0.3, 0.5, 0.7],
    ['50%', '0%', '-20%']
  )

  return (
    <section className='relative h-[200vh]' ref={containerRef}>
      <div className='sticky top-0 h-screen z-20'>
        <VideoBackground />

        {/* First Message */}
        <motion.div
          className='absolute inset-0 flex flex-col justify-center items-center text-white px-4 z-30'
          style={{ opacity: opacity1, y: y1 }}
        >
          <img
            src='/images/logos/white-logo.png'
            alt='EveryRun Melbourne Logo'
            className='w-4/5 md:w-3/5 lg:w-4/5 h-auto'
          />
        </motion.div>

        {/* Second Message */}
        <motion.div
          className='absolute inset-0 flex flex-col justify-center items-center text-white px-4 z-30'
          style={{ opacity: opacity2, y: y2 }}
        >
          <Heading level={1}>Join Our Community</Heading>
          <p className='text-xl md:text-2xl mb-8 text-center max-w-2xl'>
            Come along and join us
          </p>
          <div className='flex flex-col sm:flex-row gap-4'>
            <Button>Run With Us</Button>
            <Button variant='secondary'>View Upcoming Events</Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default HeroSection
