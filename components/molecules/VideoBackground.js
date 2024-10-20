'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

/**
 * A component that renders a video background.
 *
 * The video is scaled based on the scroll position of the container.
 * When the user scrolls down, the video becomes smaller.
 **/
export default function VideoBackgroundComponent() {
  const videoContainerRef = useRef(null)

  const { scrollYProgress } = useScroll({
    /**
     * The element to track the scroll position of.
     */
    target: videoContainerRef,
    /**
     * The range of scroll positions to track.
     * The first value is the start of the range, and the second value is the end of the range.
     * The video is scaled based on the scroll position within this range.
     */
    offset: ['start start', 'end start'],
  })

  /**
   * The scale of the video based on the scroll position.
   * The scale is transformed from the scroll position using the `useTransform` hook.
   * The first value is the start of the range, and the second value is the end of the range.
   * The scale is linearly interpolated between the start and end values.
   */
  const videoScale = useTransform(scrollYProgress, [0.2, 1], [1, 0.85])

  return (
    <div
      className='absolute inset-0 overflow-hidden p-[13px]'
      ref={videoContainerRef}
    >
      <motion.div style={{ scale: videoScale }} className='w-full h-full'>
        <video
          autoPlay
          loop
          muted
          playsInline
          className='flex items-center rounded-3xl w-full h-full object-cover brightness-75'
        >
          <source src='/videos/hero-running.mp4' type='video/mp4' />
        </video>
      </motion.div>
    </div>
  )
}
{
  /* Timer */
}
{
  /* <div className='absolute inset-0 bg-[#f0f0f0] bg-opacity-10'>
          <div className='absolute bottom-0 right-0 h-20 w-64 '>
            <p>
              Time in Melbourne:{' '}
              {new Date().toLocaleString('en-AU', {
                timeZone: 'Australia/Melbourne',
                hour12: false,
              })}
            </p>
          </div>
        </div> */
}
