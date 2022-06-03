import React, { useState } from 'react';

function Hog({ hog }) {
  const [details, setDetails] = useState(false);
  
  const handleClick = (hog) => {
    setDetails(!details)
  }

  const isGreased = hog.greased ? <li>Greased</li> : null;

  const showDetails = details ? <ul>
    <li>Specialty: {hog.specialty}</li>
    <li>Weight: {hog.weight} lbs</li>
    {isGreased}
    <li>Highest Medal Achieved: {hog["highest medal achieved"][0].toUpperCase()}{hog["highest medal achieved"].slice(1)}</li>
  </ul> : null;


  return (
  <div className="ui eight wide column" onClick={(e) => handleClick(hog)}>
    <h3>{hog.name}</h3>
    <img src={hog.image} alt={hog.name} width="150px"></img>
    {showDetails}
  </div>
  )}

export default Hog;