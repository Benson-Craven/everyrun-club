import Heading from '../atoms/Typography'

export default function AboutSection() {
  return (
    <section className='py-20 bg-[#f0f0f0]'>
      <div className='container mx-auto px-4'>
        <Heading level={1} className='text-center mb-8 '>
          <h1 className='text-blue-400'>Not another run club..</h1>
        </Heading>
        <div className='grid md:grid-cols-2 gap-12 items-center text-blue-700'>
          <div>
            <p className='text-lg mb-6'>
              Founded in 2020, EveryRun Club is more than just a running group -
              we're a community of passionate individuals who believe in the
              power of running to transform lives.
            </p>
            <p className='text-lg'>
              Whether you're a beginner or an experienced runner, our inclusive
              community welcomes all paces and abilities.
            </p>
          </div>
          <div className='grid grid-cols-2 gap-4'>
            {/* You would replace these with actual images */}
            <div className='bg-gray-200 h-48 rounded-lg'></div>
            <div className='bg-gray-300 h-48 rounded-lg'></div>
            <div className='bg-gray-300 h-48 rounded-lg'></div>
            <div className='bg-gray-200 h-48 rounded-lg'></div>
          </div>
        </div>
      </div>
    </section>
  )
}
