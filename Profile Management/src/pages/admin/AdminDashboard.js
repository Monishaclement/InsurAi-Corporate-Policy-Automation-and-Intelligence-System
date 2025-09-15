import React from 'react';
import './AdminDashboard.css';

const AdminDashboard = ({ user }) => {
  // Sample data
  const stats = [
    { title: 'Total Users', value: '1,254', icon: 'fas fa-users', color: '#3498db' },
    { title: 'Active Policies', value: '892', icon: 'fas fa-file-contract', color: '#2ecc71' },
    { title: 'Pending Claims', value: '47', icon: 'fas fa-clipboard-list', color: '#f39c12' },
    { title: 'Revenue', value: '$154,320', icon: 'fas fa-dollar-sign', color: '#9b59b6' }
  ];

  const recentActivities = [
    { user: 'John Doe', action: 'submitted a claim', time: '2 hours ago' },
    { user: 'Sarah Smith', action: 'purchased a new policy', time: '5 hours ago' },
    { user: 'Mike Johnson', action: 'cancelled Auto Secure policy', time: '1 day ago' },
    { user: 'Emily Wilson', action: 'updated payment method', time: '1 day ago' }
  ];

  return (
    <div className="admin-dashboard">
      <div className="dashboard-header">
        <h1>Admin Dashboard</h1>
        <p>Welcome back, {user?.name}. Here's your overview.</p>
      </div>

      <div className="stats-grid">
        {stats.map((stat, index) => (
          <div key={index} className="stat-card">
            <div className="stat-icon" style={{ backgroundColor: `${stat.color}20`, color: stat.color }}>
              <i className={stat.icon}></i>
            </div>
            <div className="stat-content">
              <h3>{stat.value}</h3>
              <p>{stat.title}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="admin-content">
        <div className="content-card">
          <div className="card-header">
            <h2>Recent Activities</h2>
            <button className="action-btn">View All</button>
          </div>
          <div className="activities-list">
            {recentActivities.map((activity, index) => (
              <div key={index} className="activity-item">
                <div className="activity-avatar">
                  {activity.user.charAt(0)}
                </div>
                <div className="activity-details">
                  <p><strong>{activity.user}</strong> {activity.action}</p>
                  <span>{activity.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="content-card">
          <div className="card-header">
            <h2>Quick Actions</h2>
          </div>
          <div className="admin-actions">
            <button className="admin-action-btn">
              <i className="fas fa-user-plus"></i>
              <span>Add New Agent</span>
            </button>
            <button className="admin-action-btn">
              <i className="fas fa-plus-circle"></i>
              <span>Create New Plan</span>
            </button>
            <button className="admin-action-btn">
              <i className="fas fa-chart-bar"></i>
              <span>View Reports</span>
            </button>
            <button className="admin-action-btn">
              <i className="fas fa-cog"></i>
              <span>Settings</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;