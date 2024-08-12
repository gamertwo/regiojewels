'use client';

import { Playfair_Display, Montserrat } from 'next/font/google';
import Navbar from '@/app/components/Navbar/page';
import Footer from '@/app/components/Footer/page';
import { motion } from 'framer-motion';
import { FaGem, FaAward, FaHandshake } from 'react-icons/fa';

const playfair = Playfair_Display({ subsets: ['latin'] });
const montserrat = Montserrat({ weight: ['400', '600'], subsets: ['latin'] });

export default function AboutUsPage() {
  return (
    <div className={`${montserrat.className} bg-[#111]`}>
      <Navbar />
      <main className="bg-[#111] text-[#D0D0D0] min-h-screen py-20 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className={`text-6xl font-bold text-center mb-16 ${playfair.className} text-[#F0F0F0] tracking-wide`}
          >
            About Luxe Jewels
          </motion.h1>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto bg-[#1C1C1C] bg-opacity-70 p-10 rounded-lg shadow-2xl border border-[#2A2A2A] relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#1C1C1C] to-[#242424] opacity-50 rounded-lg"></div>
            <div className="relative space-y-8">
              <p className="text-lg leading-relaxed">
                Welcome to Luxe Jewels, where elegance meets craftsmanship. Since our founding in 1985, we have been dedicated to creating exquisite jewelry that captures the essence of beauty and luxury.
              </p>
              
              <div className="flex items-center space-x-4">
                <FaGem className="text-4xl text-[#A0A0A0]" />
                <div>
                  <h2 className={`${playfair.className} text-2xl font-bold text-[#E0E0E0] mb-2`}>Our Passion</h2>
                  <p>We are passionate about sourcing the finest gemstones and precious metals to create timeless pieces that celebrate life's most cherished moments.</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <FaAward className="text-4xl text-[#A0A0A0]" />
                <div>
                  <h2 className={`${playfair.className} text-2xl font-bold text-[#E0E0E0] mb-2`}>Craftsmanship</h2>
                  <p>Our team of master jewelers combines traditional techniques with modern innovation to create pieces of unparalleled quality and beauty.</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <FaHandshake className="text-4xl text-[#A0A0A0]" />
                <div>
                  <h2 className={`${playfair.className} text-2xl font-bold text-[#E0E0E0] mb-2`}>Our Promise</h2>
                  <p>We are committed to ethical sourcing and sustainable practices, ensuring that our jewelry not only looks beautiful but also makes a positive impact.</p>
                </div>
              </div>

              <blockquote className="italic text-[#E0E0E0] border-l-4 border-[#3A3A3A] pl-4 py-2 my-6">
                "At Luxe Jewels, we don't just make jewelry; we create heirlooms that tell your unique story."
                <footer className="text-[#A0A0A0] mt-2">- Eleanor Chambers, Founder</footer>
              </blockquote>

              <p className="text-lg leading-relaxed">
                Whether you're celebrating a milestone, expressing your love, or treating yourself to something special, Luxe Jewels is here to help you find the perfect piece that resonates with your personal style and story.
              </p>

              <div className="mt-8 text-center">
                <motion.a
                  href="/collections"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-block bg-gradient-to-r from-[#3A3A3A] to-[#2A2A2A] text-[#F0F0F0] text-xl font-bold px-8 py-3 rounded-full hover:from-[#444444] hover:to-[#333333] transition duration-300 shadow-lg"
                >
                  Explore Our Collections
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-10 w-20 h-20 bg-[#2A2A2A] rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
          <div className="absolute top-50 right-20 w-24 h-24 bg-[#333333] rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-20 left-1/2 w-28 h-28 bg-[#222222] rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>
      </main>
      <Footer />
      <style jsx global>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
}