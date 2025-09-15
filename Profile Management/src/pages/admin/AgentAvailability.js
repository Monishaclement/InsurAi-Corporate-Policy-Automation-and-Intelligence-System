// src/pages/admin/AgentAvailability.js
import React, { useState, useEffect } from 'react';
import './AgentAvailability.css';

const AgentAvailability = ({ user }) => {
  const [agents, setAgents] = useState([]);
  const [filter, setFilter] = useState('all');
  const [isLoading, setIsLoading] = useState(true);

  // Sample agent data
  const sampleAgents = [
    {
      id: 1,
      name: 'Sharnisha',
      email: 'sharnisha@insureai.com',
      status: 'available',
      specialization: 'Health Insurance',
      currentCases: 3,
      rating: 4.8,
      nextAvailable: 'Today, 2:00 PM'
    },
    {
      id: 2,
      name: 'sharmisha',
      email: 'sharmi@insureai.com',
      status: 'busy',
      specialization: 'Auto Insurance',
      currentCases: 6,
      rating: 4.6,
      nextAvailable: 'Tomorrow, 9:00 AM'
    },
    {
      id: 3,
      name: 'joanna',
      email: 'joanna@insureai.com',
      status: 'available',
      specialization: 'Life Insurance',
      currentCases: 2,
      rating: 4.9,
      nextAvailable: 'Today, 3:30 PM'
    },
    {
      id: 4,
      name: 'clement',
      email: 'clement@insureai.com',
      status: 'offline',
      specialization: 'Property Insurance',
      currentCases: 0,
      rating: 4.7,
      nextAvailable: 'Monday, 10:00 AM'
    },
    {
      id: 5,
      name: 'Lisa Thompson',
      email: 'lisa@insureai.com',
      status: 'available',
      specialization: 'Business Insurance',
      currentCases: 4,
      rating: 4.5,
      nextAvailable: 'Today, 4:15 PM'
    }
  ];

  useEffect(() => {
    // Simulate API loading
    const timer = setTimeout(() => {
      setAgents(sampleAgents);
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleStatusChange = (agentId, newStatus) => {
    setAgents(prevAgents => 
      prevAgents.map(agent => 
        agent.id === agentId ? { ...agent, status: newStatus } : agent
      )
    );
  };

  const filteredAgents = filter === 'all' 
    ? agents 
    : agents.filter(agent => agent.status === filter);

  const getStatusIcon = (status) => {
    switch(status) {
      case 'available': return 'fas fa-check-circle';
      case 'busy': return 'fas fa-clock';
      case 'offline': return 'fas fa-times-circle';
      default: return 'fas fa-question-circle';
    }
  };

  const getStatusColor = (status) => {
    switch(status) {
      case 'available': return '#2ecc71';
      case 'busy': return '#f39c12';
      case 'offline': return '#e74c3c';
      default: return '#95a5a6';
    }
  };

  if (isLoading) {
    return (
      <div className="agent-availability">
        <div className="loading-container">
          <i className="fas fa-spinner fa-spin"></i>
          <p>Loading agent data...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="agent-availability">
      <div className="page-header">
        <h1>Agent Availability</h1>
        <p>Manage and monitor your insurance agents' availability</p>
      </div>

      <div className="controls-row">
        <div className="filter-controls">
          <span>Filter by status:</span>
          <select 
            value={filter} 
            onChange={(e) => setFilter(e.target.value)}
            className="status-filter"
          >
            <option value="all">All Agents</option>
            <option value="available">Available</option>
            <option value="busy">Busy</option>
            <option value="offline">Offline</option>
          </select>
        </div>

        <div className="stats-overview">
          <div className="stat-item">
            <span className="stat-number">
              {agents.filter(a => a.status === 'available').length}
            </span>
            <span className="stat-label">Available</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">
              {agents.filter(a => a.status === 'busy').length}
            </span>
            <span className="stat-label">Busy</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">
              {agents.filter(a => a.status === 'offline').length}
            </span>
            <span className="stat-label">Offline</span>
          </div>
        </div>
      </div>

      <div className="agents-grid">
        {filteredAgents.map(agent => (
          <div key={agent.id} className="agent-card">
            <div className="agent-header">
              <div className="agent-avatar">
                {agent.name.charAt(0)}
              </div>
              <div className="agent-info">
                <h3>{agent.name}</h3>
                <p>{agent.specialization}</p>
              </div>
              <div 
                className="agent-status"
                style={{ color: getStatusColor(agent.status) }}
              >
                <i className={getStatusIcon(agent.status)}></i>
                <span>{agent.status.charAt(0).toUpperCase() + agent.status.slice(1)}</span>
              </div>
            </div>

            <div className="agent-details">
              <div className="detail-item">
                <i className="fas fa-envelope"></i>
                <span>{agent.email}</span>
              </div>
              <div className="detail-item">
                <i className="fas fa-briefcase"></i>
                <span>{agent.currentCases} current cases</span>
              </div>
              <div className="detail-item">
                <i className="fas fa-star"></i>
                <span>{agent.rating} rating</span>
              </div>
              <div className="detail-item">
                <i className="fas fa-calendar-check"></i>
                <span>Next available: {agent.nextAvailable}</span>
              </div>
            </div>

            <div className="agent-actions">
              <button 
                className={`status-btn available ${agent.status === 'available' ? 'active' : ''}`}
                onClick={() => handleStatusChange(agent.id, 'available')}
              >
                <i className="fas fa-check"></i>
                Available
              </button>
              <button 
                className={`status-btn busy ${agent.status === 'busy' ? 'active' : ''}`}
                onClick={() => handleStatusChange(agent.id, 'busy')}
              >
                <i className="fas fa-clock"></i>
                Busy
              </button>
              <button 
                className={`status-btn offline ${agent.status === 'offline' ? 'active' : ''}`}
                onClick={() => handleStatusChange(agent.id, 'offline')}
              >
                <i className="fas fa-times"></i>
                Offline
              </button>
            </div>
          </div>
        ))}
      </div>

      {filteredAgents.length === 0 && (
        <div className="no-agents">
          <i className="fas fa-users-slash"></i>
          <h3>No agents found</h3>
          <p>Try changing your filter criteria</p>
        </div>
      )}
    </div>
  );
};

export default AgentAvailability;