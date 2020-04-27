import React from 'react';
import {connect} from 'react-redux';
import fetchTrips from '../actions/fetchTrips';
import TripInput from '../components/TripInput';
import Trip from '../components/Trip';

class TripsContainer extends React.Component {

  componentDidMount() {
    this.props.fetchTrips();
  }

  render() {
    return (
      <div>
        TripsContainer
        <TripInput/>
        <Trip/>
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
