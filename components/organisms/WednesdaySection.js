'use client'
import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Button from '../atoms/Button'
import Heading from '../atoms/Typography'
import Link from 'next/link'

const messages = [
  {
    id: 1,
    title: 'Fancy more of a challenge?',
    subtitle: 'Come and join us on a Wednesday',
  },
  {
    id: 2,
    title: 'Push yourself with the team',
    subtitle: 'Be part of something extraordinary',
  },
]

const VideoBackground = ({ children }) => {
  const videoRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: videoRef,
    offset: ['start end', 'end start'],
  })

  // Start small (0.85), expand to 1.15, then contract back to 0.85
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.85, 1, 0.85])

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
            [index === 0 ? '0px' : '20vh', '0px', '0px', '-20vh']
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
                {index === 1 ? (
                  <div className='flex flex-col sm:flex-row gap-4'>
                    <Link href='/wednesday'>
                      <Button variant='primary'>Find Out More</Button>
                    </Link>
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
