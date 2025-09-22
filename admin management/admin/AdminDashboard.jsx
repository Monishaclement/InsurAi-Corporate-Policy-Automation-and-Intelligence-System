import React from "react";
import DashboardLayout from "../../components/DashboardLayout";
import Card from "../../components/Card";

export default function AdminDashboard() {
  return (
    <DashboardLayout role="admin">
      <h2>Admin Dashboard</h2>
      <p className="small">Overview of system metrics (demo data)</p>

      <div className="cards">
        <Card title="Total Policies" value="15" />
        <Card title="Total Claims" value="8" />
        <Card title="Active Users" value="50" />
      </div>

      <section style={{marginTop:22}}>
        <h3 style={{marginBottom:8}}>Recent Activity</h3>
        <table className="table">
          <thead>
            <tr><th>Event</th><th>Date</th><th>By</th></tr>
          </thead>
          <tbody>
            <tr><td>Approved claim #122</td><td>2025-09-03</td><td>Admin</td></tr>
            <tr><td>Added new policy 'Travel'</td><td>2025-08-20</td><td>Admin</td></tr>
          </tbody>
        </table>
      </section>
    </DashboardLayout>
  );
}
