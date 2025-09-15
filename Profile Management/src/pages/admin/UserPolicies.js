import React from "react";

function UserPolicies() {
  const claimedPolicies = [
    { user: "Alice", policy: "Health Plus", claimedOn: "2025-09-10" },
    { user: "Bob", policy: "Family Care", claimedOn: "2025-09-11" }
  ];

  return (
    <div>
      <h2>Policies Claimed by Users</h2>
      <table border="1" cellPadding="5">
        <thead>
          <tr>
            <th>User</th>
            <th>Policy</th>
            <th>Claimed On</th>
          </tr>
        </thead>
        <tbody>
          {claimedPolicies.map((p, idx) => (
            <tr key={idx}>
              <td>{p.user}</td>
              <td>{p.policy}</td>
              <td>{p.claimedOn}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserPolicies;
