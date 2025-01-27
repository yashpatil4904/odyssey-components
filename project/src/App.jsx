import React, { useState, useEffect } from 'react';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Button } from './components/ui/Button';
import { Input } from './components/ui/Input';
import { Select } from './components/ui/Select';
import { Card } from './components/ui/Card';
import { ImageCarousel } from './components/ui/ImageCarousel';
import { ThreeScene } from './components/3d/ThreeScene';
import { Alert } from './components/ui/Alert';
import { Badge } from './components/ui/Badge';
import { Tooltip } from './components/ui/Tooltip';
import { Modal } from './components/ui/Modal';
import { Tabs } from './components/ui/Tabs';
import { useThemeStore } from './store/themeStore';
import { CommandPalette } from './components/ui/CommandPalette';
import { SkeletonCard } from './components/ui/Skeleton';

const images = [
  'https://images.unsplash.com/photo-1682687220742-aba13b6e50ba',
  'https://images.unsplash.com/photo-1682687221038-404670f09ef1',
  'https://images.unsplash.com/photo-1682687220063-4742bd7fd538'
];

function App() {
  const { isDarkMode } = useThemeStore();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

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
      label: 'Notifications',
      content: (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span>Email notifications</span>
            <input type="checkbox" className="toggle" />
          </div>
          <div className="flex items-center justify-between">
            <span>Push notifications</span>
            <input type="checkbox" className="toggle" />
          </div>
        </div>
      )
    },
    {
      label: 'Security',
      content: (
        <div className="space-y-4">
          <Input label="Current Password" type="password" />
          <Input label="New Password" type="password" />
        </div>
      )
    }
  ];

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`min-h-screen flex flex-col ${isDarkMode ? 'dark' : ''}`}>
      <CommandPalette />
      <Navbar />
      
      <main className="flex-1 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
          {/* Hero Section with gradient background */}
          <section className="text-center space-y-6 relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-600 to-purple-600 p-12">
            <div className="absolute inset-0 bg-grid-white/10 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]" />
            <h1 className="text-4xl font-bold text-white relative z-10">
              Modern UI Component Library
            </h1>
            <p className="text-xl text-white/80 relative z-10">
              Built with React + Tailwind CSS
            </p>
          </section>

          {/* Loading States Section */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Loading States
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {isLoading ? (
                Array(3).fill(0).map((_, i) => (
                  <SkeletonCard key={i} />
                ))
              ) : (
                Array(3).fill(0).map((_, i) => (
                  <Card key={i} title="Loaded Content">
                    <p className="text-gray-600 dark:text-gray-300">
                      This content has finished loading.
                    </p>
                  </Card>
                ))
              )}
            </div>
          </section>

          {/* Alerts Section */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Alerts</h2>
            <div className="space-y-4">
              <Alert type="success" message="Operation completed successfully!" />
              <Alert type="error" message="An error occurred. Please try again." />
              <Alert type="warning" message="Please backup your data before continuing." />
              <Alert type="info" message="Your session will expire in 5 minutes." />
            </div>
          </section>

          {/* Badges Section */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Badges</h2>
            <div className="flex flex-wrap gap-4">
              <Badge variant="primary">New</Badge>
              <Badge variant="secondary">Default</Badge>
              <Badge variant="success">Completed</Badge>
              <Badge variant="danger">Error</Badge>
              <Badge variant="warning">Warning</Badge>
            </div>
          </section>

          {/* Tooltips Section */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Tooltips</h2>
            <div className="flex flex-wrap gap-8">
              <Tooltip content="This is a top tooltip" position="top">
                <Button>Hover me (Top)</Button>
              </Tooltip>
              <Tooltip content="This is a bottom tooltip" position="bottom">
                <Button variant="secondary">Hover me (Bottom)</Button>
              </Tooltip>
              <Tooltip content="This is a left tooltip" position="left">
                <Button variant="outline">Hover me (Left)</Button>
              </Tooltip>
            </div>
          </section>

          {/* Modal Section */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Modal</h2>
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
                  <Button onClick={() => setIsModalOpen(false)}>
                    Confirm
                  </Button>
                </div>
              </div>
            </Modal>
          </section>

          {/* Tabs Section */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Tabs</h2>
            <Card>
              <Tabs tabs={tabs} />
            </Card>
          </section>

          {/* Image Carousel */}
          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Image Carousel</h2>
            <ImageCarousel images={images} />
          </section>

          {/* 3D Scene */}
          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">3D Scene</h2>
            <ThreeScene />
          </section>

          {/* UI Components */}
          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Form Components</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card title="Buttons">
                <div className="space-y-4">
                  <Button variant="primary">Primary Button</Button>
                  <Button variant="secondary">Secondary Button</Button>
                  <Button variant="outline">Outline Button</Button>
                </div>
              </Card>

              <Card title="Form Controls">
                <div className="space-y-4">
                  <Input
                    label="Text Input"
                    placeholder="Enter some text"
                  />
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
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;