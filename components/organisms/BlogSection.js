import React, { useState, useRef } from 'react'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Heading from '../atoms/Typography'

const LocationCard = ({
  i,
  image,
  category,
  title,
  description,
  progress,
  range,
  targetScale,
  color,
}) => {
  const [isHovered, setIsHovered] = useState(false)
  const container = useRef(null)

  const rotation = i % 2 === 0 ? -5 : 5

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start'],
  })

  const imageScale = useTransform(scrollYProgress, [0, 1], [1.4, 1]) // Slightly smoother image scaling
  const scale = useTransform(progress, range, [1, targetScale])

  return (
    <div
      ref={container}
      className='sticky top-0 flex h-screen items-center justify-center '
    >
      <motion.div
        style={{
          scale,
          rotate: rotation,
          top: `calc(-5vh + ${i * 25}px)`,
          backgroundColor: color,
        }}
        className='relative flex flex-col md:h-[600px] h-2/3 w-2/3 md:w-[700px] overflow-hidden rounded-[32px] border-2 border-black shadow-md transition-all duration-500 ease-out hover:rotate-0 hover:shadow-xl'
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Image Section */}
        <div className='relative h-1/2 w-full overflow-hidden'>
          <motion.div className='h-full w-full' style={{ scale: imageScale }}>
            <Image
              fill
              src={image}
              alt={title}
              className='object-cover transition-transform duration-500 group-hover:scale-105'
            />
          </motion.div>

          {/* Category pill */}
          <div className='absolute top-6 left-6'>
            <span
              className={`
                px-4 py-2 text-sm font-medium rounded-full text-black
                ${category === 'South Yarra' ? 'bg-[#E8F3DC]' : ''}
                ${category === 'St. Kilda' ? 'bg-[#FFEBE6]' : ''}
                ${category === 'Carlton North' ? 'bg-[#E3F2FD]' : ''}
                ${category === 'Caulfield North' ? 'bg-[#FFF5CC]' : ''}
                ${category === 'CBD' ? 'bg-[#E0F7FA]' : ''}
              `}
            >
              {category}
            </span>
          </div>
        </div>

        {/* Content Section */}
        <div className='flex flex-1 flex-col p-8'>
          <Heading level={2} colour='#000000'>
            {title}
          </Heading>
          <div className='mb-6 h-[1px] bg-black opacity-10' />
          <p className='mb-8 text-base text-black leading-relaxed'>
            {description}
          </p>

          {/* Action Button */}
          <div className='mt-auto flex items-center justify-end'>
            <motion.button
              className='w-12 h-12 bg-black rounded-full flex items-center justify-center'
              animate={isHovered ? { rotate: -20 } : { rotate: 0 }}
              transition={{ duration: 0.3 }}
            >
              <svg
                width='24'
                height='24'
                viewBox='0 0 31 28'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M0.857198 13.7372L27.9141 13.7372'
                  stroke='white'
                  strokeWidth='3'
                />
                <path
                  d='M15.4561 1.39417L27.9142 13.8522L15.4561 26.3104'
                  stroke='white'
                  strokeWidth='3'
                />
              </svg>
            </motion.button>

            <AnimatePresence>
              {isHovered && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.2 }}
                  className='absolute bottom-24 right-8 bg-white text-gray-800 text-xs px-4 py-2 rounded-full shadow-md border border-gray-200'
                >
                  <p>How do I get here?</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

const LocationStackShowcase = () => {
  const container = useRef(null)
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  })

  const locations = [
    {
      image: '/images/running-behind.avif',
      category: 'South Yarra',
      title: 'Fawkner Park',
      description:
        'Join us for a sunrise jog through Fawkner Parks scenic trails, where the pace is relaxed and the company keeps you motivated.',
      color: '#E8F3DC',
    },
    {
      image: '/images/running-behind.avif',
      category: 'St. Kilda',
      title: 'Catani Gardens',
      description:
        'Breathe in the ocean air and soak up the view of St. Kilda beach as we loop around Catani Gardens together.',
      color: '#FFEBE6',
    },
    {
      image: '/images/running-behind.avif',
      category: 'Carlton North',
      title: 'Princes Park',
      description:
        'Lace up for a community run at Princes Park, where wide paths and leafy scenery make every lap a breeze.',
      color: '#E3F2FD',
    },
    {
      image: '/images/running-behind.avif',
      category: 'Caulfield North',
      title: 'Caulfield Park',
      description:
        'Take a break from the city hustle and join our run around Caulfield Park – its the perfect way to reset with friends.',
      color: '#FFF5CC',
    },
    {
      image: '/images/running-behind.avif',
      category: 'CBD',
      title: 'Royal Botanic Gardens',
      description:
        'Discover the beauty of the Royal Botanic Gardens on our group run, a favorite for its tranquil paths and vibrant greenery.',
      color: '#E0F7FA',
    },
  ]

  return (
    <main ref={container} className='relative bg-inherit pt-24 '>
      <div className='absolute left-1/2 -translate-x-1/2 transform'>
        <div className='mb-16 h-[1px] bg-textPrimary opacity-10' />
      </div>

      <div className='mt-16'>
        {locations.map((location, i) => {
          const targetScale = 1 - (locations.length - i) * 0.05
          return (
            <LocationCard
              key={`location_${i}`}
              i={i}
              {...location}
              progress={scrollYProgress}
              range={[i * 0.25, 1]}
              targetScale={targetScale}
            />
          )
        })}
      </div>
    </main>
  )
}

export default LocationStackShowcase
