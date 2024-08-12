import React from 'react'
import Image from 'next/image'
import { Playfair_Display, Lato } from 'next/font/google'

const playfair = Playfair_Display({ subsets: ['latin'] })
const lato = Lato({ weight: ['400', '700'], subsets: ['latin'] })

const SignaturePieces = () => {
  const pieces = [
    { title: "Elegant Diamonds", image: "/images/diamond3ring.PNG" },
    { title: "Golden Masterpieces", image: "/images/diamond5ring.PNG" },
    { title: "Precious Gemstones", image: "/images/diamond4ring.PNG" },
    { title: "Timeless Watches", image: "/images/diamong2ring.jpeg" },
  ]

  return (
    <section className={`py-24 px-4 md:px-8 lg:px-16 ${lato.className}`}>
     <h2 className={`text-5xl py-12 md:text-6xl text-center text-[#B7BAC1] mb-6 ${playfair.className}`}>
          Our Signature Pieces 
        </h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {pieces.map((piece, index) => (
          <React.Fragment key={index}>
            <div className="bg-[#0A0A0A] p-8 md:p-12 shadow-2xl transition-all duration-300 hover:bg-[#151515] group">
              <h3 className={`text-2xl md:text-3xl text-[#A0A0A0] mb-4 md:mb-6 ${playfair.className} group-hover:text-gold-400`}>{piece.title}</h3>
              <p className="text-[#606060] text-base md:text-lg">Explore our exquisite {piece.title.toLowerCase()} collection</p>
            </div>
            <div className="relative h-[400px] md:h-[500px] overflow-hidden shadow-2xl">
              <Image
                src={piece.image}
                alt={piece.title}
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-500 hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6 md:pb-8">
                <span className={`text-gold-400 text-xl md:text-2xl ${playfair.className} border-b-2 border-gold-400 pb-2`}>View Collection</span>
              </div>
            </div>
          </React.Fragment>
        ))}
      </div>
    </section>
  )
}

export default SignaturePieces
