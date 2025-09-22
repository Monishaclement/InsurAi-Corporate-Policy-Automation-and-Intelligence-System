import React from "react";
import DashboardLayout from "../../components/DashboardLayout";

const policies = [
  { id:1, name:"Health Insurance", users:20 },
  { id:2, name:"Car Insurance", users:12 }
];

export default function ManagePolicies(){
  return (
    <DashboardLayout role="admin">
      <h2>Manage Policies</h2>
      <p className="small">Add, edit or remove policies (demo)</p>

      <div style={{display:"grid", gap:12, marginTop:12}}>
        <div className="form">
          <form onSubmit={(e)=>e.preventDefault()}>
            <input className="input" placeholder="Policy name" />
            <div style={{marginTop:10}}>
              <button className="btn-primary">Add Policy</button>
            </div>
          </form>
        </div>

        <table className="table">
          <thead><tr><th>Policy</th><th>Users</th><th>Action</th></tr></thead>
          <tbody>
            {policies.map(p => (
              <tr key={p.id}>
                <td>{p.name}</td>
                <td>{p.users}</td>
                <td><button className="btn-primary" style={{background:"#ef4444"}}>Delete</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </DashboardLayout>
  );
}
