import React from 'react';

function FilterBar({ selectSort, handleCheck }) {
  const filterStyle = {
    padding: "10px",
    border: "2px solid",
    margin: "10px"
  }

  // const handleCheck = (e) => console.log(e.target.checked)

  return (
  <div style={filterStyle}>
    <form>
      <label>
        Sort:
        <select onChange={(e) => selectSort(e.target.value)}>
          <option value="name">Name</option>
          <option value="weight">Weight</option>
        </select>
      </label>
      <label>
        Show Only Greased Hogs
        <input type="checkbox" onChange={(e) => handleCheck(e.target.checked)}></input>
      </label>
    </form>
  </div>
  )}

export default FilterBar;