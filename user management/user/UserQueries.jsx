import React, { useState } from "react";
import DashboardLayout from "../../components/DashboardLayout";

export default function UserQueries(){
  const [list] = useState([
    { id:1, subject:"Policy Renewal", status:"Resolved" },
    { id:2, subject:"Claim Delay", status:"Pending" }
  ]);

  return (
    <DashboardLayout role="user">
      <h2>Support / Queries</h2>
      <p className="small">Raise a new query or view past tickets</p>

      <div style={{display:"grid", gap:16, gridTemplateColumns:"1fr 360px", marginTop:12}}>
        <div className="form">
          <form onSubmit={(e)=>e.preventDefault()}>
            <label>Subject</label>
            <input className="input" placeholder="e.g. Claim status" required />
            <label style={{marginTop:8}}>Message</label>
            <textarea className="input" rows="6" placeholder="Describe your issue"></textarea>
            <div style={{marginTop:10}}>
              <button className="btn-primary">Submit Query</button>
            </div>
          </form>
        </div>

        <div>
          <h3 style={{marginBottom:8}}>Previous Tickets</h3>
          <div style={{display:"grid", gap:8}}>
            {list.map(q => (
              <div key={q.id} className="card" style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                <div>
                  <div style={{fontWeight:700}}>{q.subject}</div>
                  <div className="small">Ticket #{q.id}</div>
                </div>
                <div style={{color: q.status==="Resolved" ? "green" : "#d97706"}}>{q.status}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
