import './globals.css';
import Navbar from './components/Navbar/index';
import Footer from './components/Footer/index';

export const metadata = {
  title: 'seminarfarmasiupy',
  description: 'upy jaya jaya jaya',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='bg-cream'>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
