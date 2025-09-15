import React from "react";

function Plans() {
  const plans = [
    { name: "Health Plus", price: "₹5000/year" },
    { name: "Family Care", price: "₹8000/year" }
  ];
  return (
    <div>
      <h2>Insurance Plans</h2>
      <ul>
        {plans.map((p, idx) => <li key={idx}>{p.name}: {p.price}</li>)}
      </ul>
    </div>
  );
}

export default Plans;
