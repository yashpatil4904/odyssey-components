import React, { useState, useEffect } from 'react';
import { Command } from 'lucide-react';

export const CommandPalette = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState('');
  
  useEffect(() => {
    const down = (e) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setIsOpen((open) => !open);
      }
    };
    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, []);

  const commands = [
    { name: 'Search documentation...', shortcut: '⌘ D' },
    { name: 'Toggle theme', shortcut: '⌘ T' },
    { name: 'Open settings...', shortcut: '⌘ ,' },
    { name: 'Create new...', shortcut: '⌘ N' },
  ];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm">
      <div className="fixed top-[20%] left-1/2 -translate-x-1/2 w-full max-w-xl">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700">
          <div className="border-b border-gray-200 dark:border-gray-700 p-4">
            <div className="flex items-center gap-2">
              <Command className="w-5 h-5 text-gray-500" />
              <input
                type="text"
                placeholder="Type a command or search..."
                className="flex-1 bg-transparent border-none outline-none"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <kbd className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-700 rounded">
                esc
              </kbd>
            </div>
          </div>
          <div className="p-2 max-h-[300px] overflow-y-auto">
            {commands.map((command) => (
              <button
                key={command.name}
                className="w-full text-left px-4 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center justify-between"
              >
                <span>{command.name}</span>
                <kbd className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-700 rounded">
                  {command.shortcut}
                </kbd>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}; 