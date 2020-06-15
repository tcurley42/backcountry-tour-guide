import React from 'react';
import {connect} from 'react-redux';
import fetchTrips from './actions/fetchTrips';
import TripsContainer from './containers/TripsContainer';

class App extends React.Component {

  componentDidMount() {
    // this.props.fetchTrips({type: 'FETCH_TRIPS', payload: {name: 'January Trip'}});
  }

  render() {
    return (
      <div className="App">
        App
        <TripsContainer/>
      </div>
    );
  }
}

export default connect(null, {fetchTrips})(App);
