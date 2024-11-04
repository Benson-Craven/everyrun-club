'use client'

import { useState, useEffect } from 'react'
import { Menu, X, MapPin, Calendar, Users, ChevronDown } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image' // Import next/image

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [prevScrollPos, setPrevScrollPos] = useState(0)
  const [visible, setVisible] = useState(true)

  const handleScroll = () => {
    const currentScrollPos = window.scrollY
    const isScrollingDown = currentScrollPos > prevScrollPos

    setVisible(!isScrollingDown || currentScrollPos < 10)
    setPrevScrollPos(currentScrollPos)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [prevScrollPos])

  const navbarClassName = `duration-700 fixed top-0 left-0 right-0 z-50 pt-[40px] flex items-center justify-between bg-transparent transition-transform ${
    visible ? 'translate-y-0' : '-translate-y-full'
  }`

  return (
    <>
      <nav
        className={navbarClassName}
        style={{
          transitionTimingFunction: 'cubic-bezier(0.64, 0, 0.35, 1)',
        }}
      >
        <div className='container mx-6 md:mx-auto px-4 bg-white rounded-3xl shadow-sm'>
          <div className='flex justify-between items-center h-16'>
            {/* Logo */}
            <Link href='/'>
              <div className='flex-shrink-0 flex items-center cursor-pointer'>
                <Image
                  src='/images/logos/logo.svg'
                  alt='EveryRunClub'
                  width={112} // Adjust width and height as needed
                  height={112}
                  className='w-28 h-28'
                />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className='hidden md:flex items-center space-x-4'>
              <div className='flex space-x-4'>
                {/* Routes Dropdown */}
                <div className='relative group'>
                  <button className='flex items-center space-x-1 text-gray-600 hover:text-everyRunOrange px-3 py-2 rounded-md text-sm font-medium'>
                    <MapPin className='w-4 h-4' />
                    <span>Routes</span>
                  </button>
                  <div className='absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 ease-in-out'></div>
                </div>

                {/* Events Dropdown */}
                <div className='relative group'>
                  <button className='flex items-center space-x-1 text-gray-600 hover:text-everyRunOrange px-3 py-2 rounded-md text-sm font-medium'>
                    <Calendar className='w-4 h-4' />
                    <span>Events</span>
                    <ChevronDown className='w-4 h-4' />
                  </button>
                  <div className='absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 ease-in-out'>
                    <div className='py-1'>
                      <a
                        href='#'
                        className='block px-4 py-2 text-sm text-gray-700 hover:bg-everyRunOrange/10'
                      >
                        EveryRun Christmas Party
                      </a>
                    </div>
                  </div>
                </div>

                <a
                  href='#'
                  className='flex items-center space-x-1 text-gray-600 hover:text-everyRunOrange px-3 py-2 rounded-md text-sm font-medium'
                >
                  <Users className='w-4 h-4' />
                  <span>Community</span>
                </a>
              </div>

              {/* CTA Button */}
              <button className='bg-everyRunOrange text-white px-4 py-2 rounded-3xl text-sm font-medium hover:bg-everyRunBlue transition-colors'>
                Join The Crew
              </button>
            </div>

            {/* Mobile menu button */}
            <div className='md:hidden'>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className='inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-everyRunOrange hover:bg-everyRunOrange/10 focus:outline-none'
              >
                {isOpen ? (
                  <X className='block h-6 w-6' />
                ) : (
                  <Menu className='block h-6 w-6' />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile menu - Centered with margins */}
      <div
        className={`fixed left-0 right-0 z-40 transition-all duration-300 ease-in-out transform md:hidden ${
          isOpen
            ? 'translate-y-[120px] opacity-100'
            : '-translate-y-full opacity-0'
        }`}
      >
        <div className=' mx-6 px-4'>
          <div className='bg-white rounded-3xl shadow-sm overflow-hidden'>
            <div className='py-4 px-4 space-y-3'>
              <a
                href='#'
                className='flex items-center space-x-3 px-4 py-3 rounded-2xl text-base font-medium text-gray-600 hover:text-everyRunOrange hover:bg-everyRunOrange/10 transition-colors'
              >
                <MapPin className='w-5 h-5' />
                <span>Routes</span>
              </a>
              <a
                href='#'
                className='flex items-center space-x-3 px-4 py-3 rounded-2xl text-base font-medium text-gray-600 hover:text-everyRunOrange hover:bg-everyRunOrange/10 transition-colors'
              >
                <Calendar className='w-5 h-5' />
                <span>Events</span>
              </a>
              <a
                href='#'
                className='flex items-center space-x-3 px-4 py-3 rounded-2xl text-base font-medium text-gray-600 hover:text-everyRunOrange hover:bg-everyRunOrange/10 transition-colors'
              >
                <Users className='w-5 h-5' />
                <span>Community</span>
              </a>
              <div className='pt-2 px-4'>
                <button className='w-full bg-everyRunOrange text-white px-4 py-3 rounded-2xl text-base font-medium hover:bg-everyRunBlue transition-colors'>
                  Join The Crew
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
