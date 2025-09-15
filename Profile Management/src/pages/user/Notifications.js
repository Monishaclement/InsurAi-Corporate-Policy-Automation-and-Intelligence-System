import React from "react";

function Notifications() {
  const notifications = [
    "Your appointment on 15-Sep is confirmed.",
    "New plan available: Health Plus."
  ];
  return (
    <div>
      <h2>Notifications</h2>
      <ul>
        {notifications.map((n, idx) => <li key={idx}>{n}</li>)}
      </ul>
    </div>
  );
}

export default Notifications;
