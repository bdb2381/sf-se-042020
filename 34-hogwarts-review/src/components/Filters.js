import React from "react";

const Filters = ({ showGreased, handleToggleGreased, handleSortHogs }) => {
  return (
    <div style={{ margin: "20px" }}>
      {/* filter the hogs that are greased */}
      <label>
        <input
          name="showGreased"
          type="checkbox"
          checked={showGreased}
          onChange={handleToggleGreased}
        />
        Toggle Greased
      </label>

      <select onChange={handleSortHogs}>
        <option value="name">Name</option>
        <option value="weight">Weight</option>
      </select>
    </div>
  );
};

export default Filters;
