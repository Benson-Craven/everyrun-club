'use client'
import { Camera } from 'lucide-react'
import React, { useRef } from 'react'
import Heading from '../atoms/Typography'
import { motion, useScroll, useTransform } from 'framer-motion'

const FeatureItem = ({ title, profileImageSrc, badgeColor, distance }) => (
  <div className='flex items-center space-x-4 md:space-x-8 mb-10'>
    <div>
      <span>
        <Heading level={1} colour={'#000000'}>
          {title}
        </Heading>
      </span>
      <span>
        <Heading level={2} colour={badgeColor}>
          {distance}
        </Heading>
      </span>
    </div>

    <div className='relative w-16 h-16 md:w-36 md:h-36 flex items-center'>
      <video
        autoPlay
        loop
        muted
        playsInline
        className='rounded-3xl w-full h-full object-cover'
      >
        <source src={profileImageSrc} type='video/mp4' />
      </video>
      <div
        className={`absolute w-5 h-5 md:w-7 md:h-7 rounded-3xl top-0 right-0`}
        style={{ backgroundColor: badgeColor }}
      >
        <Camera className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-4 w-4 text-white' />
      </div>
    </div>
  </div>
)
const RunClubFeatures = () => {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  })

  const headerScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.7])
  const headerOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0])

  return (
    <div ref={containerRef} className='relative'>
      <motion.div
        className='sticky top-0 text-center h-screen flex items-center justify-center container mx-auto'
        style={{
          scale: headerScale,
          opacity: headerOpacity,
        }}
      >
        <Heading level={1} colour={'#000000'}>
          Where do we like to run?
        </Heading>
      </motion.div>

      <div className='max-w-4xl mx-auto px-4  p-5   z-40'>
        {[
          {
            title: 'Fawkner Park',
            distance: 'South Yarra',
            badgeColor: '#4cd964',
          },
          {
            title: 'Catani Gardens',
            distance: 'St. Kilda',
            badgeColor: '#ff9500',
          },
          {
            title: 'Royal Botanic Gardens',
            distance: 'CBD',
            badgeColor: '#ff3b30',
          },
          {
            title: 'Princes Park',
            distance: 'Carlton North',
            badgeColor: '#ffcc00',
          },
          {
            title: 'Caulfield Park',
            distance: 'Caulfield North',
            badgeColor: '#5856d6',
          },
        ].map((location) => (
          <div key={location.title}>
            <FeatureItem
              title={location.title}
              profileImageSrc='/videos/hero-running.mp4'
              badgeColor={location.badgeColor}
              distance={location.distance}
            />
          </div>
        ))}
      </div>
      <div className='h-[15vh]'></div>
    </div>
  )
}

export default RunClubFeatures
