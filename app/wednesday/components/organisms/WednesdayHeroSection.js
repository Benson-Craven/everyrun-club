'use client'
import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Button from '../../../../components/atoms/Button'
import Heading from '../../../../components/atoms/Typography'
import Image from 'next/image'

const VideoBackground = () => {
  const videoRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: videoRef,
    offset: ['start start', 'end start'],
  })
  const scale = useTransform(scrollYProgress, [0.2, 1], [1, 0.85])

  return (
    <div
      className='absolute inset-0 overflow-hidden p-2 sm:p-4 md:p-[13px] z-0'
      ref={videoRef}
    >
      <motion.div style={{ scale }} className='w-full h-full'>
        {/* <video
          autoPlay
          loop
          muted
          playsInline
          poster='/images/running-behind.avif'
          className='flex items-center rounded-3xl w-full h-full object-cover brightness-75'
        > */}
        {/* Use AV1 as the primary format */}
        {/* <source src='/videos/hero-NEW.av1.mp4' type='video/mp4' /> */}
        {/* Fallback to the original mp4 format for compatibility */}
        {/* <source src='/videos/hero-running.mp4' type='video/mp4' /> */}
        {/* Show a message if the video format is unsupported */}
        Your browser does not support the video tag.
        {/* </video> */}
        <Image
          src={'/images/running-behind.avif'}
          alt={'Video Background'}
          fill
          className='object-cover brightness-75 p-[13px] rounded-3xl'
        />
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
    <section className='relative h-[300vh] sm:h-[250vh]' ref={containerRef}>
      <div className='sticky top-0 h-screen'>
        <VideoBackground />

        {/* First Message */}
        <motion.div
          className='absolute inset-0 flex flex-col justify-center items-center text-white px-6 sm:px-8 md:px-4 z-30'
          style={{ opacity: opacity1, y: y1 }}
        >
          <Heading
            level={1}
            className='text-2xl sm:text-3xl md:text-4xl font-bold'
          >
            Fancy more of a challenge?
          </Heading>
          <p className='text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 max-w-prose'>
            Come along and join us on a Wednesday night!
          </p>
        </motion.div>

        {/* Second Message */}
        <motion.div
          className='absolute inset-0 flex flex-col justify-center items-center text-white px-6 sm:px-8 md:px-4 z-30'
          style={{ opacity: opacity2, y: y2 }}
        >
          <Heading
            level={1}
            className='text-2xl sm:text-3xl md:text-4xl font-bold'
          >
            Join Our Wednesday Sessions
          </Heading>

          <div className='flex flex-col sm:flex-row gap-4'>
            <Button>Where to?</Button>
            <Button variant='secondary'>View Events</Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default HeroSection
