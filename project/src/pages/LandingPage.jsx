import React from 'react';
import { useNavigate } from 'react-router-dom';
import { SignedIn, SignedOut, useAuth } from '@clerk/clerk-react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle } from 'lucide-react';

export default function LandingPage() {
  const navigate = useNavigate();
  const { isSignedIn } = useAuth();

  const features = [
    'Modern Dashboard Interface',
    'Real-time Updates',
    'Advanced Analytics',
    'Team Collaboration',
    'Custom Reporting',
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Navigation */}
      <nav className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-blue-600">YourApp</span>
            </div>
            <div className="flex items-center gap-4">
              <SignedIn>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors"
                  onClick={() => navigate('/dashboard')}
                >
                  Go to Dashboard
                </motion.button>
              </SignedIn>
              <SignedOut>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                  onClick={() => navigate('/sign-in')}
                >
                  Sign In
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors"
                  onClick={() => navigate('/sign-up')}
                >
                  Sign Up
                </motion.button>
              </SignedOut>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center space-y-8">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold text-gray-900 dark:text-white"
          >
            Welcome to Your Modern Dashboard
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
          >
            Experience the next generation of web applications with our powerful dashboard solution.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <SignedOut>
              <button
                onClick={() => navigate('/sign-up')}
                className="px-8 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors inline-flex items-center gap-2"
              >
                Get Started <ArrowRight size={20} />
              </button>
            </SignedOut>
          </motion.div>
        </div>

        {/* Features Grid */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 * index }}
              className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg"
            >
              <div className="flex items-center gap-3">
                <CheckCircle className="text-blue-600" />
                <span className="text-lg font-medium text-gray-900 dark:text-white">
                  {feature}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
} 