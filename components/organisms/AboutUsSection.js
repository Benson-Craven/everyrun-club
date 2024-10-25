'use client'
import { useRef } from 'react'
import { motion, useScroll, useTransform, useInView } from 'framer-motion'
import { CheckCircle } from 'lucide-react'
import Heading from '../atoms/Typography'
import { useSpring, animated } from 'react-spring'

function Number({ n }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const { number } = useSpring({
    from: { number: 0 },
    number: isInView ? n : 0,
    delay: 200,
    config: { mass: 1, tension: 20, friction: 10 },
  })

  return (
    <animated.p ref={ref} style={{ display: 'inline' }}>
      {number.to((n) => n.toFixed(0))}
    </animated.p>
  )
}

export default function AboutSection() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  })

  // First section animations
  const headerScale = useTransform(scrollYProgress, [0, 0.3], [1, 0.95])
  const headerOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0])

  // Second section animations
  const nextSectionY = useTransform(scrollYProgress, [0.1, 0.3], ['100%', '0%'])
  const nextSectionOpacity = useTransform(scrollYProgress, [0.15, 0.3], [0, 1])

  return (
    <div ref={containerRef} className='relative h-[200vh]'>
      {/* First Section */}
      <motion.div
        className='max-w-4xl mx-auto px-4 py-12 flex flex-col gap-6 sticky h-screen top-0 z-10 items-center justify-center'
        style={{
          scale: headerScale,
          opacity: headerOpacity,
        }}
      >
        <Heading level={1} colour='#000000'>
          We are not{' '}
          <span className='text-everyRunOrange'>just a run club.</span>
        </Heading>

        <div className='relative mx-auto flex items-center aspect-video h-36 w-36 mb-6'>
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
              <CheckCircle className='w-6 h-6 text-white' strokeWidth={1.5} />
            </div>
          </div>
        </div>

        <motion.p
          className='text-lg md:text-xl text-gray-600 max-w-2xl text-center mx-auto'
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Your privacy is our priority. With{' '}
          <span className='text-black font-medium'>end-to-end encryption,</span>{' '}
          you can be sure that your personal messages stay between you and who
          you send them to.
        </motion.p>
      </motion.div>

      {/* Second Section */}
      <motion.div
        className='max-w-4xl mx-auto px-4 py-12 flex flex-col gap-6 sticky h-screen top-0 z-20 items-center justify-center bg-white'
        style={{
          y: nextSectionY,
          opacity: nextSectionOpacity,
        }}
      >
        <Heading level={1} colour='#000000'>
          Join our community
        </Heading>
        <p className='text-lg md:text-xl text-gray-600 max-w-2xl text-center mx-auto'>
          Connect with <Number n={11000} /> runners in your area and join our
          weekly runs.
        </p>
      </motion.div>
    </div>
  )
}
