'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export default function VideoBackgroundComponent({
  videoSrc,
  scaleRange = [1, 0.85],
  children,
}) {
  const videoContainerRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: videoContainerRef,
    offset: ['start start', 'end start'],
  })

  const videoScale = useTransform(scrollYProgress, [0.2, 1], scaleRange)

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
          <source src={videoSrc} type='video/mp4' />
        </video>
      </motion.div>
      {children && <div className='absolute inset-0'>{children}</div>}
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
