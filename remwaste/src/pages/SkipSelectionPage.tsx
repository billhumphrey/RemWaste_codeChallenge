import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
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
    <div className="min-h-screen bg-gray-950 text-white py-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Progress Stepper */}
        <div className="flex justify-between items-center text-xs text-gray-500 mb-6 md:mb-10">
          {['Postcode', 'Waste Type', 'Select Skip', 'Permit Check', 'Choose Date', 'Payment'].map((step, idx) => (
            <span
              key={idx}
              className={clsx(
                'px-2 py-1 rounded-full transition',
                step === 'Select Skip' ? 'bg-purple-600 text-white' : ''
              )}
            >
              {step}
            </span>
          ))}
        </div>

        {/* Title */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-2">Choose Your Skip Size</h1>
          <p className="text-gray-400 text-sm md:text-base">
            Select the skip size that best suits your needs
          </p>
        </div>

        {/* Skip Cards */}
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {skips.map((skip) => (
            <Card
              key={skip.id}
              onClick={() => setSelectedId(skip.id)}
              className={clsx(
                'cursor-pointer border transition-all duration-200 overflow-hidden rounded-xl shadow-sm hover:shadow-md',
                selectedId === skip.id
                  ? 'border-purple-600 ring-2 ring-purple-500 bg-gray-900'
                  : 'border-gray-800 bg-gray-850'
              )}
            >
              <CardContent className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <h2 className="text-lg font-semibold text-white">{skip.size} Skip</h2>
                  <span className="text-xs font-medium text-white bg-purple-700 px-2 py-1 rounded-full">
                    {skip.size}
                  </span>
                </div>
                <img
                  src="/skip-bin.png"
                  alt={`${skip.size} skip`}
                  className="w-full h-28 object-contain rounded-md bg-gray-800 mb-4"
                />
                <div className="text-xl font-bold text-white mb-1">
                  £{skip.price}
                </div>
                <p className="text-sm text-gray-400 mb-3">{skip.duration}</p>
                {selectedId === skip.id ? (
                  <div className="text-purple-400 font-medium flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4" />
                    Selected
                  </div>
                ) : (
                  <Button
                    variant="secondary"
                    className="w-full text-sm border border-gray-700 hover:border-purple-500"
                  >
                    Select This Skip
                  </Button>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Footer / Navigation */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-14 gap-6">
          <div className="text-sm text-gray-300 text-center md:text-left">
            <span className="font-semibold text-white">{selectedSkip?.size}</span> — £{selectedSkip?.price} ({selectedSkip?.duration})
          </div>
          <div className="flex gap-3 w-full md:w-auto">
            <Button
              variant="secondary"
              className="w-full md:w-auto border-gray-700 hover:border-gray-500"
            >
              Back
            </Button>
            <Button
              className="w-full md:w-auto bg-purple-600 hover:bg-purple-700 text-white"
            >
              Continue
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkipSelector;
