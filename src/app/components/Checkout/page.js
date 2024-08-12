'use client';

import { useState } from 'react';
import { useCart } from '@/app/context/CartContext';
import Navbar from '@/app/components/Navbar/page';
import Footer from '@/app/components/Footer/page';
import { Playfair_Display, Raleway } from 'next/font/google';

const playfair = Playfair_Display({ subsets: ['latin'] });
const raleway = Raleway({ subsets: ['latin'] });

export default function CheckoutPage() {
  const { cart } = useCart();
  const [formData, setFormData] = useState({
    name: '', phone: '', address1: '', address2: '', city: '', state: '', country: '', zipCode: '',
  });
  const [orderPlaced, setOrderPlaced] = useState(false);

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const orderDetails = {
      customerInfo: formData,
      orderItems: cart,
      total: total.toFixed(2)
    };
  
    const response = await fetch('/api/orders', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(orderDetails),
    });
  
    if (response.ok) {
      setOrderPlaced(true);
    } else {
      console.error('Failed to submit order');
    }
  };
  
  if (orderPlaced) {
    return (
      <div className={`${raleway.className} bg-black text-gray-300`}>
        <Navbar />
        <main className="min-h-screen bg-black">
          <div className="container mx-auto px-4 py-16">
            <h1 className={`${playfair.className} text-6xl font-bold text-center mb-16 text-white tracking-wide`}>Order Confirmation</h1>
            <div className="bg-gray-950 p-8 rounded-lg shadow-2xl">
              <h2 className={`${playfair.className} text-3xl font-bold mb-6 text-white`}>Order Details</h2>
              <div className="space-y-4">
                <p><strong>Name:</strong> {formData.name}</p>
                <p><strong>Phone:</strong> {formData.phone}</p>
                <p><strong>Address:</strong> {formData.address1} {formData.address2}</p>
                <p><strong>City:</strong> {formData.city}</p>
                <p><strong>State/Province:</strong> {formData.state}</p>
                <p><strong>Country:</strong> {formData.country}</p>
                <p><strong>Zip/Postal Code:</strong> {formData.zipCode}</p>
                <p><strong>Total Amount:</strong> ${total.toFixed(2)}</p>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className={`${raleway.className} bg-black text-gray-300`}>
      <Navbar />
      <main className="min-h-screen bg-black">
        <div className="container mx-auto px-4 py-16">
          <h1 className={`${playfair.className} text-6xl font-bold text-center mb-16 text-white tracking-wide`}>Checkout</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-gray-950 p-8 rounded-lg shadow-2xl">
              <h2 className={`${playfair.className} text-3xl font-bold mb-6 text-white`}>Your Order</h2>
              {cart.map((item, index) => (
                <div key={index} className="flex justify-between items-center mb-4 border-b border-gray-800 pb-2">
                  <span className="text-lg">{item.name}</span>
                  <span className="text-white font-semibold">${item.price.toFixed(2)}</span>
                </div>
              ))}
              <div className="mt-6 text-2xl font-bold text-white">
                Total: ${total.toFixed(2)}
              </div>
            </div>

            <form onSubmit={handleSubmit} className="bg-gray-950 p-8 rounded-lg shadow-2xl space-y-6">
              <h2 className={`${playfair.className} text-3xl font-bold mb-6 text-white`}>Shipping Information</h2>
              <input
                type="text" name="name" value={formData.name} onChange={handleInputChange} placeholder="Full Name"
                className="w-full p-3 bg-gray-900 text-white rounded-md focus:ring-2 focus:ring-white focus:outline-none" required
              />
              <input
                type="tel" name="phone" value={formData.phone} onChange={handleInputChange} placeholder="Phone Number"
                className="w-full p-3 bg-gray-900 text-white rounded-md focus:ring-2 focus:ring-white focus:outline-none" required
              />
              <input
                type="text" name="address1" value={formData.address1} onChange={handleInputChange} placeholder="Address Line 1"
                className="w-full p-3 bg-gray-900 text-white rounded-md focus:ring-2 focus:ring-white focus:outline-none" required
              />
              <input
                type="text" name="address2" value={formData.address2} onChange={handleInputChange} placeholder="Address Line 2 (Optional)"
                className="w-full p-3 bg-gray-900 text-white rounded-md focus:ring-2 focus:ring-white focus:outline-none"
              />
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text" name="city" value={formData.city} onChange={handleInputChange} placeholder="City"
                  className="w-full p-3 bg-gray-900 text-white rounded-md focus:ring-2 focus:ring-white focus:outline-none" required
                />
                <input
                  type="text" name="state" value={formData.state} onChange={handleInputChange} placeholder="State/Province"
                  className="w-full p-3 bg-gray-900 text-white rounded-md focus:ring-2 focus:ring-white focus:outline-none" required
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text" name="country" value={formData.country} onChange={handleInputChange} placeholder="Country"
                  className="w-full p-3 bg-gray-900 text-white rounded-md focus:ring-2 focus:ring-white focus:outline-none" required
                />
                <input
                  type="text" name="zipCode" value={formData.zipCode} onChange={handleInputChange} placeholder="Zip/Postal Code"
                  className="w-full p-3 bg-gray-900 text-white rounded-md focus:ring-2 focus:ring-white focus:outline-none" required
                />
              </div>
              <button type="submit" className="w-full bg-white text-black px-6 py-3 rounded-full hover:bg-gray-200 transition duration-300 font-semibold text-lg uppercase tracking-wide mt-4">
                Place Order (Cash on Delivery)
              </button>
            </form>
          </div>
        </div>
      </main>
      <Footer />
      <style jsx global>{`
        body { background-color: #000000; }
        .bg-gray-950 { background-color: #0a0a0a; }
      `}</style>
    </div>
  );
}
