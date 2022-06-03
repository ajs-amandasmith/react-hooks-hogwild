import React, { useState } from 'react';
import FilterBar from './FilterBar';
import HogList from './HogList';

function FilterableHogTable({ hogs }) {
  const [sort, setSort] = useState('Name')

  const selectSort = (sortOption) => {
    setSort(sortOption);
  }

  return (
  <div>
    <FilterBar sort={sort} selectSort={selectSort}/>
    <HogList hogs={hogs} sort={sort}/>
  </div>
)}

export default FilterableHogTable;