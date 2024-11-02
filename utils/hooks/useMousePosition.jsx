'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    console.log('useEffect running')

    const updateMousePosition = (e) => {
      console.log('Mouse moved to:', e.clientX, e.clientY)
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    console.log('Adding event listener')
    window.addEventListener('mousemove', updateMousePosition)

    return () => {
      console.log('Cleanup: removing event listener')
      window.removeEventListener('mousemove', updateMousePosition)
    }
  }, [])

  console.log('Current mouse position state:', mousePosition)
  return mousePosition
}

const MouseFollower = () => {
  const { x, y } = useMousePosition()
  console.log('MouseFollower rendering with position:', x, y)

  return (
    <motion.div
      className='mix-blend-difference pointer-events-none fixed top-0 left-0 w-5 h-5 rounded-full bg-everyRunBlue  z-50'
      animate={{
        x: x - 20,
        y: y - 20,
      }}
      transition={{
        type: 'tween',
        ease: 'backOut',
        duration: 0.5,
      }}
    />
  )
}

export default MouseFollower
