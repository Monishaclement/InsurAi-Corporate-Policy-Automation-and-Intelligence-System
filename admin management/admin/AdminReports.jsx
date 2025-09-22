import React from "react";
import DashboardLayout from "../../components/DashboardLayout";

const reports = [
  { id:1, title:"Monthly Policy Report", date:"Sep 2025" },
  { id:2, title:"Claim Settlement Report", date:"Sep 2025" }
];

export default function AdminReports(){
  return (
    <DashboardLayout role="admin">
      <h2>Reports</h2>
      <p className="small">Download or view reports</p>

      <ul style={{marginTop:12, display:"grid", gap:10}}>
        {reports.map(r => (
          <li key={r.id} className="card" style={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
            <div>
              <div style={{fontWeight:700}}>{r.title}</div>
              <div className="small">{r.date}</div>
            </div>
            <button className="btn-primary">View</button>
          </li>
        ))}
      </ul>
    </DashboardLayout>
  );
}
