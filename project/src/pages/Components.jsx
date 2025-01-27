import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Alert } from '../components/ui/Alert';
import { Badge } from '../components/ui/Badge';
import { Modal } from '../components/ui/Modal';
import { Tabs } from '../components/ui/Tabs';
import { ImageCarousel } from '../components/ui/ImageCarousel';
import { ThreeScene } from '../components/3d/ThreeScene';
import { Input } from '../components/ui/Input';
import { Select } from '../components/ui/Select';

export default function Components() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const images = [
    'https://images.unsplash.com/photo-1682687220742-aba13b6e50ba',
    'https://images.unsplash.com/photo-1682687221038-404670f09ef1',
    'https://images.unsplash.com/photo-1682687220063-4742bd7fd538'
  ];

  const tabs = [
    {
      label: 'Account',
      content: (
        <div className="space-y-4">
          <Input label="Username" placeholder="Enter username" />
          <Input label="Email" type="email" placeholder="Enter email" />
        </div>
      )
    },
    {
      label: 'Settings',
      content: (
        <div className="space-y-4">
          <Select
            label="Theme"
            options={[
              { value: 'light', label: 'Light' },
              { value: 'dark', label: 'Dark' },
              { value: 'system', label: 'System' },
            ]}
          />
        </div>
      )
    }
  ];

  return (
    <div className="space-y-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
          Component Library
        </h1>

        {/* Buttons Section */}
        <section className="space-y-4 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Buttons</h2>
          <Card>
            <div className="flex flex-wrap gap-4">
              <Button variant="primary">Primary Button</Button>
              <Button variant="secondary">Secondary Button</Button>
              <Button variant="outline">Outline Button</Button>
              <Button variant="primary" onClick={() => setIsLoading(!isLoading)}>
                {isLoading ? 'Loading...' : 'Toggle Loading'}
              </Button>
            </div>
          </Card>
        </section>

        {/* Alerts Section */}
        <section className="space-y-4 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Alerts</h2>
          <div className="space-y-4">
            <Alert type="success" message="Operation completed successfully!" />
            <Alert type="error" message="An error occurred. Please try again." />
            <Alert type="warning" message="Please backup your data before continuing." />
            <Alert type="info" message="Your session will expire in 5 minutes." />
          </div>
        </section>

        {/* Badges Section */}
        <section className="space-y-4 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Badges</h2>
          <Card>
            <div className="flex flex-wrap gap-4">
              <Badge variant="primary">New</Badge>
              <Badge variant="secondary">Default</Badge>
              <Badge variant="success">Completed</Badge>
              <Badge variant="danger">Error</Badge>
              <Badge variant="warning">Warning</Badge>
            </div>
          </Card>
        </section>

        {/* Modal Section */}
        <section className="space-y-4 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Modal</h2>
          <Card>
            <Button onClick={() => setIsModalOpen(true)}>Open Modal</Button>
            <Modal
              isOpen={isModalOpen}
              onClose={() => setIsModalOpen(false)}
              title="Example Modal"
            >
              <div className="space-y-4">
                <p className="text-gray-600 dark:text-gray-300">
                  This is an example modal dialog. You can add any content here.
                </p>
                <div className="flex justify-end gap-4">
                  <Button variant="outline" onClick={() => setIsModalOpen(false)}>
                    Cancel
                  </Button>
                  <Button onClick={() => setIsModalOpen(false)}>Confirm</Button>
                </div>
              </div>
            </Modal>
          </Card>
        </section>

        {/* Tabs Section */}
        <section className="space-y-4 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Tabs</h2>
          <Card>
            <Tabs tabs={tabs} />
          </Card>
        </section>

        {/* Forms Section */}
        <section className="space-y-4 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Form Controls</h2>
          <Card>
            <div className="space-y-4 max-w-md">
              <Input label="Text Input" placeholder="Enter text" />
              <Input label="Password" type="password" placeholder="Enter password" />
              <Select
                label="Select Input"
                options={[
                  { value: '1', label: 'Option 1' },
                  { value: '2', label: 'Option 2' },
                  { value: '3', label: 'Option 3' },
                ]}
              />
            </div>
          </Card>
        </section>

        {/* Image Carousel */}
        <section className="space-y-4 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Image Carousel</h2>
          <ImageCarousel images={images} />
        </section>

        {/* 3D Scene */}
        <section className="space-y-4 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">3D Scene</h2>
          <ThreeScene />
        </section>
      </motion.div>
    </div>
  );
} 