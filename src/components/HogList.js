import React from 'react';
import Hog from './Hog';

function HogList({ hogs, sort }) {

  const hogsToDisplay = hogs.sort(function(a, b) {
    if (sort === 'Name') {
      if (a.name < b.name) return -1;
      if (a.name > b.name) return 1;
      return 0;
    } else if (sort === 'Weight'){
      if (a.weight < b.weight) return -1;
      if (a.weight > b.weight) return 1;
    }
  }).map(hog => hog)

  return (
  <div className="ui grid container">
    {hogsToDisplay.map(hog => (
      <Hog key={hog.name} hog={hog} />
    ))}
  </div>
  )}

export default HogList;