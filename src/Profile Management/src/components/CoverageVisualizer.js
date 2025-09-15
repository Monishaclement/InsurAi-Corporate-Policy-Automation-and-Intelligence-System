// src/components/CoverageVisualizer.js
import React, { useState } from 'react';
import './CoverageVisualizer.css';

const CoverageVisualizer = () => {
  const [activeCoverage, setActiveCoverage] = useState('health');
  
  const coverageData = {
    health: {
      title: 'Health Insurance',
      covered: ['Hospitalization', 'Doctor Visits', 'Prescription Drugs', 'Emergency Care'],
      notCovered: ['Cosmetic Surgery', 'Experimental Treatments'],
      percentage: 80
    },
    auto: {
      title: 'Auto Insurance',
      covered: ['Collision Damage', 'Liability', 'Comprehensive', 'Uninsured Motorist'],
      notCovered: ['Regular Maintenance', 'Wear and Tear'],
      percentage: 75
    },
    life: {
      title: 'Life Insurance',
      covered: ['Death Benefit', 'Term Life', 'Accidental Death', 'Critical Illness'],
      notCovered: ['Suicide (first 2 years)', 'Pre-existing Conditions'],
      percentage: 90
    }
  };

  return (
    <div className="coverage-visualizer">
      <h3>Coverage Visualizer</h3>
      <div className="coverage-selector">
        {Object.keys(coverageData).map(key => (
          <button 
            key={key}
            className={activeCoverage === key ? 'active' : ''}
            onClick={() => setActiveCoverage(key)}
          >
            {coverageData[key].title}
          </button>
        ))}
      </div>
      
      <div className="visualization">
        <div className="coverage-circle">
          <div className="circle" style={{ 
            background: `conic-gradient(#2ecc71 0% ${coverageData[activeCoverage].percentage}%, #ecf0f1 ${coverageData[activeCoverage].percentage}% 100%)` 
          }}>
            <span>{coverageData[activeCoverage].percentage}%</span>
          </div>
          <p>Typical Coverage</p>
        </div>
        
        <div className="coverage-details">
          <div className="covered">
            <h4>What's Covered:</h4>
            <ul>
              {coverageData[activeCoverage].covered.map(item => (
                <li key={item}>✓ {item}</li>
              ))}
            </ul>
          </div>
          
          <div className="not-covered">
            <h4>Typically Not Covered:</h4>
            <ul>
              {coverageData[activeCoverage].notCovered.map(item => (
                <li key={item}>✗ {item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoverageVisualizer;