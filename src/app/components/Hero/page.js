'use client';

import React from 'react';
import Image from 'next/image';
import { Playfair_Display } from 'next/font/google';
import { motion } from 'framer-motion';

const playfair = Playfair_Display({ subsets: ['latin'] });

const HeroSection = () => {
  return (
    <section className="relative h-screen overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/diamong2ring.jpeg"
          alt="Elegant jewellery display"
          layout="fill"
          objectFit="cover"
          quality={100}
          priority
        />
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.75 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 bg-gradient-to-b from-black via-black/70 to-black"
        />
      </div>
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="text-center text-white max-w-4xl px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={`text-6xl md:text-8xl font-bold mb-6 ${playfair.className} text-shadow-lg`}
          >
            Exquisite Jewellery
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-3xl mb-8 text-shadow"
          >
            Discover timeless elegance and unparalleled craftsmanship
          </motion.p>
          <motion.p 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-xl mb-10 text-shadow"
          >
            Adorn yourself with our stunning collection of fine jewelry, meticulously crafted to perfection
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-6"
          >
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-gold-400 to-gold-600 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Explore Collection
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05, backgroundColor: '#D4AF37', color: '#FFFFFF' }}
              whileTap={{ scale: 0.95 }}
              className="bg-transparent border-2 border-gold-400 text-gold-400 font-bold py-3 px-8 rounded-full text-lg transition duration-300 hover:bg-gold-400 hover:text-white shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Book Appointment
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
