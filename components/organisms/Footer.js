import FooterColumn from '../molecules/FooterColumn'
import FooterLink from '../atoms/FooterLink'
import SocialLinks from '../molecules/SocialLinks'

export default function Footer() {
  const footerColumns = [
    {
      title: 'About',
      links: [
        { text: 'Our Story', href: '/about' },
        { text: 'Team', href: '/team' },
        { text: 'Careers', href: '/careers' },
      ],
    },
    {
      title: 'Running',
      links: [
        { text: 'Routes', href: '/routes' },
        { text: 'Pace Groups', href: '/pace-groups' },
        { text: 'Events', href: '/events' },
      ],
    },
    {
      title: 'Community',
      links: [
        { text: 'Blog', href: '/blog' },
        { text: 'Forum', href: '/forum' },
        { text: 'Leaderboard', href: '/leaderboard' },
      ],
    },
    {
      title: 'Support',
      links: [
        { text: 'FAQs', href: '/faqs' },
        { text: 'Contact', href: '/contact' },
        { text: 'Safety Guidelines', href: '/safety' },
      ],
    },
  ]

  return (
    <footer className='bg-gray-900 text-gray-400'>
      <div className='container mx-auto px-4 py-12'>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-8 mb-8'>
          {footerColumns.map((column) => (
            <FooterColumn key={column.title} {...column} />
          ))}
        </div>

        <div className='border-t border-gray-800 pt-8 mt-8'>
          <div className='flex flex-col md:flex-row justify-between items-center'>
            <div className='mb-4 md:mb-0'>
              <img
                src='/images/logos/logo.svg'
                alt='Melbourne Run Club'
                className='h-32 '
              />

              <p className='text-sm'>
                EveryRun Club acknowledges the Traditional Custodians, and
                Elders past, present and future, of the lands on which we work,
                live and run, and further acknowledge, thank and pay respect to
                the Traditional Owners of the land in the multitude of
                Aboriginal countries across Australia and other nations.
              </p>
            </div>

            <SocialLinks />
          </div>

          <div className='mt-8 text-center md:text-left text-sm'>
            <div className='flex flex-wrap justify-center md:justify-start gap-4 mb-4'>
              <FooterLink href='/privacy'>Privacy Policy</FooterLink>
              <FooterLink href='/terms'>Terms of Service</FooterLink>
              <FooterLink href='/cookies'>Cookie Policy</FooterLink>
            </div>
            <p>
              © {new Date().getFullYear()} EveryRun Club Melbourne. All rights
              reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
