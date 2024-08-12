'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Playfair_Display, Raleway } from 'next/font/google';
import Navbar from '@/app/components/Navbar/page';
import Footer from '@/app/components/Footer/page';
import { motion } from 'framer-motion';

const playfair = Playfair_Display({ subsets: ['latin'] });
const raleway = Raleway({ subsets: ['latin'] });

export default function CollectionsPage() {
  const [collections, setCollections] = useState([]);

  useEffect(() => {
    fetchCollections();
  }, []);

  const fetchCollections = async () => {
    const res = await fetch('/api/collections');
    const data = await res.json();
    setCollections(data.data);
  };

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
            Our Delicate Collections
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {collections.map((collection, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
                className="bg-gray-950 p-6 rounded-lg shadow-2xl"
              >
                <Link href={`/products/${collection.name.toLowerCase().replace(/\s+/g, '-')}`}>
                  <div className="relative w-full h-64 mb-4">
                    <Image
                      src={collection.image}
                      alt={collection.name}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-md"
                    />
                  </div>
                  <h2 className={`${playfair.className} text-2xl font-semibold mb-2 text-white`}>{collection.name}</h2>
                  <p className="text-gray-300 mb-4">{collection.description}</p>
                </Link>
              </motion.div>
            ))}
          </motion.div>
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
