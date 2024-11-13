import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Heading from '../atoms/Typography'

const BlogCard = ({ image, category, title, description }) => {
  const [isHovered, setIsHovered] = useState(false)
  return (
    <div
      className='relative group overflow-hidden rounded-[2.5rem] rounded-tl-lg rounded-tr-lg bg-white cursor-pointer'
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className='relative aspect-square overflow-hidden'>
        <img
          src={image}
          alt={title}
          className='object-cover w-full h-full transition-transform duration-500 group-hover:scale-105'
        />

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

        {/* Arrow button with tilt animation */}
        <div className='absolute bottom-6 right-6'>
          <motion.button
            className='w-12 h-12 bg-black rounded-full flex items-center justify-center relative'
            whileHover={{ rotate: 10, scale: 1.1 }}
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

          {/* Tooltip */}
          <AnimatePresence>
            {isHovered && (
              <motion.div
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                transition={{ duration: 0.2 }}
                className='absolute bottom-16 right-1/2 transform translate-x-1/2 bg-black text-white text-xs px-3 py-1 rounded-md shadow-lg'
              >
                How do I get there?
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
      <div className='p-8 space-y-4'>
        <Heading level={3} colour={'#000000'}>
          {title}
        </Heading>
        <p className='text-gray-600'>{description}</p>
      </div>
    </div>
  )
}

const BlogShowcase = () => {
  const [showMore, setShowMore] = useState(false)
  const posts = [
    {
      image: '/images/running-behind.avif',
      category: 'South Yarra',
      title: 'Fawkner Park',
      description:
        'Join us for a sunrise jog through Fawkner Park’s scenic trails, where the pace is relaxed and the company keeps you motivated.',
    },
    {
      image: '/images/running-behind.avif',
      category: 'St. Kilda',
      title: 'Catani Gardens',
      description:
        'Breathe in the ocean air and soak up the views of St. Kilda beach as we loop around Catani Gardens together.',
    },
    {
      image: '/images/running-behind.avif',
      category: 'Carlton North',
      title: 'Princes Park',
      description:
        'Lace up for a community run at Princes Park, where wide paths and leafy scenery make every lap a breeze.',
    },
    {
      image: '/images/running-behind.avif',
      category: 'Caulfield North',
      title: 'Caulfield Park',
      description:
        'Take a break from the city hustle and join our run around Caulfield Park – it’s the perfect way to reset with friends.',
    },
    {
      image: '/images/running-behind.avif',
      category: 'CBD',
      title: 'Royal Botanic Gardens',
      description:
        'Discover the beauty of the Royal Botanic Gardens on our group run, a favorite for its tranquil paths and vibrant greenery.',
    },
  ]

  return (
    <div className='max-w-7xl mx-auto px-4 py-16'>
      {/* Community tag */}
      <div className='mb-12'>
        <span className='px-4 py-2 text-sm font-medium bg-black text-white rounded-full'>
          Locations
        </span>
      </div>

      {/* Grid */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {posts.slice(0, showMore ? posts.length : 3).map((post, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <BlogCard {...post} />
          </motion.div>
        ))}
      </div>

      {/* Show More / Show Less button */}
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: showMore ? -10 : 0 }}
        transition={{ duration: 0.3 }}
        className='flex justify-center mt-8'
      >
        <button
          onClick={() => setShowMore(!showMore)}
          className='px-6 py-3 text-sm font-medium bg-black text-white rounded-full'
        >
          {showMore ? 'Show Less' : 'Show More'}
        </button>
      </motion.div>
    </div>
  )
}

export default BlogShowcase
