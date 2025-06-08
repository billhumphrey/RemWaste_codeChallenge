import React, { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
}

export default function Card({ children, className = '' }: CardProps) {
  return (
    <div
      className={`bg-white shadow-md rounded-lg p-6 border border-gray-200 ${className}`}
    >
      {children}
    </div>
  );
}
