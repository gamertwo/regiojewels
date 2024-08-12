'use client';
import Head from 'next/head';
import { useState, useEffect } from 'react';
import { motion, MotionConfig, AnimatePresence } from 'framer-motion';

export default function Confetti() {
  const [count, setCount] = useState(0);
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    if (count >= 5) {
      const timer = setTimeout(() => {
        setCount(100);
        setShowConfetti(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [count]);

  const handleIncrement = () => {
    if (count < 5) {
      setCount(count + 1);
    }
  };

  return (
    <MotionConfig reducedMotion="user">
      <div className="h-screen flex justify-center items-center bg-gray-100">
        <Head>
          <title>Celebrating 100 Followers!</title>
        </Head>
        <div className="flex flex-col items-center">
          <motion.div
            className="text-6xl font-bold text-gray-800 rounded-full p-4 bg-white shadow-md cursor-pointer"
            initial={{ scale: 1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            onClick={handleIncrement}
          >
            <motion.span
              className="text-gray-800"
              key={count}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.5 }}
            >
              {count}
            </motion.span>
            {showConfetti && (
              <AnimatePresence>
                {[...Array(100)].map((_, index) => (
                  <motion.div
                    key={index}
                    initial={{ x: 0, y: 0, scale: 0.5, opacity: 0 }}
                    animate={{
                      x: Math.random() * 200 - 100,
                      y: Math.random() * 200 - 100,
                      scale: 1,
                      opacity: 1,
                    }}
                    transition={{
                      duration: 2,
                      ease: 'easeInOut',
                    }}
                  >
                    <div
                      className={`w-4 h-4 rounded-full ${
                        Math.random() < 0.5 ? 'bg-pink-500' : 'bg-blue-500'
                      }`}
                    />
                  </motion.div>
                ))}
              </AnimatePresence>
            )}
          </motion.div>
        </div>
      </div>
    </MotionConfig>
  );
}