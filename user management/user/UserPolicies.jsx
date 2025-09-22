import React from "react";
import DashboardLayout from "../../components/DashboardLayout";

const policies = [
  { id: 1, name: "Health Insurance", premium: "₹2,400 / yr", status: "Active", expiry: "2026-01-15" },
  { id: 2, name: "Car Insurance", premium: "₹6,200 / yr", status: "Expired", expiry: "2024-12-30" },
  { id: 3, name: "Life Insurance", premium: "₹4,800 / yr", status: "Active", expiry: "2035-05-10" }
];

export default function UserPolicies(){
  return (
    <DashboardLayout role="user">
      <h2>My Policies</h2>
      <p className="small">List of your active and past policies</p>

      <table className="table" style={{marginTop:18}}>
        <thead>
          <tr><th>Policy</th><th>Premium</th><th>Expiry</th><th>Status</th></tr>
        </thead>
        <tbody>
          {policies.map(p => (
            <tr key={p.id}>
              <td>{p.name}</td>
              <td>{p.premium}</td>
              <td>{p.expiry}</td>
              <td>{p.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </DashboardLayout>
  );
}
