import React, { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';

interface Skip {
  size: string;
  price: number;
  duration: string;
  id: number;
}

const skips: Skip[] = [
  { size: '4 Yard', price: 227, duration: '7 day hire', id: 4 },
  { size: '6 Yard', price: 300, duration: '14 day hire', id: 6 },
  { size: '8 Yard', price: 325, duration: '7 day hire', id: 8 },
  { size: '10 Yard', price: 350, duration: '7 day hire', id: 10 },
  { size: '12 Yard', price: 375, duration: '7 day hire', id: 12 },
  { size: '14 Yard', price: 400, duration: '7 day hire', id: 14 },
];

const SkipSelection = () => {
  const [selectedId, setSelectedId] = useState<number>(8);
  const selectedSkip = skips.find((s) => s.id === selectedId);

  return (
    <div className="container">
      <div className="step-indicator">
        <span className="active">Postcode</span>
        <span>Waste Type</span>
        <span className="active">Select Skip</span>
        <span>Permit Check</span>
        <span>Choose Date</span>
        <span>Payment</span>
      </div>

      <h1 className="page-title">Choose Your Skip Size</h1>
      <p className="page-subtitle">Select the skip size that best suits your needs</p>

      <div className="skip-grid">
        {skips.map((skip) => (
          <div
            key={skip.id}
            className={`skip-card ${selectedId === skip.id ? 'selected' : ''}`}
            onClick={() => setSelectedId(skip.id)}
          >
            <h3 className="skip-size">{skip.size} Skip</h3>
            <img
              src="/skip-bin.png"
              alt={`${skip.size} skip`}
              className="skip-image"
            />
            <div className="skip-price">£{skip.price}</div>
            <div className="skip-duration">{skip.duration}</div>

            {selectedId === skip.id ? (
              <div className="selected-tag">
                <CheckCircle2 size={16} /> Selected
              </div>
            ) : (
              <button className="select-button">Select This Skip</button>
            )}
          </div>
        ))}
      </div>

      <div className="summary-section">
        <div className="selected-summary">
          <strong>{selectedSkip?.size}</strong> — £{selectedSkip?.price} ({selectedSkip?.duration})
        </div>
        <div className="action-buttons">
          <button className="outline-button">Back</button>
          <button className="primary-button">Continue</button>
        </div>
      </div>
    </div>
  );
};

export default SkipSelection;
