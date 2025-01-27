import React from 'react';
import { Card } from '../components/ui/Card';
import { motion } from 'framer-motion';

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl font-bold text-gray-900 dark:text-white"
      >
        Dashboard
      </motion.h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <Card title="Statistics">
            {/* Add your dashboard content here */}
          </Card>
        </motion.div>
        {/* Add more cards as needed */}
      </div>
    </div>
  );
} 