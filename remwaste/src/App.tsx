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
    <div className="min-h-screen bg-gray-900 text-white py-10 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8 text-sm text-gray-400">
          <div className="flex gap-4">
            <span className="text-blue-500">Postcode</span>
            <span>Waste Type</span>
            <span className="font-semibold text-white">Select Skip</span>
            <span>Permit Check</span>
            <span>Choose Date</span>
            <span>Payment</span>
          </div>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold mb-2 text-center">Choose Your Skip Size</h1>
        <p className="text-center text-gray-400 mb-10 text-sm md:text-base">
          Select the skip size that best suits your needs
        </p>

        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {skips.map((skip) => (
            <Card
              key={skip.id}
              onClick={() => setSelectedId(skip.id)}
              className={clsx(
                'cursor-pointer border-2 transition-all duration-200 p-0 overflow-hidden',
                selectedId === skip.id
                  ? 'border-purple-600 shadow-lg'
                  : 'border-gray-700'
              )}
            >
              <CardContent className="p-5 bg-gray-800">
                <div className="flex justify-between items-center mb-3">
                  <h2 className="text-lg font-semibold">{skip.size} Skip</h2>
                  <span
                    className={clsx(
                      'text-xs font-semibold px-2 py-1 rounded-full',
                      selectedId === skip.id
                        ? 'bg-purple-600 text-white'
                        : 'bg-gray-700 text-gray-300'
                    )}
                  >
                    {skip.size}
                  </span>
                </div>
                <img
                  src="/skip-bin.png"
                  alt={`${skip.size} skip`}
                  className="w-full h-28 object-contain bg-gray-700 rounded-md mb-4"
                />
                <div className="text-xl font-bold text-white mb-1">
                  £{skip.price}
                </div>
                <p className="text-gray-400 text-sm mb-2">{skip.duration}</p>
                {selectedId === skip.id ? (
                  <div className="text-purple-500 flex items-center gap-1">
                    <CheckCircle2 className="w-4 h-4" />
                    Selected
                  </div>
                ) : (
                  <Button
                    variant="secondary"
                    className="w-full text-sm border-gray-600 hover:border-purple-500"
                  >
                    Select This Skip
                  </Button>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center mt-12 gap-4">
          <div className="text-sm text-gray-300 text-center md:text-left">
            <span className="font-medium text-white">{selectedSkip?.size}</span> — £{selectedSkip?.price} ({selectedSkip?.duration})
          </div>
          <div className="flex gap-2 w-full md:w-auto">
            <Button variant="secondary" className="w-full md:w-auto border-gray-600 hover:border-gray-400">
              Back
            </Button>
            <Button className="w-full md:w-auto bg-purple-600 hover:bg-purple-700 text-white">
              Continue
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkipSelector;
// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.tsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App

// import React from 'react';
// import SkipSelector from './components/SkipSelector';

// function App() {
//   return (
//     <div className="bg-white min-h-screen">
//       <SkipSelector />
//     </div>
//   );
// }

// export default App;
