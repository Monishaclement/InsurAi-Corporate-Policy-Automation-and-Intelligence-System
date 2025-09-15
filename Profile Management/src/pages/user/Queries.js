import React, { useState } from "react";

function Queries() {
  const [query, setQuery] = useState("");
  return (
    <div>
      <h2>Customer Queries</h2>
      <textarea
        placeholder="Type your question..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        rows={4}
        cols={50}
      />
      <br /><br />
      <button>Submit Query</button>
      {query && <p>Your query: {query}</p>}
    </div>
  );
}

export default Queries;
