'use client'
import { useRef } from 'react'
import { motion, useScroll, useTransform, useInView } from 'framer-motion'
import { Dumbbell, Heart } from 'lucide-react'
import Heading from '../../../../components/atoms/Typography'

export default function WednesdayInfoSection() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  })

  // First section animations
  const headerScale = useTransform(scrollYProgress, [0, 0.3], [1, 0.95])
  const headerOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])

  return (
    <div ref={containerRef} className='relative h-[180vh]'>
      {/* First Section */}
      <motion.div
        className='max-w-4xl mx-auto px-4 py-12 flex flex-col gap-6 sticky h-screen top-0 z-10 items-center justify-center text-center'
        style={{
          scale: headerScale,
          opacity: headerOpacity,
        }}
      >
        <Heading level={1} colour='#000000'>
          Fancying more{' '}
          <span className='text-everyRunOrange'>of a challenge?</span>
        </Heading>

        <div className='relative mx-auto flex items-center aspect-video h-36 w-64 mb-6'>
          <div className='w-full h-full rounded-3xl overflow-hidden bg-gray-100 relative'>
            <video
              className='w-full h-full object-cover'
              loop
              muted
              playsInline
              autoPlay
              src='/videos/hero-running.mp4'
            />
            <div className='absolute top-2 right-2 bg-black bg-opacity-50 rounded-full p-3'>
              <Dumbbell className='w-6 h-6 text-white' strokeWidth={1.5} />
            </div>
          </div>
        </div>

        <motion.p
          className='text-lg md:text-xl text-gray-600 max-w-2xl text-center mx-auto'
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Our Wednesday sessions cater for everyone. Whether you&apos;re a
          seasoned veteran or just starting out, at{' '}
          <span className='text-black font-medium'>EveryRun Melbourne,</span>{' '}
          Wednesday sessions are for those who can&apos;t get enough of the
          weekly run.
        </motion.p>
      </motion.div>
    </div>
  )
}
