import React from 'react';

const Results = ({runningTime, letterSplits}) => {
  const splits = Object.keys(letterSplits).map(char => <li key={char}><span className="char">{char}:</span> {letterSplits[char]}s</li>)

  const summary = {
    longest: ['',0],
  }
  const characters = Object.keys(letterSplits);
  let currentSplit;
  for(let i=1; i < characters.length;i++) {
    currentSplit = letterSplits[characters[i]] - letterSplits[characters[i-1]]
    if(currentSplit > summary.longest[1]) {
      summary.longest = [characters[i],currentSplit.toFixed(3)]
    } 
  }
  return (
    <div className="results">
      <p>Detailed Results <span role="img" aria-label="flag">🏁</span></p>
      <p className='summary'>You took the longest time for <strong>{summary.longest[0]}</strong>: {summary.longest[1]}s</p>
      <ul>
        { splits }
      </ul>
    </div>
  )
};

export default Results;
