import React from 'react'
import { Playfair_Display, Lato } from 'next/font/google'

const playfair = Playfair_Display({ subsets: ['latin'] })
const lato = Lato({ weight: ['400', '700'], subsets: ['latin'] })

const Testimonials = () => {
  const reviews = [
    { text: "Absolutely stunning pieces. The craftsmanship is unparalleled.", author: "Emma S." },
    { text: "I've never felt more elegant. These jewels are truly one-of-a-kind.", author: "Michael R." },
    { text: "The attention to detail is remarkable. A true work of art.", author: "Sophia L." },
  ]

  return (
    <section className={`py-24 bg-black ${lato.className}`}>
      <div className="container mx-auto px-4">
        <h2 className={`text-5xl md:text-6xl text-center text-[#B7BAC1] mb-16 ${playfair.className}`}>
          What Our Clients Say
        </h2>
        <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-8">
          {reviews.map((review, index) => (
            <div key={index} className="bg-[#0A0A0A] p-8 rounded-lg shadow-2xl max-w-sm">
              <p className="text-[#767C8A] text-lg mb-6">{review.text}</p>
              <p className={`text-gold-400 text-right ${playfair.className}`}>- {review.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
