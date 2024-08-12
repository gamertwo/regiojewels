import Link from 'next/link'
import { Playfair_Display, Lato } from 'next/font/google'

const playfair = Playfair_Display({ subsets: ['latin'] })
const lato = Lato({ weight: ['400', '700'], subsets: ['latin'] })

const Navbar = () => {
  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Collections', href: '/components/Collections' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' }
  ];

  return (
    <nav className={`bg-gradient-to-r from-gold-200 to-gold-300 shadow-lg ${lato.className}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-6">
          <Link href="/" className={`text-3xl font-bold text-gold-800 ${playfair.className}`}>
            Gold Store
          </Link>
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-gold-800 hover:text-gold-600 transition duration-300 text-xl ${playfair.className}`}
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="flex items-center space-x-6">
            <Link href="/cart" className="text-gold-800 hover:text-gold-600 transition duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </Link>
            <Link href="/auth/signin" className="text-gold-800 hover:text-gold-600 transition duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
