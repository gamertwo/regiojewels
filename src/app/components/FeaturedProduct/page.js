import React from 'react'
import Image from 'next/image'
import { Playfair_Display, Lato } from 'next/font/google'

const playfair = Playfair_Display({ subsets: ['latin'] })
const lato = Lato({ weight: ['400', '700'], subsets: ['latin'] })

const FeaturedProduct = () => {
  return (
    <section className={`py-24 bg-black ${lato.className}`}>
      <div className="container mx-auto px-4">
        <h2 className={`text-5xl md:text-6xl text-center text-[#B7BAC1] mb-12 ${playfair.className}`}>
          Featured Masterpiece
        </h2>
        <div className="flex flex-col md:flex-row items-center justify-center">
          <div className="md:w-2/5 mb-8 md:mb-0 md:mr-4">
            <Image
              src="/images/diamond6ring.jpeg"
              alt="Featured Jewelry Piece"
              width={400}
              height={400}
              objectFit="cover"
              className="rounded-lg shadow-2xl"
            />
          </div>
          <div className="md:w-2/5">
            <h3 className={`text-3xl text-gold-400 mb-4 ${playfair.className}`}>The Celestial Diamond Necklace</h3>
            <p className="text-[#767C8A] mb-6">
              A stunning masterpiece that captures the essence of the night sky. This exquisite necklace features a cascade of brilliant-cut diamonds set in 18k white gold, creating a mesmerizing display of light and luxury.
            </p>
            <ul className="text-[#A0A0A0] mb-8">
              <li>✦ 5.7 carats of VS clarity diamonds</li>
              <li>✦ Handcrafted 18k white gold setting</li>
              <li>✦ Adjustable 16-18 inch chain</li>
            </ul>
            <div className="relative bg-white rounded-full inline-block">
              <div className="absolute inset-0 bg-gradient-to-r from-gold-300 via-gold-400 to-gold-300 blur-md opacity-75 rounded-full transform -skew-x-6"></div>
              <button className="relative bg-gradient-to-r from-gold-500 to-gold-700 text-black font-bold py-4 px-10 rounded-full text-lg transition duration-300 hover:from-gold-600 hover:to-gold-800 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                Inquire Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeaturedProduct
