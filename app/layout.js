import './globals.css'
import Footer from '@/components/organisms/Footer'
import Navbar from '@/components/organisms/Navbar'
import MouseFollower from '@/utils/hooks/useMousePosition'

export const metadata = {
  title: 'EveryRun Melbourne',
  description: 'Join the community. Find your pace.',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className='antialiased font-leagueSpartan scroll-smooth'>
        <Navbar />
        {/* <MouseFollower /> */}
        {children}
        <Footer />
      </body>
    </html>
  )
}
