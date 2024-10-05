import FooterLink from '../atoms/FooterLink'

export default function FooterColumn({ title, links }) {
  return (
    <div>
      <h3 className='text-white font-semibold mb-4'>{title}</h3>
      <ul className='space-y-2'>
        {links.map((link) => (
          <li key={link.text}>
            <FooterLink href={link.href}>{link.text}</FooterLink>
          </li>
        ))}
      </ul>
    </div>
  )
}
