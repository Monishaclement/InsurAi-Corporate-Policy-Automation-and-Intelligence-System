// src/components/InsuranceCalculator.js
import React, { useState } from 'react';
import './InsuranceCalculator.css';

const InsuranceCalculator = () => {
  const [formData, setFormData] = useState({
    age: 30,
    coverageType: 'health',
    coverageAmount: 100000,
    deductible: 1000,
    smokers: false
  });

  const calculatePremium = () => {
    // Frontend-only calculation logic
    let baseRate = 50;
    if (formData.coverageType === 'health') baseRate = 100;
    if (formData.coverageType === 'auto') baseRate = 80;
    if (formData.coverageType === 'life') baseRate = 70;
    
    const ageFactor = formData.age < 25 ? 1.5 : formData.age < 40 ? 1.2 : 1;
    const coverageFactor = formData.coverageAmount / 50000;
    const deductibleFactor = 2000 / formData.deductible;
    const smokerFactor = formData.smokers ? 1.5 : 1;
    
    return Math.round(baseRate * ageFactor * coverageFactor * deductibleFactor * smokerFactor);
  };

  return (
    <div className="calculator">
      <h3>Premium Calculator</h3>
      <div className="calculator-form">
        <div className="form-group">
          <label>Age: {formData.age}</label>
          <input 
            type="range" 
            min="18" 
            max="65" 
            value={formData.age}
            onChange={(e) => setFormData({...formData, age: parseInt(e.target.value)})}
          />
        </div>
        
        <div className="form-group">
          <label>Coverage Type</label>
          <select 
            value={formData.coverageType}
            onChange={(e) => setFormData({...formData, coverageType: e.target.value})}
          >
            <option value="health">Health Insurance</option>
            <option value="auto">Auto Insurance</option>
            <option value="life">Life Insurance</option>
          </select>
        </div>

        <div className="form-group">
          <label>Coverage Amount: ${formData.coverageAmount.toLocaleString()}</label>
          <input 
            type="range" 
            min="10000" 
            max="500000" 
            step="10000"
            value={formData.coverageAmount}
            onChange={(e) => setFormData({...formData, coverageAmount: parseInt(e.target.value)})}
          />
        </div>

        <div className="form-group">
          <label>Deductible: ${formData.deductible}</label>
          <input 
            type="range" 
            min="500" 
            max="5000" 
            step="100"
            value={formData.deductible}
            onChange={(e) => setFormData({...formData, deductible: parseInt(e.target.value)})}
          />
        </div>

        <div className="form-group checkbox">
          <label>
            <input 
              type="checkbox" 
              checked={formData.smokers}
              onChange={(e) => setFormData({...formData, smokers: e.target.checked})}
            />
            Smoker
          </label>
        </div>
      </div>

      <div className="calculation-result">
        <h4>Estimated Monthly Premium:</h4>
        <div className="premium-amount">${calculatePremium()}</div>
        <button className="save-quote-btn">Save This Quote</button>
      </div>
    </div>
  );
};

export default InsuranceCalculator;