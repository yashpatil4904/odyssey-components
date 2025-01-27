import React from 'react';
import { ChevronDown } from 'lucide-react';

export const Select = ({ options, label, error, ...props }) => {
  return (
    <div className="space-y-1">
      {label && (
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
          {label}
        </label>
      )}
      <div className="relative">
        <select
          className={`w-full px-3 py-2 border rounded-lg appearance-none focus:outline-none focus:ring-2 transition-all
            ${error 
              ? 'border-red-500 focus:ring-red-500' 
              : 'border-gray-300 focus:ring-blue-500 dark:border-gray-600'
            }
          `}
          {...props}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
      </div>
      {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  );
};