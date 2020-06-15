export const addRoute = (route, tripId) => {
  return (dispatch) => {
    fetch(`http://localhost:3000/api/v1/trips/${tripId}/routes`, {
      method: `POST`,
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(route)
    })
    .then(response => response.json())
    .then(trip => dispatch({type: 'ADD_ROUTE', payload: trip}))
  }
}
