// src/components/ui/button.tsx
import React from 'react';
import clsx from 'clsx';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary' | 'ghost';
};

export const Button: React.FC<ButtonProps> = ({
  children,
  className,
  variant = 'primary',
  ...props
}) => {
  const baseStyles = 'px-5 py-2 rounded-md font-semibold transition duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2';

  const variants = {
    primary: 'bg-purple-600 text-white hover:bg-purple-700 focus:ring-purple-500',
    secondary: 'bg-gray-800 text-gray-100 hover:bg-gray-700 focus:ring-gray-500',
    ghost: 'bg-transparent text-gray-300 hover:bg-gray-700 focus:ring-gray-500',
  };

  return (
    <button
      className={clsx(baseStyles, variants[variant], className)}
      {...props}
    >
      {children}
    </button>
  );
};
