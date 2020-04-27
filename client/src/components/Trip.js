import React from 'react';

const Trip = (props) => {
  return(
    <div>
      <h1>{props.name}</h1>
      <h3>{props.description}</h3>
    </div>
  )
}

export default Trip
