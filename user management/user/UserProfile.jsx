import React from "react";
import DashboardLayout from "../../components/DashboardLayout";
import { useAuth } from "../../context/AuthContext";

export default function UserProfile(){
  const { user } = useAuth();
  const demo = user || { name:"John Doe", email:"john@example.com", phone:"+91 9876543210", address:"123 Main Street, Chennai" };

  return (
    <DashboardLayout role="user">
      <h2>My Profile</h2>
      <p className="small">Personal information</p>

      <div style={{marginTop:14, maxWidth:720}}>
        <div className="form">
          <div style={{display:"grid", gridTemplateColumns:"1fr 1fr", gap:12}}>
            <div>
              <label className="small">Full name</label>
              <div style={{padding:"10px 12px", background:"#f8fafc", borderRadius:8}}>{demo.name}</div>
            </div>
            <div>
              <label className="small">Email</label>
              <div style={{padding:"10px 12px", background:"#f8fafc", borderRadius:8}}>{demo.email}</div>
            </div>
            <div>
              <label className="small">Phone</label>
              <div style={{padding:"10px 12px", background:"#f8fafc", borderRadius:8}}>{demo.phone}</div>
            </div>
            <div>
              <label className="small">Address</label>
              <div style={{padding:"10px 12px", background:"#f8fafc", borderRadius:8}}>{demo.address}</div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
