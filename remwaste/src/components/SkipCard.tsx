// src/components/SkipCard.tsx
import React from 'react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';

interface SkipCardProps {
  title: string;
  size: string;
  price: string;
  duration: string;
  imageUrl: string;
  isSelected?: boolean;
  onSelect: () => void;
}

const SkipCard: React.FC<SkipCardProps> = ({
  title,
  size,
  price,
  duration,
  imageUrl,
  isSelected = false,
  onSelect,
}) => {
  return (
    <Card
      className={`relative w-full sm:w-[280px] border-2 rounded-xl p-4 transition-transform duration-200 hover:scale-105 ${
        isSelected ? 'border-purple-500 shadow-lg' : 'border-gray-700'
      }`}
    >
      <CardContent className="flex flex-col items-center">
        {/* Size Badge */}
        <div className="absolute top-2 right-2 bg-purple-600 text-white text-xs font-bold px-2 py-1 rounded-full shadow">
          {size}
        </div>

        {/* Image */}
        <img
          src={imageUrl}
          alt={`${size} skip`}
          className="w-full h-32 object-contain mb-4"
        />

        {/* Title */}
        <h3 className="text-lg font-semibold text-white mb-1 text-center">{title}</h3>

        {/* Price */}
        <p className="text-sm text-gray-300 mb-1">{price}</p>

        {/* Duration */}
        <p className="text-xs text-gray-500 mb-4">{duration}</p>

        {/* Action Button */}
        <Button
          onClick={onSelect}
          variant={isSelected ? 'primary' : 'secondary'}
          className={`w-full ${isSelected ? 'bg-purple-600 hover:bg-purple-700' : ''}`}
        >
          {isSelected ? 'Selected' : 'Select This Skip'}
        </Button>
      </CardContent>
    </Card>
  );
};

export default SkipCard;
