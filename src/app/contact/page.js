'use client';

import { useState } from 'react';
import { Playfair_Display, Montserrat } from 'next/font/google';
import Navbar from '@/app/components/Navbar/page';
import Footer from '@/app/components/Footer/page';
import { motion } from 'framer-motion';
import { FaUser, FaEnvelope, FaPen, FaPaperPlane } from 'react-icons/fa';

const playfair = Playfair_Display({ subsets: ['latin'] });
const montserrat = Montserrat({ weight: ['400', '600'], subsets: ['latin'] });

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', message: '' });
  };

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
            Contact Us
          </motion.h1>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto bg-[#1C1C1C] bg-opacity-70 p-10 rounded-lg shadow-2xl border border-[#2A2A2A] relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#1C1C1C] to-[#242424] opacity-50 rounded-lg"></div>
            <form onSubmit={handleSubmit} className="space-y-8 relative">
              <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
                <label htmlFor="name" className="block text-lg font-semibold text-[#E0E0E0] mb-2 flex items-center">
                  <FaUser className="mr-2 text-[#A0A0A0]" /> Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="mt-1 block w-full rounded-md bg-[#2A2A2A] border-[#3A3A3A] text-[#E0E0E0] shadow-sm focus:border-[#505050] focus:ring focus:ring-[#505050] focus:ring-opacity-50 px-4 py-3 text-lg transition duration-300"
                  required
                />
              </motion.div>
              <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
                <label htmlFor="email" className="block text-lg font-semibold text-[#E0E0E0] mb-2 flex items-center">
                  <FaEnvelope className="mr-2 text-[#A0A0A0]" /> Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="mt-1 block w-full rounded-md bg-[#2A2A2A] border-[#3A3A3A] text-[#E0E0E0] shadow-sm focus:border-[#505050] focus:ring focus:ring-[#505050] focus:ring-opacity-50 px-4 py-3 text-lg transition duration-300"
                  required
                />
              </motion.div>
              <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
                <label htmlFor="message" className="block text-lg font-semibold text-[#E0E0E0] mb-2 flex items-center">
                  <FaPen className="mr-2 text-[#A0A0A0]" /> Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="mt-1 block w-full rounded-md bg-[#2A2A2A] border-[#3A3A3A] text-[#E0E0E0] shadow-sm focus:border-[#505050] focus:ring focus:ring-[#505050] focus:ring-opacity-50 px-4 py-3 text-lg transition duration-300"
                  required
                ></textarea>
              </motion.div>
              <motion.div 
                whileHover={{ scale: 1.05 }} 
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#3A3A3A] to-[#2A2A2A] text-[#F0F0F0] text-xl font-bold px-6 py-4 rounded-full hover:from-[#444444] hover:to-[#333333] transition duration-300 shadow-lg flex items-center justify-center relative overflow-hidden group"
                >
                  <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-[#F0F0F0] rounded-full group-hover:w-56 group-hover:h-56 opacity-10"></span>
                  <span className="relative flex items-center">
                    <FaPaperPlane className="mr-2" /> Send Message
                  </span>
                </button>
              </motion.div>
            </form>
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