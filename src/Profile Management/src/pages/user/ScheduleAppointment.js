import React, { useState } from "react";

function ScheduleAppointment() {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  return (
    <div>
      <h2>Schedule Appointment</h2>
      <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
      <input type="time" value={time} onChange={(e) => setTime(e.target.value)} />
      <br /><br />
      <button>Book Appointment</button>
      {date && time && <p>Appointment: {date} at {time}</p>}
    </div>
  );
}

export default ScheduleAppointment;
