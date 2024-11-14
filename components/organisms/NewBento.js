'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowUpRight, PartyPopperIcon } from 'lucide-react'

const NewBento = () => {
  const bentoItems = [
    {
      title: 'Join us at our 2024 Summer Social',
      image: '/images/smile-1.avif',
      link: '/our-principles',
      bgColor: 'bg-amber-800',
    },
    {
      title: 'Fancying more of a challenge?',
      image: '/images/running-behind.avif',
      link: '/services',
      bgColor: 'bg-neutral-900',
    },
    {
      title: 'Tune into our shared Spotify playlist',
      image: '/images/smile-2.avif',
      link: 'https://podcast.example.com',
      bgColor: 'bg-emerald-950',
    },
  ]

  const cardVariants = {
    initial: {
      opacity: 0,
      y: 20,
    },
    animate: {
      opacity: 1,
      y: 0,
    },
    hover: {
      y: -8,
    },
  }

  const arrowVariants = {
    initial: {
      rotate: 45,
    },
    hover: {
      rotate: 0,
    },
  }

  const imgVariants = {
    initial: {
      scale: 1,
    },
    hover: {
      scale: 1.05,
    },
  }

  return (
    <div className='w-full max-w-7xl mx-auto p-4'>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 auto-rows-fr md:grid-rows-2'>
        <motion.div
          variants={cardVariants}
          initial='initial'
          animate='animate'
          whileHover='hover'
          transition={{
            duration: 0.2,
            ease: [0.23, 1, 0.32, 1],
          }}
          className='relative overflow-hidden rounded-3xl group col-span-1 sm:col-span-2 row-span-2 aspect-square'
        >
          <Link href={bentoItems[0].link} className='block h-full w-full'>
            <div className={`relative ${bentoItems[0].bgColor} w-full h-full`}>
              <motion.div className='absolute inset-0 w-full h-full'>
                <motion.img
                  src={bentoItems[0].image}
                  alt={bentoItems[0].title}
                  className='w-full h-full object-cover opacity-80'
                  variants={imgVariants}
                  transition={{ duration: 0.2 }}
                />
              </motion.div>

              <div className='absolute inset-0 flex flex-col justify-between p-8'>
                <h2 className='text-white text-2xl sm:text-3xl lg:text-5xl tracking-tight font-semibold z-10'>
                  <PartyPopperIcon className='w-8 h-8 mb-4' />{' '}
                  {bentoItems[0].title}
                </h2>

                <motion.div
                  variants={arrowVariants}
                  className='self-end p-2 bg-white rounded-full'
                  transition={{ duration: 0.2, ease: 'easeInOut' }}
                >
                  <ArrowUpRight className='w-8 h-8 text-black' />
                </motion.div>
              </div>
            </div>
          </Link>
        </motion.div>

        {bentoItems.slice(1).map((item, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            initial='initial'
            animate='animate'
            whileHover='hover'
            transition={{
              duration: 0.2,
              ease: [0.23, 1, 0.32, 1],
            }}
            className='relative overflow-hidden rounded-3xl group aspect-auto col-span-1 sm:col-span-2 row-span-1'
          >
            <Link href={item.link} className='block h-full w-full'>
              <div className={`relative ${item.bgColor} h-full w-full`}>
                <motion.div className='absolute inset-0 w-full h-full'>
                  <motion.img
                    src={item.image}
                    alt={item.title}
                    className='w-full h-full object-cover opacity-80'
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  />
                </motion.div>

                <div className='absolute inset-0 flex flex-col justify-between p-6'>
                  <h2 className='text-white text-2xl sm:text-3xl lg:text-5xl tracking-tight p-5 font-semibold z-10'>
                    {item.title}
                  </h2>

                  <motion.div
                    variants={arrowVariants}
                    className='self-end p-2 bg-white rounded-full'
                    transition={{ duration: 0.2, ease: 'easeInOut' }}
                  >
                    <ArrowUpRight className='w-8 h-8 text-black' />
                  </motion.div>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default NewBento
