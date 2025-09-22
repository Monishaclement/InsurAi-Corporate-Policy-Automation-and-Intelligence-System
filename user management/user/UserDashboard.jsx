import React from "react";
import DashboardLayout from "../../components/DashboardLayout";
import Card from "../../components/Card";

export default function UserDashboard() {
  return (
    <DashboardLayout role="user">
      <h2 style={{marginBottom:6}}>Welcome back</h2>
      <p className="small">Here’s a snapshot of your insurance account.</p>

      <div className="cards">
        <Card title="Active Policies" value="3" />
        <Card title="Claims Pending" value="1" tone="danger" />
        <Card title="Open Queries" value="2" tone="accent" />
      </div>

      <section style={{marginTop:22}}>
        <h3 style={{marginBottom:8}}>Recent Activity</h3>
        <table className="table">
          <thead>
            <tr><th>Activity</th><th>Date</th><th>Status</th></tr>
          </thead>
          <tbody>
            <tr><td>Submitted claim for hospital bill</td><td>2025-09-01</td><td>Pending</td></tr>
            <tr><td>Policy renewal reminder</td><td>2025-08-12</td><td>Sent</td></tr>
            <tr><td>Profile updated</td><td>2025-07-03</td><td>Done</td></tr>
          </tbody>
        </table>
      </section>
    </DashboardLayout>
  );
}
