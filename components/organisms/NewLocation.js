import { Camera } from 'lucide-react'
import React from 'react'
import Heading from '../atoms/Typography'

const FeatureItem = ({ title, profileImageSrc, badgeColor }) => (
  <div className='flex items-center  space-x-4 md:space-x-6 shrink-0 border-2 border-violet-500'>
    {/* Title */}
    <Heading level={2} colour={'#000000'}>
      {title}
    </Heading>
    {/* Profile image with a badge/dot */}
    <div className='relative w-16 h-16 md:w-36 md:h-16 flex items-center'>
      <video
        autoPlay
        loop
        muted
        playsInline
        className='rounded-3xl w-full h-full object-cover'
      >
        <source src={profileImageSrc} type='video/mp4' />
      </video>
      {/* Color Dot */}
      <div
        className={`absolute w-5 h-5 md:w-7 md:h-7 rounded-full top-0 right-0`}
        style={{ backgroundColor: badgeColor }}
      >
        <Camera className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-4 w-4 text-white' />
      </div>
    </div>
  </div>
)

const RunClubFeatures = () => {
  return (
    <>
      {/* Title */}
      <div className='text-center mb-12 h-full container mx-auto py-12'>
        <Heading level={1} colour={'#000000'}>
          Where do we like to run?
        </Heading>
      </div>
      <div className='h-full flex items-center justify-center container mx-auto px-4 py-12 max-w-6xl'>
        {/* Flexbox Layout for Features */}
        <div className='flex flex-wrap gap-6 items-center'>
          {/* Privacy */}
          <FeatureItem
            title='Albert Park'
            profileImageSrc='/videos/hero-running.mp4'
            badgeColor='#4cd964' // Green dot
          />
          {/* Channels */}
          <FeatureItem
            title='Darling Gardens'
            profileImageSrc='/videos/hero-running.mp4'
            badgeColor='#ff9500' // Orange dot
          />
          {/* Stories */}
          <FeatureItem
            title='Elwood'
            profileImageSrc='/videos/hero-running.mp4'
            badgeColor='#ff3b30' // Red dot
          />
          {/* AI Assistant */}
          <FeatureItem
            title='Princes Park'
            profileImageSrc='/videos/hero-running.mp4'
            badgeColor='#ffcc00' // Yellow dot
          />
          {/* Payments */}
          <FeatureItem
            title='Fawkner Parks'
            profileImageSrc='/videos/hero-running.mp4'
            badgeColor='#5856d6' // Purple dot
          />
        </div>
      </div>
    </>
  )
}

export default RunClubFeatures
