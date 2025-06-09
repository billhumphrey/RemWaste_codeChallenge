// src/components/ui/card.tsx
import React from 'react';
import clsx from 'clsx';

export const Card: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
  children,
  ...props
}) => (
  <div
    className={clsx(
      'rounded-xl bg-gray-900 border border-gray-700 shadow-sm hover:shadow-md transition-all duration-200',
      className
    )}
    {...props}
  >
    {children}
  </div>
);

export const CardContent: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
  children,
  ...props
}) => (
  <div
    className={clsx(
      'p-5 flex flex-col items-center justify-center text-center text-gray-100',
      className
    )}
    {...props}
  >
    {children}
  </div>
);
