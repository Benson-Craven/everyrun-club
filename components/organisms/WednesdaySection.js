'use client'
import React, { useRef } from 'react'
import { motion } from 'framer-motion'
import Button from '../atoms/Button'
import Heading from '../atoms/Typography'
import Link from 'next/link'

const message = {
  id: 1,
  title: 'Fancy more of a challenge?',
  subtitle: 'Join us on a Wednesday',
}

const VideoBackground = () => (
  <div className='absolute inset-0 overflow-hidden p-2 sm:p-4 md:p-[13px] z-0'>
    <motion.div className='w-full h-full'>
      <video
        autoPlay
        loop
        muted
        playsInline
        className='flex items-center rounded-3xl w-full h-full object-cover brightness-75'
      >
        <source src='/videos/hero-NEW.av1.mp4' type='video/mp4' />
      </video>
    </motion.div>
  </div>
)

const MessageComponent = ({ message }) => (
  <motion.div
    key={message.id}
    className='absolute inset-0 h-full flex flex-col justify-center items-center text-white px-6 sm:px-8 md:px-4 z-30'
  >
    <div className='flex flex-col items-center text-center max-w-lg sm:max-w-xl md:max-w-2xl'>
      <Heading level={1} className='text-2xl sm:text-3xl md:text-4xl font-bold'>
        {message.title}
      </Heading>
      <p className='text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 max-w-prose'>
        {message.subtitle}
      </p>
      <div className='flex flex-col sm:flex-row gap-4'>
        <Link href='/wednesday'>
          <Button variant='primary'>Find Out More</Button>
        </Link>
      </div>
    </div>
  </motion.div>
)

export default function HeroSection() {
  return (
    <section className='relative h-screen'>
      <div className='sticky top-0 h-screen'>
        <VideoBackground />
        <MessageComponent message={message} />
      </div>
    </section>
  )
}
