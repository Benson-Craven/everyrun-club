export default function FooterLink({ href, children }) {
  return (
    <a href={href} className='text-gray-400 hover:text-white transition-colors'>
      {children}
    </a>
  )
}
