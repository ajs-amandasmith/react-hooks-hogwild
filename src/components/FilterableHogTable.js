import React, { useState } from 'react';
import FilterBar from './FilterBar';
import HogList from './HogList';

function FilterableHogTable({ hogs }) {
  const [sort, setSort] = useState('');
  const [isChecked, setIsChecked] = useState(false);

  const selectSort = (sortOption) => {
    setSort(sortOption);
  }

  const handleCheck = (checkedValue) => {
    setIsChecked(checkedValue)
  }

  return (
  <div>
    <FilterBar selectSort={selectSort} handleCheck={handleCheck} />
    <HogList hogs={hogs} sort={sort} isChecked={isChecked} />
  </div>
)}

export default FilterableHogTable;