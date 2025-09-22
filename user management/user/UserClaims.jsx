import React from "react";
import DashboardLayout from "../../components/DashboardLayout";

const claims = [
  { id: 1, policy: "Health Insurance", amount: "₹20,000", status: "Pending" },
  { id: 2, policy: "Car Insurance", amount: "₹50,000", status: "Approved" }
];

export default function UserClaims(){
  return (
    <DashboardLayout role="user">
      <h2>My Claims</h2>
      <p className="small">Claims you filed and their status</p>

      <table className="table" style={{marginTop:18}}>
        <thead>
          <tr><th>Policy</th><th>Amount</th><th>Status</th></tr>
        </thead>
        <tbody>
          {claims.map(c => (
            <tr key={c.id}>
              <td>{c.policy}</td>
              <td>{c.amount}</td>
              <td>{c.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </DashboardLayout>
  );
}
