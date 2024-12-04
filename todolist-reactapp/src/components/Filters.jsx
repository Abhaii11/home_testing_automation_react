import React from "react";

const Filters = ({ currentFilter, setFilter }) => (
  <div>
    <button onClick={() => setFilter("All")}>All</button>
    <button onClick={() => setFilter("Active")}>Active</button>
    <button onClick={() => setFilter("Completed")}>Completed</button>
  </div>
);

export default Filters;
