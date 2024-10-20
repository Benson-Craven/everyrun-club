import './globals.css'
import Footer from '@/components/organisms/Footer'
import Navbar from '@/components/organisms/Navbar'

export const metadata = {
  title: 'Everyrun Club',
  description: 'Join the community. Find your pace.',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className='antialiased font-leagueSpartan scroll-smooth'>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
