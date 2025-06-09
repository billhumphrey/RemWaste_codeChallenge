import React from 'react';
import { Button } from './button';
import { Card, CardContent } from './card';

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
      className={`relative w-full sm:w-[280px] border-2 rounded-xl p-4 transition-transform hover:scale-105 cursor-pointer ${
        isSelected ? 'border-purple-500' : 'border-gray-700'
      }`}
    >
      <CardContent>
        <div className="absolute top-2 right-2 bg-purple-600 text-white text-xs font-bold px-2 py-1 rounded-full">
          {size}
        </div>
        <img
          src={imageUrl}
          alt={`${size} skip`}
          className="w-full h-32 object-contain mb-4"
        />
        <h3 className="text-lg font-semibold text-white mb-1">{title}</h3>
        <p className="text-sm text-gray-400 mb-2">{price}</p>
        <p className="text-xs text-gray-500 mb-4">{duration}</p>
        <Button
          onClick={onSelect}
          variant={isSelected ? 'primary' : 'secondary'}
          className="w-full"
        >
          {isSelected ? 'Selected' : 'Select This Skip'}
        </Button>
      </CardContent>
    </Card>
  );
};

export default SkipCard;
