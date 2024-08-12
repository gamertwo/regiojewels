'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { Playfair_Display, Raleway } from 'next/font/google';
import Navbar from '@/app/components/Navbar/page';
import Footer from '@/app/components/Footer/page';
import { useCart } from '@/app/context/CartContext';

const playfair = Playfair_Display({ subsets: ['latin'] });
const raleway = Raleway({ subsets: ['latin'] });

export default function ProductsPage() {
  const [products, setProducts] = useState([]);
  const { category } = useParams();
  const { addToCart } = useCart();

  useEffect(() => {
    fetch('/api/products')
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        const filteredProducts = data.data.filter(
          (product) => product.category.toLowerCase().replace(/\s+/g, '-') === category
        );
        setProducts(filteredProducts);
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
      });
  }, [category]);

  return (
    <div className={`${raleway.className} bg-black text-gray-300`}>
      <Navbar />
      <main className="min-h-screen bg-black">
        <div className="container mx-auto px-4 py-16">
          <h1 className={`${playfair.className} text-6xl font-bold text-center mb-16 text-white tracking-wide`}>
            {category.replace(/-/g, ' ').split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {products.map((product) => (
              <div key={product._id} className="bg-gray-950 p-8 rounded-lg shadow-2xl border border-gray-900 hover:border-white transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105">
                <div className="relative overflow-hidden rounded-lg mb-6">
                  <Image 
                    src={product.image} 
                    alt={product.name} 
                    width={400} 
                    height={300} 
                    className="w-full h-72 object-cover transition duration-300 ease-in-out transform hover:scale-110"
                  />
                </div>
                <h2 className={`${playfair.className} text-2xl font-semibold mb-3 text-white`}>{product.name}</h2>
                <p className="text-gray-400 mb-4 line-clamp-2 text-sm">{product.description}</p>
                <p className="text-white font-bold mb-6 text-2xl">${product.price}</p>
                <button 
                  onClick={() => addToCart({
                    id: product._id,
                    name: product.name,
                    price: product.price,
                    image: product.image
                  })}
                  className="w-full bg-white text-black px-6 py-3 rounded-full hover:bg-gray-200 transition duration-300 font-semibold text-sm uppercase tracking-wide"
                >
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
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
        .hover\:border-white:hover {
          border-color: #ffffff;
        }
      `}</style>
    </div>
  );
}