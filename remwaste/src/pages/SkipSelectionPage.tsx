import React, { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';
import skipBinImg from '../assets/skip-bin.png'; // ✅ Correct image import

interface Skip {
  id: number;
  size: number; // in yards
  hire_period_days: number;
  price_before_vat: number;
  vat: number;
  allowed_on_road: boolean;
  forbidden: boolean;
}

const skips: Skip[] = [
  { id: 17933, size: 4, hire_period_days: 14, price_before_vat: 278, vat: 20, allowed_on_road: true, forbidden: false },
  { id: 17934, size: 6, hire_period_days: 14, price_before_vat: 305, vat: 20, allowed_on_road: true, forbidden: false },
  { id: 17935, size: 8, hire_period_days: 14, price_before_vat: 375, vat: 20, allowed_on_road: true, forbidden: false },
  { id: 17936, size: 10, hire_period_days: 14, price_before_vat: 400, vat: 20, allowed_on_road: false, forbidden: false },
  { id: 17937, size: 12, hire_period_days: 14, price_before_vat: 439, vat: 20, allowed_on_road: false, forbidden: false },
  { id: 17938, size: 14, hire_period_days: 14, price_before_vat: 470, vat: 20, allowed_on_road: false, forbidden: false },
  { id: 17939, size: 16, hire_period_days: 14, price_before_vat: 496, vat: 20, allowed_on_road: false, forbidden: false },
  { id: 15124, size: 20, hire_period_days: 14, price_before_vat: 992, vat: 20, allowed_on_road: false, forbidden: false },
  { id: 15125, size: 40, hire_period_days: 14, price_before_vat: 992, vat: 20, allowed_on_road: false, forbidden: false },
];

const SkipSelection = () => {
  const [selectedId, setSelectedId] = useState<number>(17935);

  const selectedSkip = skips.find((s) => s.id === selectedId);

  const getPriceWithVAT = (priceBeforeVat: number, vatPercent: number) =>
    (priceBeforeVat * (1 + vatPercent / 100)).toFixed(2);

  const handleSelect = (skip: Skip) => {
    if (!skip.forbidden) {
      setSelectedId(skip.id);
    }
  };

  return (
    <div className="container">
      <div className="step-indicator">
        <span className="active">Postcode</span>
        <span className="active">Waste Type</span>
        <span className="active">Select Skip</span>
        <span>Permit Check</span>
        <span>Choose Date</span>
        <span>Payment</span>
      </div>

      <h1 className="page-title">Choose Your Skip Size</h1>
      <p className="page-subtitle">Select the skip size that best suits your needs</p>

      <div className="skip-grid">
        {skips.map((skip) => {
          const isSelected = selectedId === skip.id;
          const disabled = skip.forbidden;

          return (
            <div
              key={skip.id}
              className={`skip-card ${isSelected ? 'selected' : ''} ${disabled ? 'disabled' : ''}`}
              onClick={() => !disabled && handleSelect(skip)}
              style={{ cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? 0.5 : 1 }}
              title={disabled ? 'This skip is not available for selection' : ''}
            >
              <h3 className="skip-size">{skip.size} Yard Skip</h3>
              <img
                src={skipBinImg}
                alt={`${skip.size} yard skip`}
                className="skip-image"
              />
              <div className="skip-price">
                £{getPriceWithVAT(skip.price_before_vat, skip.vat)}
              </div>
              <div className="skip-duration">
                {skip.hire_period_days} day hire
              </div>

              {isSelected ? (
                <div className="selected-tag">
                  <CheckCircle2 size={16} /> Selected
                </div>
              ) : (
                <button
                  className="select-button"
                  disabled={disabled}
                  onClick={(e) => {
                    e.stopPropagation();
                    !disabled && handleSelect(skip);
                  }}
                >
                  Select This Skip
                </button>
              )}

              {!skip.allowed_on_road && (
                <div
                  style={{
                    marginTop: '8px',
                    fontSize: '0.75rem',
                    color: '#f87171',
                    fontWeight: '600',
                  }}
                >
                  Not allowed on road
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="summary-section">
        <div className="selected-summary">
          <strong>{selectedSkip?.size} Yard Skip</strong> — £
          {selectedSkip ? getPriceWithVAT(selectedSkip.price_before_vat, selectedSkip.vat) : '--'} ({selectedSkip?.hire_period_days} day hire)
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
