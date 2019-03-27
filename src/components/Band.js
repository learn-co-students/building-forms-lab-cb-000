import React from 'react';

const Band = props => {
  const bandsList = props.bands.map((band, id) => <li key={id}>{band.name}</li>)

  return (
    <ul>
      {bandsList}
    </ul>
  )
};

export default Band;