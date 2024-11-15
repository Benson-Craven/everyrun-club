'use client'
import { Camera } from 'lucide-react'
import React, { useRef } from 'react'
import Heading from '../atoms/Typography'
import { motion, useScroll, useTransform } from 'framer-motion'
import BlogShowcase from './BlogSection'

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
      {/* <video
        autoPlay
        loop
        muted
        playsInline
        className='rounded-3xl w-full h-full object-cover'
      >
        <source src={profileImageSrc} type='video/mp4' /> */}

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
  const headerOpacity = useTransform(scrollYProgress, [0, 0.25], [1, 0])

  return (
    <div id='locations' ref={containerRef} className='relative'>
      <motion.div
        className='sticky top-0 text-center h-screen flex items-center justify-center container mx-auto'
        style={{
          scale: headerScale,
          opacity: headerOpacity,
        }}
      >
        <Heading level={1} colour={'#000000'}>
          Where do we like to <span className='text-everyRunOrange'>run</span>?
        </Heading>
      </motion.div>
      <BlogShowcase />

      {/* <div className='max-w-4xl mx-auto px-4 p-5 z-40'>
        {[
          {
            title: 'Fawkner Park',
            distance: 'South Yarra',
            badgeColor: '#C5F6FF',
          },
          {
            title: 'Catani Gardens',
            distance: 'St. Kilda',
            badgeColor: '#FF893A',
          },
          {
            title: 'Royal Botanic Gardens',
            distance: 'CBD',
            badgeColor: '#C5F6FF',
          },
          {
            title: 'Princes Park',
            distance: 'Carlton North',
            badgeColor: '#FF893A',
          },
          {
            title: 'Caulfield Park',
            distance: 'Caulfield North',
            badgeColor: '#C5F6FF',
          },
        ].map((location) => (
          <div key={location.title}>
            <FeatureItem
              title={location.title}
              // profileImageSrc='/videos/hero-running.mp4'
              badgeColor={location.badgeColor}
              distance={location.distance}
            />
          </div>
        ))}
      </div> */}
      <div className='h-[15vh]'></div>
    </div>
  )
}

export default RunClubFeatures
