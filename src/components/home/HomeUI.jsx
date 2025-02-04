import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight, FaGithub } from 'react-icons/fa';
import { Dialog } from '@headlessui/react';

export const HomeUI = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-600 to-purple-800 flex flex-col items-center justify-center text-white p-6">
      
      {/* Header with Animations */}
      <motion.h1 
        className="text-5xl font-extrabold mb-4 bg-clip-text text-white "
        initial={{ opacity: 0, y: -60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        UnderOneSky 🌌
      </motion.h1>

      <motion.p 
        className="text-lg mb-8 max-w-lg text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        A platform that brings communities together, under one sky. Explore, connect, and grow with us.
      </motion.p>

      {/* Call to Action Button with Glassmorphism */}
      <motion.button 
        onClick={() => setIsOpen(true)}
        className="px-8 py-4 bg-white bg-opacity-20 backdrop-blur-md rounded-2xl shadow-lg text-xl font-medium flex items-center space-x-3 hover:bg-opacity-40 transition"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <span>Get Started</span> 
        <FaArrowRight />
      </motion.button>

      {/* Modal for Interaction */}
      <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="fixed inset-0 z-10 flex items-center justify-center">
        <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-50" />
        <motion.div 
          className="bg-white text-gray-800 rounded-xl p-8 max-w-sm mx-auto z-20"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
        >
          <Dialog.Title className="text-2xl font-bold mb-4">Welcome to UnderOneSky</Dialog.Title>
          <Dialog.Description className="mb-4">
            Ready to explore the community? Let’s get you started!
          </Dialog.Description>
          <div className="flex justify-end">
            <button 
              onClick={() => setIsOpen(false)} 
              className="px-4 py-2 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700 transition"
            >
              Close
            </button>
          </div>
        </motion.div>
      </Dialog>

      {/* Footer with Social Icons */}
      <footer className="absolute bottom-4 flex space-x-4">
        <a href="https://github.com/Gourav1195" target="_blank" rel="noopener noreferrer">
          <FaGithub className="text-2xl hover:text-gray-400 transition" />
        </a>
      </footer>
    </div>
  );
};
