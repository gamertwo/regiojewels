import React from 'react'
import { Playfair_Display, Lato } from 'next/font/google'

const playfair = Playfair_Display({ subsets: ['latin'] })
const lato = Lato({ weight: ['400', '700'], subsets: ['latin'] })

const Footer = () => {
  return (
    <footer className="bg-black py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="w-full md:w-1/4 mb-8 md:mb-0">
            <h3 className={`text-2xl md:text-3xl text-gold-400 mb-4 ${playfair.className}`}>Gold Store</h3>
            <p className={`text-[#767C8A] ${lato.className}`}>
              123 Main Street, Beverly Hills, CA 90210
            </p>
            <p className={`text-[#767C8A] ${lato.className}`}>
              <a href="mailto:info@goldstore.com" className="underline">info@goldstore.com</a>
            </p>
            <p className={`text-[#767C8A] ${lato.className}`}>
              <a href="tel:+1-555-555-5555" className="underline">+1-555-555-5555</a>
            </p>
          </div>
          <div className="w-full md:w-1/4 mb-8 md:mb-0">
            <h3 className={`text-2xl md:text-3xl text-gold-400 mb-4 ${playfair.className}`}>Shop</h3>
            <ul className={`text-[#767C8A] ${lato.className}`}>
              <li>
                <a href="#" className="hover:text-gold-400">New Arrivals</a>
              </li>
              <li>
                <a href="#" className="hover:text-gold-400">Collections</a>
              </li>
              <li>
                <a href="#" className="hover:text-gold-400">Best Sellers</a>
              </li>
              <li>
                <a href="#" className="hover:text-gold-400">Sale</a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-8 md:mb-0">
            <h3 className={`text-2xl md:text-3xl text-gold-400 mb-4 ${playfair.className}`}>Company</h3>
            <ul className={`text-[#767C8A] ${lato.className}`}>
              <li>
                <a href="#" className="hover:text-gold-400">About Us</a>
              </li>
              <li>
                <a href="#" className="hover:text-gold-400">Blog</a>
              </li>
              <li>
                <a href="#" className="hover:text-gold-400">Contact Us</a>
              </li>
              <li>
                <a href="#" className="hover:text-gold-400">FAQ</a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-8 md:mb-0">
            <h3 className={`text-2xl md:text-3xl text-gold-400 mb-4 ${playfair.className}`}>Follow Us</h3>
            <ul className={`flex ${lato.className}`}>
              <li className="mr-4">
                <a href="#" className="hover:text-gold-400">
                  <i className="fab fa-facebook-f fa-lg"></i>
                </a>
              </li>
              <li className="mr-4">
                <a href="#" className="hover:text-gold-400">
                  <i className="fab fa-twitter fa-lg"></i>
                </a>
              </li>
              <li className="mr-4">
                <a href="#" className="hover:text-gold-400">
                  <i className="fab fa-instagram fa-lg"></i>
                </a>
              </li>
              <li className="mr-4">
                <a href="#" className="hover:text-gold-400">
                  <i className="fab fa-pinterest-p fa-lg"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <hr className="border-[#111827] mt-16 mb-12" />
        <div className="text-center">
          <p className={`text-[#767C8A] ${lato.className}`}>
            &copy; {new Date().getFullYear()} Gold Store. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
