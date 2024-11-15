'use client'
import { useRef } from 'react'
import { motion, useScroll, useTransform, useInView } from 'framer-motion'
import { Dumbbell, Users, Heart } from 'lucide-react'
import Heading from '@/components/atoms/Typography'
import { useSpring, animated } from 'react-spring'
import Image from 'next/image'

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
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const containerRef = useRef(null)
  const { scrollYProgress: scrollHeaderProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  })

  // First section animations
  const headerScale = useTransform(scrollHeaderProgress, [0, 0.7], [1, 0.5])
  const headerOpacity = useTransform(scrollHeaderProgress, [0, 0.3], [1, 0])

  // Scale for expanding section
  const scale = useTransform(scrollYProgress, [0, 0.45, 1], [0.8, 1.15, 0.87])

  return (
    <div ref={ref} className='relative h-fit py-20'>
      <motion.div
        // style={{ scale }}
        className='absolute inset-0 bg-inherit rounded-3xl h-full w-full z-0'
      />

      <div
        ref={containerRef}
        className='relative z-10 flex flex-col items-center justify-center'
      >
        <motion.div
          className='mb-8 sticky top-0 text-center h-[110vh] items-center justify-center container mx-auto flex flex-col'
          style={{ scale: headerScale, opacity: headerOpacity }}
        >
          <Heading level={1} colour='#000000'>
            We&apos;re not{' '}
            <span className='text-everyRunOrange'>just a run club.</span>
          </Heading>

          <div className='relative mx-auto flex items-center aspect-video h-36 w-64 mb-6'>
            <div className='w-full h-full rounded-3xl overflow-hidden bg-gray-100 relative'>
              <Image
                src='/images/smile-2.jpg'
                alt='Upcoming Events'
                fill
                sizes='(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 50vw'
                className='object-cover'
                loading='lazy'
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
            Our running community is more than just a group of runners. With{' '}
            <span className='text-black font-medium'>EveryRun Melbourne,</span>{' '}
            we&apos;re a hub for everyone.
          </motion.p>
        </motion.div>

        <motion.div
          className='container mx-auto p-4 z-50 mb-8'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className='max-w-6xl mx-auto'>
            <motion.div
              className='bg-[#111111] rounded-3xl p-6 sm:p-8 relative overflow-hidden group'
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              {/* Image Section */}
              <div className='relative w-full h-[300px] sm:h-[400px] rounded-2xl overflow-hidden mb-6'>
                <Image
                  src='/images/running-behind.avif'
                  alt='Running community'
                  fill
                  sizes='(max-width: 1200px) 100vw, 1200px'
                  className='object-cover transition-transform duration-700 group-hover:scale-105'
                  priority
                />
                {/* Gradient Overlay */}
                <div className='absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-transparent opacity-90' />

                {/* Icon Circle */}
                <div className='absolute top-4 right-4 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center group/icon'>
                  <Heart className='w-6 h-6 text-white transform group-hover/icon:rotate-45 transition-transform duration-300' />
                </div>
              </div>

              {/* Content Section */}
              <div className='relative z-10'>
                <div className='flex items-center gap-2 mb-4'>
                  <Users className='w-6 h-6 text-everyRunOrange' />
                  <span className='text-everyRunOrange text-sm tracking-wide uppercase'>
                    Active Community
                  </span>
                </div>

                <h2 className='text-white text-3xl sm:text-4xl font-bold mb-3'>
                  Join <Number n={11000} />+ runners
                </h2>

                <p className='text-gray-400 text-sm sm:text-base max-w-2xl leading-relaxed'>
                  Be part of Melbourne's most vibrant running community. Whether
                  you're just starting out or training for a marathon, you'll
                  find your pace with us.
                </p>
              </div>

              {/* Decorative elements */}
              <div className='absolute bottom-0 left-0 w-96 h-96 bg-[#0066FF] opacity-5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2' />
              <div className='absolute top-0 right-0 w-96 h-96 bg-everyRunOrange opacity-5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2' />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
