'use client'
import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null)

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  const faqs = [
    {
      question: 'Where do we run?',
      answer:
        'Our locations change every week, so you never get bored of where you’re running. We have some favourite spots that we like to hit up, but keep an eye on our socials to see where we’re running next.',
    },
    {
      question: 'How far do we run?',
      answer:
        'Our usual 9:30am run is never more than 5km, and we usually have a route that allows you to do a bit less if you’re not feeling the full 5km. We do offer a long(er) run option that is between 7-10km at a 6min/km pace. These guys usually meet a bit earlier but you’ll find all that info on our IG page.',
    },
    {
      question: 'How do I join?',
      answer: 'You just have to come along to one of our runs. That’s it!',
      link: '',
    },
    {
      question: 'Where do you meet on Wednesday nights?',
      answer:
        'We meet at Olympic Park Oval. Starting at 7pm so make sure to arrive a little bit before for some pre-sesh chats.',
      link: 'https://www.google.com/maps/place/Olympic+Park+Oval/@-37.8246977,144.97876,750m/data=!3m2!1e3!4b1!4m6!3m5!1s0x6ad64293919671ab:0xcb04a013a0cf6c4c!8m2!3d-37.8246977!4d144.9813349!16s%2Fg%2F11c60nc9qd?entry=ttu&g_ep=EgoyMDI0MTAyMS4xIKXMDSoASAFQAw%3D%3D',
    },
    {
      question: 'Can anyone join?',
      answer:
        'We’re the run club for EVERYONE. We don’t care about PBs around here (although we will celebrate you and your achievements ofc) but we’re just here to meet some new people and have some fun. All fitness levels are welcome at EveryRun.',
    },
    {
      question: 'Can dogs join the run?',
      answer:
        'If there’s anything we love more than run club, it’s run club doggos. Just make sure they’re good around people (and swans - we’ve had a few dogs jump into Alber Park lake chasing the swans before) and just be mindful of them in a crowded space where not everyone might be the biggest fan.',
    },
    {
      question: 'MERCH MERCH MERCH?',
      answer:
        'You guys went crazy for our first drop!! But you didn’t think we’d stop there? We’ve got some very exciting announcements coming sooner than you think!',
    },
  ]

  return (
    <section id='faq' className='py-10 px-5 lg:py-16 lg:px-20 bg-[#f0f0f0]'>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
        <div>
          <h2 className='text-3xl font-bold mb-4 text-everyRunOrange'>
            Frequently Asked Questions
          </h2>
          <p className='mb-4 text-gray-600'>
            We're stoked you're curious about EveryRun Club. Here are some
            questions we get asked a lot - and some answers to get you started.
          </p>
          <p className='text-gray-600'>
            If you're still looking, head on over to Instagram and chuck us a
            message.
          </p>
        </div>
        <div>
          <div className='space-y-4'>
            {faqs.map((faq, index) => (
              <div
                key={index}
                className='border-b border-gray-300 cursor-pointer'
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className='w-full text-left py-3 text-lg text-gray-800 focus:outline-none flex justify-between items-center'
                  aria-expanded={activeIndex === index}
                  aria-controls={`faq-answer-${index}`}
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 transition-transform duration-300 ${
                      activeIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <div
                  id={`faq-answer-${index}`}
                  className={`grid transition-all duration-300 ease-in-out ${
                    activeIndex === index
                      ? 'grid-rows-[1fr]'
                      : 'grid-rows-[0fr]'
                  }`}
                >
                  <div className='overflow-hidden'>
                    <div
                      className={`pt-2 pb-4 opacity-0 transition-opacity duration-300 ${
                        activeIndex === index ? 'opacity-100' : ''
                      }`}
                    >
                      <p className='text-gray-600'>{faq.answer}</p>
                      {faq.link && (
                        <a href={faq.link} className='text-blue-500 underline'>
                          How do I get there?
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQ
