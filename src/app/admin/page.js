'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Space_Grotesk, Roboto_Mono } from 'next/font/google';
import Navbar from '@/app/components/Navbar/page';
import Footer from '@/app/components/Footer/page';

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'] });
const robotoMono = Roboto_Mono({ weight: ['400', '700'], subsets: ['latin'] });

export default function AdminPage() {
  const [products, setProducts] = useState([]);
  const [collections, setCollections] = useState([]);
  const [newCollection, setNewCollection] = useState({
    name: '',
    description: '',
    image: '',
  });
  const [newProduct, setNewProduct] = useState({
    name: '',
    description: '',
    price: '',
    category: '',
    image: '',
  });
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetchProducts();
    fetchCollections();
    fetchOrders();
  }, []);
  
  const fetchProducts = async () => {
    const res = await fetch('/api/products');
    const data = await res.json();
    setProducts(data.data);
  };

  const fetchOrders = async () => {
    const res = await fetch('/api/orders');
    const data = await res.json();
    setOrders(data.data);
  };
  
  const fetchCollections = async () => {
    const res = await fetch('/api/collections');
    const data = await res.json();
    setCollections(data.data);
  };

  const handleCollectionInputChange = (e) => {
    const { name, value } = e.target;
    setNewCollection({ ...newCollection, [name]: value });
  };

  const handleProductInputChange = (e) => {
    const { name, value } = e.target;
    setNewProduct({ ...newProduct, [name]: value });
  };

  const handleCollectionSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('/api/collections', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newCollection),
    });

    if (res.ok) {
      const data = await res.json();
      setCollections([...collections, data.data]);
      setNewCollection({
        name: '',
        description: '',
        image: '',
      });
    }
  };

  const handleProductSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('/api/products', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newProduct),
    });

    if (res.ok) {
      const data = await res.json();
      setProducts([...products, data.data]);
      setNewProduct({
        name: '',
        description: '',
        price: '',
        category: '',
        image: '',
      });
    }
  };

  const handleDeleteCollection = async (id) => {
    const res = await fetch(`/api/collections/${id}`, {
      method: 'DELETE',
    });
    if (res.ok) {
      setCollections(collections.filter(collection => collection._id !== id));
    }
  };

  const handleDeleteProduct = async (id) => {
    const res = await fetch(`/api/products/${id}`, {
      method: 'DELETE',
    });
    if (res.ok) {
      setProducts(products.filter(product => product._id !== id));
    }
  };

  return (
    <div className={`${robotoMono.className} bg-black text-gray-300`}>
      <Navbar />
      <main className="min-h-screen">
        <div className="container mx-auto px-4 py-16">
          <h1 className={`text-6xl font-bold text-center mb-12 ${spaceGrotesk.className} text-cyan-400 glow`}>Admin Dashboard</h1>
         
          <section className="mb-12 bg-gray-900 p-8 rounded-lg shadow-2xl border border-gray-800">
            <h2 className={`text-4xl font-bold mb-6 ${spaceGrotesk.className} text-cyan-300`}>Add New Collection</h2>
            <form onSubmit={handleCollectionSubmit} className="mb-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  value={newCollection.name}
                  onChange={handleCollectionInputChange}
                  placeholder="Collection Name"
                  className="bg-gray-800 text-gray-100 px-4 py-2 rounded-md focus:ring-2 focus:ring-cyan-400 focus:outline-none"
                  required
                />
                <input
                  type="text"
                  name="description"
                  value={newCollection.description}
                  onChange={handleCollectionInputChange}
                  placeholder="Description"
                  className="bg-gray-800 text-gray-100 px-4 py-2 rounded-md focus:ring-2 focus:ring-cyan-400 focus:outline-none"
                  required
                />
                <input
                  type="text"
                  name="image"
                  value={newCollection.image}
                  onChange={handleCollectionInputChange}
                  placeholder="Image URL"
                  className="bg-gray-800 text-gray-100 px-4 py-2 rounded-md focus:ring-2 focus:ring-cyan-400 focus:outline-none"
                  required
                />
              </div>
              <button type="submit" className="mt-4 bg-cyan-500 text-black px-6 py-2 rounded-md hover:bg-cyan-400 transition duration-300">
                Add Collection
              </button>
            </form>

            <h2 className={`text-4xl font-bold mb-6 ${spaceGrotesk.className} text-cyan-300`}>Collections</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {collections.map((collection, index) => (
                <div key={index} className="bg-gradient-to-b from-gray-800 to-gray-900 p-6 rounded-lg shadow-xl border border-gray-700 hover:border-cyan-500 transition duration-300">
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
                    <h2 className={`text-2xl font-semibold mb-2 ${spaceGrotesk.className} text-cyan-300`}>{collection.name}</h2>
                    <p className="text-gray-400 mb-4">{collection.description}</p>
                  </Link>
                  <button
                    onClick={() => handleDeleteCollection(collection._id)}
                    className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition duration-300"
                  >
                    Delete Collection
                  </button>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-12 bg-gray-900 p-8 rounded-lg shadow-2xl border border-gray-800">
            <h2 className={`text-4xl font-bold mb-6 ${spaceGrotesk.className} text-cyan-300`}>Add New Product</h2>
            <form onSubmit={handleProductSubmit} className="mb-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  value={newProduct.name}
                  onChange={handleProductInputChange}
                  placeholder="Product Name"
                  className="bg-gray-800 text-gray-100 px-4 py-2 rounded-md focus:ring-2 focus:ring-cyan-400 focus:outline-none"
                  required
                />
                <input
                  type="text"
                  name="description"
                  onChange={handleProductInputChange}
                  placeholder="Description"
                  className="bg-gray-800 text-gray-100 px-4 py-2 rounded-md focus:ring-2 focus:ring-cyan-400 focus:outline-none"
                  required
                />
                <input
                  type="number"
                  name="price"
                  value={newProduct.price}
                  onChange={handleProductInputChange}
                  placeholder="Price"
                  className="bg-gray-800 text-gray-100 px-4 py-2 rounded-md focus:ring-2 focus:ring-cyan-400 focus:outline-none"
                  required
                />
                <select
                  name="category"
                  value={newProduct.category}
                  onChange={handleProductInputChange}
                  className="bg-gray-800 text-gray-100 px-4 py-2 rounded-md focus:ring-2 focus:ring-cyan-400 focus:outline-none"
                  required
                >
                  <option value="">Select a Collection</option>
                  {collections.map((collection) => (
                    <option key={collection._id} value={collection.name}>{collection.name}</option>
                  ))}
                </select>
                <input
                  type="text"
                  name="image"
                  value={newProduct.image}
                  onChange={handleProductInputChange}
                  placeholder="Image URL"
                  className="bg-gray-800 text-gray-100 px-4 py-2 rounded-md focus:ring-2 focus:ring-cyan-400 focus:outline-none"
                  required
                />
              </div>
              <button type="submit" className="mt-4 bg-cyan-500 text-black px-6 py-2 rounded-md hover:bg-cyan-400 transition duration-300">
                Add Product
              </button>
            </form>

            <h2 className={`text-4xl font-bold mb-6 ${spaceGrotesk.className} text-cyan-300`}>Product List</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product) => (
                <div key={product._id} className="bg-gradient-to-b from-gray-800 to-gray-900 p-6 rounded-lg shadow-xl border border-gray-700 hover:border-cyan-500 transition duration-300">
                  <div className="relative w-full h-48 mb-4">
                    <Image 
                      src={product.image} 
                      alt={product.name} 
                      layout="fill" 
                      objectFit="cover" 
                      className="rounded-md"
                    />
                  </div>
                  <h3 className={`text-2xl font-semibold mb-2 ${spaceGrotesk.className} text-cyan-300`}>{product.name}</h3>
                  <p className="text-gray-400 mb-2">{product.description}</p>
                  <p className="text-cyan-400 font-bold mb-2">${product.price}</p>
                  <p className="text-gray-400 mb-4">Category: {product.category}</p>
                  <button
                    onClick={() => handleDeleteProduct(product._id)}
                    className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition duration-300"
                  >
                    Delete
                  </button>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-12 bg-gray-900 p-8 rounded-lg shadow-2xl border border-gray-800">
            <h2 className={`text-4xl font-bold mb-6 ${spaceGrotesk.className} text-cyan-300`}>Orders</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {orders.map((order) => (
                <div key={order._id} className="bg-gradient-to-b from-gray-800 to-gray-900 p-6 rounded-lg shadow-xl border border-gray-700 hover:border-cyan-500 transition duration-300">
                  <h3 className={`text-2xl font-semibold mb-2 ${spaceGrotesk.className} text-cyan-300`}>Order ID: {order._id}</h3>
                  <p className="text-gray-400 mb-2">Name: {order.customerInfo.name}</p>
                  <p className="text-gray-400 mb-2">Phone: {order.customerInfo.phone}</p>
                  <p className="text-gray-400 mb-2">Address: {order.customerInfo.address1} {order.customerInfo.address2}</p>
                  <p className="text-gray-400 mb-2">City: {order.customerInfo.city}</p>
                  <p className="text-gray-400 mb-2">State: {order.customerInfo.state}</p>
                  <p className="text-gray-400 mb-2">Country: {order.customerInfo.country}</p>
                  <p className="text-gray-400 mb-2">Zip Code: {order.customerInfo.zipCode}</p>
                  <p className="text-cyan-400 font-bold mb-2">Total: ${order.total}</p>
                  <h4 className="text-xl font-semibold mb-2 text-cyan-300">Products:</h4>
                  <ul>
                    {order.orderItems.map((item, index) => (
                      <li key={index} className="text-gray-400">
                        {item.name} - Quantity: {item.quantity}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
      <Footer />
      <style jsx global>{`
        .glow {
          text-shadow: 0 0 10px rgba(34, 211, 238, 0.7), 0 0 20px rgba(34, 211, 238, 0.5);
        }
        body {
          background-color: #000000;
          background-image: radial-gradient(circle at 50% 50%, #1a1a1a 0%, #000000 100%);
        }
      `}</style>
    </div>
  );
}
