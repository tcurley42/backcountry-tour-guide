import React from 'react';
import {connect} from 'react-redux';
import fetchTrips from './actions/fetchTrips';
import TripsContainer from './containers/TripsContainer';
import {Link} from 'react-router-dom';
import './index.css';

class App extends React.Component {

  render() {
    return (
      <div className="App">
      <div className="header">
          <header>
          <Link to="/trips" className='header-link'>Trips</Link>   |    <Link to="/trips/new" className='header-link'>New Trip</Link>
          </header>
          </div>
        <TripsContainer/>
      </div>
    );
  }
}

export default connect(null, {fetchTrips})(App);
