'use client'

import { useState, useEffect } from 'react'
import {
  Menu,
  X,
  MapPin,
  Calendar,
  Users,
  Medal,
  ChevronDown,
} from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [prevScrollPos, setPrevScrollPos] = useState(0)
  const [visible, setVisible] = useState(true)

  const handleScroll = () => {
    const currentScrollPos = window.scrollY
    const isScrollingDown = currentScrollPos > prevScrollPos

    // console.log(
    //   `currentScrollPos: ${currentScrollPos}, prevScrollPos: ${prevScrollPos}, isScrollingDown: ${isScrollingDown}`
    // )

    setVisible(!isScrollingDown || currentScrollPos < 10)
    setPrevScrollPos(currentScrollPos)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [prevScrollPos])

  const navbarClassName = `duration-700 fixed top-0 left-0 right-0   z-50 pt-[40px]  top-0 z-50 flex items-center justify-between bg-transparent  transition-transform      ${
    visible ? 'translate-y-0' : '-translate-y-full'
  } `

  return (
    <nav
      className={navbarClassName}
      style={{
        transitionTimingFunction: 'cubic-bezier(0.64, 0, 0.35, 1)',
      }}
    >
      <div className='container mx-6 md:mx-auto px-4 bg-white rounded-3xl shadow-sm'>
        <div className='flex justify-between items-center h-16'>
          {/* Logo */}
          <div className='flex-shrink-0 flex items-center'>
            <img
              src={'/images/logos/logo.svg'}
              alt={'EveryRunClub'}
              className='w-28 h-28 '
            />
          </div>

          {/* Desktop Navigation */}
          <div className='hidden md:flex items-center space-x-4'>
            <div className='flex space-x-4'>
              {/* Routes Dropdown */}
              <div className='relative group'>
                <button className='flex items-center space-x-1 text-gray-600 hover:text-everyRunOrange px-3 py-2 rounded-md text-sm font-medium'>
                  <MapPin className='w-4 h-4' />
                  <span>Routes</span>
                  <ChevronDown className='w-4 h-4' />
                </button>
                <div className='absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 ease-in-out'>
                  <div className='py-1'>
                    <a
                      href='#'
                      className='block px-4 py-2 text-sm text-gray-700 hover:bg-everyRunOrange/10'
                    >
                      Tan Track
                    </a>
                    <a
                      href='#'
                      className='block px-4 py-2 text-sm text-gray-700 hover:bg-everyRunOrange/10'
                    >
                      Albert Park
                    </a>
                    <a
                      href='#'
                      className='block px-4 py-2 text-sm text-gray-700 hover:bg-everyRunOrange/10'
                    >
                      Botanical Gardens
                    </a>
                  </div>
                </div>
              </div>

              {/* Other Nav Items */}
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
              <a
                href='#'
                className='flex items-center space-x-1 text-gray-600 hover:text-everyRunOrange px-3 py-2 rounded-md text-sm font-medium'
              >
                <Medal className='w-4 h-4' />
                <span>Achievements</span>
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

      {/* Mobile menu */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className='px-2 pt-2 pb-3 space-y-1 sm:px-3'>
          <a
            href='#'
            className='block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-everyRunOrange hover:bg-everyRunOrange/10'
          >
            Routes
          </a>
          <a
            href='#'
            className='block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-everyRunOrange hover:bg-everyRunOrange/10'
          >
            Events
          </a>
          <a
            href='#'
            className='block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-everyRunOrange hover:bg-everyRunOrange/10'
          >
            Community
          </a>
          <a
            href='#'
            className='block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-everyRunOrange hover:bg-everyRunOrange/10'
          >
            Achievements
          </a>
          <button className='w-full mt-4 bg-everyRunOrange text-white px-4 py-2 rounded-3xl text-base font-medium  transition-colors'>
            Join Us
          </button>
        </div>
      </div>
    </nav>
  )
}
