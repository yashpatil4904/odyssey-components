import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { SignedIn, SignedOut, UserButton } from '@clerk/clerk-react';
import { Sun, Moon, Menu, X } from 'lucide-react';
import { useThemeStore } from '../../store/themeStore';
import { Button } from '../ui/Button';

export const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const { isDarkMode, toggleTheme } = useThemeStore();
  const navigate = useNavigate();

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-blue-600">
              Logo
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400">
              Home
            </Link>
            
            <SignedIn>
              <Button
                onClick={() => navigate('/dashboard')}
                variant="primary"
                className="flex items-center gap-2"
              >
                Go to Dashboard
              </Button>
            </SignedIn>

            <SignedOut>
              <Button
                onClick={() => navigate('/sign-in')}
                variant="outline"
                className="flex items-center gap-2"
              >
                Sign In
              </Button>
              <Button
                onClick={() => navigate('/sign-up')}
                variant="primary"
                className="flex items-center gap-2"
              >
                Sign Up
              </Button>
            </SignedOut>

            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            <SignedIn>
              <UserButton afterSignOutUrl="/" />
            </SignedIn>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <SignedIn>
              <UserButton afterSignOutUrl="/" />
            </SignedIn>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              to="/"
              className="block px-3 py-2 rounded-md text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              Home
            </Link>
            <SignedIn>
              <Link
                to="/dashboard"
                className="block px-3 py-2 rounded-md text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                Dashboard
              </Link>
            </SignedIn>
            <SignedOut>
              <button
                onClick={() => navigate('/sign-in')}
                className="block w-full text-left px-3 py-2 rounded-md text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                Sign In
              </button>
              <button
                onClick={() => navigate('/sign-up')}
                className="block w-full text-left px-3 py-2 rounded-md text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                Sign Up
              </button>
            </SignedOut>
          </div>
        </div>
      )}
    </nav>
  );
};