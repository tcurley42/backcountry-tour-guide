import React from 'react';
import {connect} from 'react-redux';
import fetchTrips from '../actions/fetchTrips';
import TripInput from '../components/TripInput';
import Trips from '../components/Trips';
import Trip from '../components/Trip';
import {Route, Switch} from 'react-router-dom';

class TripsContainer extends React.Component {

  // Fetch Trips asynchronously while component renders
  componentDidMount() {
    this.props.fetchTrips();
  }

  // Determine what to display based on the route
  render() {
    return (
      <div>
      <Switch>
        <Route path='/trips/new' component={TripInput}/>
        <Route path='/trips/:id' render={(routerProps) =>
          <Trip {...routerProps} trips={this.props.trips}/>}/>
        <Route exact path='/trips' render={() => <Trips trips={this.props.trips}/>}/>
      </Switch>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    trips: state.trips
  }
}

// Use fetchTrips to return the dispatch function after asynchronously
// retrieving the data to then add the results to the store
export default connect(mapStateToProps, {fetchTrips})(TripsContainer);
