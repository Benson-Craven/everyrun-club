import SocialIcon from '../atoms/SocialIcon'

export default function SocialLinks() {
  const socialPlatforms = [
    // { platform: 'facebook', href: 'https://facebook.com' },
    // { platform: 'twitter', href: 'https://twitter.com' },
    { platform: 'instagram', href: 'https://instagram.com' },
    { platform: 'youtube', href: 'https://youtube.com' },
  ]

  return (
    <div className='flex space-x-4'>
      {socialPlatforms.map(({ platform, href }) => (
        <a
          key={platform}
          href={href}
          className='text-gray-400 hover:text-white transition-colors'
          target='_blank'
          rel='noopener noreferrer'
        >
          <SocialIcon platform={platform} />
        </a>
      ))}
    </div>
  )
}
