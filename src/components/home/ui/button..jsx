import React from 'react';

export const Button = ({ children, className, ...props }) => {
  return (
    <button
      className={`px-4 py-2 rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition-all duration-300 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
