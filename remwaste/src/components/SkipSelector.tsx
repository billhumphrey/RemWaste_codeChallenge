import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import Card from '@/components/ui/card';
import CardContent from '@/components/ui/card';
import { CheckCircle2 } from 'lucide-react';
import clsx from 'clsx';

const skips = [
  { size: '4 Yard', price: 227, duration: '7 day hire', id: 4 },
  { size: '6 Yard', price: 300, duration: '14 day hire', id: 6 },
  { size: '8 Yard', price: 325, duration: '7 day hire', id: 8 },
  { size: '10 Yard', price: 350, duration: '7 day hire', id: 10 },
  { size: '12 Yard', price: 375, duration: '7 day hire', id: 12 },
  { size: '14 Yard', price: 400, duration: '7 day hire', id: 14 },
];

const SkipSelector = () => {
  const [selectedId, setSelectedId] = useState(8);

  const selectedSkip = skips.find((s) => s.id === selectedId);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-200 py-10 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-4 text-center">
          Choose Your Skip Size
        </h1>
        <p className="text-center text-gray-600 mb-10 text-sm md:text-base">
          Select the skip size that best suits your waste removal needs.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skips.map((skip) => (
            <div
              key={skip.id}
              onClick={() => setSelectedId(skip.id)}
              className={clsx(
                'group transition-all duration-300 border-2 rounded-xl overflow-hidden shadow-sm cursor-pointer hover:shadow-md',
                selectedId === skip.id
                  ? 'border-blue-600 bg-white'
                  : 'border-gray-200 bg-white'
              )}
              role="button"
              tabIndex={0}
              onKeyPress={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  setSelectedId(skip.id);
                }
              }}
            >
              <CardContent className="p-6 text-center flex flex-col items-center">
                <div className="flex justify-between w-full mb-2">
                  <span className="text-sm font-medium text-gray-500">
                    {skip.duration}
                  </span>
                  <span
                    className={clsx(
                      'text-xs font-semibold px-2 py-1 rounded-full',
                      selectedId === skip.id
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-200 text-gray-700'
                    )}
                  >
                    {skip.size}
                  </span>
                </div>
                <img
                  src="/skip-bin.png"
                  alt={`${skip.size} skip`}
                  className="w-full max-w-[120px] h-20 object-contain my-4"
                />
                <div className="text-xl font-bold text-gray-800 mb-1">
                  £{skip.price}
                </div>
                {selectedId === skip.id && (
                  <div className="text-blue-600 flex items-center gap-1 mt-1">
                    <CheckCircle2 className="w-4 h-4" />
                    Selected
                  </div>
                )}
              </CardContent>
            </div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center mt-12 gap-4">
          <div className="text-sm text-gray-700 text-center md:text-left">
            <span className="font-medium">{selectedSkip?.size}</span> — £
            {selectedSkip?.price} ({selectedSkip?.duration})
          </div>
          <Button className="w-full md:w-auto bg-blue-600 text-white hover:bg-blue-700">
            Continue
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SkipSelector;
