export const addTrip = (trip) => {
  return (dispatch) => {
    fetch('http://localhost:3000/api/v1/trips', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(trip)
    })
    .then(response => response.json())
    .then(trip => dispatch({type: 'ADD_TRIP', payload: trip}))
  }
}
