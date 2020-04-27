
export default function fetchTrips(action) {
  // Thunk function that allows us to use this data from the dispatch that
  // automatically fires
  return (dispatch) => {
    fetch('http://localhost:3000/api/v1/trips')
    .then(response => response.json())
    .then(trips => dispatch({
      type: 'FETCH_TRIPS',
      payload: trips 
    }))
  }
}
