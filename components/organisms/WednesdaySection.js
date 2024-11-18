'use client'
import React, { useRef } from 'react'
import { motion } from 'framer-motion'
import Button from '../atoms/Button'
import Heading from '../atoms/Typography'
import Image from 'next/image'
import Link from 'next/link'

const message = {
  id: 1,
  title: 'Fancy more of a challenge?',
  subtitle: 'Join us on a Wednesday',
}

const VideoBackground = () => (
  <div className='absolute inset-0 p-[13px] z-0 bg-inherit'>
    {/* Image container */}
    <motion.div
      className='relative w-full h-full rounded-3xl overflow-hidden'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Image
        src={'/images/running-behind.avif'}
        alt={'Video Background'}
        fill
        className='object-cover brightness-75'
        priority
      />
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
          <button className='flex items-center justify-center bg-[#fa6400] border border-transparent  shadow-sm shadow-black/5 box-border text-white cursor-pointer   font-semibold leading-[1.25] min-h-[3rem] px-[calc(1.5rem-1px)] py-[calc(.875rem-1px)] transition-all duration-250 hover:bg-[#fb8332] hover:shadow-md hover:shadow-black/10 hover:-translate-y-px active:bg-[#c85000] active:shadow-sm active:shadow-black/10 active:translate-y-0 rounded-full'>
            Join The Crew
          </button>
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
