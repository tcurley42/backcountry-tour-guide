import React from 'react';

const Trip = (props) => {

  console.log(props)

  let trip = props.trips[props.match.params.id - 1]

  console.log(trip)
  return(
    <div>
    Hello
      <h1>{trip ? trip.name : null}</h1>
      <h3>{trip ? trip.description : null}</h3>

      // Add a Routes component that fetches info and displays all routes
    </div>
  )
}

export default Trip
