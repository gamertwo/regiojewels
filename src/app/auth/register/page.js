'use client';

import { useState, useEffect } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { Playfair_Display, Lato } from 'next/font/google';
import Navbar from '@/app/components/Navbar/page';

const playfair = Playfair_Display({ subsets: ['latin'] });
const lato = Lato({ weight: ['400', '700'], subsets: ['latin'] });

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  useEffect(() => {
    const canvas = document.getElementById('particles-canvas');
    const ctx = canvas.getContext('2d');
    
    function resizeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const particles = [];
    const particleCount = 100;

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2 + 1,
        color: 'rgba(255, 215, 0, 0.5)',
        speedX: Math.random() * 3 - 1.5,
        speedY: Math.random() * 3 - 1.5
      });
    }

    function animate() {
      requestAnimationFrame(animate);
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach(particle => {
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();
      });
    }

    animate();

    return () => {
      cancelAnimationFrame(animate);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('/api/auth/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, password }),
    });

    if (response.ok) {
      const result = await signIn('credentials', {
        redirect: false,
        email,
        password,
      });
      if (!result.error) {
        router.push('/dashboard');
      }
    } else {
      // Handle registration error
    }
  };

  return (
    <div className="relative">
      <Navbar />
      <canvas id="particles-canvas" className="fixed pt-2" />
      <div className={`min-h-screen flex items-center justify-center ${lato.className} relative z-10 pt-20`}>
        <div className="bg-gradient-to-b from-black via-black/70 to-black p-8 rounded-lg shadow-xl w-full max-w-md border border-gold-400">
          <h2 className={`text-4xl font-bold text-white mb-6 text-center ${playfair.className}`}>Create Account</h2>
          <p className="text-lg text-white mb-6 text-center">Join our exclusive jewelry collection</p>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-lg font-medium text-white mb-2">Full Name</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-1 block w-full px-4 py-3 bg-black border border-gold-400 rounded-md shadow-sm text-white text-lg focus:outline-none focus:ring-gold-400 focus:border-gold-400"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-lg font-medium text-white mb-2">Email Address</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 block w-full px-4 py-3 bg-black border border-gold-400 rounded-md shadow-sm text-white text-lg focus:outline-none focus:ring-gold-400 focus:border-gold-400"
                required
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-lg font-medium text-white mb-2">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 block w-full px-4 py-3 bg-black border border-gold-400 rounded-md shadow-sm text-white text-lg focus:outline-none focus:ring-gold-400 focus:border-gold-400"
                required
              />
            </div>
            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-black bg-gold-400 hover:bg-gold-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gold-400 transition duration-300"
              >
                Register
              </button>
            </div>
          </form>
          <div className="mt-6">
            <button
              onClick={() => signIn('google')}
              className="w-full flex justify-center py-3 px-4 border border-gold-400 rounded-md shadow-sm text-lg font-medium text-white bg-transparent hover:bg-gold-400 hover:text-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gold-400 transition duration-300"
            >
              Sign up with Google
            </button>
          </div>
          <p className="mt-6 text-center text-white text-lg">
            Already have an account? <a href="/auth/signin" className="text-gold-400 hover:underline">Sign in here</a>
          </p>
        </div>
      </div>
    </div>
  );
}
