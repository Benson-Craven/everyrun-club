'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export default function VideoBackground() {
  const videoRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: videoRef,
    offset: ['start start', 'end start'],
  })

  const scale = useTransform(scrollYProgress, [0.2, 1], [1, 0.85])

  return (
    <div className='absolute inset-0 overflow-hidden  p-[13px]' ref={videoRef}>
      <motion.div style={{ scale }} className='w-full h-full'>
        <video
          autoPlay
          loop
          muted
          playsInline
          className='flex items-center rounded-3xl  w-full h-full object-cover'
        >
          <source src='/videos/hero-running.mp4' type='video/mp4' />
        </video>
        {/* Timer */}
        {/* <div className='absolute inset-0 bg-[#f0f0f0] bg-opacity-10'>
          <div className='absolute bottom-0 right-0 h-20 w-64 '>
            <p>
              Time in Melbourne:{' '}
              {new Date().toLocaleString('en-AU', {
                timeZone: 'Australia/Melbourne',
                hour12: false,
              })}
            </p>
          </div>
        </div> */}
      </motion.div>
    </div>
  )
}
