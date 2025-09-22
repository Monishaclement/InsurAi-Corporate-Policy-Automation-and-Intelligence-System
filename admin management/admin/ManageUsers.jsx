import React from "react";
import DashboardLayout from "../../components/DashboardLayout";

const users = [
  { id:1, name:"John Doe", email:"john@example.com" },
  { id:2, name:"Jane Smith", email:"jane@example.com" }
];

export default function ManageUsers(){
  return (
    <DashboardLayout role="admin">
      <h2>Manage Users</h2>
      <p className="small">View and remove users</p>

      <table className="table" style={{marginTop:12}}>
        <thead><tr><th>Name</th><th>Email</th><th>Action</th></tr></thead>
        <tbody>
          {users.map(u => (
            <tr key={u.id}>
              <td>{u.name}</td>
              <td>{u.email}</td>
              <td><button className="btn-primary" style={{background:"#ef4444"}}>Remove</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </DashboardLayout>
  );
}
