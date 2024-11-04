'use client'
import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Button from '../../../../components/atoms/Button'
import Heading from '../../../../components/atoms/Typography'

const messages = [
  {
    id: 1,
    title: 'Fancy more of a challenge?',
    subtitle: 'Come along and join us on a Wednesday night!',
  },
  {
    id: 2,
    title: 'Join Our Community',
    subtitle: 'Come along and join us.',
  },
]

const VideoBackground = ({ children }) => {
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

const MessageComponent = ({ message, opacity, y, index }) => (
  <motion.div
    key={message.id}
    className='absolute inset-0 h-full flex flex-col justify-center items-center text-white px-6 sm:px-8 md:px-4 z-30'
    style={{ opacity, y }}
  >
    <motion.div className='flex flex-col items-center text-center max-w-lg sm:max-w-xl md:max-w-2xl'>
      <Heading level={1} className='text-2xl sm:text-3xl md:text-4xl font-bold'>
        {message.title}
      </Heading>
      <p className='text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 max-w-prose'>
        {message.subtitle}
      </p>
      {index === 1 && (
        <div className='flex flex-col sm:flex-row gap-4'>
          <Button>Where to?</Button>
          <Button variant='secondary'>View Events</Button>
        </div>
      )}
    </motion.div>
  </motion.div>
)

const createTransforms = (scrollYProgress, index, segmentSize) => {
  const startFade = index * segmentSize
  const fullOpacity = startFade + segmentSize * 0.2
  const endFade = startFade + segmentSize * 0.8
  const fadeOut = endFade + segmentSize * 0.2

  return {
    opacity: useTransform(
      scrollYProgress,
      [startFade, fullOpacity, endFade, fadeOut],
      [index === 0 ? 1 : 0, 1, 1, 0]
    ),
    y: useTransform(
      scrollYProgress,
      [startFade, fullOpacity, endFade, fadeOut],
      [index === 0 ? '0px' : '50vh', '0px', '0px', '-50vh']
    ),
  }
}

export default function HeroSection() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  })

  const segmentSize = 0.6 / messages.length

  // Create all transforms at the top level
  const transforms = [
    createTransforms(scrollYProgress, 0, segmentSize),
    createTransforms(scrollYProgress, 1, segmentSize),
  ]

  return (
    <section className='relative h-[300vh] sm:h-[250vh]' ref={containerRef}>
      <div className='sticky top-0 h-screen'>
        <VideoBackground />
        {messages.map((message, index) => (
          <MessageComponent
            key={message.id}
            message={message}
            opacity={transforms[index].opacity}
            y={transforms[index].y}
            index={index}
          />
        ))}
      </div>
    </section>
  )
}
