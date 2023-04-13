import React from 'react';

const Rank = ({ name, entries }) => {
  return (
	<div>
      <div>
        <h1>{`${name}, your current entry count is...`}</h1>
      </div>
      <div>
        <h1>{entries}</h1>
      </div>
    </div>
  );
}

export default Rank;