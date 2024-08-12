import React from 'react'
import Image from 'next/image'
import { Playfair_Display, Lato } from 'next/font/google'

const playfair = Playfair_Display({ subsets: ['latin'] })
const lato = Lato({ weight: ['400', '700'], subsets: ['latin'] })

const JewelleryCollection = () => {
  const categories = [
    { name: 'Rings', image: '/images/diamond3ring.PNG' },
    { name: 'Necklaces', image: '/images/diamond5ring.PNG' },
    { name: 'Earrings', image: '/images/diamond4ring.PNG' },
    { name: 'Bracelets', image: '/images/diamond5ring.PNG' },
  ]

  return (
    <section className={`py-24 bg-[#050505] ${lato.className}`}>
      <div className="container mx-auto px-4">
        <h2 className={`text-5xl md:text-6xl text-center text-gold-400 mb-16 ${playfair.className}`}>
          Our Jewellery Collection
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <div key={index} className="group relative overflow-hidden rounded-lg shadow-2xl">
              <Image
                src={category.image}
                alt={category.name}
                width={400}
                height={500}
                objectFit="cover"
                className="transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className={`text-3xl text-white ${playfair.className}`}>{category.name}</h3>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-gold-500 to-gold-700 text-black font-bold py-3 px-8 rounded-full text-lg transition duration-300 hover:from-gold-600 hover:to-gold-800 shadow-lg">
            View All Collections
          </button>
        </div>
      </div>
    </section>
  )
}

export default JewelleryCollection
