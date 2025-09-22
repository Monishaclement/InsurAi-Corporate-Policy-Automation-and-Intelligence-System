import React from "react";
import DashboardLayout from "../../components/DashboardLayout";

const claims = [
  { id:1, user:"John Doe", policy:"Health Insurance", status:"Pending" },
  { id:2, user:"Jane Smith", policy:"Car Insurance", status:"Approved" }
];

export default function ManageClaims(){
  return (
    <DashboardLayout role="admin">
      <h2>Manage Claims</h2>
      <p className="small">Approve or reject claims (demo)</p>

      <table className="table" style={{marginTop:12}}>
        <thead><tr><th>User</th><th>Policy</th><th>Status</th><th>Action</th></tr></thead>
        <tbody>
          {claims.map(c => (
            <tr key={c.id}>
              <td>{c.user}</td>
              <td>{c.policy}</td>
              <td>{c.status}</td>
              <td>
                <button className="btn-primary" style={{background:"#10b981", marginRight:8}}>Approve</button>
                <button className="btn-primary" style={{background:"#ef4444"}}>Reject</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </DashboardLayout>
  );
}
