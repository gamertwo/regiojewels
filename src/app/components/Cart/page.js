'use client';

import { useCart } from '@/app/context/CartContext';
import Link from 'next/link';

export default function Cart() {
  const { cart, removeFromCart } = useCart();

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="bg-black text-white p-4 rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
      {cart.map((item, index) => (
        <div key={index} className="flex justify-between items-center mb-2">
          <span>{item.name}</span>
          <span>${item.price}</span>
          <button 
            onClick={() => removeFromCart(item.id)}
            className="bg-red-500 text-white px-2 py-1 rounded"
          >
            Remove
          </button>
        </div>
      ))}
      <div className="mt-4">
        <strong>Total: ${total}</strong>
      </div>
      <Link href="/checkout">
        <button className="mt-4 bg-gold-400 text-black px-4 py-2 rounded hover:bg-gold-500 transition duration-300">
          Proceed to Checkout
        </button>
      </Link>
    </div>
  );
}
