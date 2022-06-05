import React from 'react';
import Hog from './Hog';

function HogList({ hogs, sort, isChecked }) {

  const hogsToDisplay = hogs.filter(hog => {
    if (isChecked) {
      return hog.greased === true;
    } else {
      return true;
    }
  }).sort(function(a, b) {
    if (a[sort] < b[sort]) return -1;
    if (a[sort] > b[sort]) return 1;
    return 0;
  }).map(hog => hog)

  return (
  <div className="ui grid container">
    {hogsToDisplay.map(hog => (
      <Hog key={hog.name} hog={hog} />
    ))}
  </div>
  )}

export default HogList;