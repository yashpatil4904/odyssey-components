import React from 'react';
import { AlertCircle, CheckCircle, Info, XCircle, X } from 'lucide-react';

const icons = {
  success: <CheckCircle className="w-5 h-5" />,
  error: <XCircle className="w-5 h-5" />,
  warning: <AlertCircle className="w-5 h-5" />,
  info: <Info className="w-5 h-5" />
};

const styles = {
  success: 'bg-green-50 text-green-800 dark:bg-green-900/50 dark:text-green-300',
  error: 'bg-red-50 text-red-800 dark:bg-red-900/50 dark:text-red-300',
  warning: 'bg-yellow-50 text-yellow-800 dark:bg-yellow-900/50 dark:text-yellow-300',
  info: 'bg-blue-50 text-blue-800 dark:bg-blue-900/50 dark:text-blue-300'
};

export const Alert = ({ type = 'info', message, onClose }) => {
  return (
    <div className={`${styles[type]} p-4 rounded-lg flex items-start gap-3`}>
      <span className="flex-shrink-0">{icons[type]}</span>
      <p className="flex-1">{message}</p>
      {onClose && (
        <button onClick={onClose} className="flex-shrink-0 hover:opacity-70">
          <X className="w-5 h-5" />
        </button>
      )}
    </div>
  );
};