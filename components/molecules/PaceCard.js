export default function PaceCard({ title, pace, description, icon }) {
  return (
    <div className='bg-white p-6 rounded-lg shadow-md'>
      <img src={icon} alt={title} className='w-16 h-16 mb-4' />
      <h3 className='text-xl font-semibold mb-2'>{title}</h3>
      <p className='text-gray-600 mb-2'>{pace}</p>
      <p className='text-gray-500'>{description}</p>
    </div>
  )
}
