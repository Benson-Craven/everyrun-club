'use client'

import { useState } from 'react'
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

  return (
    <nav className='fixed top-0 left-0 right-0 mix-blend-difference shadow-sm z-50 pt-[40px]'>
      <div className='container mx-auto px-4'>
        <div className='flex justify-between items-center h-16'>
          {/* Logo */}
          <div className='flex-shrink-0 flex items-center'>
            <span className='text-xl font-bold text-purple-600'>
              EveryRun Club
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className='hidden md:flex items-center space-x-4'>
            <div className='flex space-x-4'>
              {/* Routes Dropdown */}
              <div className='relative group'>
                <button className='flex items-center space-x-1 text-gray-600 hover:text-purple-600 px-3 py-2 rounded-md text-sm font-medium'>
                  <MapPin className='w-4 h-4' />
                  <span>Routes</span>
                  <ChevronDown className='w-4 h-4' />
                </button>
                <div className='absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 ease-in-out'>
                  <div className='py-1'>
                    <a
                      href='#'
                      className='block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50'
                    >
                      Tan Track
                    </a>
                    <a
                      href='#'
                      className='block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50'
                    >
                      Albert Park
                    </a>
                    <a
                      href='#'
                      className='block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50'
                    >
                      Botanical Gardens
                    </a>
                  </div>
                </div>
              </div>

              {/* Other Nav Items */}
              <a
                href='#'
                className='flex items-center space-x-1 text-gray-600 hover:text-purple-600 px-3 py-2 rounded-md text-sm font-medium'
              >
                <Calendar className='w-4 h-4' />
                <span>Events</span>
              </a>
              <a
                href='#'
                className='flex items-center space-x-1 text-gray-600 hover:text-purple-600 px-3 py-2 rounded-md text-sm font-medium'
              >
                <Users className='w-4 h-4' />
                <span>Community</span>
              </a>
              <a
                href='#'
                className='flex items-center space-x-1 text-gray-600 hover:text-purple-600 px-3 py-2 rounded-md text-sm font-medium'
              >
                <Medal className='w-4 h-4' />
                <span>Achievements</span>
              </a>
            </div>

            {/* CTA Button */}
            <button className='bg-purple-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-purple-700 transition-colors'>
              Join Run
            </button>
          </div>

          {/* Mobile menu button */}
          <div className='md:hidden'>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className='inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-purple-600 hover:bg-purple-50 focus:outline-none'
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
            className='block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-purple-600 hover:bg-purple-50'
          >
            Routes
          </a>
          <a
            href='#'
            className='block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-purple-600 hover:bg-purple-50'
          >
            Events
          </a>
          <a
            href='#'
            className='block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-purple-600 hover:bg-purple-50'
          >
            Community
          </a>
          <a
            href='#'
            className='block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-purple-600 hover:bg-purple-50'
          >
            Achievements
          </a>
          <button className='w-full mt-4 bg-purple-600 text-white px-4 py-2 rounded-md text-base font-medium hover:bg-purple-700 transition-colors'>
            Join Run
          </button>
        </div>
      </div>
    </nav>
  )
}
