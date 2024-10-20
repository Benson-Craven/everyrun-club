'use client'
import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Button from '../atoms/Button'
import Heading from '../atoms/Typography'

const messages = [
  {
    id: 1,
    title: 'EveryRun Club Melbourne',
    subtitle: "Not just a run club - we're a community.",
  },
  {
    id: 2,
    title: 'Join Our Community',
    subtitle: 'Experience the joy of running together.',
  },
  {
    id: 3,
    title: 'Run Melbourne',
    subtitle: 'Every step brings us closer.',
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

export default function HeroSection() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  })

  const segmentSize = 0.6 / messages.length

  return (
    <section className='relative h-[350vh]' ref={containerRef}>
      <div className='sticky top-0 h-screen'>
        <VideoBackground />
        {messages.map((message, index) => {
          const startFade = index * segmentSize
          const fullOpacity = startFade + segmentSize * 0.2
          const endFade = startFade + segmentSize * 0.8

          const opacity = useTransform(
            scrollYProgress,
            [startFade, fullOpacity, endFade, endFade + segmentSize * 0.2],
            [index === 0 ? 1 : 0, 1, 1, 0]
          )

          const y = useTransform(
            scrollYProgress,
            [startFade, fullOpacity, endFade, endFade + segmentSize * 0.2],
            [index === 0 ? '0px' : '50vh', '0px', '0px', '-50vh']
          )

          return (
            <motion.div
              key={message.id}
              className='absolute inset-0 h-full flex flex-col justify-center items-center text-white px-4 z-30'
              style={{
                opacity,
                y,
              }}
            >
              <motion.div className='flex flex-col items-center'>
                <Heading level={1}>{message.title}</Heading>
                <p className='text-xl md:text-2xl mb-8 text-center max-w-2xl z-10'>
                  {message.subtitle}
                </p>
                {index === 2 ? (
                  <div className='flex flex-col sm:flex-row gap-4'>
                    <Button>Join Now</Button>
                    <Button variant='secondary'>View Events</Button>
                  </div>
                ) : null}
              </motion.div>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
