import { useState } from 'react';

import { FaInfoCircle } from 'react-icons/fa';
import { RxCross2 } from 'react-icons/rx';

interface AlertProps {
  text: string;
  type?: 'success' | 'error' | 'warning' | 'info';
  className?: string;
  when?: boolean;
}

export default function Alert({ className = '', when = false, text, type = 'error', ...props }: AlertProps) {
  const [hidden, setHidden] = useState(false);

  if (hidden || !when) return null;

  function closeAlert() {
    setHidden(true);
  }

  const colors = {
    success: 'bg-green-50 border-green-300 text-green-800',
    error: 'bg-red-50 border-red-300 text-red-800',
    warning: 'bg-yellow-50 border-yellow-300 text-yellow-800',
    info: 'bg-blue-50 border-blue-300 text-blue-800',
  };

  return (
    <div className='flex w-full'>
      <div
        className={`flex items-center p-4 mb-4 border-t-4 h-fit w-fit mx-auto ${colors[type]} ${className}`}
        {...props}>
        <FaInfoCircle />
        <p className='ms-3 text-sm font-medium'>{text}</p>
        <button
          onClick={closeAlert}
          className='ms-auto -mx-1.5 -my-1.5 bg-blue-50 text-blue-500 rounded-lg focus:ring-2 focus:ring-blue-400 p-1.5 hover:bg-blue-200 inline-flex items-center justify-center h-8 w-8'>
          <span className='sr-only'>Dismiss</span>
          <RxCross2 />
        </button>
      </div>
    </div>
  );
}
