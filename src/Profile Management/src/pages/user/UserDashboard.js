// src/pages/user/UserDashboard.js
import React, { useState } from 'react';

const UserDashboard = ({ user }) => {
  const [selectedPolicy, setSelectedPolicy] = useState(null);
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'detail'

  // Sample policy data
  const policies = [
    {
      id: 1,
      name: 'Health Plus Gold',
      type: 'Health Insurance',
      premium: 120,
      coverage: 150000,
      deductible: 1000,
      status: 'Active',
      startDate: '2023-01-15',
      endDate: '2024-01-14',
      beneficiaries: ['Self', 'Spouse'],
      features: ['Hospitalization', 'Doctor Visits', 'Prescription Drugs', 'Emergency Care'],
      exclusions: ['Cosmetic Surgery', 'Experimental Treatments']
    },
    {
      id: 2,
      name: 'Auto Secure Premium',
      type: 'Auto Insurance',
      premium: 85,
      coverage: 100000,
      deductible: 500,
      status: 'Active',
      startDate: '2023-03-20',
      endDate: '2024-03-19',
      vehicle: 'Toyota Camry 2022',
      features: ['Collision', 'Liability', 'Comprehensive', 'Roadside Assistance'],
      exclusions: ['Racing', 'Commercial Use']
    },
    {
      id: 3,
      name: 'LifeGuard Term',
      type: 'Life Insurance',
      premium: 45,
      coverage: 250000,
      deductible: 0,
      status: 'Active',
      startDate: '2023-06-10',
      endDate: '2043-06-09',
      beneficiaries: ['Spouse', 'Children'],
      features: ['Death Benefit', 'Accidental Death', 'Terminal Illness'],
      exclusions: ['Suicide (first 2 years)', 'Dangerous Activities']
    }
  ];

  const handlePolicyClick = (policy) => {
    setSelectedPolicy(policy);
    setViewMode('detail');
  };

  const handleBackToList = () => {
    setSelectedPolicy(null);
    setViewMode('grid');
  };

  if (viewMode === 'detail' && selectedPolicy) {
    return (
      <div className="policy-detail-view">
        <button onClick={handleBackToList} className="back-button">
          <i className="fas fa-arrow-left"></i> Back to Policies
        </button>
        
        <div className="policy-detail-card">
          <div className="policy-detail-header">
            <h2>{selectedPolicy.name}</h2>
            <span className={`status-badge ${selectedPolicy.status.toLowerCase()}`}>
              {selectedPolicy.status}
            </span>
          </div>
          
          <div className="policy-detail-content">
            <div className="detail-section">
              <h3>Policy Information</h3>
              <div className="detail-grid">
                <div className="detail-item">
                  <label>Policy Type</label>
                  <span>{selectedPolicy.type}</span>
                </div>
                <div className="detail-item">
                  <label>Coverage Amount</label>
                  <span>${selectedPolicy.coverage.toLocaleString()}</span>
                </div>
                <div className="detail-item">
                  <label>Monthly Premium</label>
                  <span>${selectedPolicy.premium}</span>
                </div>
                <div className="detail-item">
                  <label>Deductible</label>
                  <span>${selectedPolicy.deductible}</span>
                </div>
                <div className="detail-item">
                  <label>Start Date</label>
                  <span>{selectedPolicy.startDate}</span>
                </div>
                <div className="detail-item">
                  <label>End Date</label>
                  <span>{selectedPolicy.endDate}</span>
                </div>
              </div>
            </div>

            {selectedPolicy.vehicle && (
              <div className="detail-section">
                <h3>Vehicle Information</h3>
                <p>{selectedPolicy.vehicle}</p>
              </div>
            )}

            {selectedPolicy.beneficiaries && (
              <div className="detail-section">
                <h3>Beneficiaries</h3>
                <div className="beneficiaries-list">
                  {selectedPolicy.beneficiaries.map((beneficiary, index) => (
                    <span key={index} className="beneficiary-tag">
                      {beneficiary}
                    </span>
                  ))}
                </div>
              </div>
            )}

            <div className="detail-section">
              <h3>Coverage Details</h3>
              <div className="features-list">
                <h4>What's Covered:</h4>
                <ul>
                  {selectedPolicy.features.map((feature, index) => (
                    <li key={index}>✓ {feature}</li>
                  ))}
                </ul>
              </div>
              
              <div className="exclusions-list">
                <h4>Exclusions:</h4>
                <ul>
                  {selectedPolicy.exclusions.map((exclusion, index) => (
                    <li key={index}>✗ {exclusion}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="policy-actions">
              <button className="action-btn primary">
                <i className="fas fa-file-download"></i> Download Policy
              </button>
              <button className="action-btn">
                <i className="fas fa-file-claim"></i> File Claim
              </button>
              <button className="action-btn">
                <i className="fas fa-question-circle"></i> Get Help
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="user-dashboard">
      <div className="dashboard-header">
        <h1>Welcome to Your Dashboard, {user?.name}!</h1>
        <p>Manage your insurance policies and coverage</p>
      </div>

      <div className="dashboard-actions">
        <button className="action-btn primary">
          <i className="fas fa-plus"></i> New Policy
        </button>
        <button className="action-btn">
          <i className="fas fa-file-claim"></i> File Claim
        </button>
        <div className="view-toggle">
          <button 
            className={viewMode === 'grid' ? 'active' : ''}
            onClick={() => setViewMode('grid')}
          >
            <i className="fas fa-th"></i>
          </button>
          <button 
            className={viewMode === 'list' ? 'active' : ''}
            onClick={() => setViewMode('list')}
          >
            <i className="fas fa-list"></i>
          </button>
        </div>
      </div>

      <div className="policies-section">
        <h2>Your Policies</h2>
        <div className="policies-grid">
          {policies.map(policy => (
            <div 
              key={policy.id} 
              className="policy-card"
              onClick={() => handlePolicyClick(policy)}
            >
              <div className="policy-header">
                <h3>{policy.name}</h3>
                <span className={`status-badge ${policy.status.toLowerCase()}`}>
                  {policy.status}
                </span>
              </div>
              
              <div className="policy-details">
                <div className="detail-row">
                  <span className="label">Type:</span>
                  <span className="value">{policy.type}</span>
                </div>
                <div className="detail-row">
                  <span className="label">Coverage:</span>
                  <span className="value">${policy.coverage.toLocaleString()}</span>
                </div>
                <div className="detail-row">
                  <span className="label">Premium:</span>
                  <span className="value">${policy.premium}/mo</span>
                </div>
              </div>

              <div className="policy-footer">
                <button className="view-details-btn">
                  View Details <i className="fas fa-chevron-right"></i>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="dashboard-stats">
        <div className="stat-card">
          <div className="stat-icon">
            <i className="fas fa-file-contract"></i>
          </div>
          <div className="stat-info">
            <h3>{policies.length}</h3>
            <p>Active Policies</p>
          </div>
        </div>
        
        <div className="stat-card">
          <div className="stat-icon">
            <i className="fas fa-shield-alt"></i>
          </div>
          <div className="stat-info">
            <h3>${policies.reduce((sum, policy) => sum + policy.coverage, 0).toLocaleString()}</h3>
            <p>Total Coverage</p>
          </div>
        </div>
        
        <div className="stat-card">
          <div className="stat-icon">
            <i className="fas fa-dollar-sign"></i>
          </div>
          <div className="stat-info">
            <h3>${policies.reduce((sum, policy) => sum + policy.premium, 0)}</h3>
            <p>Monthly Premium</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;