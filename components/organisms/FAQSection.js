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
      question: 'Will there be merch?',
      answer: 'Come shopping. View our range.',
      link: 'https://www.everyrunclub.com/shop/',
    },
    {
      question: 'Any plans for another day/route?',
      answer:
        "Absolutely, we're just getting started. If you think you suit the mould and want to host a run in a new location, please reach out.",
    },
    {
      question: "What made you start EveryRun Club? What's the founding story?",
      answer:
        'We started a group of running enthusiasts in 2020. We are a community of passionate individuals who believe in the power of running to transform lives.',
    },
    {
      question: 'How often do you run?',
      answer:
        'Every Tuesday, Thursday and Saturday. We take Monday, Wednesday and Friday off.',
    },
    {
      question: 'Do you have a pace group for beginners?',
      answer:
        'Yes, we have a pace group for beginners. They are led by experienced runners who are happy to help you get started.',
    },
    {
      question: 'What time do you run?',
      answer:
        'We run at 6:00 AM on Tuesday, Thursday and Saturday. We recommend arriving 15 minutes before the start time.',
    },
    {
      question: 'What are the distance of the runs?',
      answer:
        'Our runs vary in distance from 5-10 kilometers. We will let you know the distance of the run when we post the route.',
    },
    {
      question: 'What should I wear?',
      answer:
        'Wear comfortable running shoes and clothes that you feel comfortable running in. We also recommend bringing water and a towel.',
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
            If you're still curious, jump over to Instagram and flick us a DM.
            We'll slide one back your way when we return from our run.
          </p>
        </div>
        <div>
          <div className='space-y-4'>
            {faqs.map((faq, index) => (
              <div key={index} className='border-b border-gray-300'>
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
                          View our range
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
