"use client"

import React, { useEffect } from 'react'
import Image from 'next/image'
import { Playfair_Display, Lato } from 'next/font/google'
import { motion } from 'framer-motion'

const playfair = Playfair_Display({ subsets: ['latin'] })
const lato = Lato({ weight: ['400', '700'], subsets: ['latin'] })

const FeaturedCollections = () => {
  const collections = [
    { name: 'Diamond Elegance', image: '/images/diamond-collection.jpeg' },
    { name: 'Golden Glamour', image: '/images/gold-collection.jpeg' },
    { name: 'Precious Gems', image: '/images/gems-collection.jpeg' },
  ]

  useEffect(() => {
    const cursorShine = document.createElement('div');
    cursorShine.classList.add('cursor-shine');
    document.body.appendChild(cursorShine);

    const updateCursorShine = (e) => {
      cursorShine.style.left = `${e.clientX}px`;
      cursorShine.style.top = `${e.clientY}px`;
    };

    document.addEventListener('mousemove', updateCursorShine);

    return () => {
      document.removeEventListener('mousemove', updateCursorShine);
      document.body.removeChild(cursorShine);
    };
  }, []);

  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="py-2 bg-black relative"
    >
      <motion.div 
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gold-300 via-gold-500 to-gold-300"
      ></motion.div>
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className={`text-5xl pt-8 md:text-6xl text-center text-[#B7BAC1] mb-6 ${playfair.className}`}
        >
          Featured Collections
        </motion.h2>
        <motion.p 
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={`text-center text-[#767C8A] mb-16 text-xl ${lato.className}`}
        >
          Discover our exquisite selection of timeless pieces
        </motion.p>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-12"
        >
          {collections.map((collection, index) => (
            <motion.div 
              key={index}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="relative group overflow-hidden rounded-lg shadow-xl h-[500px]"
            >
              <Image
                src={collection.image}
                alt={collection.name}
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-300 group-hover:scale-110"
              />
              <motion.div 
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 bg-black bg-opacity-80 flex flex-col items-center justify-center"
              >
                <h3 className={`text-[#B7BAC1] text-3xl font-semibold mb-4 ${playfair.className}`}>{collection.name}</h3>
                <p className={`text-[#767C8A] text-center px-6 text-lg ${lato.className}`}>Explore our stunning {collection.name.toLowerCase()} pieces</p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
        <motion.div 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-16"
        >
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`bg-gradient-to-r from-gold-400 to-gold-600 text-black font-bold py-4 px-10 rounded-full text-xl transition duration-300 hover:from-gold-500 hover:to-gold-700 ${lato.className}`}
          >
            View All Collections
          </motion.button>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default FeaturedCollections
