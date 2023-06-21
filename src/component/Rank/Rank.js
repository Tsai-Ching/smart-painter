import React from 'react';
import './Rank.css';

const Rank = ({ name, entries }) => {
  return (
	<div className='title'>
      <div>
        <h1 className='p1'>{`${name}, your current entry count is: `}</h1>
        <h1 className='p2'>{entries}</h1>
      </div>
    </div>
  );
}

export default Rank;