'use client'

import { useScroll, useTransform, motion } from 'framer-motion'
import React, { useRef } from 'react'

export default function ExpandingSection() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'], // Triggering at the start
  })

  // Scale to full screen just as it enters the viewport top
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1.15, 0.8])

  return (
    <div ref={ref} className='relative h-[300vh]'>
      {/* Scalable Background */}
      <motion.div
        style={{ scale }}
        className='absolute inset-0 bg-black rounded-3xl h-full w-full z-0'
      />

      {/* Content Section */}
      <div className='relative z-10 min-h-screen flex flex-col items-center justify-center'>
        <h2 className='text-5xl font-bold text-white text-center mb-8'>
          And so much more.
        </h2>
        <p className='text-lg text-gray-300 text-center mb-16 max-w-md'>
          Sticky is packed with features, but your conversations always come
          first.
        </p>

        {/* Bento-style grid */}
        <motion.div
          style={{ opacity: 1 }}
          className='grid grid-cols-2 gap-4 p-4'
        >
          {[1, 2, 3, 4].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.2 }}
              className='bg-white rounded-xl shadow-lg p-8 flex items-center justify-center'
            >
              <p className='text-black text-xl font-semibold'>Item {item}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
