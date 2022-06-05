import React, { useState } from 'react';

function Hog({ hog }) {
  const [details, setDetails] = useState(false);
  
  const handleClick = (hog) => {
    setDetails(!details)
  }

  const handleHide = (e) => {
    console.log(e.target)
  }

  const isGreased = hog.greased ? <li>Greased</li> : null;

  const showDetails = details ? <ul>
    <li>Specialty: {hog.specialty}</li>
    <li>Weight: {hog.weight} lbs</li>
    {isGreased}
    <li>Highest Medal Achieved: {hog["highest medal achieved"][0].toUpperCase()}{hog["highest medal achieved"].slice(1)}</li>
  </ul> : null;


  return (
  <div className="ui cards pigTile eight wide column">
    <div className="content">
      <h3 className="ui smallHeader">{hog.name}</h3>
      <img className="ui img" src={hog.image} alt={hog.name} width="150px" onClick={(e) => handleClick(hog)}></img>
      <br></br>
      <button className="ui button" onClick={(e) => handleHide(e)}>Hide Hog</button>
      {showDetails}
    </div>
  </div>
  )}

export default Hog;