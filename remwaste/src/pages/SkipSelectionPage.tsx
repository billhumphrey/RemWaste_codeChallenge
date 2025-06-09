// src/pages/SkipSelectionPage.tsx
import React, { useState } from 'react';
import SkipCard from '../components/SkipCard';

const skips = [
  {
    title: '4 Yard Skip',
    size: '4 Yard',
    price: '£227',
    duration: '7 day hire',
    imageUrl: '/images/skip-4.png',
  },
  {
    title: '6 Yard Skip',
    size: '6 Yard',
    price: '£300',
    duration: '14 day hire',
    imageUrl: '/images/skip-6.png',
  },
  {
    title: '8 Yard Skip',
    size: '8 Yard',
    price: '£325',
    duration: '7 day hire',
    imageUrl: '/images/skip-8.png',
  },
  {
    title: '10 Yard Skip',
    size: '10 Yard',
    price: '£400',
    duration: '7 day hire',
    imageUrl: '/images/skip-10.png',
  },
];

const SkipSelectionPage = () => {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-black text-white p-6 md:p-10">
      <h1 className="text-3xl md:text-4xl font-bold mb-2">Choose Your Skip Size</h1>
      <p className="text-gray-400 mb-6">Select the skip size that best suits your needs</p>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {skips.map((skip) => (
          <SkipCard
            key={skip.size}
            {...skip}
            isSelected={selected === skip.size}
            onSelect={() => setSelected(skip.size)}
          />
        ))}
      </div>

      <div className="mt-10 flex justify-end">
        <button
          disabled={!selected}
          className={`px-6 py-3 rounded-lg text-white font-semibold transition ${
            selected
              ? 'bg-purple-600 hover:bg-purple-700'
              : 'bg-gray-700 cursor-not-allowed'
          }`}
        >
          Continue →
        </button>
      </div>
    </div>
  );
};

export default SkipSelectionPage;
