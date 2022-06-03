import React from 'react';

function FilterBar({ sort, selectSort }) {
  const filterStyle = {
    padding: "10px",
    border: "2px solid",
    margin: "10px"
  }

  return (
  <div style={filterStyle}>
    <form>
      <label>
        Sort:
        <select onChange={(e) => selectSort(e.target.value)}>
          <option value="Name">Name</option>
          <option value="Weight">Weight</option>
        </select>
      </label>
      <label>
        Show Only Greased Hogs
        <input type="checkbox"></input>
      </label>
    </form>
  </div>
  )}

export default FilterBar;