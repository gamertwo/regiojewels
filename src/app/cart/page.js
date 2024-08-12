'use client';

import { useCart } from '../context/CartContext';
import Navbar from '../components/Navbar/page';
import Footer from '../components/Footer/page';
import Link from 'next/link';
import Image from 'next/image';
import { Playfair_Display, Raleway } from 'next/font/google';
import { motion } from 'framer-motion';

const playfair = Playfair_Display({ subsets: ['latin'] });
const raleway = Raleway({ subsets: ['latin'] });

export default function CartPage() {
  const { cart, removeFromCart } = useCart();
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className={`${raleway.className} bg-black text-gray-300`}>
      <Navbar />
      <main className="min-h-screen bg-black">
        <div className="container mx-auto px-4 py-16">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className={`${playfair.className} text-6xl font-bold text-center mb-16 text-white tracking-wide`}
          >
            Your Cart
          </motion.h1>
          
          {cart.length === 0 ? (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-center text-xl"
            >
              Your cart is empty.
            </motion.p>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="bg-gray-950 p-8 rounded-lg shadow-2xl"
            >
              {cart.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center justify-between mb-8 border-b border-gray-800 pb-6"
                >
                  <div className="flex items-center">
                    <Image src={item.image} alt={item.name} width={120} height={120} className="object-cover rounded-lg mr-6 shadow-lg" />
                    <div>
                      <h2 className={`${playfair.className} text-2xl font-semibold text-white mb-2`}>{item.name}</h2>
                      <p className="text-gray-300 text-lg">${item.price.toFixed(2)}</p>
                    </div>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => removeFromCart(item.id)}
                    className="bg-white text-black px-6 py-3 rounded-full hover:bg-gray-200 transition duration-300 shadow-md"
                  >
                    Remove
                  </motion.button>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-12 text-right"
              >
                <p className="text-3xl font-bold mb-6">Total: <span className="text-white">${total.toFixed(2)}</span></p>
                <Link href="/components/Checkout">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-4 bg-white text-black px-8 py-4 rounded-full text-xl font-semibold hover:bg-gray-200 transition duration-300 shadow-lg"
                  >
                    Proceed to Checkout
                  </motion.button>
                </Link>
              </motion.div>
            </motion.div>
          )}
        </div>
      </main>
      <Footer />
      <style jsx global>{`
        body {
          background-color: #000000;
        }
        .bg-gray-950 {
          background-color: #0a0a0a;
        }
      `}</style>
    </div>
  );
}
