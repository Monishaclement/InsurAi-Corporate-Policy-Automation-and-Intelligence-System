import React from "react";

function Appointments() {
  const appointments = [
    { id: 1, date: "2025-09-15", time: "10:00 AM" },
    { id: 2, date: "2025-09-18", time: "02:00 PM" },
  ];
  return (
    <div>
      <h2>Your Appointments</h2>
      <ul>
        {appointments.map(a => (
          <li key={a.id}>{a.date} at {a.time}</li>
        ))}
      </ul>
    </div>
  );
}

export default Appointments;
