import React from 'react';
import {connect} from 'react-redux';
import fetchTrips from '../actions/fetchTrips';
import TripInput from '../components/TripInput';
import Trips from '../components/Trips';
import {Route} from 'react-router-dom';

class TripsContainer extends React.Component {

  componentDidMount() {
    this.props.fetchTrips();
  }

  render() {
    return (
      <div>
        <Route path='/trips/new' component={TripInput}/>
        <Trips trips={this.props.trips}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    trips: state.trips
  }
}

export default connect(mapStateToProps, {fetchTrips})(TripsContainer);
